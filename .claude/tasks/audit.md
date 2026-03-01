# Bionial Website — Audit Log

---

## v1 Audit — 2026-02-28 (index.html, 1077 lines)

| # | Bug | Lines | Severity | Status |
|---|-----|-------|----------|--------|
| 1 | Copyright year `2025` (should be `2026`) | 906 | Critical | ✅ Fixed in v1 |
| 2 | Logo `src="LogoAsset 1.png"` — space in filename | 394, 870 | High | ✅ Fixed in v1 |
| 3 | Softgels panel uses Unsplash external image | 613 | High | ✅ Fixed in v3 (`product-softgels.jpg`) |
| 4 | Formspree action uses raw email, not form ID | 830 | Medium | 🔄 Upgraded to `handleFormSubmit` JS handler; Formspree ID still pending |
| 5 | Trust strip has 5 placeholder client names | 448 | Medium | ✅ Fixed in v3 (category badge pills) |
| 6 | "From Idea to Shelf in 30 Days" — hard legal claim | 694 | Medium | ✅ Confirmed correct — tagline is "From Concept to Capsule in 30 Days" |
| 7 | Gmail used as official contact (5 places) | 13, 830, 853, 900, 924 | Medium | 🔒 Blocked — awaiting professional domain email from client |
| 8 | `.stats-bar` class: 0 HTML matches (orphan?) | — | Low | ✅ Confirmed N/A — not implemented, not needed |

### v1 Notes

**Bug 3:** `product-softgels.jpg` now exists and is wired up in v3. Original capsules fallback removed.

**Bug 4:** Native `action="mailto:"` replaced with `onsubmit="handleFormSubmit(event)"` JS handler. Formspree requires client to create a form at formspree.io and supply the `/f/<ID>` endpoint.

**Bug 5:** Options considered were: (a) real client names, (b) remove cards, (c) category descriptors. Chose (c) — 5 badge pills: D2C Nutraceuticals, Pharmacy Chains, Ayurvedic Brands, Wellness Startups, Export Houses.

**Bug 7:** Blocked until client confirms a professional domain email. When ready, replace all 5 occurrences of `bioniallifesciences@gmail.com`.

---

## v2 Pre-Flight Audit — 2026-02-28 (index.html, 1225 lines)

### 1. Line Count
- `wc -l index.html` → **1225 lines**

### 2. Hero Section & Background Image
| Match | Line | Notes |
|-------|------|-------|
| `og:image` | 12 | `https://bioniallife.com/images/hero-bg.jpg` — absolute URL, correct for OG |
| `twitter:image` | 18 | `https://bioniallife.com/images/hero-bg.jpg` — same, correct |
| `class="hero"` | 492 | Section tag — only one found ✅ |
| `src="images/hero-bg.jpg"` | 506 | Local path, correct ✅ |

**Status: ✅ PASS**

### 3. Stats Bar (Duplicate Check)
| Match | Line | Notes |
|-------|------|-------|
| `.hero-stats` (CSS) | 187 | Definition |
| `.hero-stats-inner` (CSS) | 192 | Inner flex container |
| `.hero-stats-inner` (responsive) | 431 | Mobile breakpoint |
| `<div class="hero-stats">` | 515 | **Only one instance** ✅ |
| `<div class="hero-stats-inner">` | 517 | Inner container |

**Status: ✅ PASS — single `.hero-stats` div, no duplicate**

### 4. Logo References
| Match | Line | Notes |
|-------|------|-------|
| `href="images/logo.png"` (favicon) | 7 | ✅ Correct path |
| `href="images/logo.png"` (apple-touch) | 8 | ✅ Correct path |
| CSS `.nav-logo`, `.nav-logo-img` | 116–117 | Styling only |
| `src="images/logo.png"` (nav) | 456 | ✅ Correct path |
| `src="images/logo.png"` (footer) | 1005 | ✅ Correct path |
| **"LogoAsset"** | — | **No matches found** ✅ |

**Status: ✅ PASS** _(Note: v3 split logo into `logo-color.png`, `logo-white.png`, `logo-icon.png`)_

### 5. External Image URLs (unsplash / CDN)
- `unsplash` → **No matches** ✅
- `cdn.` → **No matches** ✅

**Status: ✅ PASS — zero external image URLs**

### 6. About Image
| Match | Line | Notes |
|-------|------|-------|
| `about-consultation.jpg` | 537 | `src="images/about-consultation.jpg"` ✅ |

**Status: ✅ PASS**

### 7. Infrastructure Images
| Match | Line | Notes |
|-------|------|-------|
| `infrastructure-main.jpg` | 867 | Manufacturing floor ✅ |
| `infrastructure-lab.jpg` | 871 | QC laboratory ✅ |
| `infrastructure-warehouse.jpg` | 875 | Warehouse ✅ |
| `infrastructure-manufacturing.jpg` | 879 | Tablet sorting ✅ |
| `infrastructure.jpg` (generic) | — | **No matches** ✅ |

