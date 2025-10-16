export function Footer() {
  return `
    <footer class="w-full py-6 text-center text-sm text-gray-400 border-t border-gray-800 mt-auto bg-black">
      <span>&copy; ${new Date().getFullYear()} Diego Works. All rights reserved.</span>
      <button id="privacy-btn" class="ml-2 text-xs text-gray-500 hover:text-gray-300 underline" style="font-size:0.75em;">Privacy</button>
    </footer>
    <div id="privacy-modal" class="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 hidden">
      <div class="relative bg-white/10 border border-white/20 shadow-xl rounded-2xl p-8 max-w-md w-full text-white flex flex-col items-center" style="backdrop-filter: blur(12px);">
        <button id="close-privacy" class="absolute top-3 right-3 text-white text-xl font-bold bg-white/20 rounded-full px-2 hover:bg-white/30">&times;</button>
        <img src="/konbi logo white.png" alt="Konbi Logo" class="w-16 h-auto mb-4" />
        <h2 class="text-lg font-bold mb-4">Privacy Policy</h2>
        <p class="mb-3">We respect your privacy. Any information you provide through our contact form is used solely to respond to your inquiry and will not be shared with third parties.</p>
        <p>We do not use cookies or tracking technologies on this site. For questions about privacy, please contact us directly.</p>
      </div>
    </div>
  `;
}
