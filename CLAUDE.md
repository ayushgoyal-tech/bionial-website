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

## Image Rename Map (FINAL — all files must use these names)
- logo.png                   ← images/logo.png (canonical logo path)
- hero-bg.jpg                ← from 10.png (GMP floor with clipboard)
- about-consultation.jpg     ← from 16.png (two scientists at table)
- about-quality.jpg          ← from 11.png (purple gloves, teal beaker)
- herbs-ingredients.jpg      ← from 2.png (Ayurvedic herbs flat-lay)
- product-capsules.jpg       ← from 1.png (amber + teal capsule pattern)
- product-tablets.jpg        ← from 13.png (multi-color tablets on marble)
- product-syrups.jpg         ← from 14.png (syrup bottle lineup)
- product-powders.jpg        ← from 12.png (three powder scoops)
- product-ayurveda.jpg       ← from 15.png (brass mortar & pestle)
- product-sachets.jpg        ← present in images/ (sachets tab — real image)
- product-blister.jpg        ← from pexels-pixabay-51929.jpg (no longer used in sachets tab)
- process-filling.jpg        ← from pexels-pilanfilms-11589213.jpg (capsule filling)
- process-step2.jpg          ← from 3.png (R&D lab, analytical balance)
- process-step3.jpg          ← from 5.png (QC blister pack inspection)
- process-step4.jpg          ← from 9.png (blister packaging machine)
- process-step5.jpg          ← from 4.png (HPLC quality testing)
- process-step6.jpg          ← from 7.png (packaging & dispatch)
- infrastructure-main.jpg        ← from 9.png (manufacturing floor)
- infrastructure-lab.jpg         ← from 6.png (QC laboratory interior)
- infrastructure-warehouse.jpg   ← from 8.png (temperature-controlled warehouse)
- infrastructure-manufacturing.jpg ← from sulyok-img*.jpg (tablet sorting bowl)
- hero-products.jpg          ← from Skya_Announces*.webp (premium supplement bottles)

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

## Catalogue Identifiers (do not rename)
- Grid container: `id="form-grid"` (NOT formulations-grid)
- Render function: `renderFormulations()` (NOT renderCatalogue)
- Filter buttons: `data-cat` attribute (NOT data-filter)
- Health pills: `data-health` attribute

## Current Status (as of Feb 28, 2026)
- Track A: ✅ Complete (logo, images, trust strip, copyright, tagline, favicon)
- Track B: ✅ Complete (OG tags, JSON-LD, canonical, infra gallery, FSSAI disclaimer, lipo headers)
- Track C: ✅ Complete (certification marquee, card polish, lazy loading)
- PENDING: Formspree account setup — form uses `mailto:` fallback until form ID provided
- PENDING: Softgels image — `product-sachets.jpg` upgraded; softgels still uses capsules fallback
- PENDING: FSSAI license number — placeholder `[INSERT LICENSE NUMBER]` in footer disclaimer
- PENDING: Actual facility photos from Bionial
