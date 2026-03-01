# Bionial Lifesciences Website — CLAUDE.md

## Project Overview
Static single-page website for Bionial Lifesciences Pvt. Ltd.
Nutraceutical and Ayurvedic contract manufacturer in Mohali, Punjab.
Hosted on GitHub Pages. Single index.html file — no framework, no bundler.

## Key Commands
- `git add . && git commit -m "..." && git push origin main` — Deploy live
- `grep -n 'unsplash\|cdn\.' index.html` — Check for external CDN URLs (must be zero)
- `grep -n 'LogoAsset 1' index.html` — Check for spaced filename (must be zero)
- `python -m http.server 8080` — Local preview (or use VS Code Live Server)

## File Structure
- `index.html` — Entire website (HTML + CSS + JS all inline or in same file)
- `images/` — All image assets (see rename map below)
- `CNAME` — Contains: bioniallife.com
- `CLAUDE.md` — This file
- `.claude/` — Hooks, commands, settings

## Brand Design System
- Primary: #003D7A (Deep Blue)
- Accent: #00A99D (Teal)
- Gold: #F7A800 (Stats, badges)
- White: #FFFFFF (Backgrounds)
- Dark Navy: #0D1B2A (Footer)
- Fonts: Inter (Google Fonts) — 700 headings, 400 body
- Tagline: "From Concept to Capsule" (EVERYWHERE — never "From Idea to Shelf")

## Company Info
- Name: Bionial Lifesciences Pvt. Ltd.
- Address: Plot 459, Sector-82, JLPL Industrial Area, Mohali, Punjab 140308
- Phone/WhatsApp: +91 99966 10619 → wa.me/919996610619
- Email: bioniallifesciences@gmail.com
- Website: bioniallife.com

## Image Map (v3 — current state)
### Logos (3 files)
- logo-color.png             ← navbar img (48px height)
- logo-white.png             ← footer img (52px height)
- logo-icon.png              ← favicon + apple-touch-icon

### Hero & About
- company2.jpg               ← hero CSS background (replaces hero-bg.jpg in CSS)
- hero-bg.jpg                ← OG/Twitter meta tags only (absolute URL)
- about-consultation.jpg     ← About section img (two scientists at table)
- about-quality.jpg          ← from 11.png (purple gloves, teal beaker — not in active use)

### Products
- product-capsules.jpg       ← Capsules tab
- product-softgels.jpg       ← Softgels tab ✅ (wired up in v3)
- product-tablets.jpg        ← Tablets tab
- product-syrups.jpg         ← Syrups tab
- product-powders.jpg        ← Powders tab
- herbs-ingredients.jpg      ← Ayurveda tab (turmeric, ashwagandha, dried botanicals flat-lay)
- pexels-n-voitkevich-7615572.jpg ← Sachets tab (⚠️ temp — product-sachets.jpg has wrong content)
- product-sachets.jpg        ← ⚠️ DO NOT USE — contains brain anatomy photo, not sachets

### Process Steps
- process-step2.jpg          ← Step 2 card (Formulation Proposal)
- process-step3.jpg          ← Step 3 card (Sample Development)
- process-step4.jpg          ← Step 4 card (Sample Approval)
- process-step6.jpg          ← Step 6 card (Full Production & Dispatch)

### Infrastructure (2×2 grid)
- infrastructure-main.jpg        ← cell 1 (Analytical Laboratory)
- infrastructure-lab.jpg         ← cell 2 (QC Lab)
- infrastructure-warehouse.jpg   ← cell 3 (Liquid Manufacturing)
- infrastructure-manufacturing.jpg ← cell 4 (Tablet Production)

### Misc
- process-filling.jpg        ← from pexels-pilanfilms-11589213.jpg (capsule filling)
- hero-products.jpg          ← from Skya_Announces*.webp (premium supplement bottles)

### Blacklisted — DO NOT reference in index.html
- product-ayurveda.jpg       ← shows "Mender" branded CBD products — wrong brand/category
- product-sachets.jpg        ← brain anatomy photo — wrong content
- hero-bg.jpg                ← cell biology image — wrong for nutraceutical site (OG meta now uses company2.jpg)
- about.jpg                  ← fluorescent cell microscopy — wrong
- infrastructure.jpg         ← single lab goggles close-up — too generic
- product-blister.jpg        ← ibuprofen blister with drug name visible — brand risk
- LogoAsset 1.png / LogoAsset1.png ← space in filename / black background — broken

## Known Bugs — DO NOT Reintroduce
1. NEVER use external URLs for images (no unsplash, no CDN)
2. NEVER reference 'LogoAsset 1.png' with space — logo is at `images/logo.png`
3. NEVER duplicate the stats bar — only ONE `.hero-stats` div
4. NEVER change the email — always `bioniallifesciences@gmail.com`
5. NEVER hardcode copyright year — always use `${new Date().getFullYear()}` via JS
6. NEVER write "From Idea to Shelf" — correct tagline is "From Concept to Capsule"
7. NEVER use more than 2× repetition in the certification marquee
8. NEVER show fake client logos — no "D2C Wellness Brand" etc.
9. NEVER leave `#form-grid` empty on load — `renderFormulations()` must be called at init
10. NEVER add external JS libraries — keep it vanilla (lucide icons already loaded)
11. NEVER use native `action="mailto:..."` form — form must use `onsubmit="handleFormSubmit(event)"` JS handler

## Catalogue Identifiers (do not rename)
- Grid container: `id="form-grid"` (NOT formulations-grid)
- Render function: `renderFormulations()` (NOT renderCatalogue)
- Filter buttons: `data-cat` attribute (NOT data-filter)
- Health pills: `data-health` attribute

## Current Status (as of Feb 28, 2026 — v3 deployed, commit 08f5bde)
- Track A: ✅ Complete (logo 3-file split, images, trust strip pills, copyright, tagline, favicon)
- Track B: ✅ Complete (OG tags, JSON-LD, canonical, infra 2×2 grid, FSSAI disclaimer)
- Track C: ✅ Complete (certification marquee, process step images, JS form handler)
- PENDING: Formspree account — form uses `handleFormSubmit` mailto fallback; swap fetch() when form ID available
- PENDING: Sachets image — `product-sachets.jpg` has wrong content; using pexels temp image
- PENDING: FSSAI license number — placeholder `[INSERT LICENSE NUMBER]` in footer disclaimer
- PENDING: Actual facility photos from Bionial
