# Liam & Valentina — Wedding Website

**24 April 2027 · Estació de França, Barcelona**

Static website. No build step. No npm. Open `index.html` in a browser or drag the folder into Netlify.

---

## File structure

```
/
├── index.html          Main page (HTML structure only — no hardcoded text)
├── styles.css          All styles
├── config.js           Wedding details, links, section visibility, schedule
├── translations.js     All text in EN · CA · IT · ES · FR
├── script.js           All JavaScript logic
├── netlify.toml        Netlify configuration
├── README.md           This file
├── assets/
│   ├── images/         Place venue photos here
│   └── icons/          Place favicon here (favicon.ico)
└── google-apps-script/
    └── Code.gs         Google Apps Script — paste into Apps Script editor
```

---

## Editing content

### Change wedding details

Open **`config.js`** and edit the values at the top:

```js
couple:      { name1: 'Liam', name2: 'Valentina' },
date:        '2027-04-24',
dateDisplay: '24 April 2027',
venue:       'Estació de França',
startTime:   '15:00',
endTime:     '22:00',
```

### Add or change links

In **`config.js`**:

```js
rsvpEndpoint:         '',   // ← Google Apps Script URL (see below)
googleMapsUrl:        '',   // ← Full Google Maps URL for the venue
spotifyPlaylistUrl:   '',   // ← Spotify playlist link
whatsappCommunityUrl: '',   // ← WhatsApp group invite link
```

Leave a field as `''` to hide the corresponding button.

### Edit text or translations

Open **`translations.js`**.

Each language is a block (`en`, `ca`, `it`, `es`, `fr`). Find the text you want to change and edit the value (right side of the colon). **Do not change the key names** (left side).

Example — change the hero welcome message in English:

```js
en: {
  hero: {
    welcome: 'Come celebrate with us.',  // ← edit this
```

### Add or edit schedule items

In **`config.js`**, find the `schedule` array. Each item has an `id` (matching a translation key), a `time` (or `''` if not yet known) and `confirmed: false/true`.

```js
schedule: [
  { id: 'arrival', time: '15:00', confirmed: false },
  { id: 'dj',      time: '19:00', confirmed: false },
  // add more here
],
```

The labels and descriptions for each item are in **`translations.js`** under `schedule.items`.

### Show or hide sections

In **`config.js`**, set any section to `false`:

```js
sections: {
  spotify:  false,   // ← hides the Spotify section
  gifts:    true,
},
```

### Add accommodation recommendations

In **`config.js`**, add objects to the `accommodation` array:

```js
accommodation: [
  {
    name:               'Hotel Example',
    area:               'Born / Gothic Quarter',
    distanceFromVenue:  '10 min walk',
    link:               'https://...',
    priceCategory:      '€€',
    notes:              'Book early — fills up fast.',
  },
],
```

### Enable additional events (day before / after)

In **`config.js`**, set `enabled: true` and fill in the details:

```js
additionalEvents: [
  {
    id:           'dayBefore',
    enabled:      true,          // ← make visible
    date:         '2027-04-23',
    startTime:    '19:00',
    endTime:      '22:00',
    location:     'Bar Example, Carrer de la...',
    mapsUrl:      'https://maps.google.com/...',
    rsvpRequired: false,
  },
],
```

The title and description are in **`translations.js`** under `additionalEvents.items.dayBefore`.

### Add a venue photo

1. Save your photo as `assets/images/venue.jpg`.
2. In `index.html`, find the comment that reads:
   ```html
   <!-- Replace the placeholder above with an <img> when a photo is available -->
   ```
3. Replace the `<div class="venue-image-placeholder">` block with:
   ```html
   <img src="assets/images/venue.jpg" alt="Estació de França, Barcelona" class="venue-image" loading="lazy" />
   ```

### Update contact details

In **`config.js`**:

```js
contact: {
  liam:      '+44 7700 000000',
  valentina: '+34 600 000000',
  email:     '',                   // shared email if preferred
},
```

Contact details appear in the footer. Leave as `''` to hide.

---

## Configuring Google Sheets (RSVP)

### Step 1 — Create the spreadsheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet.
2. Name it something like **Wedding RSVP – Liam & Valentina**.
3. Leave it open.

### Step 2 — Add the script

1. In the spreadsheet: **Extensions → Apps Script**.
2. Delete everything in the editor.
3. Open `google-apps-script/Code.gs` from this project and copy the entire file.
4. Paste it into the Apps Script editor.
5. Save (Ctrl+S or Cmd+S). Name the project e.g. "Wedding RSVP".

### Step 3 — Deploy

1. Click **Deploy → New deployment**.
2. Under **Select type**, choose **Web app**.
3. Fill in:
   - **Description**: RSVP endpoint
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**.
5. Authorise the script if prompted (click Advanced → proceed — this is safe for your own Google account).
6. Copy the **Web app URL** shown.

