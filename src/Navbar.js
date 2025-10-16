export function Navbar() {
  return `
    <nav id="sticky-navbar" class="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur border-b border-white/20 shadow-lg transition-all duration-500 opacity-0 pointer-events-none">
      <div class="flex items-center justify-center py-2 px-4">
        <img src="/konbi logo white.png" alt="Konbi Logo" class="w-8 h-auto mr-3" />
        <span class="text-lg md:text-xl font-bold text-white">Operational clarity for SMEs.</span>
      </div>
    </nav>
  `;
}
