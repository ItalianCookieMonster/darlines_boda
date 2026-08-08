/**
 * ═══════════════════════════════════════════════════════════════
 *  WEDDING WEBSITE — MAIN SCRIPT
 *  Vanilla JS. No dependencies. Works without a build step.
 * ═══════════════════════════════════════════════════════════════
 */

/* ─────────────────────────────────────────────────────────────
   STATE
───────────────────────────────────────────────────────────────*/
let currentLang   = 'en';
let guestCounter  = 0;       // ever-increasing ID for guest rows
let lastSubmitAt  = 0;       // ms timestamp — rate limiting
let formSubmitted = false;   // prevent duplicate submissions

/* ─────────────────────────────────────────────────────────────
   TRANSLATION HELPERS
───────────────────────────────────────────────────────────────*/

/** Resolve a dot-path key like 'rsvp.guests.addBtn' from the current language. */
function t(path, replacements) {
  const parts  = path.split('.');
  const lang   = TRANSLATIONS[currentLang] || TRANSLATIONS['en'];
  const fallback = TRANSLATIONS['en'];

  let value = parts.reduce((obj, key) => obj && obj[key], lang);
  if (value === undefined) {
    value = parts.reduce((obj, key) => obj && obj[key], fallback);
  }
  if (value === undefined) return path;

  if (replacements && typeof value === 'string') {
    Object.entries(replacements).forEach(([k, v]) => {
      value = value.replaceAll(`{${k}}`, v);
    });
  }

  return value ?? path;
}

/** Apply translations to every element with data-i18n / data-i18n-placeholder / data-i18n-aria. */
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (typeof val === 'string') el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (typeof val === 'string') el.placeholder = val;
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const val = t(key);
    if (typeof val === 'string') el.setAttribute('aria-label', val);
  });

  // Mark active language buttons
  document.querySelectorAll('.lang-switch-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === currentLang);
  });

  // Update document language
  document.documentElement.lang = currentLang;

  // Update dynamic sections
  renderAbout();
  renderSchedule();
  renderBarcelona();
  updateGuestRowLabels();
  updateRSVPDeadline();
  updateFooter();
  applyConfigLinks();
}

/* ─────────────────────────────────────────────────────────────
   LANGUAGE MANAGEMENT
───────────────────────────────────────────────────────────────*/

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'en';
  currentLang = lang;
  localStorage.setItem('wedding_lang', lang);
  applyTranslations();
}

function initLanguage() {
  const saved   = localStorage.getItem('wedding_lang');
  const browser = (navigator.language || navigator.userLanguage || 'en').slice(0, 2).toLowerCase();
  const supported = Object.keys(TRANSLATIONS);

  if (saved && supported.includes(saved)) {
    // Returning visitor — apply saved language and skip modal
    currentLang = saved;
    applyTranslations();
  } else if (!saved) {
    // First visit — show language selection modal
    showLanguageModal();
    // Pre-apply browser language if supported so modal itself is translated
    const guess = supported.includes(browser) ? browser : 'en';
    currentLang = guess;
    applyTranslations();
  } else {
    currentLang = 'en';
    applyTranslations();
  }
}

function showLanguageModal() {
  const modal    = document.getElementById('lang-modal');
  const backdrop = document.getElementById('lang-modal-backdrop');
  modal.hidden    = false;
  backdrop.hidden = false;
  document.body.style.overflow = 'hidden';

  // Focus the first button
  const first = modal.querySelector('button');
  if (first) first.focus();
}

function hideLanguageModal() {
  const modal    = document.getElementById('lang-modal');
  const backdrop = document.getElementById('lang-modal-backdrop');
  modal.hidden    = true;
  backdrop.hidden = true;
  document.body.style.overflow = '';
}

/* ─────────────────────────────────────────────────────────────
   NAVIGATION
───────────────────────────────────────────────────────────────*/

function initNav() {
  const toggle    = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    mobileNav.hidden = isOpen;
  });

  // Close nav on link click (mobile)
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      mobileNav.hidden = true;
    });
  });

  // Scroll behaviour — add shadow to header on scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 8 ? '0 2px 12px rgba(0,0,0,0.1)' : '';
  }, { passive: true });
}

/* ─────────────────────────────────────────────────────────────
   SECTION VISIBILITY
───────────────────────────────────────────────────────────────*/

