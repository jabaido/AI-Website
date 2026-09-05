import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <header class="site-nav">
    <div class="nav-inner">
      <a class="nav-brand" href="#top" aria-label="YinkeidsTech home">YinkeidsTech</a>
      <button
        class="nav-toggle"
        type="button"
        aria-label="Open menu"
        aria-expanded="false"
        aria-controls="primary-nav"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav id="primary-nav" class="nav-links" aria-label="Primary">
        <a href="#collection">Collection</a>
        <a href="#craft">Craft</a>
        <a href="#tech">Technology</a>
        <a href="#lifestyle">Lifestyle</a>
        <a class="nav-cta" href="#shop">Shop</a>
      </nav>
    </div>
  </header>

  <main id="top">
    <!-- Hero: brand + one headline + support + CTAs + full-bleed visual -->
    <section class="hero" aria-label="YinkeidsTech introduction">
      <div class="hero-content">
        <h1 class="hero-brand reveal">YinkeidsTech</h1>
        <p class="hero-headline reveal reveal-delay-1">Precision you can wear.</p>
        <p class="hero-support reveal reveal-delay-2">
          Wristwatches engineered for clarity, balance, and lasting presence —
          [placeholder tagline copy].
        </p>
        <div class="hero-actions reveal reveal-delay-2">
          <a class="btn btn-primary" href="#shop">Shop collection</a>
          <a class="btn btn-ghost" href="#featured">Learn more</a>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div
          class="placeholder-media placeholder-media--warm"
          data-label="Hero watch image placeholder"
          role="img"
          aria-label="Placeholder for hero product photography"
        ></div>
      </div>
    </section>

    <!-- Featured product -->
    <section id="featured" class="featured section">
      <p class="section-label reveal">Featured</p>
      <h2 class="section-title reveal">Series One.</h2>
      <p class="section-copy reveal reveal-delay-1">
        Our signature automatic — refined silhouette, sapphire crystal, and a
        movement tuned for daily wear. [Placeholder product description.]
      </p>
      <div class="link-row reveal reveal-delay-2">
        <a href="#shop">Buy</a>
        <a href="#craft">Learn more</a>
      </div>
      <div class="featured-media reveal">
        <div
          class="placeholder-media placeholder-media--dark"
          data-label="Featured product image placeholder"
          role="img"
          aria-label="Placeholder for Series One watch photography"
        ></div>
      </div>
    </section>

    <!-- Collection -->
    <section id="collection" class="collection section">
      <div class="collection-header">
        <p class="section-label reveal">Collection</p>
        <h2 class="section-title reveal">Three expressions. One standard.</h2>
        <p class="section-copy reveal reveal-delay-1" style="margin-left:auto;margin-right:auto">
          Explore the lines that define YinkeidsTech. [Placeholder collection intro.]
        </p>
      </div>
      <div class="collection-grid">
        <article class="collection-item reveal">
          <div
            class="placeholder-media"
            data-label="Series One photo"
            role="img"
            aria-label="Placeholder for Series One"
          ></div>
          <h3>Series One</h3>
          <p>Automatic · 40mm</p>
          <p class="ph-text">[Price placeholder]</p>
        </article>
        <article class="collection-item reveal reveal-delay-1">
          <div
            class="placeholder-media placeholder-media--warm"
            data-label="Chronograph photo"
            role="img"
            aria-label="Placeholder for Chronograph"
          ></div>
          <h3>Chronograph</h3>
          <p>Quartz precision · 42mm</p>
          <p class="ph-text">[Price placeholder]</p>
        </article>
        <article class="collection-item reveal reveal-delay-2">
          <div
            class="placeholder-media placeholder-media--dark"
            data-label="Field Edition photo"
            role="img"
            aria-label="Placeholder for Field Edition"
          ></div>
          <h3>Field Edition</h3>
          <p>Tool watch · 38mm</p>
          <p class="ph-text">[Price placeholder]</p>
        </article>
      </div>
    </section>

    <!-- Craftsmanship -->
    <section id="craft" class="craft section">
      <div class="craft-layout">
        <div class="craft-copy">
          <p class="section-label reveal">Craft</p>
          <h2 class="section-title reveal">Built in layers. Finished by hand.</h2>
          <p class="section-copy reveal reveal-delay-1">
            Cases, dials, and bracelets are assembled with exacting tolerances.
            [Placeholder craftsmanship narrative — materials, finishing, QC.]
          </p>
          <div class="link-row reveal reveal-delay-2">
            <a href="#tech">See the details</a>
          </div>
        </div>
        <div class="craft-media reveal">
          <div
            class="placeholder-media"
            data-label="Workshop / detail image placeholder"
            role="img"
            aria-label="Placeholder for craftsmanship photography"
          ></div>
        </div>
      </div>
    </section>

    <!-- Technology -->
    <section id="tech" class="tech section">
      <div class="tech-header">
        <p class="section-label reveal">Technology</p>
        <h2 class="section-title reveal">Engineered for the wrist.</h2>
        <p class="section-copy reveal reveal-delay-1" style="margin-left:auto;margin-right:auto">
          Movement, crystal, and water resistance — designed as a system.
          [Placeholder technology overview.]
        </p>
      </div>
      <div class="tech-rows">
        <div class="tech-row">
          <div class="tech-block reveal">
            <div
              class="placeholder-media placeholder-media--dark"
              data-label="Movement diagram placeholder"
              role="img"
              aria-label="Placeholder for movement visual"
            ></div>
            <div class="tech-block-body">
              <h3>Caliber YT-01</h3>
              <p>[Placeholder: accuracy, power reserve, finishing notes.]</p>
            </div>
          </div>
          <div class="tech-block reveal reveal-delay-1">
            <div
              class="placeholder-media"
              data-label="Crystal / case detail placeholder"
              role="img"
              aria-label="Placeholder for case and crystal visual"
            ></div>
            <div class="tech-block-body">
              <h3>Sapphire &amp; steel</h3>
              <p>[Placeholder: crystal hardness, case grade, coating.]</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lifestyle -->
    <section id="lifestyle" class="lifestyle section">
      <div
        class="placeholder-media placeholder-media--dark"
        data-label="Lifestyle atmosphere image placeholder"
        role="img"
        aria-label="Placeholder for lifestyle photography"
      ></div>
      <div class="lifestyle-content">
        <p class="section-label reveal">Everyday</p>
        <h2 class="section-title reveal">Made for the hours that count.</h2>
        <p class="section-copy reveal reveal-delay-1">
          From desk to dusk — a watch that stays out of the way until you need it.
          [Placeholder lifestyle copy.]
        </p>
        <div class="link-row reveal reveal-delay-2">
          <a href="#shop">Find your watch</a>
        </div>
      </div>
    </section>

    <!-- Shop CTA -->
    <section id="shop" class="shop-cta section">
      <div
        class="placeholder-media placeholder-media--warm reveal"
        data-label="Product packshot placeholder"
        role="img"
        aria-label="Placeholder for shop packshot"
      ></div>
      <h2 class="section-title reveal">Ready when you are.</h2>
      <p class="section-copy reveal reveal-delay-1">
        Browse the full YinkeidsTech lineup. Free shipping and returns —
        [placeholder offer / policy line].
      </p>
      <div class="hero-actions reveal reveal-delay-2">
        <a class="btn btn-primary" href="#">Shop now — [link placeholder]</a>
        <a class="btn btn-ghost" href="#">Book a fitting — [link placeholder]</a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="footer-inner">
      <p class="footer-brand">YinkeidsTech</p>
      <div class="footer-grid">
        <div class="footer-col">
          <h4>Shop</h4>
          <a href="#collection">[Collection link]</a>
          <a href="#shop">[New arrivals]</a>
          <a href="#shop">[Accessories]</a>
        </div>
        <div class="footer-col">
          <h4>Explore</h4>
          <a href="#craft">[Craft]</a>
          <a href="#tech">[Technology]</a>
          <a href="#lifestyle">[Stories]</a>
        </div>
        <div class="footer-col">
          <h4>Support</h4>
          <a href="#">[Shipping]</a>
          <a href="#">[Warranty]</a>
          <a href="#">[Contact]</a>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <a href="#">[About]</a>
          <a href="#">[Careers]</a>
          <a href="#">[Press]</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Copyright © ${new Date().getFullYear()} YinkeidsTech. All rights reserved.</p>
        <p class="footer-ph">[Legal · Privacy · Terms placeholders]</p>
      </div>
    </div>
  </footer>
`

function initNav(): void {
  const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle')
  const links = document.querySelector<HTMLElement>('.nav-links')
  if (!toggle || !links) return

  const setOpen = (open: boolean) => {
    links.classList.toggle('is-open', open)
    toggle.setAttribute('aria-expanded', String(open))
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
  }

  toggle.addEventListener('click', () => {
    setOpen(!links.classList.contains('is-open'))
  })

  links.querySelectorAll('a').forEach((anchor) => {
    anchor.addEventListener('click', () => setOpen(false))
  })

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 735px)').matches) {
      setOpen(false)
    }
  })
}

function initReveal(): void {
  const nodes = document.querySelectorAll<HTMLElement>('.reveal')
  if (!('IntersectionObserver' in window)) {
    nodes.forEach((el) => el.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  )

  nodes.forEach((el) => observer.observe(el))
}

initNav()
initReveal()
