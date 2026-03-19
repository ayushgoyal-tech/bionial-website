# CLAUDE.md — Bionial Lifesciences Website
## ⚠️ READ THIS ENTIRE FILE BEFORE WRITING A SINGLE LINE OF CODE ⚠️

This file is the **single source of truth** for all development decisions.
It lives in the repository root. Update it whenever you fix something new.
**Every bug fixed here must be logged in the RESOLVED BUGS section.**

---

## PROJECT FACTS

| Key | Value |
|---|---|
| Type | Static HTML — single `index.html` |
| Deploy | GitHub Pages → https://bioniallife.com |
| Push command | `git push origin main` (live in ~2 min) |
| Local test | `python -m http.server 8080` (Windows; use `python3` on Mac/Linux) |
| Company | Bionial Lifesciences Pvt. Ltd. |
| Email | bioniallifesciences@gmail.com |
| Phone | +91 99966 10619 |
| Address | Plot 459, Sector-82, JLPL Industrial Area, Mohali, Punjab 140308 |
| Formulations | 218 ready-to-manufacture, JS array in index.html |

---

## NON-NEGOTIABLE RULES

```
1. NO external image URLs — only images/filename.ext
2. NO spaces in any filename referenced in HTML
3. NO hardcoded year — use: new Date().getFullYear()
4. NEVER append duplicate HTML — grep first, find-replace only
5. VERIFY with grep after EVERY single change before moving on
6. NEVER use blacklisted images (full list below)
7. git commit message must name each phase completed
8. loading="lazy" on every img that is not hero/above-fold
9. All <img> tags need meaningful alt text
```

---

## BRAND & DESIGN SYSTEM

```
Primary Navy:    #003D7A
Teal Accent:     #00A99D  
Gold Accent:     #F7A800
Light Gray:      #F8FAFB
Card White:      #FFFFFF
Dark Text:       #1A2332
Font:            Inter (Google Fonts)
```

---

## ✅ APPROVED IMAGE MAP — USE ONLY THESE

| Variable Name | File Path | Section |
|---|---|---|
| LOGO_NAV | `images/logo-color.png` | Navbar img tag |
| LOGO_FOOTER | `images/logo-white.png` | Footer img tag |
| LOGO_ICON | `images/logo-icon.png` | `<link rel="icon">` |
| HERO_BG | CSS `url('images/company2.jpg')` | Hero section CSS background |
| ABOUT_MAIN | `images/about-consultation.jpg` | About section img |
| INFRA_TL | `images/infrastructure-main.jpg` | Grid top-left: Analytical Laboratory |
| INFRA_TR | `images/about-quality.jpg` | Grid top-right: Quality Control Lab |
| INFRA_BL | `images/Untitled-design-10.jpg` | Grid bottom-left: Liquid Manufacturing |
| INFRA_BR | `images/infrastructure-manufacturing.jpg` | Grid bottom-right: Tablet Production |
| TAB_CAPSULES | `images/product-capsules.jpg` | Capsules tab (capsule filling tray) |
| TAB_SOFTGELS | `images/product-softgels.jpg` | Softgels tab |
| TAB_TABLETS | `images/product-tablets.jpg` | Tablets tab |
| TAB_SYRUPS | `images/product-syrups.jpg` | Syrups tab |
| TAB_POWDERS | `images/product-powders.jpg` | Powders tab |
| TAB_SACHETS | `images/pexels-n-voitkevich-7615572.jpg` | Sachets tab |
| TAB_AYURVEDA | `images/Ayurveda-2.jpg` | Ayurvedic tab |
| PROCESS_3 | `images/process-step3.jpg` | Process step 3 (lab beaker) |
| PROCESS_4 | `images/infrastructure-warehouse.jpg` | Process step 4: Sample Approval |
| PROCESS_6 | `images/process-step6.jpg` | Process step 6 |

### 🔴 BLACKLISTED FILES — NEVER REFERENCE IN HTML

