export function Hero() {
  return `
  <section id="hero-section" class="relative flex flex-col items-center justify-center min-h-screen bg-black text-white font-sans px-4 pb-0 pt-4 transition-all duration-500">
      <a href="https://forms.gle/9pgBoxFdYaw7QKCbA" target="_blank" rel="noopener noreferrer"
         class="absolute top-6 right-6 sm:top-8 sm:right-8 px-6 py-3 text-base sm:text-lg font-semibold rounded-xl bg-white/10 hover:bg-white/20 text-white shadow-lg backdrop-blur border border-white/20 transition-all duration-200 z-10">
        Let’s talk about your project
      </a>
      <img src="/konbi logo white.png"
           alt="Konbi Logo"
           class="w-20 sm:w-24 md:w-32 lg:w-40 h-auto mb-2 sm:mb-4 md:mb-6 lg:mb-8" />
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 sm:mb-3 md:mb-4 text-center leading-tight md:leading-snug lg:leading-normal">
        Operational clarity<br class="hidden sm:inline" /> for SMEs
      </h1>
      <p class="text-base sm:text-lg md:text-xl opacity-80 mb-2 sm:mb-3 md:mb-4 text-center max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
        Lightweight tools that replace chaos<br class="sm:hidden" /> with simple,<br class="hidden sm:inline" /> reliable workflows
      </p>
    </section>
  `;
}
