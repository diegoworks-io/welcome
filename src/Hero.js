export function Hero() {
  return `
  <section id="hero-wrapper" class="relative min-h-screen sm:h-[240vh] lg:h-[300vh]">
      <div id="hero-section"
           class="sticky top-0 font-sans">
      <!-- Shared container for guide row and motion canvas (single source of truth) -->
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <!-- Visible sticky nav bar that also serves as the anchor slots for the final animation positions -->
        <nav id="hero-topbar" class="w-full sticky top-0 z-50 bg-black bg-opacity-90">
          <div class="mx-auto max-w-6xl px-4 sm:px-6">
            <div class="h-14 flex items-center justify-between">
              <!-- left slot: logo -->
              <div id="slot-logo" class="flex items-center" style="padding-left:var(--hero-pad)">
                <img src="/konbi logo white.png" alt="Konbi" class="w-8 h-auto sm:w-10" />
              </div>
              <!-- center slot: title (nav-size) -->
              <div id="slot-title" class="flex-1 text-center text-white font-semibold text-sm sm:text-base">Operational clarity for SMEs</div>
              <!-- right slot: CTA inside nav -->
              <div id="slot-cta" class="flex items-center" style="padding-right:var(--hero-pad)">
                <a id="hero-cta" href="https://forms.gle/cPzy7jQYL2xzGf6R7" target="_blank" rel="noopener noreferrer" aria-label="Contact us"
                  class="inline-flex items-center text-sm font-semibold transition-all duration-200 px-0 py-0 sm:px-4 sm:py-2 rounded-none sm:rounded-lg bg-transparent sm:bg-white/10 hover:bg-transparent sm:hover:bg-white/20 text-white shadow-none sm:shadow-sm border-transparent sm:border border-white/20">
                  <span class="cta-full hidden sm:inline">Let’s talk about your project</span>
                  <!-- replace bulky '?' with a compact right-arrow icon; keep accessible label -->
                  <!-- Replace SVG with a simple Unicode arrow for guaranteed visibility on small screens -->
                  <span class="cta-icon inline-flex sm:hidden" aria-hidden="true">&rarr;</span>
                  <span class="sr-only">Contact us</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
        

  <!-- Motion canvas: fixed to viewport; children arranged in a centered column for consistent spacing -->
  <div class="fixed inset-0 pointer-events-none z-40 flex items-center justify-center">
  <!-- Motion canvas: distribute logo / title / subtitle vertically and center horizontally -->
  <div id="hero-motion-canvas" class="pointer-events-auto flex flex-col items-center justify-between sm:h-[48vh] md:h-[56vh] lg:h-[64vh] xl:h-[72vh] py-12 px-4 mx-auto max-w-6xl sm:px-6">
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
