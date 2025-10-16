import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="min-h-screen flex items-center justify-center bg-black text-white font-sans p-10">
    <div class="text-center rounded-2xl bg-neutral-900 p-12 shadow-xl max-w-xl">
      <img src="/konbi logo white.png" alt="Konbi Logo" class="w-36 h-auto mx-auto mb-5" />
      <h1 class="text-3xl font-semibold mb-2">Konbi - Diego Works</h1>
      <p class="opacity-90">Under construction. Coming soon.</p>
      <a href="mailto:diego@diegoworks.io"
         class="inline-block mt-6 px-5 py-2 rounded-full bg-white text-black font-semibold">
         Contact
      </a>
      <p class="mt-4 text-xs opacity-60">
        © ${new Date().getFullYear()} Diego González
      </p>
    </div>
  </main>
`
