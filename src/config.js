/**
 * Site configuration. Replace contact details and tweak image paths as needed.
 * - WhatsApp / phone: digits only with country code (e.g. "19565551234").
 * - Images: paths are served from /public, so "/flavors/..." resolves to public/flavors/...
 */
export const config = {
  siteName: 'Mission Meat Market',
  tagline: 'Valley-famous carne seca, marinated fajitas & Mexican staples.',

  phoneDisplay: '(956) 584-4866',
  /** Digits only, with country code (e.g. US: 19565551234). */
  phoneTel: '19565844866',

  /** WhatsApp chat number — digits only with country code. */
  whatsappE164: '19562408484',

  addressLine: 'Mission, TX',
  /** Optional Spanish; falls back to addressLine if empty */
  addressLineEs: '',
  hoursLine: '',
  hoursLineEs: '',

  /**
   * Map embed query — free-text place lookup (no API key needed).
   * Replace with the exact address once you have it, e.g. "1234 Conway Ave, Mission, TX 78572".
   */
  mapQuery: 'Mission Meat Market, Mission, TX',

  /** Use full URLs. Set to "" to hide a platform. */
  socials: {
    instagram: '',
    facebook: '',
    tiktok: '',
    googleMaps: 'https://www.google.com/maps/search/?api=1&query=Mission+Meat+Market+Mission+TX',
  },

  /**
   * Carne seca flavors. id matches i18n keys: flavors.<id>.name / .desc
   * Lemon Pepper is intentionally omitted until a real product photo is supplied;
   * just re-add the entry below (and in heroImageUrls) once the photo lands at
   * /public/flavors/jerky-lemon-pepper.png.
   */
  flavorImages: [
    { id: 'sasonOriginal', src: '/flavors/jerky-sason-original.png' },
    { id: 'tajinOriginal', src: '/flavors/jerky-tajin-original.png' },
    { id: 'chileHabanero', src: '/flavors/jerky-chile-habanero.png' },
    { id: 'chileDeArbol', src: '/flavors/jerky-chile-de-arbol.png' },
    { id: 'hotFlamas', src: '/flavors/jerky-hot-flamas.png' },
    { id: 'redTaki', src: '/flavors/jerky-red-taki.png' },
    { id: 'azul', src: '/flavors/jerky-azul.png' },
    { id: 'zombie', src: '/flavors/jerky-zombie.png' },
    { id: 'pickleConChile', src: '/flavors/jerky-pickle-con-chile.png' },
    { id: 'picaChelada', src: '/flavors/jerky-pica-chelada.png' },
    { id: 'micheMission', src: '/flavors/jerky-miche-mission.png' },
  ],

  /** Hero carousel sources — flavor close-ups, advances every 3s. */
  heroImageUrls: [
    '/flavors/jerky-sason-original.png',
    '/flavors/jerky-tajin-original.png',
    '/flavors/jerky-chile-habanero.png',
    '/flavors/jerky-chile-de-arbol.png',
    '/flavors/jerky-hot-flamas.png',
    '/flavors/jerky-red-taki.png',
    '/flavors/jerky-azul.png',
    '/flavors/jerky-zombie.png',
    '/flavors/jerky-pickle-con-chile.png',
    '/flavors/jerky-pica-chelada.png',
    '/flavors/jerky-miche-mission.png',
  ],

  /** Single appetizing variety shot used as a backdrop on the carne seca card. */
  varietyHero: '/flavors/jerky-variety-hero.png',

  /** In-store photos used in the "From our shop" marquee. */
  shopPhotos: [
    '/hero/hero-1.png',
    '/hero/hero-2.png',
    '/hero/hero-3.png',
    '/hero/hero-4.png',
  ],

  /** Official logo in public/ (PNG or SVG). */
  logoPath: '/logo.png',
}