function applySectionVisibility() {
  const map = {
    hero:        '#hero',
    event:       '#event',
    rsvp:        '#rsvp',
    barcelona:   '#barcelona',
    otherEvents: '#other-events',
    whatsapp:    '#whatsapp',
  };

  const sections = SITE_CONFIG.sections || {};
  Object.entries(map).forEach(([key, selector]) => {
    const el = document.querySelector(selector);
    if (el && sections[key] === false) {
      el.hidden = true;
    }
  });
}

/* ─────────────────────────────────────────────────────────────
   CONFIG LINKS (Maps, Spotify, WhatsApp)
───────────────────────────────────────────────────────────────*/

function applyConfigLinks() {
  // Google Maps
  const mapBtn = document.getElementById('venue-map-btn');
  if (mapBtn) {
    if (SITE_CONFIG.googleMapsUrl) {
      mapBtn.href = SITE_CONFIG.googleMapsUrl;
      mapBtn.removeAttribute('aria-disabled');
    } else {
      mapBtn.href = `https://www.google.com/maps/search/Estaci%C3%B3+de+Fran%C3%A7a,+Barcelona`;
      mapBtn.removeAttribute('aria-disabled');
    }
  }

  // Spotify
  const spotifyBtn          = document.getElementById('spotify-btn');
  const spotifyNotConfigured= document.getElementById('spotify-not-configured');
  if (spotifyBtn) {
    if (SITE_CONFIG.spotifyPlaylistUrl) {
      spotifyBtn.href    = SITE_CONFIG.spotifyPlaylistUrl;
      spotifyBtn.hidden  = false;
      if (spotifyNotConfigured) spotifyNotConfigured.hidden = true;
    } else {
      spotifyBtn.hidden  = true;
      if (spotifyNotConfigured) spotifyNotConfigured.hidden = false;
    }
  }

  // WhatsApp
  const waBtn          = document.getElementById('whatsapp-btn');
  const waNotConfigured= document.getElementById('whatsapp-not-configured');
  if (waBtn) {
    if (SITE_CONFIG.whatsappCommunityUrl) {
      waBtn.href   = SITE_CONFIG.whatsappCommunityUrl;
      waBtn.hidden = false;
      if (waNotConfigured) waNotConfigured.hidden = true;
    } else {
      waBtn.hidden = true;
      if (waNotConfigured) waNotConfigured.hidden = false;
    }
  }

  // RSVP endpoint notice
  const devNotice = document.getElementById('rsvp-dev-notice');
  if (devNotice) {
    devNotice.hidden = !!SITE_CONFIG.rsvpEndpoint;
  }
}

/* ─────────────────────────────────────────────────────────────
   HERO DATE
───────────────────────────────────────────────────────────────*/

function renderHeroDate() {
  const el = document.getElementById('hero-date');
  if (el) el.textContent = SITE_CONFIG.dateDisplay || '24 April 2027';

  const venueEl = document.getElementById('venue-date');
  if (venueEl) venueEl.textContent = SITE_CONFIG.dateDisplay || '24 April 2027';

  const timeEl = document.getElementById('venue-time');
  if (timeEl) {
    const range = t('venue.timeRange', {
      startTime: SITE_CONFIG.startTime || '15:00',
      endTime:   SITE_CONFIG.endTime   || '22:00',
    });
    timeEl.textContent = range;
  }
}

/* ─────────────────────────────────────────────────────────────
   ABOUT ITEMS
───────────────────────────────────────────────────────────────*/

function renderAbout() {
  const list = document.getElementById('about-items');
  if (!list) return;

  const items = t('about.items');
  if (!Array.isArray(items)) return;

  list.innerHTML = items.map(item => `
    <li class="about-item">
      <span class="about-item__icon" aria-hidden="true">${item.icon || ''}</span>
      <span class="about-item__text">${escapeHtml(item.text)}</span>
    </li>
  `).join('');
}

/* ─────────────────────────────────────────────────────────────
   BARCELONA SECTION
───────────────────────────────────────────────────────────────*/

function renderBarcelona() {
  const areasList = document.getElementById('barcelona-areas');
  if (areasList) {
    const items = t('barcelona.areas.items');
    if (Array.isArray(items)) {
      areasList.innerHTML = items.map(item => `
        <div class="neighbourhood-card">
          <p class="neighbourhood-card__name">${escapeHtml(item.name)}</p>
          <p class="neighbourhood-card__desc">${escapeHtml(item.desc)}</p>
        </div>
      `).join('');
    }
  }

  renderBarcelonaTipsList('barcelona-safety', 'barcelona.safety.items');
  renderBarcelonaTipsList('barcelona-booking', 'barcelona.booking.items');
  renderBarcelonaTipsList('barcelona-eating-drinking', 'barcelona.eatingDrinking.items');
  renderBarcelonaTipsList('barcelona-tips', 'barcelona.tips.items');
}

