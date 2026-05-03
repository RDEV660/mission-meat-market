import './style.css'
import { config } from './config.js'
import { initI18n, getCurrentLang, t } from './i18n.js'

const HERO_INTERVAL_MS = 3000
const FLAVORS_INTERVAL_MS = 4500
const FLAVORS_PIN_MS = 8000

/* ============================================================
 *  Contact + dynamic copy
 * ============================================================ */
function refreshDynamicContent() {
  const lang = getCurrentLang()
  const tel = config.phoneTel.replace(/\D/g, '')
  const telHref = tel ? `tel:+${tel}` : '#'

  const heroCall = document.getElementById('hero-call')
  if (heroCall) {
    heroCall.href = telHref
    heroCall.textContent =
      telHref === '#' ? t(lang, 'hero.call') : `${t(lang, 'hero.call')} ${config.phoneDisplay}`
  }

  const footerCall = document.getElementById('footer-call')
  if (footerCall) {
    footerCall.setAttribute('aria-label', `${t(lang, 'contact.call')}: ${config.phoneDisplay}`)
  }

  const addr = document.getElementById('contact-address')
  const hours = document.getElementById('contact-hours')
  if (addr) {
    addr.textContent =
      lang === 'es' && config.addressLineEs ? config.addressLineEs : config.addressLine
  }
  if (hours) {
    hours.textContent = lang === 'es' && config.hoursLineEs ? config.hoursLineEs : config.hoursLine
  }

  const ph = document.getElementById('social-placeholder')
  if (ph) {
    ph.innerHTML = `<span style="opacity:0.7">${t(lang, 'social.placeholder')}</span>`
  }
}

function initContactHydration() {
  const tel = config.phoneTel.replace(/\D/g, '')
  const telHref = tel ? `tel:+${tel}` : '#'
  const waDigits = config.whatsappE164.replace(/\D/g, '')
  const waHref = waDigits ? `https://wa.me/${waDigits}` : '#'

  const heroCall = document.getElementById('hero-call')
  const heroWa = document.getElementById('hero-whatsapp')
  const footerCall = document.getElementById('footer-call')
  const footerWa = document.getElementById('footer-whatsapp')
  const phoneText = document.getElementById('footer-phone-text')
  const toast = document.getElementById('copy-toast')

  if (heroCall) {
    heroCall.href = telHref
    if (telHref === '#') heroCall.addEventListener('click', (e) => e.preventDefault())
  }

  if (footerCall) {
    footerCall.href = telHref
    if (telHref === '#') {
      footerCall.addEventListener('click', (e) => e.preventDefault())
    } else if (toast && tel) {
      footerCall.addEventListener('click', async (e) => {
        if (!matchMedia('(hover: hover)').matches) return
        try {
          await navigator.clipboard.writeText(config.phoneDisplay)
          toast.textContent = t(getCurrentLang(), 'contact.copied')
          toast.classList.add('is-visible')
          setTimeout(() => toast.classList.remove('is-visible'), 1800)
        } catch {
          /* ignore */
        }
      })
    }
  }

  if (phoneText) phoneText.textContent = config.phoneDisplay

  if (heroWa) {
    heroWa.href = waHref
    if (waHref === '#') {
      heroWa.setAttribute('aria-disabled', 'true')
      heroWa.addEventListener('click', (e) => e.preventDefault())
    }
  }

  if (footerWa) {
    footerWa.href = waHref
    if (waHref === '#') {
      footerWa.setAttribute('aria-disabled', 'true')
      footerWa.addEventListener('click', (e) => e.preventDefault())
    }
  }

  document.querySelectorAll('.brand__logo').forEach((img) => {
    img.src = config.logoPath
  })

  const socialUl = document.getElementById('social-links')
  if (socialUl) {
    socialUl.innerHTML = ''
    const items = [
      { label: 'Instagram', href: config.socials.instagram },
      { label: 'Facebook', href: config.socials.facebook },
      { label: 'TikTok', href: config.socials.tiktok },
      { label: 'Google Maps', href: config.socials.googleMaps },
    ]
    items.forEach(({ label, href }) => {
      if (!href) return
      const li = document.createElement('li')
      const a = document.createElement('a')
      a.href = href
      a.target = '_blank'
      a.rel = 'noopener noreferrer'
      a.textContent = label
      li.appendChild(a)
      socialUl.appendChild(li)
    })
    if (!socialUl.children.length) {
      const li = document.createElement('li')
      li.className = 'socials__placeholder'
      li.id = 'social-placeholder'
      li.innerHTML =
        '<span style="opacity:0.7">Add Instagram, Facebook, or TikTok URLs in src/config.js</span>'
      socialUl.appendChild(li)
    }
  }

  const yearEl = document.getElementById('year')
  if (yearEl) yearEl.textContent = String(new Date().getFullYear())
}

