const STORAGE_KEY = 'mmm-lang'

/** @type {'en' | 'es'} */
let currentLang = 'en'

export function getCurrentLang() {
  return currentLang
}

/** @type {Record<string, EnEs>} */
const MESSAGES = {
  'skip.link': {
    en: 'Skip to content',
    es: 'Saltar al contenido',
  },
  'nav.menu': {
    en: 'Menu',
    es: 'Menú',
  },
  'nav.primary': {
    en: 'Primary navigation',
    es: 'Navegación principal',
  },
  'nav.flavors': { en: 'Flavors', es: 'Sabores' },
  'nav.specialties': { en: 'Specialties', es: 'Especialidades' },
  'nav.about': { en: 'About', es: 'Nosotros' },
  'nav.reviews': { en: 'Reviews', es: 'Opiniones' },
  'nav.contact': { en: 'Contact', es: 'Contacto' },
  'lang.switch': {
    en: 'Language',
    es: 'Idioma',
  },
  'lang.en': { en: 'English', es: 'Inglés' },
  'lang.es': { en: 'Spanish', es: 'Español' },

  'hero.section': {
    en: 'Featured flavors',
    es: 'Sabores destacados',
  },
  'hero.eyebrow': {
    en: 'Rio Grande Valley · Carne seca artesanal',
    es: 'Valle del Río Grande · Carne seca artesanal',
  },
  'hero.title': {
    en: 'Twelve flavors. One unforgettable bite.',
    es: 'Doce sabores. Una mordida inolvidable.',
  },
  'hero.lead': {
    en:
      '100% beef, handcrafted in small batches — from the classic Sasón Original and Lemon Pepper to bold Hot Flamas, Chile Habanero, Pickle con Chile, Azul, and Zombie. Stop by, sample, and find your favorite.',
    es:
      '100% res, hecho artesanal en lotes pequeños — desde el clásico Sasón Original y Lemon Pepper hasta los atrevidos Hot Flamas, Chile Habanero, Pickle con Chile, Azul y Zombie. Pasa, prueba y elige tu favorito.',
  },
  'hero.call': {
    en: 'Call us',
    es: 'Llámanos',
  },
  'hero.whatsapp': { en: 'WhatsApp', es: 'WhatsApp' },
  'hero.dots': {
    en: 'Hero slides',
    es: 'Carrusel principal',
  },
  'hero.dot': {
    en: 'Show flavor {n}',
    es: 'Mostrar sabor {n}',
  },
  'hero.prev': { en: 'Previous flavor', es: 'Sabor anterior' },
  'hero.next': { en: 'Next flavor', es: 'Sabor siguiente' },
  'hero.scroll': { en: 'See flavors', es: 'Ver sabores' },

  'flavors.heading': { en: 'Twelve flavors of carne seca', es: 'Doce sabores de carne seca' },
  'flavors.intro': {
    en: 'Click any flavor to preview it. The cards rotate automatically every few seconds.',
    es: 'Toca cualquier sabor para verlo. Las tarjetas avanzan automáticamente cada pocos segundos.',
  },
  'flavors.tagsLabel': { en: 'Flavors', es: 'Sabores' },
  'flavors.new': { en: 'NEW', es: 'NUEVO' },

  'flavors.sasonOriginal.name': { en: 'Sasón Original', es: 'Sasón Original' },
  'flavors.sasonOriginal.desc': {
    en: 'Our signature recipe — savory, balanced, and the one regulars order by the pound.',
    es: 'Nuestra receta original — sabrosa, equilibrada, y la que los clientes piden por libra.',
  },
  'flavors.lemonPepper.name': { en: 'Lemon Pepper', es: 'Lemon Pepper' },
  'flavors.lemonPepper.desc': {
    en: 'Bright citrus and cracked black pepper — a fan favorite from day one.',
    es: 'Cítrico brillante y pimienta negra recién molida — favorita desde el primer día.',
  },
  'flavors.tajinOriginal.name': { en: 'Tajín Original', es: 'Tajín Original' },
  'flavors.tajinOriginal.desc': {
    en: 'Chili, lime, and salt — the classic combination that pairs with everything.',
    es: 'Chile, limón y sal — la combinación clásica que va con todo.',
  },
  'flavors.chileHabanero.name': { en: 'Chile Habanero', es: 'Chile Habanero' },
  'flavors.chileHabanero.desc': {
    en: 'For real heat lovers — fiery habanero with a fruity finish.',
    es: 'Para los amantes del picante — habanero ardiente con un final afrutado.',
  },
  'flavors.chileDeArbol.name': { en: 'Chile de Árbol', es: 'Chile de Árbol' },
  'flavors.chileDeArbol.desc': {
    en: 'Bold, smoky, and lingering — the kind of heat you can taste before you bite.',
    es: 'Intenso, ahumado y persistente — el picor que se siente antes de morder.',
  },
  'flavors.hotFlamas.name': { en: 'Hot Flamas', es: 'Hot Flamas' },
  'flavors.hotFlamas.desc': {
    en: 'Spicy chili-lime crunch — inspired by your favorite snack.',
    es: 'Crujiente chile-limón picoso — inspirado en tu botana favorita.',
  },
  'flavors.redTaki.name': { en: 'Red Taki', es: 'Red Taki' },
  'flavors.redTaki.desc': {
    en: 'Vivid red, lime-forward, with a sharp picante kick.',
    es: 'Rojo vibrante, con limón al frente y un toque picante intenso.',
  },
  'flavors.azul.name': { en: 'Azul', es: 'Azul' },
  'flavors.azul.desc': {
    en: 'Eye-catching electric blue with our chili-lime profile — fun and flavorful.',
    es: 'Azul eléctrico que llama la atención con nuestro perfil chile-limón — divertido y sabroso.',
  },
  'flavors.zombie.name': { en: 'Zombie', es: 'Zombie' },
  'flavors.zombie.desc': {
    en: 'Bright green and tangy — a brand new variety the whole counter is talking about.',
    es: 'Verde brillante y ácido — una nueva variedad de la que todos están hablando.',
  },
  'flavors.pickleConChile.name': { en: 'Pickle con Chile', es: 'Pickle con Chile' },
  'flavors.pickleConChile.desc': {
    en: 'Tangy dill pickle meets chili — sour, spicy, and surprisingly addictive.',
    es: 'Pepinillo encurtido con chile — ácido, picante y sorprendentemente adictivo.',
  },
  'flavors.picaChelada.name': { en: 'Pica Chelada', es: 'Pica Chelada' },
  'flavors.picaChelada.desc': {
    en: 'Tomato, lime, salt, and chili — like your favorite chelada in jerky form.',
    es: 'Tomate, limón, sal y chile — como tu chelada favorita en carne seca.',
  },
  'flavors.micheMission.name': { en: 'Miche Mission', es: 'Miche Mission' },
  'flavors.micheMission.desc': {
    en: 'Our house michelada twist — savory, citrusy, with a crowd-pleasing kick.',
    es: 'Nuestra versión michelada de la casa — sabrosa, cítrica y con buen picor.',
  },

  'lineup.eyebrow': { en: 'Flavor wall', es: 'Pared de sabores' },
  'lineup.heading': { en: 'Find your favorite', es: 'Encuentra tu favorito' },
  'lineup.intro': {
    en: 'Twelve handcrafted flavors gliding by — pick the one that catches your eye.',
    es: 'Doce sabores artesanales pasando — elige el que te llame la atención.',
  },

  'specialties.heading': { en: 'Our specialties', es: 'Nuestras especialidades' },
  'specialties.intro': {
    en: 'What keeps customers coming back from San Antonio and across the Valley.',
    es: 'Lo que hace que la gente regrese desde San Antonio y de todo el Valle.',
  },
  'specialties.carneTitle': { en: 'Carne seca', es: 'Carne seca' },
  'specialties.carneBody': {
    en:
      '<strong>100% beef, handcrafted</strong> — the snack customers drive in for. Our cases are stacked with flavors like Sasón Original, Tajín, chile de árbol, habanero, Hot Flamas, pickle con chile, and eye-catching varieties such as Azul and Zombie. Stop by for a sample and find your favorite.',
    es:
      '<strong>100% res, hecho artesanal</strong> — el antojo por el que nos visitan. Nuestras vitrinas lucen sabores como Sasón Original, Tajín, chile de árbol, habanero, Hot Flamas, pickle con chile, y creaciones llamativas como Azul y Zombie. Pasa por una muestra y elige tu favorito.',
  },
  'specialties.fajitaTitle': {
    en: 'Marinated fajita meat',
    es: 'Carne para fajitas marinada',
  },
  'specialties.fajitaBody': {
    en: 'Tender cuts with great marinade flavor — perfect for weeknight cookouts and weekend gatherings.',
    es:
      'Cortes suaves con un marinado lleno de sabor — ideal para la parrilla entre semana o el fin de semana.',
  },
  'specialties.chipsTitle': {
    en: 'Mexican chips & local goods',
    es: 'Papitas mexicanas y productos locales',
  },
  'specialties.chipsBody': {
    en: 'Chips, snacks, and regional products alongside our meats — one stop for pantry and carnicería picks.',
    es:
      'Botanas, papitas y productos de la región junto con nuestras carnes — todo en una sola visita.',
  },

  'about.heading': {
    en: 'Why Mission Meat Market',
    es: 'Por qué Mission Meat Market',
  },
  'about.p1': {
    en: 'We focus on <strong>quality</strong>, <strong>service</strong>, and <strong>cleanliness</strong> — so every visit feels welcoming and every order is something we’re proud to put our name on.',
    es:
      'Trabajamos cada día en <strong>calidad</strong>, <strong>servicio</strong> y <strong>limpieza</strong> — para que cada visita se sienta cómoda y cada pedido sea algo que respaldamos con orgullo.',
  },
  'about.p2': {
    en:
      'Our team is known for being friendly and attentive, whether you’re stocking up on carne seca or grabbing fajitas for the grill. Ask us for recommendations or a sample — we’re happy to help.',
    es:
      'Nuestro equipo es conocido por ser amable y atento, ya sea para surtirte de carne seca o pedir fajitas para la parrilla. Pide recomendaciones o una muestra — con gusto te ayudamos.',
  },
  'about.b1': {
    en: 'Known for homemade jerky & fajitas',
    es: 'Famósos por la carne seca y las fajitas',
  },
  'about.b2': {
    en: 'Wide variety of flavors & products',
    es: 'Gran variedad de sabores y productos',
  },
  'about.b3': {
    en: 'Custom orders when you ask',
    es: 'Pedidos especiales cuando los necesitas',
  },

  'reviews.heading': { en: 'What customers say', es: 'Lo que dicen los clientes' },
  'reviews.intro': {
    en: 'Short excerpts from public reviews — thank you for the kind words.',
    es: 'Extractos de reseñas públicas — gracias por sus palabras.',
  },

  'reviews.q1': {
    en: '“The carne seca is incredible — amazing texture and flavor. Friendly staff let me sample. I’ll definitely be back for more.”',
    es: '“La carne seca está increíble — textura y sabor excelentes. El personal me dejó probar. Definitivamente volveré por más.”',
  },
  'reviews.q1cap': { en: 'Joshua · recent review', es: 'Joshua · reseña reciente' },

  'reviews.q2': {
    en: '“Friendly, attentive staff. I always stop for carne seca — best I’ve had here or in Mexico. Original and lemon pepper are my favorites.”',
    es: '“Personal amable y atento. Siempre paso por mi carne seca — la mejor que he probado aquí o en México. Original y lemon pepper mis favoritos.”',
  },
  'reviews.q2cap': { en: 'Ricardo · Local Guide', es: 'Ricardo · Guía local' },

  'reviews.q3': {
    en: '“Great variety — they even have Mexican chips and local products. Staff is always helpful.”',
    es: '“Mucha variedad — hasta papitas mexicanas y productos locales. El personal siempre ayuda.”',
  },
  'reviews.q3cap': { en: 'John · Local Guide', es: 'John · Guía local' },

  'reviews.q4': {
    en: '“Best fajita meat in the valley. Always tender and good flavor.”',
    es: '“La mejor carne para fajitas del valle. Siempre suave y con buen sabor.”',
  },
  'reviews.q4cap': { en: 'J. Jones · Local Guide', es: 'J. Jones · Guía local' },

  'reviews.q5': {
    en: '“The marinaded fajita is super soft and great.”',
    es: '“La fajita marinada está súper suave y riquísima.”',
  },
  'reviews.q5cap': { en: 'Albert · Local Guide', es: 'Albert · Guía local' },

  'reviews.q6': {
    en: '“Best place in the valley for homemade beef jerky.”',
    es: '“El mejor lugar del valle para carne seca hecha en casa.”',
  },
  'reviews.q6cap': { en: 'Jesus · Local Guide', es: 'Jesus · Guía local' },

  'reviews.q7': {
    en: '“Great meats — they made a custom order when I asked.”',
    es: '“Excelentes carnes — hicieron un pedido especial cuando lo pedí.”',
  },
  'reviews.q7cap': { en: 'Enrique · Local Guide', es: 'Enrique · Guía local' },

  'reviews.q8': {
    en: '“OMG the best ever carne seca.”',
    es: '“La mejor carne seca de todas.”',
  },
  'reviews.q8cap': { en: 'Robin', es: 'Robin' },

  'contact.heading': { en: 'Visit & connect', es: 'Visítanos y contáctanos' },
  'contact.call': { en: 'Call', es: 'Llamar' },
  'contact.whatsapp': { en: 'WhatsApp', es: 'WhatsApp' },
  'contact.openMaps': { en: 'Open in Google Maps', es: 'Abrir en Google Maps' },
  'social.label': { en: 'Social media', es: 'Redes sociales' },
  'social.placeholder': {
    en: 'Add Instagram, Facebook, or TikTok URLs in src/config.js',
    es: 'Agrega las URLs de Instagram, Facebook o TikTok en src/config.js',
  },
  'contact.copied': {
    en: 'Phone number copied',
    es: 'Número de teléfono copiado',
  },

  'footer.rights': {
    en: 'All rights reserved.',
    es: 'Todos los derechos reservados.',
  },
  'footer.top': { en: 'Back to top ↑', es: 'Volver arriba ↑' },

  'meta.description': {
    en:
      'Mission Meat Market — carne seca, marinated fajita meat, Mexican chips and local products. Friendly service in the RGV.',
    es:
      'Mission Meat Market — carne seca, carne para fajitas marinada, papitas mexicanas y productos locales. Servicio amable en el Valle.',
  },
}

