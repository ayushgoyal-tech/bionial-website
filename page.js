/* page.js — shared script for all product pages */

// Load shared nav and footer components
async function loadComponents() {
    try {
        const [navRes, footerRes] = await Promise.all([
            fetch('components/nav.html'),
            fetch('components/footer.html')
        ]);
        const navHtml = await navRes.text();
        const footerHtml = await footerRes.text();

        const navEl = document.getElementById('shared-nav');
        const footerEl = document.getElementById('shared-footer');
        if (navEl) navEl.innerHTML = navHtml;
        if (footerEl) footerEl.innerHTML = footerHtml;

        // Re-initialise Lucide icons after DOM injection
        if (window.lucide) lucide.createIcons();

        // Re-attach mobile nav toggle
        const toggle = document.getElementById('mobileToggle');
        const navLinks = document.getElementById('navLinks');
        if (toggle && navLinks) {
            toggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                toggle.classList.toggle('active');
            });
        }

        // Nav scroll behaviour (compact on scroll)
        const nav = document.getElementById('nav');
        if (nav) {
            window.addEventListener('scroll', () => {
                nav.classList.toggle('scrolled', window.scrollY > 50);
            });
        }
    } catch (e) {
        console.warn('Could not load components:', e);
    }
}

// Scroll reveal animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// WhatsApp float button scroll visibility
function initWhatsapp() {
    const wa = document.querySelector('.whatsapp-float');
    if (!wa) return;
    window.addEventListener('scroll', () => {
        wa.style.opacity = window.scrollY > 300 ? '1' : '0.7';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
    initScrollAnimations();
    initWhatsapp();
});