| File | Why Banned |
|---|---|
| `images/about.jpg` | Fluorescent cell microscopy — completely wrong |
| `images/hero-bg.jpg` | Cell biology image — wrong for hero |
| `images/product-ayurveda.jpg` | Shows "Mender" CBD brand products — wrong |
| `images/product-sachets.jpg` | Brain anatomy model — wrong |
| `images/product-blister.jpg` | Ibuprofen pack with drug brand name |
| `images/infrastructure.jpg` | Single lab goggles close-up — too generic |
| `LogoAsset 1.png` | Space in filename = 404 |
| `LogoAsset1.png` | Black background — breaks on white navbar |
| `images/logo.png` | Black background — broken |
| `images/nutraceutical-manufacturing-new-1536x1272.jpg` | Generic stock |
| `images/Top-10-Nutraceutical-Companies-in-India.jpg` | Competitor content |
| `images/process-step4.jpg` | Identical duplicate of infrastructure-main.jpg |
| `images/infrastructure-lab.jpg` | Deleted — replaced by about-quality.jpg |
| `images/herbs-ingredients.jpg` | Deleted — replaced by Ayurveda-2.jpg |

---

## RESOLVED BUGS — DO NOT REINTRODUCE

| Bug ID | Pattern | Wrong | Right | Status |
|---|---|---|---|---|
| BUG-01 | Logo filename | `LogoAsset 1.png` (space) | `images/logo-color.png` | FIXED |
| BUG-02 | Hero image method | Inline `<img>` in hero | CSS `background-image` | FIXED |
| BUG-03 | Hero image file | `hero-bg.jpg` (cells) | `company2.jpg` (cleanroom) | FIXED |
| BUG-04 | Marquee position | Above hero (clashes navbar) | After `</section>` hero | FIXED |
| BUG-05 | About section img | `product-ayurveda.jpg` (CBD) | `about-consultation.jpg` | FIXED |
| BUG-06 | Softgels img src | Unsplash external URL | `images/product-softgels.jpg` | FIXED |
| BUG-07 | Sachets tab img | `product-sachets.jpg` (brain) | `pexels-n-voitkevich...jpg` | FIXED |
| BUG-08 | Ayurvedic tab img | `product-ayurveda.jpg` (Mender) | `herbs-ingredients.jpg` | FIXED |
| BUG-09 | Infrastructure | Single `infrastructure.jpg` | 2×2 `.infra-grid` 4 photos | FIXED |
| BUG-10 | Copyright year | `© 2025` hardcoded | `getFullYear()` dynamic JS | FIXED |
| BUG-11 | Contact form | `{FORM_ID}` placeholder | mailto fallback | FIXED |
| BUG-12 | Process heading | "From Idea to Shelf" | "From Concept to Capsule" | FIXED |
| BUG-13 | Fake client logos | Company name placeholders | Trust-badge strip | FIXED |
| BUG-14 | Footer logo | `LogoAsset 1.png` | `images/logo-white.png` | FIXED |
| BUG-15 | Filter btn class | `cat-btn` / `data-filter` | `filter-btn` / `data-cat` | FIXED in v5 |
| BUG-16 | Render fn signature | `renderFormulations(category)` | `renderFormulations(filtered[])` | FIXED in v5 |
| BUG-17 | Formulation count | 62 items, "200+" label | 218 items, "218+" everywhere | FIXED in v5 |
| BUG-18 | No patented showcase | Missing section | `<section#patented>` 12 cards | FIXED in v5 |
| BUG-19 | UTI filter button | data-cat="uti" (0 results) | Removed (no uti items in array) | FIXED in v5 |

---

## STARTUP CHECKLIST — RUN EVERY SESSION

```bash
echo "=== BIONIAL BUG SCAN ==="
echo ""
echo "1. Blacklisted logos:"
grep -n 'LogoAsset\|logo\.png"' index.html

echo "2. External image URLs:"
grep -n 'unsplash\|imgur\|cdn\.' index.html

echo "3. Hardcoded year:"
grep -n '© 2025\|copyright.*2025' index.html

echo "4. Fake client names:"
grep -n 'D2C Wellness\|Health Supplement Co\|Pharmacy Chain\|Nutraceutical Export' index.html

echo "5. Blacklisted images:"
grep -n 'product-ayurveda\.jpg\|about\.jpg"\|hero-bg\.jpg\|product-sachets\.jpg\|infrastructure\.jpg"' index.html

echo "6. Form ID placeholder:"
grep -n 'FORM_ID' index.html

echo "7. Process heading:"
grep -n 'From Idea' index.html

echo "=== ALL ABOVE SHOULD RETURN 0 RESULTS ==="
```

---

## SECTION STRUCTURE (DO NOT REORDER)

