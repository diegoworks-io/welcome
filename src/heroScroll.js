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
  const motionCanvas = document.getElementById('hero-motion-canvas');

  // Ensure title fits max 2 lines by shrinking font-size when needed, and position subtitle below it
  function fitTitleAndSubtitle() {
    if (!title) return;
    // reset any inline size so measurement starts from stylesheet
    title.style.fontSize = '';
    title.style.lineHeight = '';
    title.style.whiteSpace = 'normal';

    const cs = window.getComputedStyle(title);
    const lineHeight = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.1;
    const maxHeight = lineHeight * 2;
    let fontSize = parseFloat(cs.fontSize);
    const minFont = Math.max(14, fontSize * 0.7); // don't scale below this

    // shrink until it fits into two lines or reach minFont
    while (title.scrollHeight > maxHeight + 1 && fontSize > minFont) {
      fontSize = Math.max(minFont, fontSize - 1);
      title.style.fontSize = `${fontSize}px`;
    }

    // After sizing, ensure subtitle sits below title with a small gap
    if (subtitle) {
      const gap = 12; // px space between title bottom and subtitle top
      // Use margin to keep subtitle in normal flow (flex column). Avoid setting top which has no effect.
      subtitle.style.marginTop = `${gap}px`;
      // reset transform so translations during animation are relative vertical moves only
      subtitle.style.transform = 'translateY(0px)';
    }
  }

  // run once and on resize (debounced)
  fitTitleAndSubtitle();
  let fitTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(fitTimer);
    fitTimer = setTimeout(() => fitTitleAndSubtitle(), 120);
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

    // compute end center so logo top-left sits at padding from page
    let endCenter = { x: padding + (logo ? logo.offsetWidth / 2 : 32), y: padding + (logo ? logo.offsetHeight / 2 : 32) };

    if (logo) {
      const dx = endCenter.x - startCenter.x;
      const dy = endCenter.y - startCenter.y;
      const tx = dx * e;
      const ty = dy * e;
      const s = 1 - 0.12 * e; // scale down up to ~12%
      // translate relative to current centered layout
      logo.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`;
      logo.style.transformOrigin = 'center center';
    }

    if (title) {
      // move title from its start center to a top-center end position with padding
      const r = title.getBoundingClientRect();
      const titleStart = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      const titleEnd = { x: vw / 2, y: padding + r.height / 2 + 2 };
      const dxT = (titleEnd.x - titleStart.x) * e;
      const dyT = (titleEnd.y - titleStart.y) * e;
      const scaleT = 1 - 0.12 * e;
      title.style.transform = `translate(${dxT}px, ${dyT}px) scale(${scaleT.toFixed(3)})`;
      title.style.whiteSpace = e > 0.12 ? 'nowrap' : 'normal';
      title.style.textOverflow = 'ellipsis';
      title.style.overflow = 'hidden';
    }

    if (subtitle) {
      const fade = Math.max(0, 1 - p * 1.6);
      const subLift = -20 * e;
      subtitle.style.opacity = fade.toFixed(3);
      // move subtitle vertically only (keep horizontal centering via flex)
      subtitle.style.transform = `translateY(${subLift.toFixed(1)}px)`;
    }
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
  requestAnimationFrame(update);

  return true;
}

// wait for mount
(function waitForHero() {
  if (init()) return;
  requestAnimationFrame(waitForHero);
})();
