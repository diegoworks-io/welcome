// heroScroll.js
// Minimal scroll-based color morph: updates CSS vars on #hero-section

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function clamp(v, a = 0, b = 1) {
  return Math.max(a, Math.min(b, v));
}

function setVars(el, bg, text) {
  if (!el) return;
  el.style.setProperty('--bg-lightness', `${bg}%`);
  el.style.setProperty('--text-lightness', `${text}%`);
}

function findHero() {
  return document.getElementById('hero-section');
}

function init() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hero = findHero();
  if (!hero) return false; // not ready

  // final values
  const BG_START = 0; // 0%
  const BG_END = 96; // 96%
  const TXT_START = 100; // 100%
  const TXT_END = 12; // 12%

  if (prefersReduced) {
    // jump to final light state
    setVars(hero, BG_END, TXT_END);
    return true;
  }

  // initial
  setVars(hero, BG_START, TXT_START);

  let ticking = false;

  function update() {
    ticking = false;
    const rect = hero.getBoundingClientRect();
    const windowH = window.innerHeight || document.documentElement.clientHeight;

    // Progress: when hero top is at bottom -> 0, when hero top scrolled past by ~height+window -> ~1
    const progress = clamp((windowH - rect.top) / (windowH + rect.height), 0, 1);

    const bg = lerp(BG_START, BG_END, progress);
    const txt = lerp(TXT_START, TXT_END, progress);
    setVars(hero, bg, txt);
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  // kick initial update
  requestAnimationFrame(update);

  return true;
}

// Wait until hero exists in DOM (main.js mounts it). Poll with rAF.
(function waitForHero() {
  if (init()) return;
  requestAnimationFrame(waitForHero);
})();
