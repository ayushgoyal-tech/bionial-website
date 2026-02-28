# Bionial Website Audit — index.html (1077 lines)
_Date: 2026-02-28_

## Bugs Found (fix order)

| # | Bug | Lines | Severity | Status |
|---|-----|-------|----------|--------|
| 1 | Copyright year `2025` (should be `2026`) | 906 | Critical | ✅ Fixed |
| 2 | Logo `src="LogoAsset 1.png"` — space in filename | 394, 870 | High | ✅ Fixed |
| 3 | Softgels panel uses Unsplash external image | 613 | High | ✅ Fixed (capsules fallback) |
| 4 | Formspree action uses raw email, not form ID | 830 | Medium | 🔒 Skipped (needs form ID) |
| 5 | Trust strip has 5 placeholder client names | 448 | Medium | ✅ Fixed (hypothetical names) |
| 6 | "From Idea to Shelf in 30 Days" — hard legal claim | 694 | Medium | ✅ Kept as-is (intentional) |
| 7 | Gmail used as official contact (5 places) | 13, 830, 853, 900, 924 | Medium | 🔒 Blocked on client |
| 8 | `.stats-bar` class: 0 HTML matches (orphan?) | — | Low | ✅ Confirmed N/A |

## Notes

**Bug 3:** No `images/product-softgels.jpg` exists locally. Closest available:
`images/product-capsules.jpg` (not ideal — different product category).
Need a real softgels photo or client-supplied image.

**Bug 4:** Formspree endpoint must be `/f/<ID>` not `/f/email@address.com`.
Client needs to log into formspree.io and create a form to get the ID.

**Bug 5 options:**
  a. Replace with real client names (requires client sign-off)
  b. Remove the logo cards, keep the strip label text only
  c. Replace with category icon + type label (no fake brand implied)

**Bug 6:** Proposed softer wording:
  - `"From Idea to Shelf — Fast-Track Manufacturing"`
  - `"End-to-End Manufacturing, Start to Finish"`

**Bug 7:** Blocked until client confirms a professional domain email.
When ready, replace all 5 occurrences of `bioniallifesciences@gmail.com`.

**Bug 8:** Searched both HTML and CSS — `.stats-bar` not found anywhere.
Not an orphan, just not implemented. No action needed.
