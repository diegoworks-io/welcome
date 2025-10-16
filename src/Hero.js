export function Hero() {
  return `
    <section class="flex flex-col items-center justify-center min-h-screen bg-black text-white font-sans px-4">
      <img src="/konbi logo white.png"
           alt="Konbi Logo"
           class="w-20 sm:w-24 md:w-32 lg:w-40 h-auto mb-4 sm:mb-6 md:mb-8 lg:mb-10" />
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-center leading-tight md:leading-snug lg:leading-normal">
        Operational clarity<br class="hidden sm:inline" /> for SMEs
      </h1>
      <p class="text-base sm:text-lg md:text-xl opacity-80 mb-6 sm:mb-8 md:mb-10 text-center max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
        Lightweight tools that replace chaos<br class="sm:hidden" /> with simple,<br class="hidden sm:inline" /> reliable workflows
      </p>
      <!-- CTA space for future -->
    </section>
  `;
}
