// heroAnimator.js
// Lightweight, deterministic continuous scroll-driven animator.
// Maps scrollY → progress (0..1) over a small viewport range and applies per-frame transforms.

(() => {
  if (typeof window === 'undefined') return;

  const PREF_REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const q = id => document.getElementById(id);
  const logo = q('hero-logo');
  const title = q('hero-title');
  const subtitle = q('hero-subtitle');
  const cta = q('hero-cta');

  const RANGE = 0.18; // fraction of viewport height that completes the animation

  function centerOf(el) {
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  // cache start and end positions on init for deterministic math
  let startLogo = null, startTitle = null;
  let endLogo = null, endTitle = null;

  function measureTargets() {
    const vw = window.innerWidth, vh = window.innerHeight;
    startLogo = logo ? centerOf(logo) : { x: vw / 2, y: vh / 2 };
    startTitle = title ? centerOf(title) : { x: vw / 2, y: vh / 2 };
    // end targets: logo -> CTA left padding, title -> CTA center Y & center X
    const cr = cta ? cta.getBoundingClientRect() : null;
    const paddingLeft = 24;
    endLogo = cr ? { x: paddingLeft + (logo ? logo.getBoundingClientRect().width / 2 : 24), y: cr.top + cr.height / 2 - 6 } : { x: paddingLeft + 24, y: 48 };
    endTitle = cr ? { x: vw / 2, y: cr.top + cr.height / 2 } : { x: vw / 2, y: 48 };
  }

  function applyTransformsAtProgress(p) {
    // p in [0,1]
    if (logo && startLogo && endLogo) {
      const dx = endLogo.x - startLogo.x;
      const dy = endLogo.y - startLogo.y;
      const tx = dx * p;
      let ty = dy * p;
      // nudge final position 4px down when animation is fully complete to match design request
        // smoothly nudge final position down up to 4px as p -> 1 to avoid sudden jumps
        const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
        const extra = 4 * easeOutCubic(p);
        ty += extra;
      const s = 1 - 0.12 * p;
      logo.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`;
      logo.style.transformOrigin = 'center center';
    }

    if (title && startTitle && endTitle) {
      const dx = endTitle.x - startTitle.x;
      const dy = endTitle.y - startTitle.y;
      const tx = dx * p;
      const ty = dy * p;
      const s = 1 - 0.06 * p;
      title.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`;
      title.style.transformOrigin = 'center center';
    }

    if (subtitle) {
      const fade = Math.max(0, 1 - p * 1.6);
      const lift = -20 * p;
      subtitle.style.opacity = String(fade.toFixed(3));
      subtitle.style.transform = `translateY(${lift}px)`;
    }
  }

  // reset to initial (clear inline styles)
  function resetTransforms() {
    if (logo) logo.style.transform = '';
    if (title) title.style.transform = '';
    if (subtitle) { subtitle.style.transform = ''; subtitle.style.opacity = ''; }
  }

  // smooth interpolation of displayed progress to avoid micro-jitter (lerp)
  let targetProgress = 0;
  let displayedProgress = 0;
  let raf = null;

  function updateLoop() {
    displayedProgress += (targetProgress - displayedProgress) * 0.2; // smoothing
    applyTransformsAtProgress(displayedProgress);
    raf = requestAnimationFrame(updateLoop);
  }

  function onScroll() {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const p = Math.max(0, Math.min(1, scrollY / (vh * RANGE)));
    targetProgress = p;
    if (p === 0 && displayedProgress < 0.001) {
      // fully reset
      resetTransforms();
    }
  }

  function init() {
    measureTargets();
    if (PREF_REDUCED) {
      // jump to final
      applyTransformsAtProgress(1);
      return;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => { measureTargets(); onScroll(); });
    // start RAF loop
    if (!raf) raf = requestAnimationFrame(updateLoop);
  }

  // Wait for DOM
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(init, 60);
  } else {
    window.addEventListener('DOMContentLoaded', () => setTimeout(init, 60));
  }
})();
      window.addEventListener('DOMContentLoaded', () => setTimeout(init, 60));