/* ============================================================
 *  Contact map
 * ============================================================ */
function initContactMap() {
  const iframe = document.getElementById('contact-map')
  const link = document.getElementById('contact-map-link')
  if (!iframe) return
  const q = encodeURIComponent(config.mapQuery || 'Mission Meat Market, Mission, TX')
  iframe.src = `https://maps.google.com/maps?q=${q}&output=embed`
  if (link) {
    link.href =
      config.socials?.googleMaps ||
      `https://www.google.com/maps/search/?api=1&query=${q}`
  }
}

/* ============================================================
 *  Hero carousel
 * ============================================================ */
function initHeroCarousel() {
  const container = document.getElementById('hero-slides')
  const dotsRoot = document.getElementById('hero-dots')
  const heroSection = document.querySelector('.hero')
  const prevBtn = document.getElementById('hero-prev')
  const nextBtn = document.getElementById('hero-next')
  const progressBar = document.querySelector('.hero__progress-bar')
  if (!container || !heroSection) return

  const flavors = config.flavorImages
  const urls = (flavors.length ? flavors.map((f) => f.src) : config.heroImageUrls).filter(Boolean)
  if (!urls.length) return

  const N = urls.length

  /**
   * Track layout for seamless infinite slide:
   *   [clone of last, real 0, real 1, ..., real N-1, clone of first]
   *
   * displayIndex is the position inside the track (0..N+1).
   * realIndex is the logical slide (0..N-1).
   *   realIndex 0 is at displayIndex 1 (after the leading clone).
   */
  const allUrls = [urls[N - 1], ...urls, urls[0]]
  allUrls.forEach((url) => {
    const div = document.createElement('div')
    div.className = 'hero__slide'
    div.style.setProperty('--slide-img', `url("${url}")`)
    div.setAttribute('role', 'img')
    div.setAttribute('aria-hidden', 'true')
    container.appendChild(div)
  })

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let realIndex = 0
  let displayIndex = 1
  let timerId = null
  let snapping = false

  const dots = Array.from({ length: N }, (_, i) => {
    const b = document.createElement('button')
    b.type = 'button'
    b.className = 'hero__dot' + (i === 0 ? ' is-active' : '')
    b.setAttribute(
      'aria-label',
      t(getCurrentLang(), 'hero.dot').replace('{n}', String(i + 1)),
    )
    b.setAttribute('role', 'tab')
    if (dotsRoot) dotsRoot.appendChild(b)
    b.addEventListener('click', () => {
      goReal(i)
      restart()
    })
    return b
  })

  function setTransform(animate) {
    container.style.transition = animate && !reduceMotion ? '' : 'none'
    container.style.transform = `translate3d(${-displayIndex * 100}%, 0, 0)`
  }

  function setActiveClass() {
    const slides = container.children
    for (const s of slides) s.classList.remove('is-active')
    if (slides[displayIndex]) slides[displayIndex].classList.add('is-active')
  }

  function resetProgress() {
    if (!progressBar) return
    progressBar.classList.remove('is-running')
    void progressBar.offsetWidth
    if (!reduceMotion && timerId != null) progressBar.classList.add('is-running')
  }

  function updateDots() {
    dots.forEach((d, j) => d.classList.toggle('is-active', j === realIndex))
  }

  function updateDotAria() {
    const l = getCurrentLang()
    dots.forEach((d, i) => {
      d.setAttribute('aria-label', t(l, 'hero.dot').replace('{n}', String(i + 1)))
    })
  }
  document.addEventListener('mmm:langchange', () => {
    updateDotAria()
  })

  function commit() {
    setTransform(true)
    updateDots()
    setActiveClass()
    resetProgress()
  }

  function next() {
    if (snapping) return
    displayIndex += 1
    realIndex = (realIndex + 1) % N
    commit()
  }

  function prev() {
    if (snapping) return
    displayIndex -= 1
    realIndex = (realIndex - 1 + N) % N
    commit()
  }

  function goReal(i) {
    if (snapping) return
    const target = ((i % N) + N) % N
    realIndex = target
    displayIndex = target + 1
    commit()
  }

  container.addEventListener('transitionend', (e) => {
    if (e.propertyName !== 'transform') return
    if (displayIndex > N) {
      snapping = true
      displayIndex = 1
      setTransform(false)
      requestAnimationFrame(() => {
        snapping = false
      })
    } else if (displayIndex < 1) {
      snapping = true
      displayIndex = N
      setTransform(false)
      requestAnimationFrame(() => {
        snapping = false
      })
    }
  })

  function start() {
    stop()
    if (reduceMotion) return
    timerId = window.setInterval(next, HERO_INTERVAL_MS)
    resetProgress()
  }

  function stop() {
    if (timerId != null) {
      window.clearInterval(timerId)
      timerId = null
    }
    if (progressBar) progressBar.classList.remove('is-running')
  }

  function restart() {
    stop()
    start()
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); restart() })
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); restart() })

  heroSection.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { next(); restart() }
    if (e.key === 'ArrowLeft') { prev(); restart() }
  })
  heroSection.setAttribute('tabindex', '0')

  let pointerStartX = null
  heroSection.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    pointerStartX = e.clientX
  })
  heroSection.addEventListener('pointerup', (e) => {
    if (pointerStartX == null) return
    const dx = e.clientX - pointerStartX
    pointerStartX = null
    if (Math.abs(dx) < 40) return
    if (dx < 0) next()
    else prev()
    restart()
  })
  heroSection.addEventListener('pointercancel', () => {
    pointerStartX = null
  })

  heroSection.addEventListener('mouseenter', stop)
  heroSection.addEventListener('mouseleave', start)
  heroSection.addEventListener('focusin', stop)
  heroSection.addEventListener('focusout', start)

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop()
    else start()
  })

  setTransform(false)
  setActiveClass()
  start()
}

