# Bionial v2 Pre-Flight Audit
Date: 2026-02-28
File: index.html — **1225 lines**

---

## 1. Line Count
- `wc -l index.html` → **1225 lines**

---

## 2. Hero Section & Background Image
| Match | Line | Notes |
|-------|------|-------|
| `og:image` | 12 | `https://bioniallife.com/images/hero-bg.jpg` — absolute URL, correct for OG |
| `twitter:image` | 18 | `https://bioniallife.com/images/hero-bg.jpg` — same, correct |
| `class="hero"` | 492 | Section tag — only one found ✅ |
| `src="images/hero-bg.jpg"` | 506 | Local path, correct ✅ |

**Status: ✅ PASS**

---

## 3. Stats Bar (Duplicate Check)
| Match | Line | Notes |
|-------|------|-------|
| `.hero-stats` (CSS) | 187 | Definition |
| `.hero-stats-inner` (CSS) | 192 | Inner flex container |
| `.hero-stats-inner` (responsive) | 431 | Mobile breakpoint |
| `<div class="hero-stats">` | 515 | **Only one instance** ✅ |
| `<div class="hero-stats-inner">` | 517 | Inner container |

**Status: ✅ PASS — single `.hero-stats` div, no duplicate**

---

## 4. Logo References
| Match | Line | Notes |
|-------|------|-------|
| `href="images/logo.png"` (favicon) | 7 | ✅ Correct path |
| `href="images/logo.png"` (apple-touch) | 8 | ✅ Correct path |
| CSS `.nav-logo`, `.nav-logo-img` | 116–117 | Styling only |
| `src="images/logo.png"` (nav) | 456 | ✅ Correct path |
| `src="images/logo.png"` (footer) | 1005 | ✅ Correct path |
| **"LogoAsset"** | — | **No matches found** ✅ |

**Status: ✅ PASS — all 4 logo references use `images/logo.png`, no spaced filename**

---

## 5. External Image URLs (unsplash / CDN)
- `unsplash` → **No matches** ✅
- `cdn.` → **No matches** ✅

**Status: ✅ PASS — zero external image URLs**

---

## 6. About Image
| Match | Line | Notes |
|-------|------|-------|
| `about-consultation.jpg` | 537 | `src="images/about-consultation.jpg"` ✅ |

**Status: ✅ PASS**

---

## 7. Infrastructure Images
| Match | Line | Notes |
|-------|------|-------|
| `infrastructure-main.jpg` | 867 | Manufacturing floor ✅ |
| `infrastructure-lab.jpg` | 871 | QC laboratory ✅ |
| `infrastructure-warehouse.jpg` | 875 | Warehouse ✅ |
| `infrastructure-manufacturing.jpg` | 879 | Tablet sorting ✅ |
| `infrastructure.jpg` (generic) | — | **No matches** ✅ — all use specific names |

**Status: ✅ PASS — all 4 infra images use canonical names**

---

## 8. Product Sachets Image
| Match | Line | Notes |
|-------|------|-------|
| `product-sachets.jpg` | 765 | `src="images/product-sachets.jpg"` ✅ |

**Status: ✅ PASS**

---

## 9. Tagline Check
| Match | Line | Notes |
|-------|------|-------|
| "From Concept to Capsule." | 498 | Hero subtitle ✅ |
| "From Concept to Capsule in 30 Days" | 810 | Process section heading ✅ |
| "From Idea" | — | **No matches** ✅ |

**Status: ✅ PASS — correct tagline everywhere, forbidden phrase absent**

---

## 10. Hardcoded Year Check
- `2025` → **No matches** ✅
- `new Date().getFullYear()` → line **1222** (JS sets `#copyright-year`) ✅
- `<span id="copyright-year">` → line **1048** ✅

**Status: ✅ PASS — dynamic year, no hardcoded 2025**

---

## 11. Fake Client Logos
- `D2C Wellness` → **No matches** ✅
- `Health Supplement Co` → **No matches** ✅

**Status: ✅ PASS**

---

## 12. Certification Marquee
- Marquee CSS/HTML lives on line **60** (long line, omitted by grep)
- Cert badges `✓ FSSAI Licensed` appear at lines **475** and **483**
- Per CLAUDE.md rule: max 2× repetition in marquee — **requires visual verify**

**Status: ⚠️ NEEDS VISUAL CHECK — line 60 is too long to confirm repetition count via grep**

---

## 13. Catalogue Identifiers
| Identifier | Line(s) | Notes |
|-----------|---------|-------|
| `#form-grid` (CSS) | 250, 437, 445 | Grid styles ✅ |
| `<div id="form-grid">` | 792 | DOM element ✅ |
| `renderFormulations()` (def) | 1081 | Function definition ✅ |
| `renderFormulations()` (calls) | 1122, 1131, 1150, 1220 | Called at init + filters ✅ |
| `data-cat` | 791 (filter buttons, long line) | ✅ |
| `data-health` | 803 (health pills, long line) | ✅ |

**Status: ✅ PASS — all catalogue identifiers correct**

---

## 14. FSSAI License Placeholder
| Match | Line | Notes |
|-------|------|-------|
| `[INSERT LICENSE NUMBER]` | 1044 | Footer disclaimer — still placeholder |

**Status: ⚠️ PENDING — awaiting license number from client**

---

## Summary

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
| Marquee repetition | ⚠️ NEEDS VISUAL CHECK (line 60 too long) |
| Catalogue identifiers | ✅ PASS |
| FSSAI license number | ⚠️ PENDING (client action) |

**12/12 automated checks passed. 1 needs visual confirm. 1 pending client info.**
