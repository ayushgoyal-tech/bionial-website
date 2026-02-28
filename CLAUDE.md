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
- hero-bg.jpg            ← from 10.png (GMP floor with clipboard)
- about-consultation.jpg ← from 16.png (two scientists at table)
- about-quality.jpg      ← from 11.png (purple gloves, teal beaker)
- herbs-ingredients.jpg  ← from 2.png (Ayurvedic herbs flat-lay)
- product-capsules.jpg   ← from 1.png (amber + teal capsule pattern)
- product-tablets.jpg    ← from 13.png (multi-color tablets on marble)
- product-syrups.jpg     ← from 14.png (syrup bottle lineup)
- product-powders.jpg    ← from 12.png (three powder scoops)
- product-ayurveda.jpg   ← from 15.png (brass mortar & pestle)
- product-blister.jpg    ← from pexels-pixabay-51929.jpg (pink blister pack)
- process-filling.jpg    ← from pexels-pilanfilms-11589213.jpg (capsule filling)
- process-step2.jpg      ← from 3.png (R&D lab, analytical balance)
- process-step3.jpg      ← from 5.png (QC blister pack inspection)
- process-step4.jpg      ← from 9.png (blister packaging machine)
- process-step5.jpg      ← from 4.png (HPLC quality testing)
- process-step6.jpg      ← from 7.png (packaging & dispatch)
- infrastructure-main.jpg         ← from 9.png (same as process-step4)
- infrastructure-lab.jpg          ← from 6.png (QC laboratory interior)
- infrastructure-warehouse.jpg    ← from 8.png (temperature-controlled warehouse)
- infrastructure-manufacturing.jpg ← from sulyok-img*.jpg (tablet sorting bowl)
- hero-products.jpg      ← from Skya_Announces*.webp (premium supplement bottles)

## Known Bugs — DO NOT Reintroduce
1. NEVER use external URLs for images (no unsplash, no CDN)
2. NEVER reference 'LogoAsset 1.png' with space — logo is at root as 'LogoAsset1.png'
3. NEVER duplicate the stats bar
4. NEVER change the email — always bioniallifesciences@gmail.com
5. Copyright is static © 2026 — TODO: replace with ${new Date().getFullYear()}
6. NEVER write "From Idea to Shelf" — correct heading is "From Concept to Capsule in 30 Days"
7. NEVER use more than 2× repetition in the certification marquee

## Current Status (as of Feb 28, 2026)
- Track A: Bug fixes in progress
- Track B: Missing sections in progress
- Track C: Catalogue JS in progress
- PENDING: Formspree account setup (form action currently has invalid gmail endpoint)
- PENDING: Actual facility photos from Bionial
- PENDING: Softgels image (using product-capsules.jpg as temporary)
- PENDING: Sachets image (using product-blister.jpg as temporary)
