export function Hero() {
  return `
    <section id="hero-section" class="relative flex flex-col items-center justify-center min-h-screen bg-black text-white font-sans px-4">
      <a href="https://forms.gle/cPzy7jQYL2xzGf6R7" target="_blank" rel="noopener noreferrer"
         class="fixed top-4 right-4 px-6 py-3 text-base sm:text-lg font-semibold rounded-xl bg-white/10 hover:bg-white/20 text-white shadow-lg backdrop-blur border border-white/20 transition-all duration-200 z-50">
        Let’s talk about your project
      </a>
      <img id="hero-logo" src="/konbi logo white.png"
           alt="Konbi Logo"
           class="w-20 sm:w-24 md:w-32 lg:w-40 h-auto mb-4 sm:mb-6 md:mb-8 lg:mb-10" />
      <h1 id="hero-title" class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-center leading-tight md:leading-snug lg:leading-normal">
        Operational clarity<br class="hidden sm:inline" /> for SMEs
      </h1>
      <p id="hero-subtitle" class="text-base sm:text-lg md:text-xl opacity-80 mb-6 sm:mb-8 md:mb-10 text-center max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
        Lightweight tools that replace chaos<br class="sm:hidden" /> with simple,<br class="hidden sm:inline" /> reliable workflows
      </p>
    </section>
  `;
}
