(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}})();const m=`<svg width="785" height="361" viewBox="0 0 785 361" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.0744 15.716C0.719317 36.9419 -5.1411 61.7166 4.49201 90.0403C17.3633 118.913 39.6204 132.651 71.2618 131.256C89.694 128.391 105.651 120.393 119.134 107.262C138.307 94.5494 159.345 88.6148 182.244 89.4596C211.381 92.5456 240.717 93.8106 270.251 93.2542C292.985 94.1943 315.565 96.2873 337.991 99.534C359.866 105.396 372.274 119.561 375.212 142.031C376.873 166.591 368.243 186.691 349.323 202.33C346.178 204.396 342.875 206.177 339.414 207.671C329.114 209.511 319.231 212.668 309.766 217.141C284.239 233.547 273.202 256.712 276.655 286.636C282.739 314.855 299.657 332.897 327.408 340.764C353.685 345.119 376.017 337.562 394.406 318.093C413.117 293.232 414.706 267.404 399.174 240.611C394.048 227.348 394.389 214.247 400.198 201.307C413.533 176.385 426.417 151.239 438.85 125.872C446.348 108.945 448.75 91.318 446.054 72.9919C439.993 55.4196 427.916 44.1706 409.821 39.2442C402.46 37.6966 394.995 36.8785 387.427 36.7891C378.301 37.7709 369.173 38.7526 360.046 39.7343C323.385 46.3892 286.667 52.6797 249.888 58.6063C229.933 60.7349 209.867 61.7662 189.691 61.7007C173.527 60.6146 158.081 56.6054 143.35 49.6731C136.54 45.5002 130.218 40.6911 124.383 35.2462C111.535 15.2793 93.4464 3.59278 70.1172 0.188288C51.9655 -1.08403 35.951 4.09169 22.0744 15.716Z" fill="black"/>
<path d="M144.864 310.36V264.784L210.303 196.419H259.792L144.864 310.36ZM115.311 356.857V196.419H152.135V356.857H115.311ZM216.636 356.857L167.381 279.745L194.823 254.656L260.261 356.857H216.636Z" fill="black"/>
<path d="M337.842 361C322.049 361 308.132 357.471 296.092 350.412C284.052 343.353 274.67 333.532 267.947 320.948C261.223 308.211 257.861 293.48 257.861 276.753C257.861 259.873 261.223 245.141 267.947 232.558C274.67 219.821 284.052 209.923 296.092 202.864C308.132 195.805 322.049 192.276 337.842 192.276C353.791 192.276 367.785 195.805 379.825 202.864C391.866 209.77 401.247 219.591 407.971 232.328C414.695 244.911 418.057 259.72 418.057 276.753C418.057 293.633 414.617 308.442 407.737 321.178C401.013 333.762 391.631 343.583 379.591 350.642C367.551 357.547 353.634 361 337.842 361ZM337.842 326.473C346.754 326.473 354.416 324.478 360.827 320.488C367.238 316.345 372.164 310.59 375.604 303.224C379.2 295.705 380.998 286.881 380.998 276.753C380.998 266.472 379.2 257.648 375.604 250.282C372.164 242.763 367.238 237.008 360.827 233.018C354.416 228.875 346.754 226.803 337.842 226.803C329.085 226.803 321.423 228.798 314.856 232.788C308.445 236.778 303.441 242.533 299.845 250.052C296.405 257.418 294.685 266.318 294.685 276.753C294.685 287.035 296.405 295.935 299.845 303.454C303.441 310.82 308.445 316.498 314.856 320.488C321.423 324.478 329.085 326.473 337.842 326.473Z" fill="black"/>
<path d="M439.417 356.857V196.419H476.944L548.247 309.439H538.63V196.419H575.454V356.857H537.692L466.859 243.607H476.241V356.857H439.417Z" fill="black"/>
<path d="M603.188 356.857V196.419H664.17C680.901 196.419 694.035 200.025 703.574 207.238C713.112 214.45 717.881 224.425 717.881 237.162C717.881 244.221 716.474 250.512 713.659 256.037C710.845 261.561 706.936 266.088 701.932 269.617C710.532 273.3 716.786 278.441 720.696 285.04C724.761 291.485 726.794 299.388 726.794 308.749C726.794 323.634 721.947 335.373 712.252 343.966C702.714 352.56 689.579 356.857 672.848 356.857H603.188ZM640.011 323.71H669.799C683.246 323.71 689.97 318.186 689.97 307.137C689.97 301.766 688.172 297.623 684.575 294.707C681.135 291.792 676.21 290.334 669.799 290.334H640.011V323.71ZM640.011 258.108H664.17C669.486 258.108 673.63 256.804 676.601 254.195C679.572 251.433 681.057 247.673 681.057 242.916C681.057 238.619 679.572 235.32 676.601 233.018C673.786 230.717 669.643 229.566 664.17 229.566H640.011V258.108Z" fill="black"/>
<path d="M748.176 356.857V196.419H785V356.857H748.176Z" fill="black"/>
</svg>
`,h=[{period:"2013 – 2018",title:"Foundations in design and economics",subtitle:"Industrial Design + Economics",details:["Studied Industrial Design and Economics, learning how strategy and structure turn ideas into working organizations."]},{period:"2019 – 2025",title:"Rebuilding Mexipon from the inside",subtitle:"Mexipon Ramen & Curry · Binational hospitality concept",details:["Joined Mexipon Ramen & Curry, a binational hospitality concept with roots in Japan and Mexico.","Inherited a vision meant to scale internationally, but discovered that great ideas collapse without strong systems underneath.","Spent years rebuilding the company’s internal structure from the ground up: daily workflows, brand governance, project execution, and long-term planning.","That experience became my biggest lesson: sustainable growth depends less on ambition and more on operational clarity."]},{period:"2023 – Present",title:"Business degree and system design",subtitle:"CETYS Universidad · Finance & Analytics track",details:["Completing a B.A. in Business Administration focused on Finance and Analytics at CETYS Universidad.","Applying years of operational experience to design automation frameworks, SaaS prototypes, and system rituals that make small teams work with clarity and precision."]}],u=[{name:"Konbi",summary:"Operational sandbox",description:"Built within a fast-paced small business operating nearly around the clock. It serves as a live environment to test how structure, automation, and human rhythm can work together. Currently developing the Konbi Planner, a central system where daily operations leave their digital trace, enabling teams to plan, track, and analyze their work with clarity and intent."},{name:"Boki",summary:"Field intelligence",description:"A lightweight digital counter for analog environments. Captures field data simply and reliably, bridging physical operations with digital reporting. Preparing its first public release and pricing model."},{name:"Diego Works",summary:"Base of operations",description:"The domain that hosts my experiments, prototypes, and documentation. Growing into a space that shares the systems and lessons behind every engagement."}],g=[{title:"Frontend",items:["React 19","TypeScript","Vite 7 (SWC)","Tailwind CSS 4","Headless UI","React Router 7","Framer Motion","GSAP","TanStack Virtual"]},{title:"Backend / Data",items:["Supabase (PostgreSQL, Auth, Realtime, REST)","Supabase JS Client"]},{title:"QA / Tooling",items:["ESLint (flat config)","Prettier","Vitest","Testing Library","Node.js v18/v20","pnpm"]},{title:"Infra / Ops",items:["Vercel (deploy)","Supabase Utilities","Gemini CLI (Markdown synthesis pipeline)"]}],f=h.map((e,t)=>`
      <article class="glass-panel p-6 flex flex-col gap-4" data-animate="fade" style="transition-delay:${t*70}ms">
        <div>
          <p class="text-xs uppercase tracking-[0.5em] text-white/50">${e.period}</p>
          <h3 class="text-2xl font-display font-semibold">${e.title}</h3>
          ${e.subtitle?`<p class="text-sm text-white/60 mt-1">${e.subtitle}</p>`:""}
        </div>
        <ul class="space-y-2">
          ${e.details.map(o=>`
                <li class="flex gap-3 text-white/70 leading-relaxed">
                  <span class="text-white/30">—</span>
                  <span>${o}</span>
                </li>
              `).join("")}
        </ul>
      </article>
    `).join(""),y=u.map((e,t)=>`
      <article class="glass-panel p-6 flex flex-col gap-4" data-animate="fade" style="transition-delay:${t*80}ms">
        <div>
          <p class="text-xs uppercase tracking-[0.4em] text-white/50">${e.summary}</p>
          <h3 class="text-2xl font-display font-semibold">${e.name}</h3>
        </div>
        <p class="text-white/70 leading-relaxed">${e.description}</p>
      </article>
    `).join(""),x=g.map((e,t)=>`
      <article class="glass-panel p-5 flex flex-col gap-3" data-animate="fade" style="transition-delay:${t*60}ms">
        <p class="text-xs uppercase tracking-[0.35em] text-white/50">${e.title}</p>
        <p class="text-white/70 leading-relaxed">${e.items.join(" · ")}</p>
      </article>
    `).join(""),v=document.querySelector("#app");function w(){document.body.classList.add("is-loading");const e=document.createElement("div");e.id="app-loader",e.innerHTML=`
    <span class="sr-only">Preparing experience</span>
    <div class="loader-mark" role="status" aria-live="polite"></div>
  `,document.body.appendChild(e);const t=e.querySelector(".loader-mark");t&&(t.innerHTML=m),setTimeout(()=>{e.classList.add("is-complete"),document.body.classList.remove("is-loading"),setTimeout(()=>e.remove(),700)},3e3)}w();v.innerHTML=`
  <div class="min-h-screen py-12">
    <div class="mx-auto flex w-full max-w-3xl flex-col gap-20 px-4 sm:px-6">
      <header class="relative space-y-10">
        <section class="space-y-8" data-animate="fade">
          <div class="flex flex-col gap-4">
            <p class="text-xs uppercase tracking-[0.4em] text-white/50">Who I am</p>
            <h1 class="text-4xl sm:text-5xl font-display font-semibold leading-tight">
              Diego González
            </h1>
            <p class="text-xl text-white/80">
              I design and implement operational systems that work in the real world.
            </p>
            <p class="text-lg text-white/70 max-w-xl">
              Focused on clarity, accountability, and execution for growing teams.
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <a class="inline-flex items-center px-6 py-3 rounded-full border border-white/30 font-semibold text-sm hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
               href="mailto:hello@diegoworks.io">
              hello@diegoworks.io
            </a>
          </div>
        </section>
      </header>

      <section class="space-y-8">
        <div class="flex flex-col gap-3" data-animate="fade">
          <p class="text-xs uppercase tracking-[0.4em] text-white/50">My path</p>
          <h2 class="text-3xl font-display font-semibold">The journey so far</h2>
          <p class="text-white/70 max-w-2xl">A through-line of design, operations, and systems thinking shaped by real work inside growing companies.</p>
        </div>
        <div class="space-y-4">
          ${f}
        </div>
      </section>

      <section class="space-y-8">
        <div class="flex flex-col gap-3" data-animate="fade">
          <p class="text-xs uppercase tracking-[0.4em] text-white/50">What I&apos;m Building</p>
          <h2 class="text-3xl font-display font-semibold">Current projects</h2>
          <p class="text-white/70 max-w-2xl">A personal lab for exploring what small, real-world businesses could become if they were built on clarity instead of chaos.</p>
        </div>
        <div class="space-y-4">
          ${y}
        </div>
      </section>

      <section>
        <div class="glass-panel contact-panel" data-animate="fade">
          <div class="contact-copy">
            <p class="contact-eyebrow">Get in touch</p>
            <h2 class="contact-title">Always open to thoughtful projects and collaborations</h2>
          </div>
          <div class="contact-details">
            <p class="contact-details-label">Direct channels</p>
            <dl class="contact-list">
              <div class="contact-list-item">
                <dt>Email</dt>
                <dd><a href="mailto:hello@diegoworks.io">hello@diegoworks.io</a></dd>
              </div>
              <div class="contact-list-item">
                <dt>LinkedIn</dt>
                <dd><a href="https://www.linkedin.com/in/diegoworksio" target="_blank" rel="noopener">/in/diegoworksio</a></dd>
              </div>
              <div class="contact-list-item">
                <dt>GitHub</dt>
                <dd><a href="https://github.com/diegoworks-io" target="_blank" rel="noopener">github.com/diegoworks-io</a></dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <div class="flex flex-col gap-2" data-animate="fade">
          <p class="text-xs uppercase tracking-[0.4em] text-white/50">Under the hood</p>
          <h2 class="text-3xl font-display font-semibold">Tools and frameworks</h2>
        </div>
        <div class="grid gap-4">
          ${x}
        </div>
      </section>

      <footer>
        <div class="glass-panel p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-white/70">
          <div class="flex items-center gap-3">
            <img src="/konbi logo.png" alt="Konbi mark" class="w-8 h-8 object-contain" />
            <p>&copy; <span id="konbi-year"></span> Konbi · Diego Works.</p>
          </div>
          <div class="flex flex-wrap gap-4">
            <button type="button" id="privacy-open" class="hover:text-white underline decoration-dotted underline-offset-4">Privacy</button>
            <a class="hover:text-white" href="https://forms.gle/cPzy7jQYL2xzGf6R7" target="_blank" rel="noopener">Contact</a>
            <a class="hover:text-white" href="https://www.linkedin.com/in/diegoworksio" target="_blank" rel="noopener">Updates</a>
          </div>
        </div>
      </footer>

      <div id="privacy-modal" class="privacy-modal is-hidden" role="dialog" aria-modal="true" aria-labelledby="privacy-heading" aria-hidden="true">
        <div class="privacy-dialog relative">
          <button type="button" id="privacy-close" class="absolute top-4 right-4 text-white/70 hover:text-white text-2xl leading-none" aria-label="Close privacy dialog">&times;</button>
          <p class="text-xs uppercase tracking-[0.4em] text-white/50 mb-2">Privacy</p>
          <h3 id="privacy-heading" class="text-white mb-4">Konbi · Diego Works</h3>
          <p>We only receive the information you choose to send through email or our contact form. It is used solely to respond to your inquiry.</p>
          <p>There are no trackers, cookies, or analytics scripts on this site. Hosting is handled via GitHub Pages, and Google Forms temporarily stores submissions you send through the intake form.</p>
          <p>Questions? Email <a class="underline text-white" href="mailto:hello@diegoworks.io">hello@diegoworks.io</a> and we’ll respond within two business days.</p>
        </div>
      </div>
    </div>
  </div>
`;const d=document.getElementById("konbi-year");d&&(d.textContent=String(new Date().getFullYear()));const b=document.querySelectorAll("[data-animate]"),c=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("is-visible"),c.unobserve(t.target))})},{threshold:.2});b.forEach(e=>c.observe(e));const s=document.getElementById("privacy-modal"),C=document.getElementById("privacy-open"),p=document.getElementById("privacy-close");function k(){s&&(s.classList.remove("is-hidden"),s.setAttribute("aria-hidden","false"),p?.focus())}function l(){s&&(s.classList.add("is-hidden"),s.setAttribute("aria-hidden","true"))}C?.addEventListener("click",k);p?.addEventListener("click",l);s?.addEventListener("click",e=>{e.target===s&&l()});document.addEventListener("keydown",e=>{e.key==="Escape"&&l()});
