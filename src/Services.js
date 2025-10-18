export function Services() {
  return `
    <section id="services-section" class="bg-black text-white py-12 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="md:col-span-2">
            <h3 class="text-xl font-bold mb-4">Ready demos</h3>
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="rounded-xl p-6 bg-white/5 border border-white/10 h-40 flex items-center justify-center">Demo 1</div>
              <div class="rounded-xl p-6 bg-white/5 border border-white/10 h-40 flex items-center justify-center">Demo 2</div>
              <div class="rounded-xl p-6 bg-white/5 border border-white/10 h-40 flex items-center justify-center">Demo 3</div>
              <div class="rounded-xl p-6 bg-white/5 border border-white/10 h-40 flex items-center justify-center">Demo 4</div>
            </div>
          </div>

          <aside class="md:col-span-1">
            <h3 class="text-xl font-bold mb-4">Blog & socials</h3>
            <!-- Match the total height of the demos grid (approx 2 rows of h-40 + gap) -->
            <div class="rounded-xl p-6 bg-white/5 border border-white/10 h-[340px] flex flex-col items-center justify-center">
              <div class="mb-3 font-semibold">Latest blog</div>
              <div class="text-sm text-gray-300">Social links / cards</div>
            </div>
          </aside>

          <div class="md:col-span-3">
            <h3 class="text-xl font-bold mb-4">Current projects</h3>
            <div class="rounded-xl p-6 bg-white/5 border border-white/10 h-48 mb-8 flex items-center justify-center">Project spotlight (full width)</div>
          </div>
        </div>
      </div>
    </section>
  `;
}
