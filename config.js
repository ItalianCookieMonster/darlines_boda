/**
 * ═══════════════════════════════════════════════════════════════
 *  WEDDING WEBSITE — CENTRAL CONFIGURATION
 *  Edit this file to update details, links, and settings.
 *  No HTML or CSS knowledge required.
 * ═══════════════════════════════════════════════════════════════
 */

const SITE_CONFIG = {

  // ── Couple ────────────────────────────────────────────────────
  couple: {
    name1: 'Liam',
    name2: 'Valentina',
  },

  // ── Event ─────────────────────────────────────────────────────
  date:         '2027-04-24',        // ISO format: YYYY-MM-DD
  dateDisplay:  '24 April 2027',
  venue:        'Estació de França',
  city:         'Barcelona',
  startTime:    '15:00',
  endTime:      '22:00',
  scheduleConfirmed: false,          // set true when times are finalised

  // ── External links ────────────────────────────────────────────
  // Leave as empty string '' if not yet available.
  rsvpEndpoint:         'https://script.google.com/macros/s/AKfycbxVCOZP0vMqdyY68Am_r-MdmSOMQpSIJe1JMl3iAwZKOfHBTIQLxc7zJgPKyrF_X61m/exec',          // Google Apps Script web app URL
  googleMapsUrl:        'https://www.google.com/maps/place/Estaci%C3%B3+de+Fran%C3%A7a/@41.3841122,2.1850552,17.14z/data=!4m6!3m5!1s0x12a4a301a3a606f7:0x750b54cb434df4f1!8m2!3d41.3840447!4d2.1865787!16s%2Fm%2F02qp6kh?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D',          // Full Google Maps URL for the venue
  spotifyPlaylistUrl:   'https://open.spotify.com/playlist/5RWVguwYQW1hEpZAypkMo5?si=elRAGGLDR7qM58QXRQ0iyQ&utm_source=copy-link&pt=eb356f4d15a4a366c874cfe8a845955d&pi=hXO_sWyLR6qNT',          // Shared Spotify playlist URL
  whatsappCommunityUrl: 'https://chat.whatsapp.com/FHwOxR4gWUK9gDpYHADV25?s=sh&p=i&mlu=4&amv=1',          // WhatsApp community / group invite URL

  // ── Contact ───────────────────────────────────────────────────
  // Leave as empty string '' to hide from the footer.
  contact: {
    liam:      '',                   // e.g. '+44 7700 000000'
    valentina: '',                   // e.g. '+34 600 000000'
    email:     '',                   // shared address if preferred
  },

  // ── RSVP deadline ─────────────────────────────────────────────
  rsvpDeadline: '2026-12-01',        // ISO format: YYYY-MM-DD

  // ── Section visibility ────────────────────────────────────────
  // Set false to hide a section completely.
  sections: {
    hero:        true,
    event:       true,
    rsvp:        true,
    barcelona:   true,
    otherEvents: true,
    whatsapp:    true,
  },

  // ── Schedule ──────────────────────────────────────────────────
  // Set time: '' when not yet confirmed.
  // Set confirmed: false to show "(provisional)" label.
  schedule: [
    { id: 'pre',      time: '',      confirmed: false },
    { id: 'arrival',  time: '15:00', confirmed: false },
    { id: 'welcome',  time: '15:30', confirmed: false },
    { id: 'cocktail', time: '',      confirmed: false },
    { id: 'music',    time: '',      confirmed: false },
    { id: 'dj',       time: '19:00', confirmed: false },
    { id: 'end',      time: '22:00', confirmed: false },
    { id: 'after',    time: '',      confirmed: false },
  ],

  // ── Recommendations ───────────────────────────────────────────
  // Remove or reorder item IDs to control what appears.
  recommendations: [
    'shoes',
    'standing',
    'walking',
    'jacket',
    'transport',
    'taxi',
    'accommodation',
    'noGifts',
    'updates',
  ],

  // ── Accommodation suggestions ─────────────────────────────────
  // Add objects here when recommendations are ready.
  // Example:
  // {
  //   name: 'Hotel Example',
  //   area: 'Born / Gothic Quarter',
  //   distanceFromVenue: '5–10 min walk',
  //   link: 'https://...',
  //   priceCategory: '€€',
  //   notes: 'Good value, book early.',
  // }
  accommodation: [],

  // ── Additional events ─────────────────────────────────────────
  // Set enabled: false to hide without deleting.
  additionalEvents: [
    {
      id:           'dayBefore',
      enabled:      false,
      date:         '2027-04-23',
      startTime:    '',
      endTime:      '',
      location:     '',
      mapsUrl:      '',
      rsvpRequired: false,
    },
    {
      id:           'dayAfter',
      enabled:      false,
      date:         '2027-04-25',
      startTime:    '',
      endTime:      '',
      location:     '',
      mapsUrl:      '',
      rsvpRequired: false,
    },
  ],

  // ── SEO / meta ────────────────────────────────────────────────
  seo: {
    canonicalUrl: '',                // e.g. 'https://liamandvalentina.com'
    ogImage:      '',                // absolute URL to a social-sharing image
    themeColor:   '#c8916c',
  },

  // ── Last updated ──────────────────────────────────────────────
  lastUpdated: '2025-08-01',
};