/* ============================================================
 *  Flavors tabbed showcase
 * ============================================================ */
function initFlavors() {
  const list = document.getElementById('flavor-chips')
  const img = document.getElementById('flavor-image')
  const nameEl = document.getElementById('flavor-name')
  const descEl = document.getElementById('flavor-desc')
  if (!list || !img || !nameEl || !descEl) return

  const flavors = config.flavorImages
  if (!flavors.length) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let active = 0
  let autoTimer = null
  let pinTimer = null

  const buttons = flavors.map((f, i) => {
    const li = document.createElement('li')
    li.className = 'flavors__chip'
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'flavors__chip-btn'
    btn.setAttribute('role', 'tab')
    btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false')
    btn.dataset.idx = String(i)
    li.appendChild(btn)
    list.appendChild(li)

    btn.addEventListener('click', () => {
      setActive(i)
      pin()
    })
    return btn
  })

  function renderLabels() {
    const lang = getCurrentLang()
    flavors.forEach((f, i) => {
      const btn = buttons[i]
      btn.innerHTML = ''
      const label = document.createElement('span')
      label.textContent = t(lang, `flavors.${f.id}.name`)
      btn.appendChild(label)
      if (f.id === 'zombie') {
        const tag = document.createElement('span')
        tag.className = 'flavors__chip-tag'
        tag.textContent = t(lang, 'flavors.new')
        btn.appendChild(tag)
      }
    })
    setCaption()
  }

  function setCaption() {
    const lang = getCurrentLang()
    const f = flavors[active]
    nameEl.textContent = t(lang, `flavors.${f.id}.name`)
    descEl.textContent = t(lang, `flavors.${f.id}.desc`)
  }

  function setActive(i) {
    active = (i + flavors.length) % flavors.length
    buttons.forEach((b, j) => {
      const on = j === active
      b.classList.toggle('flavors__chip-btn--active', on)
      b.setAttribute('aria-selected', on ? 'true' : 'false')
    })
    swapImage(flavors[active].src, flavors[active].id)
    setCaption()
  }

  const stage = img.closest('.flavors__image-wrap')
  function swapImage(src, id) {
    img.classList.remove('is-visible')
    img.alt = ''
    requestAnimationFrame(() => {
      img.src = src
      img.alt = t(getCurrentLang(), `flavors.${id}.name`)
      if (stage) stage.style.setProperty('--bg-img', `url("${src}")`)
      img.addEventListener(
        'load',
        () => img.classList.add('is-visible'),
        { once: true },
      )
      if (img.complete) img.classList.add('is-visible')
    })
  }

  function startAuto() {
    if (reduceMotion) return
    stopAuto()
    autoTimer = window.setInterval(() => setActive(active + 1), FLAVORS_INTERVAL_MS)
  }
  function stopAuto() {
    if (autoTimer != null) {
      window.clearInterval(autoTimer)
      autoTimer = null
    }
  }
  function pin() {
    stopAuto()
    if (pinTimer != null) window.clearTimeout(pinTimer)
    pinTimer = window.setTimeout(() => startAuto(), FLAVORS_PIN_MS)
  }

  renderLabels()
  setActive(0)
  startAuto()

  list.addEventListener('mouseenter', stopAuto)
  list.addEventListener('mouseleave', () => {
    if (pinTimer == null) startAuto()
  })
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAuto()
    else if (pinTimer == null) startAuto()
  })
  document.addEventListener('mmm:langchange', renderLabels)
}

