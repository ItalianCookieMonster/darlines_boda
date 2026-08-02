/**
 * ═══════════════════════════════════════════════════════════════
 *  RSVP — GOOGLE APPS SCRIPT ENDPOINT
 *  Receives RSVP submissions from the wedding website and writes
 *  them to a Google Sheet.
 *
 *  SETUP INSTRUCTIONS
 *  ──────────────────
 *  1. Open Google Sheets and create a new spreadsheet.
 *     Name it e.g. "Wedding RSVP – Liam & Valentina".
 *
 *  2. In the spreadsheet menu go to:
 *     Extensions → Apps Script
 *
 *  3. Delete the default function and paste ALL of this file.
 *
 *  4. Save (Ctrl+S / Cmd+S). Name the project e.g. "Wedding RSVP".
 *
 *  5. Click "Deploy" → "New deployment".
 *     - Type: Web app
 *     - Execute as: Me
 *     - Who has access: Anyone
 *     Click "Deploy".
 *
 *  6. Authorise the script (first time only):
 *     - Click "Authorise access"
 *     - Choose your Google account
 *     - Click "Advanced" → "Go to Wedding RSVP (unsafe)" (this is
 *       normal for personal scripts not submitted for review)
 *     - Click "Allow"
 *
 *  7. Copy the "Web app URL" shown after deployment.
 *
 *  8. Paste that URL into SITE_CONFIG.rsvpEndpoint in config.js.
 *
 *  9. Test by submitting the RSVP form on the website.
 *     A row should appear in the Google Sheet within seconds.
 *
 *  UPDATING THE SCRIPT
 *  ───────────────────
 *  After editing this file: Deploy → Manage deployments →
 *  Edit (pencil icon) → Version: New version → Deploy.
 *  The URL stays the same.
 *
 *  SHEET COLUMNS (auto-created on first submission)
 *  ─────────────────────────────────────────────────
 *  One row per guest. All guests from the same RSVP share the same Group ID.
 *
 *  Group ID | Timestamp | Main Contact Name | Email |
 *  Phone / WhatsApp | Attendance Status | Total in Group |
 *  Guest Name | Child Under 10 | Dietary | Allergies |
 *  Message | Website Language
 * ═══════════════════════════════════════════════════════════════
 */

// ── Configuration ──────────────────────────────────────────────

const SHEET_NAME = 'RSVPs';  // Tab name — created if it doesn't exist

// Column headers (in order) — one row per guest
const HEADERS = [
  'Group ID',
  'Timestamp',
  'Total in Group',
  'Guest Name',
  'Phone / WhatsApp',
  'Child Under 10',
  'Dietary',
  'Allergies',
  'Message',
  'Website Language',
];

// ── Main handler ───────────────────────────────────────────────

function doPost(e) {
  try {
    const payload = parsePayload(e);
    if (!payload) {
      return jsonResponse({ ok: false, error: 'Invalid payload' }, 400);
    }

    // Honeypot check
    if (payload.honeypot) {
      // Silently succeed — don't give bots feedback
      return jsonResponse({ ok: true });
    }

    // Basic validation
    const errors = validatePayload(payload);
    if (errors.length) {
      return jsonResponse({ ok: false, errors }, 422);
    }

    // Write to sheet (with lock to prevent concurrent write conflicts)
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);  // wait up to 10s

    try {
      appendRow(payload);
    } finally {
      lock.releaseLock();
    }

    return jsonResponse({ ok: true });

  } catch (err) {
    console.error('RSVP handler error:', err.message);
    return jsonResponse({ ok: false, error: 'Internal server error' }, 500);
  }
}

// Also allow GET so the URL can be opened in a browser to verify it's working
function doGet() {
  return ContentService.createTextOutput('RSVP endpoint is live.').setMimeType(ContentService.MimeType.TEXT);
}

// ── Payload parsing ────────────────────────────────────────────

function parsePayload(e) {
  try {
    if (e.postData && e.postData.contents) {
      return JSON.parse(e.postData.contents);
    }
    // Fallback: form parameters
    if (e.parameter && e.parameter.payload) {
      return JSON.parse(e.parameter.payload);
    }
    return null;
  } catch {
    return null;
  }
}

// ── Validation ─────────────────────────────────────────────────

function validatePayload(p) {
  const errors = [];
  const guests = Array.isArray(p.guests) ? p.guests : [];
  if (!guests.length) errors.push('at least one guest required');
  return errors;
}

// ── Sheet writing ──────────────────────────────────────────────

function getOrCreateSheet() {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  let sheet   = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    // Write header row
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setFontWeight('bold')
      .setBackground('#f5f0ea');
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function appendRow(p) {
  const sheet  = getOrCreateSheet();
  const tot    = p.totals || {};
  const guests = Array.isArray(p.guests) ? p.guests : [];

  const groupId   = safe(p.submissionId || '');
  const timestamp = safe(new Date().toISOString());
  const total     = tot.listed || guests.length;
  const message   = safe(p.message || '');
  const language  = safe(p.language || 'en');

  // One row per guest — shared columns repeat so each row is self-contained
  const rows = guests.map(g => [
    groupId,                                                      // Group ID
    timestamp,                                                    // Timestamp
    total,                                                        // Total in Group
    safe(g.name || ''),                                           // Guest Name
    safe(g.phone || ''),                                          // Phone / WhatsApp
    g.isChild ? 'Yes' : 'No',                                    // Child Under 10
    safe(g.dietary && g.dietary !== 'none' ? g.dietary : ''),    // Dietary
    safe(g.allergies || ''),                                      // Allergies
    message,                                                      // Message
    language,                                                     // Website Language
  ]);

  // Write all rows in a single call for efficiency
  if (rows.length > 0) {
    sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, HEADERS.length)
      .setValues(rows);
  }
}

// ── Helpers ────────────────────────────────────────────────────

/**
 * Prevent formula injection: prefix values starting with
 * = + - @ to treat them as plain text in Sheets.
 */
function safe(value) {
  const s = String(value);
  return /^[=+\-@\t\r]/.test(s) ? "'" + s : s;
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
