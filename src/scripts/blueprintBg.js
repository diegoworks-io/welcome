export function initBlueprintBg() {
  (() => {
    const shell = document.getElementById('blueprint-shell')
    const stage1 = document.getElementById('bp-stage1')
    const stage2 = document.getElementById('bp-stage2')
    const vbWidth = 1600
    const vbHeight = 1000

    const heroFrame = document.getElementById('s1-hero-frame')

    const netLinkLayer = document.getElementById('s1-net-links')
    const netNodeLayer = document.getElementById('s1-net-nodes')
    const flashLayer = document.getElementById('s1-flashes')
    const particleLayer = document.getElementById('s1-flow-particles')
    const ringLayer = document.getElementById('s1-flow-rings')
    const s2NetLinkLayer = document.getElementById('s2-net-links')
    const s2NetNodeLayer = document.getElementById('s2-net-nodes')
    const s2FlashLayer = document.getElementById('s2-flashes')
    const s2ParticleLayer = document.getElementById('s2-flow-particles')
    const s2RingLayer = document.getElementById('s2-flow-rings')
    const signalColors = ['#7CFF6B', '#5BE9FF', '#FFE760']
    const routeColors = ['rgba(124,255,107,0.42)', 'rgba(91,233,255,0.38)', 'rgba(255,231,96,0.34)']
    let packetActors = []
    let ringActors = []
    let nodeActors = []
    let s1Routes = []
    let packetActors2 = []
    let ringActors2 = []
    let nodeActors2 = []
    let s2Routes = []
    let latestLayoutDetail = null
    let networkRaf = null
    const rand = (min, max) => min + Math.random() * (max - min)

    if (!shell || !stage1 || !stage2) return

    const setStageClass = (isStage2) => {
      shell.classList.toggle('is-stage2', isStage2)
    }

    const createSvgEl = (tag) => document.createElementNS('http://www.w3.org/2000/svg', tag)
    const emitFlash = (layer, x, y, color, width = 1.4) => {
      if (!layer) return
      const flash = createSvgEl('circle')
      flash.setAttribute('cx', x.toFixed(2))
      flash.setAttribute('cy', y.toFixed(2))
      flash.setAttribute('r', '2')
      flash.setAttribute('stroke', color || '#7CFF6B')
      flash.setAttribute('fill', 'none')
      flash.setAttribute('stroke-width', String(width))
      flash.setAttribute('opacity', '0.95')
      layer.appendChild(flash)

      if (typeof flash.animate === 'function') {
        flash.animate(
          [
            { r: 2, opacity: 0.95 },
            { r: 16, opacity: 0 }
          ],
          { duration: 550, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)', fill: 'forwards' }
        ).onfinish = () => flash.remove()
      } else {
        setTimeout(() => flash.remove(), 600)
      }
    }

    const updateFlowActors = (timeSec) => {
      s1Routes.forEach((route, idx) => {
        const dashOffset = -((timeSec * (16 + idx * 1.7)) % 220)
        route.path.setAttribute('stroke-dashoffset', dashOffset.toFixed(2))
        const breathe = 0.55 + 0.4 * Math.sin(timeSec * 1.8 + idx * 0.7)
        route.path.setAttribute('opacity', (0.35 + breathe * 0.55).toFixed(3))
      })

      nodeActors.forEach((node, idx) => {
        const pulse = 0.5 + 0.5 * Math.sin(timeSec * 3.2 + node.phase + idx * 0.11)
        node.outer.setAttribute('stroke', node.color)
        node.outer.setAttribute('opacity', (0.42 + pulse * 0.52).toFixed(3))
        node.outer.setAttribute('r', (3.7 + pulse * 1.5).toFixed(2))
        node.core.setAttribute('r', (1.1 + pulse * 1.35).toFixed(2))
        node.core.setAttribute('opacity', (0.35 + pulse * 0.65).toFixed(3))
      })

      packetActors.forEach((actor) => {
        const progress = (actor.offset + timeSec * actor.speed) % 1
        const pt = actor.path.getPointAtLength(progress * actor.length)
        const pulse = 0.7 + 0.3 * Math.sin(timeSec * 7 + actor.phase)
        actor.el.setAttribute('cx', pt.x.toFixed(2))
        actor.el.setAttribute('cy', pt.y.toFixed(2))
        actor.el.setAttribute('r', (1.7 + pulse * 1.35).toFixed(2))
          actor.el.setAttribute('opacity', (0.5 + pulse * 0.45).toFixed(3))
          if (progress < actor.lastProgress) {
            emitFlash(flashLayer, pt.x, pt.y, actor.color, 1.4)
          }
        actor.lastProgress = progress
      })

      ringActors.forEach((actor) => {
        const progress = (actor.offset + timeSec * actor.speed) % 1
        const pt = actor.path.getPointAtLength(progress * actor.length)
        const ringPulse = 0.5 + 0.5 * Math.sin(timeSec * 4.2 + actor.phase)
        actor.el.setAttribute('cx', pt.x.toFixed(2))
        actor.el.setAttribute('cy', pt.y.toFixed(2))
        actor.el.setAttribute('r', (3.8 + ringPulse * 2.2).toFixed(2))
        actor.el.setAttribute('opacity', (0.2 + ringPulse * 0.55).toFixed(3))
      })

      s2Routes.forEach((route, idx) => {
        const dashOffset = -((timeSec * (11 + idx * 1.2)) % 210)
        route.path.setAttribute('stroke-dashoffset', dashOffset.toFixed(2))
        const breathe = 0.45 + 0.35 * Math.sin(timeSec * 1.4 + idx * 0.5)
        route.path.setAttribute('opacity', (0.2 + breathe * 0.35).toFixed(3))
      })

      nodeActors2.forEach((node, idx) => {
        const pulse = 0.5 + 0.5 * Math.sin(timeSec * 2.5 + node.phase + idx * 0.13)
        node.outer.setAttribute('r', (3.2 + pulse * 1.1).toFixed(2))
        node.outer.setAttribute('opacity', (0.3 + pulse * 0.35).toFixed(3))
        node.core.setAttribute('r', (1 + pulse * 0.9).toFixed(2))
        node.core.setAttribute('opacity', (0.24 + pulse * 0.42).toFixed(3))
      })

      packetActors2.forEach((actor) => {
        const progress = (actor.offset + timeSec * actor.speed) % 1
        const pt = actor.path.getPointAtLength(progress * actor.length)
        const pulse = 0.6 + 0.4 * Math.sin(timeSec * 6.1 + actor.phase)
        actor.el.setAttribute('cx', pt.x.toFixed(2))
        actor.el.setAttribute('cy', pt.y.toFixed(2))
        actor.el.setAttribute('r', (1.45 + pulse * 0.95).toFixed(2))
        actor.el.setAttribute('opacity', (0.28 + pulse * 0.46).toFixed(3))
        if (progress < actor.lastProgress) {
          emitFlash(s2FlashLayer, pt.x, pt.y, actor.color, 1.2)
        }
        actor.lastProgress = progress
      })

      ringActors2.forEach((actor) => {
        const progress = (actor.offset + timeSec * actor.speed) % 1
        const pt = actor.path.getPointAtLength(progress * actor.length)
        const ringPulse = 0.5 + 0.5 * Math.sin(timeSec * 3.7 + actor.phase)
        actor.el.setAttribute('cx', pt.x.toFixed(2))
        actor.el.setAttribute('cy', pt.y.toFixed(2))
        actor.el.setAttribute('r', (2.8 + ringPulse * 1.65).toFixed(2))
        actor.el.setAttribute('opacity', (0.12 + ringPulse * 0.34).toFixed(3))
      })
    }

    const startNetworkLoop = () => {
      if (networkRaf) return
      const step = (ts) => {
        updateFlowActors(ts * 0.001)
        networkRaf = window.requestAnimationFrame(step)
      }
      networkRaf = window.requestAnimationFrame(step)
    }

    const getFallbackLayout = () => ({
      x: 0.16,
      y: 0.26,
      width: 0.68,
      height: 0.5,
      nameLeft: 0.32,
      nameRight: 0.68,
      nameTop: 0.43,
      nameBottom: 0.56,
      subtitleLeft: 0.38,
      subtitleRight: 0.62,
      subtitleTop: 0.58,
      subtitleBottom: 0.62
    })

    const getFallbackStage2Layout = () => ({
      leftX: 0.06,
      leftY: 0.2,
      leftW: 0.42,
      leftH: 0.6,
      rightX: 0.52,
      rightY: 0.2,
      rightW: 0.42,
      rightH: 0.6
    })

    const buildMazeRoute = (start, end, guard) => {
      const guardPad = 24
      const topLane = Math.max(70, guard.y - rand(36, 120))
      const bottomLane = Math.min(vbHeight - 70, guard.y + guard.h + rand(36, 120))
      const useTop = Math.random() > 0.5
      const laneY = useTop ? topLane : bottomLane
      const gateInX = guard.x + guard.w + guardPad
      const gateOutX = guard.x - guardPad
      const cJitter = rand(-36, 36)

      const c1 = { x: start.x - rand(90, 220), y: start.y + cJitter }
      const c2 = { x: gateInX + rand(25, 90), y: laneY + rand(-20, 20) }
      const c3 = { x: gateOutX - rand(25, 90), y: laneY + rand(-20, 20) }
      const c4 = { x: end.x + rand(90, 220), y: end.y - cJitter }

      return `M${start.x.toFixed(2)} ${start.y.toFixed(2)} C${c1.x.toFixed(2)} ${c1.y.toFixed(2)}, ${c2.x.toFixed(2)} ${c2.y.toFixed(2)}, ${gateInX.toFixed(2)} ${laneY.toFixed(2)} C${(gateInX + gateOutX) / 2} ${laneY.toFixed(2)}, ${(gateInX + gateOutX) / 2} ${laneY.toFixed(2)}, ${gateOutX.toFixed(2)} ${laneY.toFixed(2)} C${c3.x.toFixed(2)} ${c3.y.toFixed(2)}, ${c4.x.toFixed(2)} ${c4.y.toFixed(2)}, ${end.x.toFixed(2)} ${end.y.toFixed(2)}`
    }

    const renderMaze = (guard) => {
      if (!netNodeLayer || !netLinkLayer) return
      netNodeLayer.innerHTML = ''
      netLinkLayer.innerHTML = ''
      nodeActors = []

      const leftNodes = []
      const rightNodes = []
      const nodeCount = 6
      const avoidTop = guard.y - 10
      const avoidBottom = guard.y + guard.h + 10
      const safeY = () => {
        for (let i = 0; i < 18; i += 1) {
          const yTry = rand(80, 920)
          if (yTry < avoidTop || yTry > avoidBottom) return yTry
        }
        return rand(80, Math.max(120, avoidTop - 20))
      }

      for (let i = 0; i < nodeCount; i += 1) {
        leftNodes.push({ x: rand(90, Math.max(130, guard.x - 120)), y: safeY() })
        rightNodes.push({ x: rand(Math.min(vbWidth - 130, guard.x + guard.w + 120), vbWidth - 90), y: safeY() })
      }

      leftNodes.forEach((p) => {
        const outer = createSvgEl('circle')
        outer.setAttribute('cx', p.x.toFixed(2))
        outer.setAttribute('cy', p.y.toFixed(2))
        outer.setAttribute('r', '4.4')
        outer.setAttribute('fill', 'none')
        outer.setAttribute('stroke', 'rgba(255,255,255,0.8)')
        outer.setAttribute('stroke-width', '1.3')
        netNodeLayer.appendChild(outer)

        const core = createSvgEl('circle')
        core.setAttribute('cx', p.x.toFixed(2))
        core.setAttribute('cy', p.y.toFixed(2))
        core.setAttribute('r', '1.6')
        core.setAttribute('fill', 'rgba(255,255,255,0.34)')
        netNodeLayer.appendChild(core)
        nodeActors.push({ outer, core, phase: Math.random() * Math.PI * 2, color: routeColors[Math.floor(Math.random() * routeColors.length)] })
      })

      rightNodes.forEach((p) => {
        const outer = createSvgEl('circle')
        outer.setAttribute('cx', p.x.toFixed(2))
        outer.setAttribute('cy', p.y.toFixed(2))
        outer.setAttribute('r', '4.4')
        outer.setAttribute('fill', 'none')
        outer.setAttribute('stroke', 'rgba(255,255,255,0.8)')
        outer.setAttribute('stroke-width', '1.3')
        netNodeLayer.appendChild(outer)

        const core = createSvgEl('circle')
        core.setAttribute('cx', p.x.toFixed(2))
        core.setAttribute('cy', p.y.toFixed(2))
        core.setAttribute('r', '1.6')
        core.setAttribute('fill', 'rgba(255,255,255,0.34)')
        netNodeLayer.appendChild(core)
        nodeActors.push({ outer, core, phase: Math.random() * Math.PI * 2, color: routeColors[Math.floor(Math.random() * routeColors.length)] })
      })

      const shuffledLeft = [...leftNodes].sort(() => Math.random() - 0.5)
      s1Routes = []
      rightNodes.forEach((start, idx) => {
        const end = shuffledLeft[idx % shuffledLeft.length]
        const d = buildMazeRoute(start, end, guard)
        const path = createSvgEl('path')
        path.setAttribute('d', d)
        path.setAttribute('fill', 'none')
        const routeColor = routeColors[Math.floor(Math.random() * routeColors.length)]
        path.setAttribute('stroke', routeColor)
        path.setAttribute('stroke-width', '1.05')
        path.setAttribute('stroke-linecap', 'round')
        path.setAttribute('stroke-linejoin', 'round')
        path.setAttribute('opacity', (0.72 + Math.random() * 0.22).toFixed(2))
        path.setAttribute('stroke-dasharray', `${14 + Math.round(Math.random() * 10)} ${20 + Math.round(Math.random() * 18)}`)
        netLinkLayer.appendChild(path)
        s1Routes.push({ path, start, end, routeColor })
      })
    }

    const rebuildFlowParticles = () => {
      if (!particleLayer || !ringLayer) return
      particleLayer.innerHTML = ''
      ringLayer.innerHTML = ''
      packetActors = []
      ringActors = []

      s1Routes.forEach((route) => {
        const path = route.path
        if (!path || typeof path.getTotalLength !== 'function') return
        const length = path.getTotalLength()
        const count = 3 + Math.floor(Math.random() * 2)
        for (let i = 0; i < count; i += 1) {
          const dot = createSvgEl('circle')
          dot.setAttribute('r', '2.4')
          const color = signalColors[Math.floor(Math.random() * signalColors.length)]
          dot.setAttribute('fill', color)
          dot.setAttribute('opacity', '0.95')
          particleLayer.appendChild(dot)
          packetActors.push({
            el: dot,
            path,
            length,
            speed: 0.11 + Math.random() * 0.09,
            offset: Math.random(),
            phase: Math.random() * Math.PI * 2,
            color,
            lastProgress: 0
          })
        }

        const ring = createSvgEl('circle')
        ring.setAttribute('r', '4.6')
        ring.setAttribute('opacity', '0.65')
        ring.setAttribute('fill', 'none')
        ring.setAttribute('stroke-width', '1.3')
        ring.setAttribute('stroke', route.routeColor || signalColors[Math.floor(Math.random() * signalColors.length)])
        ringLayer.appendChild(ring)
        ringActors.push({
          el: ring,
          path,
          length,
          speed: 0.07 + Math.random() * 0.05,
          offset: Math.random(),
          phase: Math.random() * Math.PI * 2
        })
      })
    }

    const buildStage2Route = (start, end, leftGuard, rightGuard) => {
      const topLane = Math.max(64, Math.min(leftGuard.y, rightGuard.y) - rand(36, 120))
      const bottomLane = Math.min(936, Math.max(leftGuard.y + leftGuard.h, rightGuard.y + rightGuard.h) + rand(36, 120))
      const laneY = Math.random() > 0.5 ? topLane : bottomLane
      const corridors = []
      const c1Min = 80
      const c1Max = leftGuard.x - 46
      const c2Min = leftGuard.x + leftGuard.w + 46
      const c2Max = rightGuard.x - 46
      const c3Min = rightGuard.x + rightGuard.w + 46
      const c3Max = 1520
      if (c1Max - c1Min > 60) corridors.push([c1Min, c1Max])
      if (c2Max - c2Min > 60) corridors.push([c2Min, c2Max])
      if (c3Max - c3Min > 60) corridors.push([c3Min, c3Max])
      const pickCorridor = corridors.length ? corridors[Math.floor(Math.random() * corridors.length)] : [760, 840]
      const cx = rand(pickCorridor[0], pickCorridor[1])
      const c1x = start.x + (cx - start.x) * 0.35
      const c2x = cx
      const c3x = cx
      const c4x = end.x + (cx - end.x) * 0.35
      const c1y = start.y + rand(90, 180)
      const c2y = laneY + rand(-24, 24)
      const c3y = laneY + rand(-24, 24)
      const c4y = end.y - rand(90, 180)
      return `M${start.x.toFixed(2)} ${start.y.toFixed(2)} C${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${cx.toFixed(2)} ${laneY.toFixed(2)} C${c3x.toFixed(2)} ${c3y.toFixed(2)}, ${c4x.toFixed(2)} ${c4y.toFixed(2)}, ${end.x.toFixed(2)} ${end.y.toFixed(2)}`
    }

    const renderStage2Network = (detail) => {
      if (!s2NetNodeLayer || !s2NetLinkLayer) return
      const d = detail || getFallbackStage2Layout()
      s2NetNodeLayer.innerHTML = ''
      s2NetLinkLayer.innerHTML = ''
      nodeActors2 = []
      s2Routes = []

      const leftGuard = { x: d.leftX * vbWidth, y: d.leftY * vbHeight, w: d.leftW * vbWidth, h: d.leftH * vbHeight }
      const rightGuard = { x: d.rightX * vbWidth, y: d.rightY * vbHeight, w: d.rightW * vbWidth, h: d.rightH * vbHeight }

      const topNodes = Array.from({ length: 6 }, (_, i) => ({
        x: 130 + i * 260 + rand(-36, 36),
        y: rand(70, 130)
      }))
      const bottomNodes = Array.from({ length: 6 }, (_, i) => ({
        x: 130 + i * 260 + rand(-36, 36),
        y: rand(870, 930)
      }))

      const drawNode = (p) => {
        const outer = createSvgEl('circle')
        outer.setAttribute('cx', p.x.toFixed(2))
        outer.setAttribute('cy', p.y.toFixed(2))
        outer.setAttribute('r', '3.7')
        outer.setAttribute('class', 'node-outer')
        outer.setAttribute('fill', 'none')
        outer.setAttribute('stroke', 'rgba(170,236,255,0.82)')
        outer.setAttribute('stroke-width', '1.1')
        s2NetNodeLayer.appendChild(outer)

        const core = createSvgEl('circle')
        core.setAttribute('cx', p.x.toFixed(2))
        core.setAttribute('cy', p.y.toFixed(2))
        core.setAttribute('r', '1.25')
        core.setAttribute('class', 'node-core')
        core.setAttribute('fill', 'rgba(170,236,255,0.45)')
        s2NetNodeLayer.appendChild(core)
        nodeActors2.push({ outer, core, phase: Math.random() * Math.PI * 2 })
      }

      topNodes.forEach(drawNode)
      bottomNodes.forEach(drawNode)

      const shuffledBottom = [...bottomNodes].sort(() => Math.random() - 0.5)
      topNodes.forEach((start, idx) => {
        const end = shuffledBottom[idx % shuffledBottom.length]
        const dPath = buildStage2Route(start, end, leftGuard, rightGuard)
        const path = createSvgEl('path')
        path.setAttribute('d', dPath)
        path.setAttribute('class', 's2-route')
        path.setAttribute('fill', 'none')
        path.setAttribute('stroke', 'rgba(132,228,255,0.36)')
        path.setAttribute('stroke-width', '1.05')
        path.setAttribute('stroke-linecap', 'round')
        path.setAttribute('stroke-linejoin', 'round')
        path.setAttribute('opacity', (0.48 + Math.random() * 0.28).toFixed(2))
        path.setAttribute('stroke-dasharray', `${12 + Math.round(Math.random() * 9)} ${24 + Math.round(Math.random() * 20)}`)
        s2NetLinkLayer.appendChild(path)
        s2Routes.push({ path, start, end, routeColor: 'rgba(132,228,255,0.72)' })
      })
    }

    const rebuildStage2Particles = () => {
      if (!s2ParticleLayer || !s2RingLayer) return
      s2ParticleLayer.innerHTML = ''
      s2RingLayer.innerHTML = ''
      packetActors2 = []
      ringActors2 = []

      s2Routes.forEach((route) => {
        const path = route.path
        if (!path || typeof path.getTotalLength !== 'function') return
        const length = path.getTotalLength()
        const count = 2 + Math.floor(Math.random() * 2)
        for (let i = 0; i < count; i += 1) {
          const dot = createSvgEl('circle')
          dot.setAttribute('r', '1.9')
          dot.setAttribute('fill', 'rgba(132,228,255,1)')
          dot.setAttribute('opacity', '0.92')
          s2ParticleLayer.appendChild(dot)
          packetActors2.push({
            el: dot,
            path,
            length,
            speed: 0.075 + Math.random() * 0.045,
            offset: Math.random(),
            phase: Math.random() * Math.PI * 2,
            color: '#5BE9FF',
            lastProgress: 0
          })
        }

      })
    }

    const setStage1Layout = (detail) => {
      if (!heroFrame) return
      const d = detail || getFallbackLayout()
      latestLayoutDetail = d

      const x = d.x * vbWidth
      const y = d.y * vbHeight
      const width = d.width * vbWidth
      const height = d.height * vbHeight
      const nameLeft = d.nameLeft != null ? d.nameLeft * vbWidth : x + width * 0.24
      const nameRight = d.nameRight != null ? d.nameRight * vbWidth : x + width * 0.76
      const nameTop = d.nameTop != null ? d.nameTop * vbHeight : y + height * 0.3
      const subtitleLeft = d.subtitleLeft != null ? d.subtitleLeft * vbWidth : x + width * 0.33
      const subtitleRight = d.subtitleRight != null ? d.subtitleRight * vbWidth : x + width * 0.67
      const subtitleBottom = d.subtitleBottom != null ? d.subtitleBottom * vbHeight : y + height * 0.78

      const guardPadX = 10
      const guardPadTop = 6
      const guardPadBottom = 6
      const contentLeft = Math.min(nameLeft, subtitleLeft)
      const contentRight = Math.max(nameRight, subtitleRight)
      const fx = Math.max(90, contentLeft - guardPadX)
      const fy = Math.max(80, nameTop - guardPadTop)
      const frameBottom = Math.min(930, subtitleBottom + guardPadBottom)
      const fw = Math.max(180, (contentRight - contentLeft) + guardPadX * 2)
      const fh = Math.max(100, frameBottom - fy)

      const leftX = fx - 12
      const rightX = fx + fw + 12
      heroFrame.setAttribute('x', String(fx))
      heroFrame.setAttribute('y', String(fy))
      heroFrame.setAttribute('width', String(fw))
      heroFrame.setAttribute('height', String(fh))
      heroFrame.setAttribute('rx', String(Math.max(14, Math.min(24, fw * 0.04))))

      renderMaze({ x: leftX, y: fy, w: rightX - leftX, h: fh })
      rebuildFlowParticles()
    }

    const getLength = (el) => {
      try {
        return typeof el.getTotalLength === 'function' ? el.getTotalLength() : 0
      } catch (_) {
        return 0
      }
    }

    const prepDrawSet = (root, selector) => {
      const nodes = Array.from(root.querySelectorAll(selector))
      return nodes
        .map((el) => ({ el, length: getLength(el) }))
        .filter((item) => item.length > 0)
    }

    window.addEventListener('stage1:layout', (event) => setStage1Layout(event.detail))
    window.addEventListener('stage2:layout', (event) => {
      renderStage2Network(event.detail)
      rebuildStage2Particles()
    })
    window.requestAnimationFrame(() => setStage1Layout(getFallbackLayout()))
    window.requestAnimationFrame(() => {
      renderStage2Network(getFallbackStage2Layout())
      rebuildStage2Particles()
    })
    startNetworkLoop()

    const initGsap = async () => {
      let gsap
      try {
        const mod = await import('gsap')
        gsap = mod.gsap || mod.default || window.gsap
      } catch (_) {
        gsap = window.gsap
      }

      if (!gsap) {
        setStageClass(false)
        window.addEventListener('stage1:shown', () => setStageClass(false))
        window.addEventListener('stage2:shown', () => setStageClass(true))
        return
      }

      const s1Draw = prepDrawSet(stage1, '.s1-draw > *')

      const buildDrawTimeline = (items, speed, stagger, hold, baseOpacity, peakBoost) => {
        const tl = gsap.timeline({ paused: true, repeat: -1 })

        tl.add(() => {
          items.forEach(({ el, length }) => {
            gsap.set(el, { strokeDasharray: `${length} ${length}`, strokeDashoffset: length, opacity: baseOpacity })
          })
        })

        items.forEach(({ el }, index) => {
          tl.to(el, {
            strokeDashoffset: 0,
            opacity: `+=${peakBoost}`,
            duration: speed + Math.random() * 0.35,
            ease: 'power1.out'
          }, index * stagger)
        })

        tl.to({}, { duration: hold })
        return tl
      }

      const s1Tl = buildDrawTimeline(s1Draw, 0.45, 0.06, 0.35, 0.12, 0.44)

      gsap.to(stage1, {
        x: -6,
        y: -4,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      gsap.to(stage2, {
        x: 8,
        y: -3,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      const setStage = (isStage2) => {
        setStageClass(isStage2)
        if (isStage2) {
          s1Tl.pause(0)
        } else {
          if (!s1Routes.length) setStage1Layout(latestLayoutDetail || getFallbackLayout())
          s1Tl.restart(true)
        }
      }

      window.addEventListener('stage1:shown', () => setStage(false))
      window.addEventListener('stage2:shown', () => setStage(true))
      setStage(false)
    }

    initGsap()
  })()
}