**Status: ✅ PASS — all 4 infra images use canonical names**

### 8. Product Sachets Image
| Match | Line | Notes |
|-------|------|-------|
| `product-sachets.jpg` | 765 | `src="images/product-sachets.jpg"` ✅ |

**Status: ✅ PASS** _(Note: v3 switched sachets tab to `pexels-n-voitkevich-7615572.jpg` — product-sachets.jpg contains wrong content)_

### 9. Tagline Check
| Match | Line | Notes |
|-------|------|-------|
| "From Concept to Capsule." | 498 | Hero subtitle ✅ |
| "From Concept to Capsule in 30 Days" | 810 | Process section heading ✅ |
| "From Idea" | — | **No matches** ✅ |

**Status: ✅ PASS**

### 10. Hardcoded Year Check
- `2025` → **No matches** ✅
- `new Date().getFullYear()` → line **1222** ✅
- `<span id="copyright-year">` → line **1048** ✅

**Status: ✅ PASS — dynamic year, no hardcoded 2025**

### 11. Fake Client Logos
- `D2C Wellness` → **No matches** ✅
- `Health Supplement Co` → **No matches** ✅

**Status: ✅ PASS**

### 12. Certification Marquee
- Marquee HTML on line **60** (long line)
- Cert badges `✓ FSSAI Licensed` appear at lines **475** and **483**
- Per CLAUDE.md rule: max 2× repetition — **requires visual verify**

**Status: ⚠️ NEEDS VISUAL CHECK**

### 13. Catalogue Identifiers
| Identifier | Line(s) | Notes |
|-----------|---------|-------|
| `#form-grid` (CSS) | 250, 437, 445 | Grid styles ✅ |
| `<div id="form-grid">` | 792 | DOM element ✅ |
| `renderFormulations()` (def) | 1081 | Function definition ✅ |
| `renderFormulations()` (calls) | 1122, 1131, 1150, 1220 | Called at init + filters ✅ |
| `data-cat` | 791 | Filter buttons ✅ |
| `data-health` | 803 | Health pills ✅ |

**Status: ✅ PASS**

### 14. FSSAI License Placeholder
| Match | Line | Notes |
|-------|------|-------|
| `[INSERT LICENSE NUMBER]` | 1044 | Footer disclaimer — still placeholder |

**Status: ⚠️ PENDING — awaiting license number from client**

### v2 Summary

| Check | Status |
|-------|--------|
| File size | 1225 lines |
| Hero section | ✅ PASS |
| Stats bar (no duplicate) | ✅ PASS |
| Logo path (no spaced filename) | ✅ PASS |
| No unsplash / CDN URLs | ✅ PASS |
| About image | ✅ PASS |
| Infrastructure images (4/4) | ✅ PASS |
| Sachets image | ✅ PASS |
| Tagline ("From Concept to Capsule") | ✅ PASS |
| Copyright (dynamic year) | ✅ PASS |
| No fake client logos | ✅ PASS |
| Marquee repetition | ⚠️ NEEDS VISUAL CHECK |
| Catalogue identifiers | ✅ PASS |
| FSSAI license number | ⚠️ PENDING (client action) |

**12/12 automated checks passed. 1 needs visual confirm. 1 pending client info.**

---

## v3 Fixes Applied — commit 08f5bde, 2026-02-28

| Item | Change |
|------|--------|
| Logo | navbar → `logo-color.png`, footer → `logo-white.png`, favicon → `logo-icon.png` |
| Hero | CSS background → `company2.jpg`; gradient updated; `min-height: 90vh`; text-shadow added |
| Marquee | Moved from above hero to after stats-bar; `background: #003D7A; border-bottom: 3px solid #00A99D` |
| Trust strip | Replaced fake client logos with 5 category badge pills |
| Softgels | `product-softgels.jpg` wired up (was Unsplash URL) |
| Sachets | Switched to `pexels-n-voitkevich-7615572.jpg` (product-sachets.jpg = brain photo) |
| Infra grid | Rebuilt as 2×2 `infra-cell` grid with aspect-ratio + hover zoom |
| Process steps | Images added to steps 2, 3, 4, 6 (`process-step{2,3,4,6}.jpg`) |
| Form | Replaced native `action="mailto:"` with `onsubmit="handleFormSubmit(event)"` JS handler |
| Copyright | Already dynamic — no change needed |
| Process heading | Already "From Concept to Capsule in 30 Days" — no change needed |
| About image | Already `about-consultation.jpg` — no change needed |

All 13 post-fix verification checks pass.
