Check the site for common issues:
1. grep -n 'unsplash\|cdn\.' index.html (find external URLs)
2. grep -n 'LogoAsset 1' index.html (find space in filename)
3. grep -c 'loading="lazy"' index.html (count lazy-loaded images)
4. grep -n '2025' index.html (find hardcoded year)
5. Report findings
