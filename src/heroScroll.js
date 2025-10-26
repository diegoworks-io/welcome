// heroScroll.js
// Clean, minimal scroll-based morph: logo moves center → top-left, title shrinks and recenters, subtitle fades.

function lerp(a, b, t) { return a + (b - a) * t; }
function clamp(v, a = 0, b = 1) { return Math.max(a, Math.min(b, v)); }

function findHero() { return document.getElementById('hero-section'); }
// No-op: color morph removed. Keep function signature to avoid wider edits.
function setVars(/* el, bg, text */) { /* intentionally empty */ }

function init() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hero = findHero();
  if (!hero) return false;

  const BG_START = 0, BG_END = 96, TXT_START = 100, TXT_END = 12;

  // cache nodes after mount
  const logo = document.getElementById('hero-logo');
  const title = document.getElementById('hero-title');
  const subtitle = document.getElementById('hero-subtitle');
  const cta = document.getElementById('hero-cta');
  const motionCanvas = document.getElementById('hero-motion-canvas');

  // helper: measure element and publish to window for debugging
  function measureNode(node, label) {
    if (!node) return null;
    const r = node.getBoundingClientRect();
    const docRect = {
      left: r.left + (window.scrollX || window.pageXOffset || 0),
      top: r.top + (window.scrollY || window.pageYOffset || 0),
      width: r.width,
      height: r.height,
      right: r.right + (window.scrollX || window.pageXOffset || 0),
      bottom: r.bottom + (window.scrollY || window.pageYOffset || 0)
    };
    const name = label || (node.id ? `#${node.id}` : node.tagName);
    // expose for interactive inspection
    window.heroPositions = window.heroPositions || {};
    window.heroPositions[name] = docRect;
    // also log for immediate feedback
    console.info('[heroScroll] measured', name, docRect);
    return docRect;
  }

  // Ensure title fits max 2 lines by shrinking font-size when needed, and position subtitle below it
  function fitTitleAndSubtitle() {
    if (!title) return;
    // Keep typography controlled by CSS (clamp) for smooth, readable scaling.
    // JS will not force single-line or shrink font-size anymore. Only ensure subtitle spacing.
    title.style.fontSize = '';
    title.style.lineHeight = '';
    title.style.maxWidth = '';
    if (subtitle) {
      subtitle.style.marginTop = '12px';
      subtitle.style.whiteSpace = '';
      subtitle.style.overflow = '';
      subtitle.style.textOverflow = '';
      subtitle.style.maxWidth = '';
    }
  }

  // run once and on resize (debounced)
  fitTitleAndSubtitle();
  let fitTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(fitTimer);
    fitTimer = setTimeout(() => {
      fitTitleAndSubtitle();
      // re-measure CTA and other nodes after layout changes
      measureNode(cta, 'cta');
      measureNode(logo, 'logo');
      measureNode(title, 'title');
      measureNode(subtitle, 'subtitle');
    }, 120);
  });

  if (prefersReduced) {
    // jump to final light state and final transforms
    setVars(hero, BG_END, TXT_END);
    const vw = window.innerWidth, vh = window.innerHeight;
    const startX = vw / 2, startY = vh / 2;
    const endX = 24, endY = 24;
    const dx = endX - startX, dy = endY - startY;
    if (logo) {
      const s = 1 - 0.12; // final scale
      logo.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%) scale(${s})`;
      logo.style.transformOrigin = 'top left';
    }
    if (title) {
      title.style.transform = `translate(-50%, calc(-50% - 40px)) scale(0.9)`;
      title.style.whiteSpace = 'nowrap';
      // hide any <br> inside title for reduced-motion final state
      const brsR = title.querySelectorAll ? title.querySelectorAll('br') : [];
      brsR.forEach(b => b.style.display = 'none');
    }
    if (subtitle) subtitle.style.opacity = '0';
    return true;
  }

  // initial color state
  setVars(hero, BG_START, TXT_START);

  // easing
  const ease = t => t * t * (3 - 2 * t);

  // make the scroll-to-progress mapping much shorter so small scroll drives the animation
  // progress = clamp(scrollY / (vh * RANGE), 0, 1)
  const RANGE = 0.18; // fraction of viewport height to complete the animation (18%)

  // initialize transforms to centered state so the logo/title/subtitle appear centered immediately
  if (logo) {
    logo.style.transform = 'translate(0px, 0px) scale(1)';
    logo.style.transformOrigin = 'center center';
  }
  if (title) {
    title.style.transform = 'translate(0px, 0px) scale(1)';
    title.style.transformOrigin = 'center center';
  }
  if (subtitle) {
    subtitle.style.opacity = '1';
    subtitle.style.transform = 'translateY(0px)';
    subtitle.style.transformOrigin = 'center center';
    // ensure margin-top exists for spacing
    if (!subtitle.style.marginTop) subtitle.style.marginTop = '12px';
  }

  let ticking = false;

  function update() {
    ticking = false;
    const rect = hero.getBoundingClientRect();
    const windowH = window.innerHeight || document.documentElement.clientHeight;
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const progress = clamp(scrollY / (windowH * RANGE), 0, 1);
    const p = progress;
    const e = ease(p);

  // color sync
    const bg = lerp(BG_START, BG_END, e);
    const txt = lerp(TXT_START, TXT_END, e);
    setVars(hero, bg, txt);

  // expose targets and diagnostics for debugging so we can see "what's fighting"
  window.heroTargets = window.heroTargets || {};
  window.heroTargets.progress = p;

    // motion params
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const padding = 24; // desired padding from page edges for final positions

    // compute start centers from current layout (precise across widths)
    let startCenter = { x: vw / 2, y: vh / 2 };
    if (logo) {
      const r = logo.getBoundingClientRect();
      startCenter = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    }

    // compute final positions using CTA as reference when available
      // allow a small upward offset for the logo so it sits visually above the title when landed
      const LOGO_FINAL_OFFSET_Y = -12; // px (negative moves logo up)
      let logoEndCenter = { x: padding + (logo ? logo.offsetWidth / 2 : 32), y: padding + (logo ? logo.offsetHeight / 2 : 32) };
    let titleEnd = { x: vw / 2, y: padding + 32 };

    // If CTA exists, mirror its right offset to compute the logo's left offset
    if (cta) {
      const cr = cta.getBoundingClientRect();
      // CTA horizontal offset from right edge
      const rightOffset = Math.round(vw - cr.right);
      // place logo at the mirrored left offset (same distance from left as CTA is from right)
      const logoHalfW = logo ? logo.offsetWidth / 2 : 16;
      logoEndCenter.x = rightOffset + logoHalfW;
      // vertical center aligned to CTA center but lift logo slightly above the row
      const ctaCenterY = cr.top + cr.height / 2;
      logoEndCenter.y = ctaCenterY + LOGO_FINAL_OFFSET_Y;
      titleEnd.y = ctaCenterY;
      titleEnd.x = vw / 2;
    }

    if (logo) {
      const dx = logoEndCenter.x - startCenter.x;
      const dy = logoEndCenter.y - startCenter.y;
      const tx = dx * e;
      const ty = dy * e;
      const s = 1 - 0.12 * e; // scale down up to ~12%
      logo.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`;
      logo.style.transformOrigin = 'center center';
      window.heroTargets.logo = { tx, ty, s, startCenter, end: logoEndCenter };
    }

    if (title) {
      // compute title movement (translate only; avoid forcing width or font-size changes)
      const r = title.getBoundingClientRect();
      const titleStart = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      const dxT = (titleEnd.x - titleStart.x) * e;
      const dyT = (titleEnd.y - titleStart.y) * e;
      // subtle scale so it feels like it 'lands' but remains readable
      let scaleT = 1 - 0.06 * e; // up to ~6% smaller
      // Guard: ensure title (after scale) remains larger than subtitle's font-size
      if (subtitle) {
        try {
          const tFS = parseFloat(window.getComputedStyle(title).fontSize || 0);
          const sFS = parseFloat(window.getComputedStyle(subtitle).fontSize || 0);
          if (tFS > 0 && sFS > 0) {
            const minScale = (sFS + 1) / tFS; // ensure title*scale > subtitle (+1px buffer)
            if (scaleT < minScale) scaleT = minScale;
          }
        } catch (err) {
          // ignore and keep scaleT
        }
      }
  title.style.transform = `translate(${dxT}px, ${dyT}px) scale(${scaleT.toFixed(3)})`;
  window.heroTargets.title = { dxT, dyT, scale: scaleT, start: titleStart, end: titleEnd };
      // ensure title keeps normal wrapping behavior; typography handled by CSS
      title.style.whiteSpace = '';
      title.style.maxWidth = '';
      title.style.overflow = '';
      title.style.textOverflow = '';
    }

    if (subtitle) {
      const fade = Math.max(0, 1 - p * 1.6);
      const subLift = -20 * e;
      subtitle.style.opacity = fade.toFixed(3);
      // move subtitle vertically only (keep horizontal centering via flex)
      subtitle.style.transform = `translateY(${subLift.toFixed(1)}px)`;
      window.heroTargets.subtitle = { opacity: fade, translateY: subLift };
    }

    // diagnostics: detect any CSS transitions or inline transforms that might conflict
    try {
      window.heroDiagnostics = window.heroDiagnostics || {};
      const csLogo = logo ? window.getComputedStyle(logo).transition : '';
      const csTitle = title ? window.getComputedStyle(title).transition : '';
      const csSub = subtitle ? window.getComputedStyle(subtitle).transition : '';
      window.heroDiagnostics.transitions = { logo: csLogo, title: csTitle, subtitle: csSub };
      // also expose inline transform attributes
      window.heroDiagnostics.inline = {
        logo: logo ? logo.getAttribute('style') || '' : '',
        title: title ? title.getAttribute('style') || '' : '',
        subtitle: subtitle ? subtitle.getAttribute('style') || '' : ''
      };
    } catch (err) {
      // ignore
    }

    // Log once at start and once at finish so you can see measured vs final positions
    try {
      window.heroLogged = window.heroLogged || { start: false, end: false };
      if (!window.heroLogged.start && p < 0.01) {
        window.heroLogged.start = true;
        console.info('[heroScroll] START positions', {
          logoStart: window.heroTargets.logo ? window.heroTargets.logo.startCenter || window.heroTargets.logo.start : null,
          titleStart: window.heroTargets.title ? window.heroTargets.title.start : null,
          subtitleStart: window.heroTargets.subtitle || null,
          diagnostics: window.heroDiagnostics || null
        });
      }
      if (!window.heroLogged.end && p > 0.99) {
        window.heroLogged.end = true;
        console.info('[heroScroll] FINAL targets', {
          logoTarget: window.heroTargets.logo ? window.heroTargets.logo.end : null,
          titleTarget: window.heroTargets.title ? window.heroTargets.title.end : null,
          subtitleTarget: window.heroTargets.subtitle || null,
          diagnostics: window.heroDiagnostics || null
        });
      }
      // reset logs if user scrolls back above/below thresholds
      if (p >= 0.01) window.heroLogged.start = true;
      if (p <= 0.99) window.heroLogged.end = false;
    } catch (e) {}
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  // initial call
  requestAnimationFrame(() => {
    // measure CTA and core nodes once layout is settled
    measureNode(cta, 'cta');
    measureNode(logo, 'logo');
    measureNode(title, 'title');
    measureNode(subtitle, 'subtitle');
    update();
  });

  return true;
}

// wait for mount
(function waitForHero() {
  if (init()) return;
  requestAnimationFrame(waitForHero);
})();