function renderBarcelonaTipsList(elementId, translationKey) {
  const list = document.getElementById(elementId);
  if (!list) return;
  const items = t(translationKey);
  if (Array.isArray(items)) {
    list.innerHTML = items.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  }
}

/* ─────────────────────────────────────────────────────────────
   SCHEDULE
───────────────────────────────────────────────────────────────*/

function renderSchedule() {
  // Schedule TBD — nothing to render yet
}

/* ─────────────────────────────────────────────────────────────
   RECOMMENDATIONS
───────────────────────────────────────────────────────────────*/

function renderRecommendations() {
  const list = document.getElementById('recommendations-list');
  if (!list) return;

  list.innerHTML = SITE_CONFIG.recommendations.map(id => {
    const item = t(`recommendations.items.${id}`);
    if (!item || typeof item !== 'object') return '';
    return `
      <li class="recommendation-item">
        <span class="recommendation-item__icon" aria-hidden="true">${item.icon || '•'}</span>
        <span class="recommendation-item__text">${escapeHtml(item.text)}</span>
      </li>
    `;
  }).join('');
}

/* ─────────────────────────────────────────────────────────────
   ACCOMMODATION
───────────────────────────────────────────────────────────────*/

function renderAccommodation() {
  const list = document.getElementById('accommodation-list');
  if (!list) return;

  const recs = SITE_CONFIG.accommodation || [];
  if (recs.length === 0) {
    list.innerHTML = `<p class="accommodation-no-recs">${escapeHtml(t('accommodation.noRecommendations'))}</p>`;
    return;
  }

  list.innerHTML = recs.map(rec => `
    <div class="accommodation-card">
      <p class="accommodation-name">${escapeHtml(rec.name)}</p>
      <p class="accommodation-meta">
        ${rec.area ? `<span>${escapeHtml(t('accommodation.areaLabel'))}: ${escapeHtml(rec.area)}</span>` : ''}
        ${rec.distanceFromVenue ? ` · ${escapeHtml(rec.distanceFromVenue)}` : ''}
        ${rec.priceCategory ? ` · ${escapeHtml(rec.priceCategory)}` : ''}
      </p>
      ${rec.notes ? `<p class="accommodation-notes">${escapeHtml(rec.notes)}</p>` : ''}
      ${rec.link ? `<a href="${escapeAttr(rec.link)}" class="btn btn--outline btn--small" target="_blank" rel="noopener noreferrer">View →</a>` : ''}
    </div>
  `).join('');
}

/* ─────────────────────────────────────────────────────────────
   ADDITIONAL EVENTS
───────────────────────────────────────────────────────────────*/