```
<head> ... meta, CSS ...
<nav> navbar with logo-color.png
<section.hero> CSS bg: company2.jpg — NO inline img tag
<div.cert-marquee> WHO-GMP FSSAI... (AFTER hero, not before)
<section#about> about-consultation.jpg
<section> Services cards
<section#liposomal> Liposomal cards
<section#patented> Patented Ingredients Showcase (12 branded cards, dark blue bg)
<section#platform> Dosage tabs (7 tabs)
<section#catalogue> Formulations JS filter grid
<section#process> Process steps
<section#infrastructure> 2×2 infra grid
<section> Why Bionial trust cards
<section#contact> Form (mailto fallback)
<footer> logo-white.png
```

---

## FORMULATIONS JS ARRAY — CURRENT COUNT: 218

Array name: `formulations`
Location: Inside `<script>` tag in index.html
Replace entire array — do not merge/append partial updates.
After replacing: verify `grep -c '{ id:' index.html` returns 218+

Object shape: `{ id, name, category, form, patented, patentedBadge, tags }`
- `patented: true` + `patentedBadge: "KSM-66®"` → renders gold ⭐ badge on card
- 79 items have `patented: true`

### Filter Categories Used (v5 — no uti)
```
bone | vitamins | nerve | womens | mens | eye | liver
heart | sports | syrups | ayurvedic | liposomal | skin | pediatric | senior
```

### JS Entry Points (v5)
- `filterFormulations()` — main entry; reads active `.filter-btn` + `showPatentedOnly` flag → calls `renderFormulations(array)`
- `renderFormulations(filtered)` — takes pre-filtered array, renders 12 cards + view-all button
- `createFormulationCard(f)` — returns HTML string for one card
- `showPatentedOnly` — boolean flag toggled by `#patentedOnly` checkbox
- Do NOT call `renderFormulations(categoryString)` — it takes an array in v5

---

## POWERSHELL PRE-FLIGHT (run before each Claude Code session)

```powershell
cd "PATH_TO_REPO\images"

# Critical rename (safe - won't error if already done)
Rename-Item "alflucio-gel-capsules-5834022.jpg" "product-softgels.jpg" -EA SilentlyContinue

# Verify all 21 required images exist
$required = @(
  "logo-color.png","logo-white.png","logo-icon.png",
  "company2.jpg","about-consultation.jpg","about-quality.jpg",
  "infrastructure-main.jpg","infrastructure-lab.jpg",
  "infrastructure-warehouse.jpg","infrastructure-manufacturing.jpg",
  "product-capsules.jpg","product-softgels.jpg","product-tablets.jpg",
  "product-syrups.jpg","product-powders.jpg","herbs-ingredients.jpg",
  "pexels-n-voitkevich-7615572.jpg",
  "process-step2.jpg","process-step3.jpg","process-step4.jpg","process-step6.jpg"
)
$missing = 0
foreach ($f in $required) {
  if (Test-Path $f) { Write-Host "✅ $f" -FG Green }
  else { Write-Host "❌ MISSING: $f" -FG Red; $missing++ }
}
if ($missing -gt 0) { Write-Host "`n⛔ Fix $missing missing files before running Claude Code" -FG Red }
else { Write-Host "`n✅ All images ready — safe to run Claude Code" -FG Green }
```

---

## CURRENT STATUS — v5 (commit 5934fa4, 2026-03-01)

| Track | Feature | Status |
|-------|---------|--------|
| v3 | Logo 3-file split, images, trust strip, copyright, tagline, favicon | ✅ Live |
| v3 | OG tags, JSON-LD, canonical, infra 2×2 grid, FSSAI disclaimer | ✅ Live |
| v3 | Certification marquee, process step images, JS form handler | ✅ Live |
| v5 | 218-item formulations array (was 62) | ✅ Live |
| v5 | Patented ingredient badges (⭐ gold) on cards | ✅ Live |
| v5 | Patented Ingredients Showcase section (#patented, 12 cards) | ✅ Live |
| v5 | Stats bar: 218+ / 50+ Patented APIs / 30-Day / 6+ Certs | ✅ Live |
| v5 | Filter bar redesign (filter-btn, patented toggle, live count) | ✅ Live |
| v5 | All 13 verification checks passing | ✅ Verified |

### Pending (client actions required)
- **Formspree ID** — swap `handleFormSubmit` mailto fallback with real `fetch()` call
- **FSSAI license number** — replace `[INSERT LICENSE NUMBER]` placeholder in footer (~line 1055)
- **Sachets image** — `product-sachets.jpg` has wrong content (brain model); using pexels temp
- **Facility photos** — replace stock process/infra images with actual Bionial photos