/**
 * @typedef {{ en: string; es: string }} EnEs
 */

/**
 * @param {'en' | 'es'} lang
 * @param {string} key
 */
export function t(lang, key) {
  const row = MESSAGES[key]
  if (!row) return key
  return row[lang] ?? row.en
}

/**
 * @param {'en' | 'es'} lang
 */
export function getPreferredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'es') return stored
  } catch {
    /* ignore */
  }
  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('es')) {
    return 'es'
  }
  return 'en'
}

/**
 * @param {'en' | 'es'} lang
 */
export function persistLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    /* ignore */
  }
}

/**
 * @param {import('./config.js').config} cfg
 * @param {'en' | 'es'} lang
 */
export function applyLanguage(cfg, lang) {
  currentLang = lang
  document.documentElement.lang = lang

  const metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc) metaDesc.setAttribute('content', t(lang, 'meta.description'))

  document.title = cfg.siteName

  const logo = document.querySelector('.brand__logo')
  if (logo) logo.setAttribute('alt', cfg.siteName)

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n')
    if (!key) return
    el.textContent = t(lang, key)
  })

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html')
    if (!key) return
    el.innerHTML = t(lang, key)
  })

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria')
    if (!key) return
    el.setAttribute('aria-label', t(lang, key))
  })

  const heroAria = document.querySelector('.hero')
  if (heroAria) heroAria.setAttribute('aria-label', t(lang, 'hero.section'))

  const dotsWrap = document.getElementById('hero-dots')
  if (dotsWrap) dotsWrap.setAttribute('aria-label', t(lang, 'hero.dots'))

  const socialUl = document.getElementById('social-links')
  if (socialUl) socialUl.setAttribute('aria-label', t(lang, 'social.label'))

  const nav = document.getElementById('site-nav')
  if (nav) nav.setAttribute('aria-label', t(lang, 'nav.primary'))

  document.querySelectorAll('.hero__dot').forEach((btn, i) => {
    btn.setAttribute('aria-label', t(lang, 'hero.dot').replace('{n}', String(i + 1)))
  })

  const switcher = document.querySelector('.lang-switch')
  if (switcher) switcher.setAttribute('aria-label', t(lang, 'lang.switch'))

  updateLangToggleState(lang)

  document.dispatchEvent(new CustomEvent('mmm:langchange', { detail: { lang } }))
}

function updateLangToggleState(active) {
  document.querySelectorAll('[data-set-lang]').forEach((btn) => {
    const l = btn.getAttribute('data-set-lang')
    const isOn = l === active
    btn.classList.toggle('lang-switch__btn--active', isOn)
    btn.setAttribute('aria-pressed', String(isOn))
  })
}

/**
 * @param {import('./config.js').config} cfg
 * @param {() => void} [afterApply]
 */
export function initI18n(cfg, afterApply) {
  const lang = getPreferredLang()
  applyLanguage(cfg, lang)
  afterApply?.()

  document.querySelectorAll('[data-set-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = /** @type {'en' | 'es'} */ (btn.getAttribute('data-set-lang'))
      if (next !== 'en' && next !== 'es') return
      persistLang(next)
      applyLanguage(cfg, next)
      afterApply?.()
    })
  })
}
