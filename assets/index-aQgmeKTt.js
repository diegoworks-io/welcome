(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function n(){return`
    <section class="relative flex flex-col items-center justify-center min-h-screen bg-black text-white font-sans px-4">
      <a href="https://forms.gle/cPzy7jQYL2xzGf6R7" target="_blank" rel="noopener noreferrer"
         class="fixed top-4 right-4 px-6 py-3 text-base sm:text-lg font-semibold rounded-xl bg-white/10 hover:bg-white/20 text-white shadow-lg backdrop-blur border border-white/20 transition-all duration-200 z-50">
        Let’s talk about your project
      </a>
      <img src="/konbi logo white.png"
           alt="Konbi Logo"
           class="w-20 sm:w-24 md:w-32 lg:w-40 h-auto mb-4 sm:mb-6 md:mb-8 lg:mb-10" />
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-center leading-tight md:leading-snug lg:leading-normal">
        Operational clarity<br class="hidden sm:inline" /> for SMEs
      </h1>
      <p class="text-base sm:text-lg md:text-xl opacity-80 mb-6 sm:mb-8 md:mb-10 text-center max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
        Lightweight tools that replace chaos<br class="sm:hidden" /> with simple,<br class="hidden sm:inline" /> reliable workflows
      </p>
    </section>
  `}function a(){return`
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
  `}document.querySelector("#app").innerHTML=n()+a();window.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("privacy-btn"),r=document.getElementById("privacy-modal"),o=document.getElementById("close-privacy");s&&r&&o&&(s.addEventListener("click",()=>{r.classList.remove("hidden")}),o.addEventListener("click",()=>{r.classList.add("hidden")}),r.addEventListener("click",i=>{i.target===r&&r.classList.add("hidden")}))});
