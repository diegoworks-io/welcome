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
  // read anchors from guide row slots (single source of truth)
  const slotLogo = q('slot-logo');
  const slotTitle = q('slot-title');
  const slotCta = q('slot-cta');

  // token reader helper
  function readTokenNumber(varName, fallback) {
    const raw = getComputedStyle(document.documentElement).getPropertyValue(varName);
    if (!raw) return fallback;
    const n = parseFloat(raw.trim());
    return Number.isFinite(n) ? n : fallback;
  }

  // runtime tokens (will be refreshed in measureTargets)
  let RANGE = readTokenNumber('--hero-range', 0.24);
  let PAD = readTokenNumber('--hero-pad', 24);
  let LOGO_SCALE_TOKEN = readTokenNumber('--hero-logo-scale', 0.10);
  let TITLE_SCALE_TOKEN = readTokenNumber('--hero-title-scale', 0.06);
  let SUB_LIFT = readTokenNumber('--hero-sub-lift', 20);
  function centerOf(el) {
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  // cache start and end positions on init for deterministic math
  let startLogo = null, startTitle = null;
  let endLogo = null, endTitle = null;

  function measureTargets() {
    // refresh tokens
    RANGE = readTokenNumber('--hero-range', 0.24);
    PAD = readTokenNumber('--hero-pad', 24);
    LOGO_SCALE_TOKEN = readTokenNumber('--hero-logo-scale', 0.10);
    TITLE_SCALE_TOKEN = readTokenNumber('--hero-title-scale', 0.06);
    SUB_LIFT = readTokenNumber('--hero-sub-lift', 20);

    const vw = window.innerWidth, vh = window.innerHeight;
    startLogo = logo ? centerOf(logo) : { x: vw / 2, y: vh / 2 };
    startTitle = title ? centerOf(title) : { x: vw / 2, y: vh / 2 };

    // measure end centers from the guide slots (single source of truth)
    const sl = slotLogo ? slotLogo.getBoundingClientRect() : null;
    const st = slotTitle ? slotTitle.getBoundingClientRect() : null;
    const sc = slotCta ? slotCta.getBoundingClientRect() : null;

    endLogo = sl ? { x: sl.left + sl.width / 2, y: sl.top + sl.height / 2 } : { x: PAD + (logo ? logo.getBoundingClientRect().width / 2 : 24), y: 48 };
    endTitle = st ? { x: st.left + st.width / 2, y: st.top + st.height / 2 } : { x: vw / 2, y: 48 };
    // slotCta available for reference if needed
  }

  function applyTransformsAtProgress(p) {
    // p in [0,1]
    // eased progress for nicer cross-fade
    const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
    const e = easeOutCubic(p);

    if (logo && startLogo && endLogo) {
      // Move logo vertically only (no horizontal translation) so it disappears upward
      const dy = endLogo.y - startLogo.y;
      const tx = 0; // force no horizontal motion
      const ty = dy * p; // if end is above start, dy is negative => moves up
      const s = 1 - LOGO_SCALE_TOKEN * p;
      logo.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`;
      logo.style.transformOrigin = 'center center';
    }

    if (title && startTitle && endTitle) {
      // Move title vertically only (no horizontal translation)
      const dy = endTitle.y - startTitle.y;
      const tx = 0;
      const ty = dy * p;
      const s = 1 - TITLE_SCALE_TOKEN * p;
      title.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`;
      title.style.transformOrigin = 'center center';
    }

    // cross-fade: hide the body (animating) logo/title as progress increases,
    // and fade in the nav slot logo/title which act as the printed final state.
    if (logo) {
      const bodyLogoOpacity = Math.max(0, 1 - e * 1.05);
      logo.style.opacity = String(bodyLogoOpacity.toFixed(3));
    }
    if (title) {
      const bodyTitleOpacity = Math.max(0, 1 - e * 1.05);
      title.style.opacity = String(bodyTitleOpacity.toFixed(3));
    }

    if (slotLogo) {
      slotLogo.style.opacity = String(Math.min(1, e).toFixed(3));
    }
    if (slotTitle) {
      slotTitle.style.opacity = String(Math.min(1, e).toFixed(3));
    }

    if (subtitle) {
      const fade = Math.max(0, 1 - p * 1.6);
      const lift = -SUB_LIFT * p;
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
    // recompute geometry on resize/orientation changes and when fonts are ready to avoid layout shifts
    window.addEventListener('resize', () => { measureTargets(); onScroll(); });
    window.addEventListener('orientationchange', () => { measureTargets(); onScroll(); });
    if (document && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => { measureTargets(); onScroll(); }).catch(() => {});
    }
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
    

