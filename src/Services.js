export function Services() {
  return `
    <section id="services-section" class="bg-black text-white py-12 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col md:flex-row md:space-x-8">
          <div class="md:w-2/3">
            <h3 class="text-xl font-bold mb-4">Ready demos</h3>
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="rounded-xl p-6 bg-white/5 border border-white/10 h-40 flex items-center justify-center">Demo 1</div>
              <div class="rounded-xl p-6 bg-white/5 border border-white/10 h-40 flex items-center justify-center">Demo 2</div>
              <div class="rounded-xl p-6 bg-white/5 border border-white/10 h-40 flex items-center justify-center">Demo 3</div>
              <div class="rounded-xl p-6 bg-white/5 border border-white/10 h-40 flex items-center justify-center">Demo 4</div>
            </div>

            <h3 class="text-xl font-bold mb-4">Current projects</h3>
            <div class="rounded-xl p-6 bg-white/5 border border-white/10 h-48 mb-8 flex items-center justify-center">Project spotlight</div>
          </div>

          <aside class="md:w-1/3 mt-8 md:mt-0">
            <h3 class="text-xl font-bold mb-4">Blog & socials</h3>
            <div class="rounded-xl p-6 bg-white/5 border border-white/10 h-48 flex flex-col items-center justify-center">
              <div class="mb-3 font-semibold">Latest blog</div>
              <div class="text-sm text-gray-300">Social links / cards</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
}