/* ============================================================
 *  Flavor lineup marquee — animated strip of every flavor close-up
 * ============================================================ */
function initLineupMarquee() {
  const track = document.getElementById('lineup-track')
  if (!track) return
  const flavors = config.flavorImages
  if (!flavors?.length) return

  const build = (flavor) => {
    const card = document.createElement('figure')
    card.className = 'shop-card lineup-card'

    const img = document.createElement('img')
    img.src = flavor.src
    img.alt = ''
    img.loading = 'lazy'
    img.decoding = 'async'
    img.setAttribute('aria-hidden', 'true')
    card.appendChild(img)

    const cap = document.createElement('figcaption')
    cap.className = 'lineup-card__name'
    cap.textContent = t(getCurrentLang(), `flavors.${flavor.id}.name`)
    cap.dataset.flavorId = flavor.id
    card.appendChild(cap)

    return card
  }

  // duplicate the list once for seamless loop
  ;[...flavors, ...flavors].forEach((flavor) => track.appendChild(build(flavor)))

  // Re-translate captions when the language changes
  document.addEventListener('mmm:langchange', () => {
    const lang = getCurrentLang()
    track.querySelectorAll('.lineup-card__name').forEach((el) => {
      const id = el.dataset.flavorId
      if (id) el.textContent = t(lang, `flavors.${id}.name`)
    })
  })
}

/* ============================================================
 *  Mobile nav, header shadow, reveal
 * ============================================================ */
function initNav() {
  const toggle = document.querySelector('.nav-toggle')
  const nav = document.getElementById('site-nav')
  if (!toggle || !nav) return

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true'
    toggle.setAttribute('aria-expanded', String(!open))
    nav.classList.toggle('is-open', !open)
  })

  nav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false')
      nav.classList.remove('is-open')
    })
  })
}

function initHeaderShadow() {
  const header = document.querySelector('.site-header')
  if (!header) return
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 10)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
}

function initReveal() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const els = document.querySelectorAll('.reveal')
  els.forEach((el) => {
    const stagger = Number(el.getAttribute('data-stagger') ?? '0')
    if (Number.isFinite(stagger) && stagger > 0) {
      el.style.setProperty('--reveal-delay', String(stagger * 90))
    }
  })

  if (reduceMotion) {
    els.forEach((el) => el.classList.add('is-visible'))
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
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  )
  els.forEach((el) => observer.observe(el))
}

/* ============================================================ */
initContactHydration()
initContactMap()
initLineupMarquee()
initFlavors()
initHeroCarousel()
initI18n(config, refreshDynamicContent)
initNav()
initHeaderShadow()
initReveal()
