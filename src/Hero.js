export function Hero() {
  return `
  <section id="hero-wrapper" class="relative h-[110vh]">
      <div id="hero-section"
           class="sticky top-0 min-h-screen font-sans px-4">
        <a href="https://forms.gle/cPzy7jQYL2xzGf6R7" target="_blank" rel="noopener noreferrer"
           class="fixed top-4 right-4 px-6 py-3 text-base sm:text-lg font-semibold rounded-xl bg-white/10 hover:bg-white/20 text-white shadow-lg backdrop-blur border border-white/20 transition-all duration-200 z-50">
          Let’s talk about your project
        </a>

  <!-- Motion canvas: fixed to viewport; children arranged in a centered column for consistent spacing -->
  <div class="fixed inset-0 pointer-events-none z-40 flex items-center justify-center">
    <div id="hero-motion-canvas" class="pointer-events-auto flex flex-col items-center justify-center gap-4 px-4">
      <img id="hero-logo" src="/konbi logo white.png" alt="Konbi Logo"
           class="w-20 sm:w-24 md:w-32 lg:w-40 h-auto" />

      <h1 id="hero-title"
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center leading-tight md:leading-snug lg:leading-normal max-w-2xl">
        Operational clarity<br class="hidden sm:inline" /> for SMEs
      </h1>

      <p id="hero-subtitle"
         class="text-base sm:text-lg md:text-xl opacity-80 text-center max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
        Lightweight tools that replace chaos<br class="sm:hidden" /> with simple,<br class="hidden sm:inline" /> reliable workflows
      </p>
    </div>
  </div>

        <!-- Background + color are driven by CSS vars already -->
      </div>
    </section>
  `;
}
