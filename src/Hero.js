export function Hero() {
  return `
  <section id="hero-wrapper" class="relative h-[110vh]">
      <div id="hero-section"
           class="sticky top-0 min-h-screen font-sans px-4">
      <a id="hero-cta" href="https://forms.gle/cPzy7jQYL2xzGf6R7" target="_blank" rel="noopener noreferrer" aria-label="Contact us"
        class="fixed top-4 right-4 z-50">
        <!-- full text CTA visible on small screens and up -->
        <span class="cta-full hidden sm:inline-flex items-center px-6 py-3 text-base sm:text-lg font-semibold rounded-xl bg-white/10 hover:bg-white/20 text-white shadow-lg backdrop-blur border border-white/20 transition-all duration-200">
          <!-- Full text only on wide screens (no icon) -->
          Let’s talk about your project
        </span>

        <!-- icon-only CTA for extra-small screens -->
        <span class="cta-icon inline-flex sm:hidden items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white shadow-lg border border-white/20 transition-all duration-200" aria-hidden="true">
          <!-- Simple question-mark glyph for constrained space -->
          <span class="text-lg font-bold" aria-hidden="true" style="line-height:1">?</span>
        </span>
      </a>

  <!-- Motion canvas: fixed to viewport; children arranged in a centered column for consistent spacing -->
  <div class="fixed inset-0 pointer-events-none z-40 flex items-center justify-center">
  <!-- Motion canvas: distribute logo / title / subtitle vertically and center horizontally -->
  <div id="hero-motion-canvas" class="pointer-events-auto flex flex-col items-center justify-between h-[48vh] md:h-[56vh] lg:h-[64vh] xl:h-[72vh] py-12 px-4">
      <img id="hero-logo" src="/konbi logo white.png" alt="Konbi Logo"
           class="w-20 sm:w-24 md:w-32 lg:w-40 h-auto" />

      <h1 id="hero-title"
          class="font-extrabold text-center leading-tight md:leading-snug lg:leading-normal max-w-3xl px-4"
          style="font-size: clamp(1.75rem, 4.2vw, 3rem); line-height: 1.02;">
        Operational clarity for SMEs
      </h1>

      <p id="hero-subtitle"
         class="opacity-80 text-center mx-auto leading-relaxed max-w-2xl px-4"
         style="font-size: clamp(1rem, 2.2vw, 1.125rem);">
        Lightweight tools that replace chaos with simple, reliable workflows
      </p>
    </div>
  </div>

        <!-- Background + color are driven by CSS vars already -->
      </div>
    </section>
  `;
}