### Step 4 — Add the URL to the website

Open **`config.js`** and paste the URL:

```js
rsvpEndpoint: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec',
```

### Step 5 — Test

Submit a test RSVP on the website. Within a few seconds, a new row should appear in your Google Sheet.

The sheet has these columns:

| Column | Contents |
|---|---|
| Timestamp | When the submission was received |
| Submission ID | Unique ID for each submission |
| Main Contact Name | Name from the form |
| Email | Email address |
| Phone / WhatsApp | Phone number |
| Attendance Status | yes / no / unsure |
| Total Guests Listed | How many guests in the group |
| Total Attending | Attending count |
| Total Not Attending | Not attending count |
| Total Unsure | Unsure count |
| Children Under 10 | Child count |
| Guest Names | All guest names in one cell |
| Allergies | Food allergies |
| Dietary Requirements | Dietary needs |
| Accessibility Requirements | Mobility / access needs |
| Message | Optional message for the couple |
| Website Language | Which language the guest used |
| Full Guest Data (JSON) | Complete guest list as JSON |

---

## Testing the RSVP form

**Without Google Sheets (development mode):**

Leave `rsvpEndpoint` as `''`. The form will submit normally but log the payload to the browser console instead of sending it. A yellow notice appears on the RSVP section.

To see the payload:
1. Open the browser developer tools (F12 or Cmd+Option+I).
2. Go to the **Console** tab.
3. Submit the form.
4. Look for `[RSVP] Development mode — payload:`.

---

## Deploying to Netlify

### Option A — Drag and drop (simplest)

1. Go to [netlify.com](https://netlify.com) and sign in or create a free account.
2. Click **Add new site → Deploy manually**.
3. Drag your project folder into the drop zone.
4. Your site will be live at a random `.netlify.app` URL within seconds.

### Option B — Connect GitHub (recommended for updates)

1. Push the project to a GitHub repository.
2. In Netlify: **Add new site → Import an existing project → GitHub**.
3. Authorise Netlify and select your repository.
4. Build settings:
   - **Build command**: (leave blank)
   - **Publish directory**: `.` (a single dot, meaning the root)
5. Click **Deploy site**.
6. Every time you push to the `main` branch, Netlify will redeploy automatically.

### Adding a custom domain

1. In Netlify: **Site configuration → Domain management → Add a domain**.
2. Follow the instructions to update your DNS records.
3. Netlify provides a free HTTPS certificate automatically.

### Updating the site after deployment

**If you used drag-and-drop:** Go to **Deploys → Deploy manually** and drag the updated folder again.

**If you used GitHub:** Push your changes to the `main` branch. Netlify deploys automatically.

---

## Testing checklist

Before sharing the URL with guests, verify:

- [ ] Language selection modal appears on first visit
- [ ] Selecting a language closes the modal and translates the page
- [ ] Language is remembered on page refresh
- [ ] Language can be changed from the header switcher at any time
- [ ] `<html lang="…">` attribute updates when language is changed
- [ ] All five languages display correctly
- [ ] Hero date, venue and time are correct
- [ ] Google Maps button opens the correct location (or a sensible fallback)
- [ ] Spotify button is hidden if URL is blank
- [ ] WhatsApp button is hidden if URL is blank
- [ ] RSVP dev mode notice appears when `rsvpEndpoint` is blank
- [ ] Guest rows can be added with the "+ Add person" button
- [ ] Guest rows can be removed
- [ ] Totals update as guests are added/removed and attendance is changed
- [ ] Child age field appears only when "Child under 10" is ticked
- [ ] Form validation fires on submit (empty name, invalid email, etc.)
- [ ] Confirmation modal appears with a summary before sending
- [ ] "Go back and edit" returns to the form
- [ ] Honeypot field is not visible to users
- [ ] RSVP payload is logged to console in dev mode (no endpoint)
- [ ] Success message appears after submission
- [ ] Schedule renders from config data
- [ ] FAQ accordion opens and closes correctly
- [ ] Site is usable on a mobile screen (320px+)
- [ ] No console errors on page load
- [ ] `prefers-reduced-motion` disables animations
- [ ] All buttons and links have visible focus states
- [ ] Skip-to-content link works (Tab from page top)

---

## Notes for future updates

- **RSVP deadline**: Update `rsvpDeadline` in `config.js`.
- **Confirming the schedule**: Set `confirmed: true` on each item to remove the "Provisional" label.
- **Enabling additional events**: Set `enabled: true` in `config.js` and fill in the details.
- **Last updated date**: Update `lastUpdated` in `config.js` when making significant changes.
- **Adding a favicon**: Save as `assets/icons/favicon.ico` (16×16 and 32×32 sizes combined).
- **Adding an OG image** (for social sharing previews): Upload the image and set the URL in `config.js` under `seo.ogImage`.
