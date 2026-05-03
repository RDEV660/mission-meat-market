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

  /** Twelve carne seca flavors. id matches i18n keys: flavors.<id>.name / .desc */
  flavorImages: [
    { id: 'sasonOriginal', src: '/flavors/jerky-sason-original.webp' },
    { id: 'lemonPepper', src: '/flavors/jerky-lemon-pepper.webp' },
    { id: 'tajinOriginal', src: '/flavors/jerky-tajin-original.webp' },
    { id: 'chileHabanero', src: '/flavors/jerky-chile-habanero.webp' },
    { id: 'chileDeArbol', src: '/flavors/jerky-chile-de-arbol.webp' },
    { id: 'hotFlamas', src: '/flavors/jerky-hot-flamas.webp' },
    { id: 'redTaki', src: '/flavors/jerky-red-taki.webp' },
    { id: 'azul', src: '/flavors/jerky-azul.webp' },
    { id: 'zombie', src: '/flavors/jerky-zombie.webp' },
    { id: 'pickleConChile', src: '/flavors/jerky-pickle-con-chile.webp' },
    { id: 'picaChelada', src: '/flavors/jerky-pica-chelada.webp' },
    { id: 'micheMission', src: '/flavors/jerky-miche-mission.webp' },
  ],

  /** Hero carousel sources — flavor close-ups, advances every 3s. */
  heroImageUrls: [
    '/flavors/jerky-sason-original.webp',
    '/flavors/jerky-lemon-pepper.webp',
    '/flavors/jerky-tajin-original.webp',
    '/flavors/jerky-chile-habanero.webp',
    '/flavors/jerky-chile-de-arbol.webp',
    '/flavors/jerky-hot-flamas.webp',
    '/flavors/jerky-red-taki.webp',
    '/flavors/jerky-azul.webp',
    '/flavors/jerky-zombie.webp',
    '/flavors/jerky-pickle-con-chile.webp',
    '/flavors/jerky-pica-chelada.webp',
    '/flavors/jerky-miche-mission.webp',
  ],

  /** Single appetizing variety shot used as a backdrop on the carne seca card. */
  varietyHero: '/flavors/jerky-variety-hero.webp',

  /** Official logo in public/ (PNG or SVG). */
  logoPath: '/logo.png',
}
