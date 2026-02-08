import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import {
  vertShader,
  fragShaderPoint,
  fragShaderDivergence,
  fragShaderPressure,
  fragShaderGradientSubtract,
  fragShaderAdvection,
  fragShaderOutputShader
} from './fluid/shaders.js'
import {
  createShader,
  createShaderProgram,
  getUniforms,
  createFBO,
  createDoubleFBO,
  blit
} from './fluid/gl-utils.js'

export default function FluidNameClient() {
  const canvasRef = useRef(null)
  const loaderRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const canvasEl = canvasRef.current
    const loader = loaderRef.current
    if (!canvasEl) return

    const textureEl = document.createElement('canvas')
    const textureCtx = textureEl.getContext('2d')

    const fontOptions = {
      Arial: 'Arial, sans-serif',
      Verdana: 'Verdana, sans-serif',
      Tahoma: 'Tahoma, sans-serif',
      'Times New Roman': 'Times New Roman, serif',
      Georgia: 'Georgia, serif',
      Garamond: 'Garamond, serif',
      'Courier New': 'Courier New, monospace',
      'Brush Script MT': 'Brush Script MT, cursive'
    }

    const params = {
      fontName: 'Verdana',
      isBold: false,
      fontSize: 120,
      text: 'Diego González',
      pointerSize: null,
      color: { r: 1., g: 0., b: 0.5 }
    }

    const pointer = { x: 0, y: 0, dx: 0, dy: 0, moved: false }
    let outputColor, velocity, divergence, pressure, canvasTexture
    let isPreview = true

    const gl = canvasEl.getContext('webgl')
    if (!gl) {
      console.warn('WebGL not available')
      return
    }
    gl.getExtension('OES_texture_float')

    function createTextCanvasTexture() {
      canvasTexture = gl.createTexture()
      gl.bindTexture(gl.TEXTURE_2D, canvasTexture)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    }

    function updateTextCanvas() {
      textureCtx.fillStyle = 'black'
      textureCtx.fillRect(0, 0, textureEl.width, textureEl.height)
      textureCtx.font = (params.isBold ? 'bold' : 'normal') + ' ' + (params.fontSize * devicePixelRatio) + 'px ' + fontOptions[params.fontName]
      textureCtx.fillStyle = '#ffffff'
      textureCtx.textAlign = 'center'
      textureCtx.filter = 'blur(3px)'
      const textBox = textureCtx.measureText(params.text)
      textureCtx.fillText(params.text, 0.5 * textureEl.width, 0.5 * textureEl.height + 0.5 * textBox.actualBoundingBoxAscent)

      gl.activeTexture(gl.TEXTURE0)
      gl.bindTexture(gl.TEXTURE_2D, canvasTexture)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureEl)
    }


    function createProgramFromSource(vsSource, fsSource) {
      const vs = createShader(gl, vsSource, gl.VERTEX_SHADER)
      const fs = createShader(gl, fsSource, gl.FRAGMENT_SHADER)
      const program = createShaderProgram(gl, vs, fs)
      const uniforms = getUniforms(gl, program)
      return { program, uniforms }
    }

    function createShaderProgram(vertexShader, fragmentShader) {
      const program = gl.createProgram()
      gl.attachShader(program, vertexShader)
      gl.attachShader(program, fragmentShader)
      gl.linkProgram(program)
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program link error', gl.getProgramInfoLog(program))
        return null
      }
      return program
    }

    function getUniforms(program) {
      const uniforms = []
      const uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS)
      for (let i = 0; i < uniformCount; i++) {
        const uName = gl.getActiveUniform(program, i).name
        uniforms[uName] = gl.getUniformLocation(program, uName)
      }
      return uniforms
    }

    function blit(target) {
      if (target == null) {
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
        gl.bindFramebuffer(gl.FRAMEBUFFER, null)
      } else {
        gl.viewport(0, 0, target.width, target.height)
        gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo)
      }
      gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0)
    }

    function createFBO(w, h, type = gl.RGBA) {
      gl.activeTexture(gl.TEXTURE0)
      const texture = gl.createTexture()
      gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      gl.texImage2D(gl.TEXTURE_2D, 0, type, w, h, 0, type, gl.FLOAT, null)
      const fbo = gl.createFramebuffer()
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0)
      gl.viewport(0, 0, w, h)
      gl.clear(gl.COLOR_BUFFER_BIT)
      return { fbo, width: w, height: h, attach(id) { gl.activeTexture(gl.TEXTURE0 + id); gl.bindTexture(gl.TEXTURE_2D, texture); return id } }
    }

    function createDoubleFBO(w, h, type) {
      let fbo1 = createFBO(w, h, type)
      let fbo2 = createFBO(w, h, type)
      return { width: w, height: h, texelSizeX: 1. / w, texelSizeY: 1. / h, read: () => fbo1, write: () => fbo2, swap() { const t = fbo1; fbo1 = fbo2; fbo2 = t } }
    }

    function initFBOs() {
      const fboSize = [Math.floor(0.5 * window.innerWidth), Math.floor(0.5 * window.innerHeight)]
      outputColor = createDoubleFBO(fboSize[0], fboSize[1])
      velocity = createDoubleFBO(fboSize[0], fboSize[1], gl.RG)
      divergence = createFBO(fboSize[0], fboSize[1], gl.RGB)
      pressure = createDoubleFBO(fboSize[0], fboSize[1], gl.RGB)
    }

    function render(t) {
      const dt = 1 / 60
      if (t && isPreview) updateMousePosition((0.5 - 0.45 * Math.sin(0.003 * t - 2)) * window.innerWidth, (0.5 + 0.1 * Math.sin(0.0025 * t) + 0.1 * Math.cos(0.002 * t)) * window.innerHeight)
      if (pointer.moved) {
        if (!isPreview) pointer.moved = false
        gl.useProgram(splatProgram.program)
        gl.uniform1i(splatProgram.uniforms.u_input_texture, velocity.read().attach(1))
        gl.uniform1f(splatProgram.uniforms.u_ratio, canvasEl.width / canvasEl.height)
        gl.uniform2f(splatProgram.uniforms.u_point, pointer.x / canvasEl.width, 1 - pointer.y / canvasEl.height)
        gl.uniform3f(splatProgram.uniforms.u_point_value, pointer.dx, -pointer.dy, 1)
        gl.uniform1f(splatProgram.uniforms.u_point_size, params.pointerSize)
        blit(velocity.write()); velocity.swap()
        gl.uniform1i(splatProgram.uniforms.u_input_texture, outputColor.read().attach(1))
        gl.uniform3f(splatProgram.uniforms.u_point_value, 1. - params.color.r, 1. - params.color.g, 1. - params.color.b)
        blit(outputColor.write()); outputColor.swap()
      }
      gl.useProgram(divergenceProgram.program); gl.uniform2f(divergenceProgram.uniforms.u_texel, velocity.texelSizeX, velocity.texelSizeY); gl.uniform1i(divergenceProgram.uniforms.u_velocity_texture, velocity.read().attach(1)); blit(divergence)
      gl.useProgram(pressureProgram.program); gl.uniform2f(pressureProgram.uniforms.u_texel, velocity.texelSizeX, velocity.texelSizeY); gl.uniform1i(pressureProgram.uniforms.u_divergence_texture, divergence.attach(1)); for (let i = 0; i < 10; i++) { gl.uniform1i(pressureProgram.uniforms.u_pressure_texture, pressure.read().attach(2)); blit(pressure.write()); pressure.swap() }
      gl.useProgram(gradientSubtractProgram.program); gl.uniform2f(gradientSubtractProgram.uniforms.u_texel, velocity.texelSizeX, velocity.texelSizeY); gl.uniform1i(gradientSubtractProgram.uniforms.u_pressure_texture, pressure.read().attach(1)); gl.uniform1i(gradientSubtractProgram.uniforms.u_velocity_texture, velocity.read().attach(2)); blit(velocity.write()); velocity.swap()
      gl.useProgram(advectionProgram.program); gl.uniform1f(advectionProgram.uniforms.u_use_text, 0); gl.uniform2f(advectionProgram.uniforms.u_texel, velocity.texelSizeX, velocity.texelSizeY); gl.uniform1i(advectionProgram.uniforms.u_velocity_texture, velocity.read().attach(1)); gl.uniform1i(advectionProgram.uniforms.u_input_texture, velocity.read().attach(1)); gl.uniform1f(advectionProgram.uniforms.u_dt, dt); blit(velocity.write()); velocity.swap()
      gl.useProgram(advectionProgram.program); gl.uniform1f(advectionProgram.uniforms.u_use_text, 1); gl.uniform2f(advectionProgram.uniforms.u_texel, outputColor.texelSizeX, outputColor.texelSizeY); gl.uniform1i(advectionProgram.uniforms.u_input_texture, outputColor.read().attach(2)); blit(outputColor.write()); outputColor.swap()
      gl.useProgram(outputShaderProgram.program); gl.uniform1i(outputShaderProgram.uniforms.u_output_texture, outputColor.read().attach(1)); gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight); gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0)
      rafRef.current = requestAnimationFrame(render)
    }

    function resizeCanvas() { params.pointerSize = 4 / window.innerHeight; canvasEl.width = textureEl.width = window.innerWidth; canvasEl.height = textureEl.height = window.innerHeight; initFBOs(); updateTextCanvas(); updateUtexelUniforms() }

    function updateUtexelUniforms() { try { if (divergenceProgram && divergenceProgram.uniforms && divergenceProgram.uniforms.u_texel) { gl.useProgram(divergenceProgram.program); gl.uniform2f(divergenceProgram.uniforms.u_texel, velocity.texelSizeX, velocity.texelSizeY) } if (pressureProgram && pressureProgram.uniforms && pressureProgram.uniforms.u_texel) { gl.useProgram(pressureProgram.program); gl.uniform2f(pressureProgram.uniforms.u_texel, velocity.texelSizeX, velocity.texelSizeY) } if (advectionProgram && advectionProgram.uniforms && advectionProgram.uniforms.u_texel) { gl.useProgram(advectionProgram.program); gl.uniform2f(advectionProgram.uniforms.u_texel, outputColor.texelSizeX, outputColor.texelSizeY) } } catch (err) { } }

    function setupEvents() { canvasEl.addEventListener('mousemove', (e) => { isPreview = false; updateMousePosition(e.pageX, e.pageY) }); canvasEl.addEventListener('touchmove', (e) => { e.preventDefault(); isPreview = false; updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY) }) }

    function updateMousePosition(eX, eY) { pointer.moved = true; pointer.dx = 5 * (eX - pointer.x); pointer.dy = 5 * (eY - pointer.y); pointer.x = eX; pointer.y = eY }

    const vertexShader = createShader(gl, vertShader, gl.VERTEX_SHADER)
    const splatProgram = createProgramFromSource(vertShader, fragShaderPoint)
    const divergenceProgram = createProgramFromSource(vertShader, fragShaderDivergence)
    const pressureProgram = createProgramFromSource(vertShader, fragShaderPressure)
    const gradientSubtractProgram = createProgramFromSource(vertShader, fragShaderGradientSubtract)
    const advectionProgram = createProgramFromSource(vertShader, fragShaderAdvection)
    const outputShaderProgram = createProgramFromSource(vertShader, fragShaderOutputShader)

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer()); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer()); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0); gl.enableVertexAttribArray(0);

    createTextCanvasTexture(); initFBOs(); setupEvents(); resizeCanvas(); window.addEventListener('resize', resizeCanvas)

    function createMeltTimeline() { const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } }); tl.delay(1.5); tl.to(params, { fontSize: 28, duration: 1.2, onUpdate: updateTextCanvas }, 0); const targetX = 0.15 * window.innerWidth; const targetY = 0.08 * window.innerHeight; tl.to(pointer, { x: targetX, y: targetY, duration: 1.2, onUpdate: () => { pointer.moved = true } }, 0); tl.eventCallback('onComplete', () => { const shell = document.getElementById('fluid-shell'); if (shell) { shell.classList.add('is-deployed'); setTimeout(() => { resizeCanvas() }, 50) } }); return tl }

    setTimeout(() => { if (loader) loader.style.display = 'none'; render(); createMeltTimeline() }, 200)

    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); window.removeEventListener('resize', resizeCanvas) }
  }, [])

  return (
    <div className="relative bg-black w-full h-full">
      <canvas ref={canvasRef} id="fluid-canvas" width="1200" height="800" aria-label="Fluid Name Canvas" />
      <div ref={loaderRef} id="canvas-loader" className="absolute inset-0 flex items-center justify-center text-white bg-black/60">
        <div className="text-sm uppercase tracking-widest">System Initializing</div>
      </div>
    </div>
  )
}
