export function createShader(gl, sourceCode, type) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, sourceCode)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error', gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }
  return shader
}

export function createShaderProgram(gl, vertexShader, fragmentShader) {
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

export function getUniforms(gl, program) {
  const uniforms = []
  const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS)
  for (let i = 0; i < count; i++) {
    const name = gl.getActiveUniform(program, i).name
    uniforms[name] = gl.getUniformLocation(program, name)
  }
  return uniforms
}

export function createFBO(gl, w, h, type = gl.RGBA) {
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
  return {
    fbo,
    width: w,
    height: h,
    attach(id) {
      gl.activeTexture(gl.TEXTURE0 + id)
      gl.bindTexture(gl.TEXTURE_2D, texture)
      return id
    }
  }
}

export function createDoubleFBO(gl, w, h, type) {
  let fbo1 = createFBO(gl, w, h, type)
  let fbo2 = createFBO(gl, w, h, type)
  return {
    width: w,
    height: h,
    texelSizeX: 1. / w,
    texelSizeY: 1. / h,
    read: () => fbo1,
    write: () => fbo2,
    swap() { const t = fbo1; fbo1 = fbo2; fbo2 = t }
  }
}

export function blit(gl, target) {
  if (target == null) {
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
    gl.bindFramebuffer(gl.FRAMEBUFFER, null)
  } else {
    gl.viewport(0, 0, target.width, target.height)
    gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo)
  }
  gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0)
}
