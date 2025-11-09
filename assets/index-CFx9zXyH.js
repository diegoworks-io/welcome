(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const M=`<svg width="785" height="361" viewBox="0 0 785 361" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.0744 15.716C0.719317 36.9419 -5.1411 61.7166 4.49201 90.0403C17.3633 118.913 39.6204 132.651 71.2618 131.256C89.694 128.391 105.651 120.393 119.134 107.262C138.307 94.5494 159.345 88.6148 182.244 89.4596C211.381 92.5456 240.717 93.8106 270.251 93.2542C292.985 94.1943 315.565 96.2873 337.991 99.534C359.866 105.396 372.274 119.561 375.212 142.031C376.873 166.591 368.243 186.691 349.323 202.33C346.178 204.396 342.875 206.177 339.414 207.671C329.114 209.511 319.231 212.668 309.766 217.141C284.239 233.547 273.202 256.712 276.655 286.636C282.739 314.855 299.657 332.897 327.408 340.764C353.685 345.119 376.017 337.562 394.406 318.093C413.117 293.232 414.706 267.404 399.174 240.611C394.048 227.348 394.389 214.247 400.198 201.307C413.533 176.385 426.417 151.239 438.85 125.872C446.348 108.945 448.75 91.318 446.054 72.9919C439.993 55.4196 427.916 44.1706 409.821 39.2442C402.46 37.6966 394.995 36.8785 387.427 36.7891C378.301 37.7709 369.173 38.7526 360.046 39.7343C323.385 46.3892 286.667 52.6797 249.888 58.6063C229.933 60.7349 209.867 61.7662 189.691 61.7007C173.527 60.6146 158.081 56.6054 143.35 49.6731C136.54 45.5002 130.218 40.6911 124.383 35.2462C111.535 15.2793 93.4464 3.59278 70.1172 0.188288C51.9655 -1.08403 35.951 4.09169 22.0744 15.716Z" fill="black"/>
<path d="M144.864 310.36V264.784L210.303 196.419H259.792L144.864 310.36ZM115.311 356.857V196.419H152.135V356.857H115.311ZM216.636 356.857L167.381 279.745L194.823 254.656L260.261 356.857H216.636Z" fill="black"/>
<path d="M337.842 361C322.049 361 308.132 357.471 296.092 350.412C284.052 343.353 274.67 333.532 267.947 320.948C261.223 308.211 257.861 293.48 257.861 276.753C257.861 259.873 261.223 245.141 267.947 232.558C274.67 219.821 284.052 209.923 296.092 202.864C308.132 195.805 322.049 192.276 337.842 192.276C353.791 192.276 367.785 195.805 379.825 202.864C391.866 209.77 401.247 219.591 407.971 232.328C414.695 244.911 418.057 259.72 418.057 276.753C418.057 293.633 414.617 308.442 407.737 321.178C401.013 333.762 391.631 343.583 379.591 350.642C367.551 357.547 353.634 361 337.842 361ZM337.842 326.473C346.754 326.473 354.416 324.478 360.827 320.488C367.238 316.345 372.164 310.59 375.604 303.224C379.2 295.705 380.998 286.881 380.998 276.753C380.998 266.472 379.2 257.648 375.604 250.282C372.164 242.763 367.238 237.008 360.827 233.018C354.416 228.875 346.754 226.803 337.842 226.803C329.085 226.803 321.423 228.798 314.856 232.788C308.445 236.778 303.441 242.533 299.845 250.052C296.405 257.418 294.685 266.318 294.685 276.753C294.685 287.035 296.405 295.935 299.845 303.454C303.441 310.82 308.445 316.498 314.856 320.488C321.423 324.478 329.085 326.473 337.842 326.473Z" fill="black"/>
<path d="M439.417 356.857V196.419H476.944L548.247 309.439H538.63V196.419H575.454V356.857H537.692L466.859 243.607H476.241V356.857H439.417Z" fill="black"/>
<path d="M603.188 356.857V196.419H664.17C680.901 196.419 694.035 200.025 703.574 207.238C713.112 214.45 717.881 224.425 717.881 237.162C717.881 244.221 716.474 250.512 713.659 256.037C710.845 261.561 706.936 266.088 701.932 269.617C710.532 273.3 716.786 278.441 720.696 285.04C724.761 291.485 726.794 299.388 726.794 308.749C726.794 323.634 721.947 335.373 712.252 343.966C702.714 352.56 689.579 356.857 672.848 356.857H603.188ZM640.011 323.71H669.799C683.246 323.71 689.97 318.186 689.97 307.137C689.97 301.766 688.172 297.623 684.575 294.707C681.135 291.792 676.21 290.334 669.799 290.334H640.011V323.71ZM640.011 258.108H664.17C669.486 258.108 673.63 256.804 676.601 254.195C679.572 251.433 681.057 247.673 681.057 242.916C681.057 238.619 679.572 235.32 676.601 233.018C673.786 230.717 669.643 229.566 664.17 229.566H640.011V258.108Z" fill="black"/>
<path d="M748.176 356.857V196.419H785V356.857H748.176Z" fill="black"/>
</svg>
`,E=[{period:"2013 – 2018",title:"Foundations in design and economics",subtitle:"Industrial Design + Economics",details:["Studied Industrial Design and Economics, learning how strategy and structure turn ideas into working organizations."]},{period:"2019 – 2025",title:"Rebuilding Mexipon from the inside",subtitle:"Mexipon Ramen & Curry · Binational hospitality concept",details:["Joined Mexipon Ramen & Curry, a binational hospitality concept with roots in Japan and Mexico.","Inherited a vision meant to scale internationally, but discovered that great ideas collapse without strong systems underneath.","Spent years rebuilding the company’s internal structure from the ground up: daily workflows, brand governance, project execution, and long-term planning.","That experience became my biggest lesson: sustainable growth depends less on ambition and more on operational clarity."]},{period:"2023 – Present",title:"Business degree and system design",subtitle:"CETYS Universidad · Finance & Analytics track",details:["Completing a B.A. in Business Administration focused on Finance and Analytics at CETYS Universidad.","Applying years of operational experience to design automation frameworks, SaaS prototypes, and system rituals that make small teams work with clarity and precision."]}],x=[{slug:"konbi",name:"Konbi",summary:"Operational sandbox",description:"Built within a fast-paced small business operating nearly around the clock. It serves as a live environment to test how structure, automation, and human rhythm can work together. Currently developing the Konbi Planner, a central system where daily operations leave their digital trace, enabling teams to plan, track, and analyze their work with clarity and intent.",directAction:{label:"Start a Konbi project",href:"https://forms.gle/cPzy7jQYL2xzGf6R7"},support:{label:"Back independent development",href:"https://donate.stripe.com/fZucN5dcUfkh6yl45zfEk01"},modal:{eyebrow:"Live R&D for operations",description:"Somewhere between a ramen shop and a research lab, Konbi is learning how small teams can work with rhythm instead of stress. It’s a living experiment in practical order: built for the space between a DIY spreadsheet and an ERP. A toolkit that shapes everyday work into patterns that can be seen, improved, and shared.",bullets:[],ctaLabel:"Enter the Konbi build log"},detail:{eyebrow:"",heroTitle:"Konbi",heroDescription:"",comingSoon:{title:"Build log in progress",body:"I’m actively documenting the Konbi system stack. Full case studies and screenshots are on the way. Tap the form to get the outline or invite me in if you need the work today."},meta:[],sections:[{title:"What I am proving",body:"Independent restaurants can behave like product teams when their rituals are codified, measured, and shared. Konbi is the lab that lets me prove it in the wild.",bullets:["Shift briefs tie every station to a weekly objective.","Command boards expose blockers in under five minutes.","Experiments are logged, graded, and rolled into playbooks."]},{title:"Build log",body:"The Konbi Planner stitches together prep logs, cash snapshots, vendor cadences, and accountability reviews. Every deliverable is battle-tested with a real crew before it ships anywhere else.",bullets:["Planner UI prototype running via Notion + Supabase.","Automation scripts send recap emails after each close.","Weekly operations review pulls metrics straight from the planner."]},{title:"How to engage",body:"I work with founders and GMs who want the same clarity. Bring me in for a systems audit, a standing advisory seat, or to co-build your first internal ops product.",bullets:["Limited advisory seats per quarter.","On-site intensives available in Baja & Southern California.","Confidential work is documented with anonymized patterns."]}],roadmap:{eyebrow:"Next milestones",items:[{label:"Q2 · Planner instrumentation",body:"Shift rituals become structured, queryable data."},{label:"Q3 · Automation pilots",body:"Connect prep, staffing, and procurement dashboards."},{label:"Q4 · Public release",body:"Publish the Konbi Planner framework + implementation kit."}]},cta:{title:"Partner with Konbi",body:"Need to turn a craft-driven operation into a predictable system? Let’s architect it together.",primaryLabel:"Start a Konbi project",primaryHref:"https://forms.gle/cPzy7jQYL2xzGf6R7",secondaryLabel:"Request the Konbi Planner outline",secondaryHref:"https://forms.gle/cPzy7jQYL2xzGf6R7",supportLabel:"Back independent development",supportHref:"https://donate.stripe.com/fZucN5dcUfkh6yl45zfEk01"}}},{slug:"boki",name:"Boki",summary:"Field intelligence",description:"A lightweight digital counter for analog environments. Captures field data simply and reliably, bridging physical operations with digital reporting. Preparing its first public release and pricing model.",directAction:{label:"Sign up for the Boki pilot",href:"https://forms.gle/cPzy7jQYL2xzGf6R7"},support:{label:"Fund this build",href:"https://donate.stripe.com/fZucN5dcUfkh6yl45zfEk01"},modal:{eyebrow:"Field intelligence",description:"Boki is a digital counter for small teams. It records every count in a clean, structured database that you can export, visualize, or print. Use it on mobile or desktop to track what matters. Boki turns everyday counting into reliable data you can use to make decisions.",bullets:[],ctaLabel:"See the Boki roadmap"},detail:{eyebrow:"",heroTitle:"Boki",heroDescription:"",comingSoon:{title:"Pilot notes coming soon",body:"Join the pilot list to see the product and telemetry stack before it ships."},meta:[],sections:[{title:"Why build Boki",body:"Most counting apps feel like spreadsheets. Boki is tactile—big targets, haptic feedback, and offline resilience. It lets teams trust their numbers without learning a new system.",bullets:["Designed for wet hands, gloves, and quick thumb input.","Offline-first sync so rural kitchens are never blocked.","Event log links every count to a person, time, and location."]},{title:"What is live today",body:"The prototype is shipping with a React Native shell, Supabase sync, and a calibration suite that keeps hardware honest. I am layering pricing experiments and a shared dashboard next.",bullets:["Hardware telemetry feeding into Supabase Realtime.","Role-based access so franchisees see only their operations.","First ten beta partners onboarded for usability reviews."]},{title:"How to support it",body:"You can join the waitlist, pre-purchase units for your team, or fund a feature that serves your workflow. I publish progress weekly so supporters can see exactly where the work is headed.",bullets:["Funding tiers unlock custom sensor integrations.","Advisory sessions available for field rollout planning.","Every supporter receives lifetime access to the build log."]}],roadmap:{eyebrow:"Open roadmap",items:[{label:"Pilot · Mobile counter",body:"Polish the single-thumb experience + offline queue."},{label:"Beta · Shared dashboards",body:"Give managers live feeds of counts + anomalies."},{label:"Launch · Pricing + hardware kits",body:"Bundle SaaS with purpose-built enclosures."}]},cta:{title:"Back the Boki build",body:"Help bring a resilient field computer to analog teams that deserve better tools.",primaryLabel:"Sign up for the Boki pilot",primaryHref:"https://forms.gle/cPzy7jQYL2xzGf6R7",secondaryLabel:"Sponsor a feature",secondaryHref:"mailto:hello@diegoworks.io?subject=Sponsoring%20Boki",supportLabel:"Fund this build",supportHref:"https://donate.stripe.com/fZucN5dcUfkh6yl45zfEk01"}}},{slug:"diegoworks",name:"Diego Works",summary:"Base of operations",description:"The domain that hosts my experiments, prototypes, and documentation. Growing into a space that shares the systems and lessons behind every engagement.",directAction:{label:"Start a project with Diego",href:"https://forms.gle/cPzy7jQYL2xzGf6R7"},support:{label:"Support ongoing work",href:"https://donate.stripe.com/fZucN5dcUfkh6yl45zfEk01"},modal:{eyebrow:"Open lab",description:"Hey there. Thanks for stopping by. This is where I keep track of what I’m learning and experimenting with: ideas, tools, half-finished thoughts, all of it. Welcome, and I hope you find something useful here.",bullets:[],ctaLabel:"Enter the Diego Works lab"},detail:{eyebrow:"",heroTitle:"Diego Works",heroDescription:"",comingSoon:{title:"New essays in flight",body:"I’m rebuilding this space to host the lab notes, systems templates, and essays in a cleaner way. Subscribe via the form if you’d like the drafts as they come together."},meta:[],sections:[{title:"What lives here",body:"Deep dives on operational clarity, automation frameworks, and the human rituals behind software. I mix essays with practical templates so the ideas are immediately useful.",bullets:["Systems essays that unpack a single operational question.","Process templates for standups, retros, and vendor reviews.","Readable case studies pulled straight from client work."]},{title:"Building in public",body:"Subscribers see prototypes early: new automation scripts, planner modules, and the Boki telemetry stack. Feedback loops stay tight because everything is shared as it’s being made.",bullets:["Weekly “inside the lab” updates.","Office hours for founders experimenting with ops tools.","Changelogs for the Konbi Planner and Boki."]},{title:"How to follow along",body:"Join the list, read the essays, or invite me to document your own build. The lab is meant to be participatory—send questions and they might become the next piece.",bullets:["Newsletter + RSS shipping soon.","Members-only vault with workshop recordings.","Open-sourced dashboards you can fork."]}],roadmap:{eyebrow:"Publishing queue",items:[{label:"Field Notes Vol. 01",body:"Tactile rituals for calm hospitality operations."},{label:"Automation Library",body:"Composable scripts for Notion + Supabase workflows."},{label:"Essay Series",body:"Public build log for Boki and the Konbi Planner."}]},cta:{title:"Follow the work",body:"Take the systems thinking with you. I share drafts, templates, and invitations before they go anywhere else.",primaryLabel:"Get Diego Works updates",primaryHref:"https://www.linkedin.com/in/diegoworksio",secondaryLabel:"Email the lab",secondaryHref:"mailto:hello@diegoworks.io?subject=Diego%20Works",supportLabel:"Keep these projects alive",supportHref:"https://donate.stripe.com/fZucN5dcUfkh6yl45zfEk01"}}}],P=[{title:"Frontend",items:["React 19","TypeScript","Vite 7 (SWC)","Tailwind CSS 4","Headless UI","React Router 7","Framer Motion","GSAP","TanStack Virtual"]},{title:"Backend / Data",items:["Supabase (PostgreSQL, Auth, Realtime, REST)","Supabase JS Client"]},{title:"QA / Tooling",items:["ESLint (flat config)","Prettier","Vitest","Testing Library","Node.js v18/v20","pnpm"]},{title:"Infra / Ops",items:["Vercel (deploy)","Supabase Utilities","Gemini CLI (Markdown synthesis pipeline)"]}],B=E.map((e,a)=>`
      <article class="glass-panel p-6 flex flex-col gap-4 timeline-card" data-animate="fade" style="transition-delay:${a*70}ms">
        <div>
          <h3 class="text-2xl font-display font-semibold">${e.title}</h3>
          <p class="text-sm text-white/80 font-semibold mt-1 flex flex-wrap items-center gap-2">
            <span>${e.period}</span>
            ${e.subtitle?`<span class="text-white/30">•</span><span class="font-normal text-white/60">${e.subtitle}</span>`:""}
          </p>
        </div>
        <ul class="space-y-2">
          ${e.details.map(t=>`<li class="timeline-list__item">${t}</li>`).join("")}
        </ul>
      </article>
    `).join(""),T=x.map((e,a)=>`
      <article class="glass-panel project-card" data-animate="fade" style="transition-delay:${a*80}ms">
        <div class="project-card__intro">
          <p class="project-card__eyebrow">${e.summary}</p>
          <h3 class="project-card__title">${e.name}</h3>
        </div>
        <p class="project-card__description">${e.description}</p>
        <div class="project-card__actions">
          <button type="button" class="project-card__action project-pill" data-project-trigger="${e.slug}">
            Learn more
          </button>
          ${e.directAction?`<a class="project-card__direct project-pill" href="${e.directAction.href}" target="_blank" rel="noopener">
                  ${e.directAction.label}
                </a>`:e.detail?.cta?.primaryHref?`<a class="project-card__direct project-pill" href="${e.detail.cta.primaryHref}" target="_blank" rel="noopener">
                    ${e.detail.cta.primaryLabel}
                  </a>`:""}
          ${e.support?.href?`<a class="project-card__support project-pill" href="${e.support.href}" target="_blank" rel="noopener">
                  ${e.support.label}
                </a>`:""}
        </div>
      </article>
    `).join(""),A=P.map((e,a)=>`
      <article class="glass-panel p-5 flex flex-col gap-3" data-animate="fade" style="transition-delay:${a*60}ms">
        <p class="text-xs uppercase tracking-[0.35em] text-white/50">${e.title}</p>
        <p class="text-white/85 leading-relaxed">${e.items.join(" · ")}</p>
      </article>
    `).join(""),j=x.reduce((e,a)=>(e[a.slug]=a,e),{}),C=document.querySelector("#app"),_=document.body;let l=null,b=null,f=null,d=null;function I(){document.body.classList.add("is-loading");const e=document.createElement("div");e.id="app-loader",e.innerHTML=`
    <span class="sr-only">Preparing experience</span>
    <div class="loader-pattern"></div>
    <div class="loader-content">
      <div class="loader-video-shell" role="presentation">
        <video class="loader-video" autoplay muted loop playsinline>
          <source src="/Konbiintro.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="loader-wordmark"></div>
    </div>
  `,document.body.appendChild(e);const a=e.querySelector(".loader-wordmark");a&&(a.innerHTML=M);const t=()=>{e.classList.add("is-complete"),document.body.classList.remove("is-loading"),setTimeout(()=>e.remove(),o)},i=3600,o=700;setTimeout(t,i)}I();const s=W();function z(){C.innerHTML=`
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
            ${B}
          </div>
        </section>

        <section class="space-y-8">
          <div class="flex flex-col gap-3" data-animate="fade">
            <p class="text-xs uppercase tracking-[0.4em] text-white/50">What I&apos;m Building</p>
            <h2 class="text-3xl font-display font-semibold">Current projects</h2>
            <p class="text-white/70 max-w-2xl">A personal lab for exploring what small, real-world businesses could become if they were built on clarity instead of chaos.</p>
          </div>
          <div class="space-y-4">
            ${T}
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
            ${A}
          </div>
        </section>

        <footer>
          <div class="glass-panel p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-white/70">
            <div class="flex items-center gap-3">
            <img src="/konbi logo white.png" alt="Konbi mark" class="w-8 h-8 object-contain" />
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
  `,R()}function D(e){const a=j[e];if(!a){g("");return}const t=a.detail,i=!!t.comingSoon,o=t.meta&&t.meta.length?t.meta.map(n=>`
        <div class="project-meta">
          <p class="project-meta__label">${n.label}</p>
          <p class="project-meta__value">${n.value}</p>
        </div>
      `).join(""):"",r=i?`
        <section class="glass-panel project-coming-soon p-6 space-y-3" data-animate="fade">
          <p class="project-coming-soon__label">${t.comingSoon.title||"Under construction"}</p>
          <p class="project-coming-soon__body">${t.comingSoon.body}</p>
        </section>
      `:t.sections.map(n=>`
            <article class="glass-panel p-6 flex flex-col gap-4" data-animate="fade">
              <div class="space-y-1">
                ${n.eyebrow?`<p class="project-section__eyebrow">${n.eyebrow}</p>`:""}
                <h3 class="text-2xl font-display font-semibold">${n.title}</h3>
              </div>
              <p class="text-white/70 leading-relaxed">${n.body}</p>
              ${n.bullets?`<ul class="project-section__list">${n.bullets.map(H=>`<li class="project-section__item">${H}</li>`).join("")}</ul>`:""}
            </article>
          `).join(""),c=!i&&t.roadmap?`
      <section class="glass-panel p-6 space-y-4" data-animate="fade">
        <p class="project-section__eyebrow">${t.roadmap.eyebrow}</p>
        <ul class="project-roadmap__list">
          ${t.roadmap.items.map(n=>`
                <li>
                  <p class="project-roadmap__label">${n.label}</p>
                  <p class="project-roadmap__body">${n.body}</p>
                </li>
              `).join("")}
        </ul>
      </section>
    `:"",$=t.cta?`
      <section class="glass-panel project-cta p-6 space-y-4" data-animate="fade">
        <div class="space-y-2">
          <p class="project-section__eyebrow">Next step</p>
          <h2 class="text-3xl font-display font-semibold">${t.cta.title}</h2>
          <p class="text-white/70">${t.cta.body}</p>
        </div>
        <div class="project-cta__group">
          <a class="project-cta__primary" href="${t.cta.primaryHref}" target="_blank" rel="noopener">
            ${t.cta.primaryLabel}
          </a>
          ${t.cta.secondaryHref?`<a class="project-cta__secondary" href="${t.cta.secondaryHref}" target="_blank" rel="noopener">
                  ${t.cta.secondaryLabel}
                </a>`:""}
          ${t.cta.supportHref?`<a class="project-cta__support" href="${t.cta.supportHref}" target="_blank" rel="noopener">
                  ${t.cta.supportLabel||"Support ongoing work"}
                </a>`:""}
        </div>
      </section>
    `:"";C.innerHTML=`
    <div class="project-page py-12">
      <div class="project-page__shell mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 sm:px-6">
        <div class="project-page__nav">
          <button type="button" class="project-back" data-nav-home>&larr; Back to overview</button>
          <span class="project-nav__current">${a.summary}</span>
        </div>

        <section class="glass-panel p-6 flex flex-col gap-4" data-animate="fade">
          <p class="project-section__eyebrow">${t.eyebrow}</p>
          <h1 class="text-4xl font-display font-semibold leading-tight">${t.heroTitle||a.name}</h1>
          ${t.heroDescription?`<p class="text-white/70 leading-relaxed">${t.heroDescription}</p>`:""}
          ${o?`<div class="project-meta__grid">${o}</div>`:""}
        </section>

        <section class="project-sections space-y-6">
          ${r}
        </section>

        ${c}
        ${$}
      </div>
    </div>
  `,window.scrollTo({top:0}),L(),document.querySelector("[data-nav-home]")?.addEventListener("click",()=>g(""))}function R(){q(),L(),F(),K()}function q(){const e=document.getElementById("konbi-year");e&&(e.textContent=String(new Date().getFullYear()))}function L(){const e=document.querySelectorAll("[data-animate]"),a=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting&&(i.target.classList.add("is-visible"),a.unobserve(i.target))})},{threshold:.2});e.forEach(t=>a.observe(t))}function F(){l=document.getElementById("privacy-modal");const e=document.getElementById("privacy-open");b=document.getElementById("privacy-close"),l&&(e?.addEventListener("click",N),b?.addEventListener("click",y),l.addEventListener("click",a=>{a.target===l&&y()}))}function N(){l&&(l.classList.remove("is-hidden"),l.setAttribute("aria-hidden","false"),b?.focus())}function y(){l&&(l.classList.add("is-hidden"),l.setAttribute("aria-hidden","true"))}function K(){document.querySelectorAll("[data-project-trigger]").forEach(a=>{a.addEventListener("click",()=>{const t=a.getAttribute("data-project-trigger");t&&U(t)})})}function W(){const e=document.createElement("div");return e.id="project-modal",e.className="project-modal is-hidden",e.setAttribute("aria-hidden","true"),e.innerHTML=`
    <div class="project-modal__overlay" data-project-modal-overlay></div>
    <div class="project-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <button type="button" class="project-modal__close" data-project-modal-close aria-label="Close project preview">&times;</button>
      <div class="project-modal__header">
        <h3 id="project-modal-title" class="project-modal__title"></h3>
        <button type="button" class="project-modal__cta" data-project-modal-cta>
          View detail
        </button>
      </div>
      <p class="project-modal__description" data-project-modal-description></p>
      <ul class="project-modal__list" data-project-modal-list></ul>
      <div class="project-modal__actions">
        <a class="project-modal__direct" data-project-modal-direct target="_blank" rel="noopener">
          Reach out
        </a>
        <a class="project-modal__support" data-project-modal-support target="_blank" rel="noopener">
          Support the work
        </a>
      </div>
    </div>
  `,document.body.appendChild(e),e}const v=s.querySelector("#project-modal-title"),w=s.querySelector("[data-project-modal-description]"),k=s.querySelector("[data-project-modal-list]"),u=s.querySelector("[data-project-modal-cta]"),m=s.querySelector("[data-project-modal-direct]"),h=s.querySelector("[data-project-modal-support]"),G=s.querySelector("[data-project-modal-close]"),O=s.querySelector("[data-project-modal-overlay]");G?.addEventListener("click",()=>p());O?.addEventListener("click",()=>p());u?.addEventListener("click",()=>{d&&(g(`/projects/${d}`),p({restoreFocus:!1}))});function U(e){const a=j[e];if(!(!a||!a.modal)){if(d=e,v&&(v.textContent=a.name),w&&(w.textContent=a.modal.description||""),k){const t=a.modal.bullets??[];k.innerHTML=t.map(i=>`<li>${i}</li>`).join("")}if(u&&(u.textContent=a.modal.ctaLabel||"Learn more"),m){const t={label:"Start a project",href:"mailto:hello@diegoworks.io"},i=a.directAction??{label:a.detail?.cta?.primaryLabel,href:a.detail?.cta?.primaryHref};m.textContent=i.label||t.label,m.setAttribute("href",i.href||t.href)}if(h){const t={label:"Support ongoing work",href:"mailto:hello@diegoworks.io"},i=a.support??t;h.textContent=i.label||t.label,h.setAttribute("href",i.href||t.href)}f=document.activeElement instanceof HTMLElement?document.activeElement:null,s.classList.remove("is-hidden"),s.setAttribute("aria-hidden","false"),_.classList.add("modal-open"),u?.focus()}}function p({restoreFocus:e=!0}={}){if(s.classList.contains("is-hidden")){d=null;return}s.classList.add("is-hidden"),s.setAttribute("aria-hidden","true"),_.classList.remove("modal-open"),d=null,e&&f&&f.focus()}function V(){const e=window.location.hash.replace(/^#/,"");if(!e)return{view:"home"};const a=e.split("/").filter(Boolean);return a[0]==="projects"&&a[1]?{view:"project",slug:a[1].toLowerCase()}:{view:"home"}}function g(e){if(!e){window.location.hash="";return}const a=e.startsWith("/")?e:`/${e}`;window.location.hash=a}function S(){const e=V();p({restoreFocus:!1}),e.view==="project"?D(e.slug):z()}window.addEventListener("hashchange",S);document.addEventListener("keydown",e=>{if(e.key==="Escape"){if(!s.classList.contains("is-hidden")){p();return}y()}});S();