function renderAdditionalEvents() {
  const list = document.getElementById('additional-events-list');
  if (!list) return;

  const events = (SITE_CONFIG.additionalEvents || []).filter(e => e.enabled);

  if (events.length === 0) {
    list.innerHTML = `<p class="additional-events-placeholder">${escapeHtml(t('additionalEvents.comingSoon'))}</p>`;
    return;
  }

  list.innerHTML = events.map(ev => {
    const itemT   = t(`additionalEvents.items.${ev.id}`);
    const title   = typeof itemT === 'object' ? itemT.title : ev.id;
    const desc    = typeof itemT === 'object' ? itemT.desc  : '';
    const timeStr = [ev.startTime, ev.endTime].filter(Boolean).join(' – ');

    return `
      <div class="additional-event-card">
        <h3 class="additional-event-card__title">${escapeHtml(title)}</h3>
        <p class="additional-event-card__meta">
          ${ev.date ? `${formatDate(ev.date)}` : ''}
          ${timeStr ? ` · ${timeStr}` : ''}
          ${ev.location ? `<br>${escapeHtml(ev.location)}` : ''}
          ${ev.rsvpRequired ? `<br><em>${escapeHtml(t('additionalEvents.rsvpNote'))}</em>` : ''}
        </p>
        <p class="additional-event-card__desc">${escapeHtml(desc || t('additionalEvents.comingSoon'))}</p>
        <div class="additional-event-card__actions">
          ${ev.mapsUrl ? `<a href="${escapeAttr(ev.mapsUrl)}" class="btn btn--outline btn--small" target="_blank" rel="noopener noreferrer">${escapeHtml(t('additionalEvents.mapsBtn'))}</a>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

/* ─────────────────────────────────────────────────────────────
   FAQ ACCORDION
───────────────────────────────────────────────────────────────*/

function renderFAQ() {
  const list = document.getElementById('faq-list');
  if (!list) return;

  const items = t('faq.items');
  if (!Array.isArray(items)) return;

  const couple1 = SITE_CONFIG.couple?.name1 || 'Liam';
  const couple2 = SITE_CONFIG.couple?.name2 || 'Valentina';

  list.innerHTML = items.map((item, i) => {
    const answer = (item.a || '').replace('{name1}', couple1).replace('{name2}', couple2);
    return `
      <div class="faq-item" role="presentation">
        <dt>
          <button
            class="faq-question"
            aria-expanded="false"
            aria-controls="faq-answer-${i}"
            id="faq-q-${i}"
          >
            <span>${escapeHtml(item.q)}</span>
            <svg class="faq-question__chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M5 7.5l5 5 5-5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </dt>
        <dd class="faq-answer" id="faq-answer-${i}" aria-labelledby="faq-q-${i}" role="region">
          ${escapeHtml(answer)}
        </dd>
      </div>
    `;
  }).join('');

  // Attach accordion behaviour
  list.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const isOpen = item.classList.contains('is-open');
      // Close all
      list.querySelectorAll('.faq-item.is-open').forEach(i => {
        i.classList.remove('is-open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      // Toggle current
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ─────────────────────────────────────────────────────────────
   RSVP DEADLINE & FOOTER
───────────────────────────────────────────────────────────────*/

function updateRSVPDeadline() {
  const el = document.getElementById('rsvp-deadline');
  if (!el) return;

  if (SITE_CONFIG.rsvpDeadline) {
    el.textContent = t('rsvp.deadline', { date: formatDate(SITE_CONFIG.rsvpDeadline) });
  } else {
    el.hidden = true;
  }
}

function updateFooter() {
  // Last updated
  const updatedEl = document.getElementById('footer-updated');
  if (updatedEl && SITE_CONFIG.lastUpdated) {
    updatedEl.textContent = t('footer.updated', { date: SITE_CONFIG.lastUpdated });
  }

  // Contact links
  const contactWrap = document.getElementById('footer-contact');
  const contactLinks = document.getElementById('footer-contact-links');
  const { liam, valentina, email } = SITE_CONFIG.contact || {};

  if (contactWrap && contactLinks && (liam || valentina || email)) {
    contactWrap.hidden = false;
    const links = [];
    if (liam)      links.push(`<a href="tel:${escapeAttr(liam)}">${escapeHtml(liam)}</a>`);
    if (valentina) links.push(`<a href="tel:${escapeAttr(valentina)}">${escapeHtml(valentina)}</a>`);
    if (email)     links.push(`<a href="mailto:${escapeAttr(email)}">${escapeHtml(email)}</a>`);
    contactLinks.innerHTML = links.join('');
  }
}

/* ─────────────────────────────────────────────────────────────
   RSVP FORM — GUEST MANAGEMENT  (removed — form is now simple)
───────────────────────────────────────────────────────────────*/

function createGuestRow(number) {
  guestCounter++;
  const id = guestCounter;

  const row = document.createElement('div');
  row.className   = 'guest-row';
  row.dataset.gid = id;
  row.setAttribute('role', 'group');
  row.setAttribute('aria-label', `Guest ${number}`);

  row.innerHTML = `
    <div class="guest-row__header">
      <span class="guest-row__number">${number}.</span>
      <div class="guest-row__name-input form-field" style="flex:1">
        <label class="form-label visually-hidden" for="guest-name-${id}" data-guest-label="name">${escapeHtml(t('rsvp.guests.namePh'))}</label>
        <input
          class="form-input"
          type="text"
          id="guest-name-${id}"
          name="guest_name_${id}"
          placeholder="${escapeAttr(t('rsvp.guests.namePh'))}"
          autocomplete="off"
          aria-required="true"
          aria-label="${escapeAttr(t('rsvp.guests.namePh'))}"
        />
        <p class="field-error" id="err-gname-${id}" role="alert" aria-live="polite" hidden></p>
      </div>
      <button type="button" class="guest-row__remove-btn" data-gid="${id}" aria-label="${escapeAttr(t('rsvp.guests.removeBtn'))}">
        ${escapeHtml(t('rsvp.guests.removeBtn'))}
      </button>
    </div>

    <div class="guest-row__details">

      <!-- Dietary -->
      <div class="guest-row__field">
        <label class="guest-row__label" for="guest-diet-${id}">${escapeHtml(t('rsvp.guests.dietLabel'))}</label>
        <select class="guest-row__select" id="guest-diet-${id}" name="guest_diet_${id}">
          <option value="none">${escapeHtml(t('rsvp.guests.dietNone'))}</option>
          <option value="vegetarian">${escapeHtml(t('rsvp.guests.dietVegetarian'))}</option>
          <option value="vegan">${escapeHtml(t('rsvp.guests.dietVegan'))}</option>
          <option value="other">${escapeHtml(t('rsvp.guests.dietOther'))}</option>
        </select>
      </div>

      <!-- Dietary other (shown when "other" selected) -->
      <div class="guest-row__field" id="guest-diet-other-wrap-${id}" hidden>
        <label class="guest-row__label" for="guest-diet-other-${id}">${escapeHtml(t('rsvp.guests.dietOtherPh'))}</label>
        <input
          class="guest-row__input"
          type="text"
          id="guest-diet-other-${id}"
          name="guest_diet_other_${id}"
          autocomplete="off"
        />
      </div>

      <!-- Allergies -->
      <div class="guest-row__field" style="grid-column: 1 / -1">
        <label class="guest-row__label" for="guest-allergies-${id}">${escapeHtml(t('rsvp.guests.allergies'))}</label>
        <input
          class="guest-row__input"
          type="text"
          id="guest-allergies-${id}"
          name="guest_allergies_${id}"
          placeholder="${escapeAttr(t('rsvp.guests.allergiesPh'))}"
          autocomplete="off"
        />
      </div>

      <!-- Child under 10 -->
      <div class="guest-row__field guest-row__child-toggle-wrap">
        <label class="guest-row__child-toggle" for="guest-child-${id}">
          <input type="checkbox" id="guest-child-${id}" name="guest_child_${id}" data-gid="${id}" />
          <span data-guest-label="isChild">${escapeHtml(t('rsvp.guests.isChild'))}</span>
        </label>
      </div>

      <!-- Phone -->
      <div class="guest-row__field" style="grid-column: 1 / -1">
        <label class="guest-row__label" for="guest-phone-${id}" data-guest-label="phoneLabel">${escapeHtml(t('rsvp.guests.phoneLabel'))}</label>
        <input
          class="guest-row__input"
          type="tel"
          id="guest-phone-${id}"
          name="guest_phone_${id}"
          placeholder="${escapeAttr(t('rsvp.guests.phonePh'))}"
          autocomplete="tel"
        />
        <p class="guest-row__hint" data-guest-label="phoneHint">${escapeHtml(t('rsvp.guests.phoneHint'))}</p>
      </div>

    </div>
  `;

  // Dietary select → show/hide "other" text input
  const dietSelect   = row.querySelector(`#guest-diet-${id}`);
  const dietOtherWrap= row.querySelector(`#guest-diet-other-wrap-${id}`);
  dietSelect.addEventListener('change', () => {
    dietOtherWrap.hidden = dietSelect.value !== 'other';
  });

  // Child checkbox toggle
  const childCheckbox = row.querySelector(`#guest-child-${id}`);
  childCheckbox.addEventListener('change', updateTotals);

  // Name change → update totals
  const nameInput = row.querySelector(`#guest-name-${id}`);
  nameInput.addEventListener('input', updateTotals);

  // Remove button
  const removeBtn = row.querySelector('.guest-row__remove-btn');
  removeBtn.addEventListener('click', () => {
    row.remove();
    renumberGuestRows();
    updateTotals();
  });

  return row;
}

function addGuest() {
  const list    = document.getElementById('guest-list');
  const number  = list.querySelectorAll('.guest-row').length + 1;
  const row     = createGuestRow(number);
  list.appendChild(row);
  updateTotals();

  // Focus the name input
  const nameInput = row.querySelector('input[type="text"]');
  if (nameInput) nameInput.focus();
}

function renumberGuestRows() {
  const list = document.getElementById('guest-list');
  list.querySelectorAll('.guest-row').forEach((row, i) => {
    const numEl = row.querySelector('.guest-row__number');
    if (numEl) numEl.textContent = `${i + 1}.`;
  });
}

function updateTotals() {
  const list     = document.getElementById('guest-list');
  const rows     = list.querySelectorAll('.guest-row');
  let listed = 0, children = 0;

  rows.forEach(row => {
    const gid     = row.dataset.gid;
    const name    = row.querySelector(`#guest-name-${gid}`)?.value?.trim();
    const isChild = row.querySelector(`#guest-child-${gid}`)?.checked;

    if (name) {
      listed++;
      if (isChild) children++;
    }
  });

  setText('total-listed',   listed);
  setText('total-children', children);
}

function updateGuestRowLabels() {
  // Re-apply translated labels within all existing guest rows
  const list = document.getElementById('guest-list');
  if (!list) return;

  list.querySelectorAll('.guest-row').forEach(row => {
    row.querySelectorAll('[data-guest-label]').forEach(el => {
      const key = el.dataset.guestLabel;
      const map = {
        name:       'rsvp.guests.namePh',
        attending:  'rsvp.guests.attending',
        allergies:  'rsvp.guests.allergies',
        isChild:    'rsvp.guests.isChild',
        age:        'rsvp.guests.age',
        notes:      'rsvp.guests.notes',
        phoneLabel: 'rsvp.guests.phoneLabel',
        phoneHint:  'rsvp.guests.phoneHint',
      };
      if (map[key]) el.textContent = t(map[key]);
    });
  });
}

/* ─────────────────────────────────────────────────────────────
   RSVP FORM — VALIDATION
───────────────────────────────────────────────────────────────*/

function showError(id, msg) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg;
  el.hidden = false;
}

function clearError(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = '';
  el.hidden = true;
}

function markInvalid(inputId) {
  const el = document.getElementById(inputId);
  if (el) el.classList.add('is-invalid');
}

function markValid(inputId) {
  const el = document.getElementById(inputId);
  if (el) el.classList.remove('is-invalid');
}

function validateForm() {
  let valid = true;

  // Guests — at least one name required, at least one phone required
  const guestList = document.getElementById('guest-list');
  const guestRows = guestList ? guestList.querySelectorAll('.guest-row') : [];
  let hasGuests = false;
  let hasPhone  = false;

  guestRows.forEach(row => {
    const gid       = row.dataset.gid;
    const nameInput = document.getElementById(`guest-name-${gid}`);
    const phone     = document.getElementById(`guest-phone-${gid}`)?.value?.trim();

    if (nameInput && !nameInput.value.trim()) {
      showError(`err-gname-${gid}`, t('rsvp.validation.nameRequired'));
      markInvalid(`guest-name-${gid}`);
      valid = false;
    } else if (nameInput) {
      clearError(`err-gname-${gid}`);
      markValid(`guest-name-${gid}`);
      hasGuests = true;
    }

    if (phone) hasPhone = true;
  });

  if (!hasGuests) {
    showError('err-guests', t('rsvp.validation.noGuests'));
    valid = false;
  } else {
    clearError('err-guests');
  }

  if (hasGuests && !hasPhone) {
    showError('err-phone-group', t('rsvp.validation.noPhone'));
    valid = false;
  } else {
    clearError('err-phone-group');
  }

  // Consent
  const consent = document.getElementById('consent');
  if (!consent.checked) {
    showError('err-consent', t('rsvp.validation.mustConsent'));
    valid = false;
  } else {
    clearError('err-consent');
  }

  return valid;
}

/* ─────────────────────────────────────────────────────────────
   RSVP FORM — PAYLOAD BUILDER
───────────────────────────────────────────────────────────────*/

function buildPayload() {
  const message = document.getElementById('extra-message')?.value.trim() || '';
  const honeypot   = document.getElementById('hp-name').value;

  const guests = [];
  const list   = document.getElementById('guest-list');
  if (list) {
    list.querySelectorAll('.guest-row').forEach(row => {
      const gid      = row.dataset.gid;
      const gname    = document.getElementById(`guest-name-${gid}`)?.value.trim() || '';
      const gchild   = document.getElementById(`guest-child-${gid}`)?.checked || false;
      const gdiet    = document.getElementById(`guest-diet-${gid}`)?.value || 'none';
      const gdietOth = document.getElementById(`guest-diet-other-${gid}`)?.value.trim() || '';
      const gallerg  = document.getElementById(`guest-allergies-${gid}`)?.value.trim() || '';
      const gphone   = document.getElementById(`guest-phone-${gid}`)?.value.trim() || '';
      if (gname) {
        guests.push({
          name:      gname,
          isChild:   gchild,
          dietary:   gdiet === 'other' ? gdietOth || 'other' : gdiet,
          allergies: gallerg,
          phone:     gphone,
        });
      }
    });
  }

  const totals = {
    listed:   guests.length,
    children: guests.filter(g => g.isChild).length,
  };

  return {
    submissionId: generateId(),
    timestamp:    new Date().toISOString(),
    language:     currentLang,
    honeypot,
    guests,
    totals,
    message,
  };
}

/* ─────────────────────────────────────────────────────────────
   RSVP FORM — CONFIRMATION MODAL
───────────────────────────────────────────────────────────────*/

function showConfirmModal(payload) {
  const modal   = document.getElementById('confirm-modal');
  const summary = document.getElementById('confirm-summary');

  const guestNames = (payload.guests || [])
    .map(g => {
      let s = g.name;
      if (g.isChild) s += ' (child)';
      if (g.phone)   s += ` — ${g.phone}`;
      return s;
    })
    .join(', ');

  const rows = [
    [t('rsvp.totals.listed'),    payload.totals.listed],
    [t('rsvp.guests.legend'),    guestNames],
    ...(payload.message ? [[t('rsvp.extra.message'), payload.message]] : []),
  ];

  summary.innerHTML = `<dl class="confirm-summary">
    ${rows.map(([k, v]) => `
      <div class="confirm-summary-row">
        <dt>${escapeHtml(String(k))}</dt>
        <dd>${escapeHtml(String(v))}</dd>
      </div>
    `).join('')}
  </dl>`;

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  document.getElementById('confirm-back-btn').focus();

  // Store payload for final submission
  modal._payload = payload;
}

function hideConfirmModal() {
  const modal = document.getElementById('confirm-modal');
  modal.hidden = true;
  document.body.style.overflow = '';
  document.getElementById('rsvp-submit-btn').focus();
}

/* ─────────────────────────────────────────────────────────────
   RSVP FORM — SUBMISSION
───────────────────────────────────────────────────────────────*/

async function submitPayload(payload) {
  const submitBtn = document.getElementById('confirm-send-btn');
  const backBtn   = document.getElementById('confirm-back-btn');
  const backdrop  = document.getElementById('confirm-backdrop');

  const lockModal = () => {
    submitBtn.disabled    = true;
    submitBtn.textContent = t('rsvp.sending');
    backBtn.disabled      = true;
    if (backdrop) backdrop.style.pointerEvents = 'none';
  };

  const unlockModal = () => {
    submitBtn.disabled    = false;
    submitBtn.textContent = t('rsvp.confirmBtn');
    backBtn.disabled      = false;
    if (backdrop) backdrop.style.pointerEvents = '';
  };

  lockModal();

  // Spam: honeypot
  if (payload.honeypot) {
    console.log('[RSVP] Honeypot triggered — submission blocked.');
    hideConfirmModal();
    return;
  }

  const endpoint = SITE_CONFIG.rsvpEndpoint;

  if (!endpoint) {
    // Development mode — log to console
    console.group('[RSVP] Development mode — payload:');
    console.log(JSON.stringify(payload, null, 2));
    console.groupEnd();
    showSuccess();
    hideConfirmModal();
    return;
  }

  try {
    const response = await fetch(endpoint, {
      method:  'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body:    JSON.stringify(sanitisePayload(payload)),
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    formSubmitted = true;
    showSuccess();
    hideConfirmModal();
  } catch (err) {
    console.error('[RSVP] Submission error:', err);
    showError_rsvp();
    hideConfirmModal();
  } finally {
    unlockModal();
  }
}

function showSuccess() {
  document.getElementById('rsvp-form').hidden    = true;
  document.getElementById('rsvp-success').hidden = false;
}

function showError_rsvp() {
  document.getElementById('rsvp-error').hidden = false;
  document.getElementById('rsvp-error').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/** Sanitise values to prevent formula injection in Google Sheets. */
function sanitisePayload(payload) {
  function sanitise(v) {
    if (typeof v !== 'string') return v;
    return /^[=+\-@\t\r]/.test(v) ? `'${v}` : v;
  }

  function walk(obj) {
    if (typeof obj === 'string') return sanitise(obj);
    if (Array.isArray(obj)) return obj.map(walk);
    if (obj && typeof obj === 'object') {
      return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, walk(v)]));
    }
    return obj;
  }

  return walk(payload);
}

/* ─────────────────────────────────────────────────────────────
   RSVP FORM — INIT
───────────────────────────────────────────────────────────────*/

function initRSVPForm() {
  const form      = document.getElementById('rsvp-form');
  const addBtn    = document.getElementById('add-guest-btn');
  const backBtn   = document.getElementById('confirm-back-btn');
  const sendBtn   = document.getElementById('confirm-send-btn');
  const retryBtn  = document.getElementById('rsvp-retry-btn');
  const backdrop  = document.getElementById('confirm-backdrop');

  if (!form) return;

  // Confirm-attendance toggle — show/hide the form details
  const confirmCheckbox = document.getElementById('confirm-attending');
  const formDetails     = document.getElementById('rsvp-form-details');
  confirmCheckbox?.addEventListener('change', () => {
    formDetails.hidden = !confirmCheckbox.checked;
    if (confirmCheckbox.checked && document.getElementById('guest-list').children.length === 0) {
      addGuest();
    }
  });

  document.getElementById('add-guest-btn')?.addEventListener('click', addGuest);

  // Show confirmation summary before submitting
  form.addEventListener('submit', e => {
    e.preventDefault();

    // Rate limiting (5 seconds between attempts)
    const now = Date.now();
    if (now - lastSubmitAt < 5000) return;
    lastSubmitAt = now;

    // Prevent double submission
    if (formSubmitted) return;

    if (!validateForm()) {
      // Scroll to first error
      const firstError = form.querySelector('.field-error:not([hidden])');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const payload = buildPayload();
    showConfirmModal(payload);
  });

  // Back from modal
  backBtn?.addEventListener('click', hideConfirmModal);
  backdrop?.addEventListener('click', hideConfirmModal);

  // Final send
  sendBtn?.addEventListener('click', () => {
    const modal = document.getElementById('confirm-modal');
    if (modal._payload) submitPayload(modal._payload);
  });

  // Retry after error
  retryBtn?.addEventListener('click', () => {
    document.getElementById('rsvp-error').hidden = true;
    formSubmitted = false;
  });

  // Keyboard: close modal on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('confirm-modal');
      if (!modal.hidden) hideConfirmModal();
    }
  });
}

/* ─────────────────────────────────────────────────────────────
   UTILITIES
───────────────────────────────────────────────────────────────*/

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function escapeAttr(str) {
  return escapeHtml(str);
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function formatDate(isoDate) {
  try {
    const d = new Date(isoDate + 'T00:00:00');
    return d.toLocaleDateString(currentLang === 'en' ? 'en-GB' : currentLang, {
      day:   'numeric',
      month: 'long',
      year:  'numeric',
    });
  } catch {
    return isoDate;
  }
}

/* ─────────────────────────────────────────────────────────────
   LANGUAGE BUTTONS INIT
───────────────────────────────────────────────────────────────*/

function initLanguageButtons() {
  // Buttons in the header / mobile nav / hero
  document.querySelectorAll('.lang-switch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang) {
        setLanguage(lang);
        // Close mobile nav if open
        const toggle = document.getElementById('nav-toggle');
        const nav    = document.getElementById('mobile-nav');
        if (toggle && nav && toggle.getAttribute('aria-expanded') === 'true') {
          toggle.setAttribute('aria-expanded', 'false');
          nav.hidden = true;
        }
      }
    });
  });

  // Buttons in the language selection modal
  document.querySelectorAll('[data-lang].lang-btn--full').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang) {
        setLanguage(lang);
        hideLanguageModal();
      }
    });
  });
}

/* ─────────────────────────────────────────────────────────────
   SMOOTH SCROLL FOR ANCHOR LINKS
───────────────────────────────────────────────────────────────*/

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const header = document.querySelector('.site-header');
      const offset = header ? header.offsetHeight + 8 : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ─────────────────────────────────────────────────────────────
   BOOTSTRAP
───────────────────────────────────────────────────────────────*/

function init() {
  applySectionVisibility();
  initLanguageButtons();
  initLanguage();         // applies translations, renders all sections
  renderHeroDate();
  initNav();
  initRSVPForm();
  initSmoothScroll();
}

document.addEventListener('DOMContentLoaded', init);
