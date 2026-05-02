// leaStudios Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle (hamburger overlay)
    const navToggle = document.querySelector('.nav-toggle');
    const primaryNav = document.getElementById('primary-nav');

    function setNavOpen(open) {
        document.body.toggleAttribute('data-nav-open', open);
        if (navToggle) {
            navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
        }
    }

    if (navToggle && primaryNav) {
        navToggle.addEventListener('click', function() {
            const open = !document.body.hasAttribute('data-nav-open');
            setNavOpen(open);
            if (open) {
                const firstLink = primaryNav.querySelector('a');
                if (firstLink) firstLink.focus();
            }
        });

        primaryNav.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') setNavOpen(false);
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && document.body.hasAttribute('data-nav-open')) {
                setNavOpen(false);
                navToggle.focus();
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to current page in navigation
    const currentPath = window.location.pathname;
    document.querySelectorAll('nav a').forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath ||
            (currentPath === '/' && linkPath === '/') ||
            (currentPath.startsWith('/work') && linkPath === '/work') ||
            (currentPath.endsWith('/approach') && linkPath === '/approach') ||
            (currentPath.endsWith('/privacy-policy') && linkPath === '/privacy-policy') ||
            (currentPath.endsWith('/agatha-christie-reading-list-support') && linkPath === '/agatha-christie-reading-list-support')) {
            link.classList.add('active');
        }
    });
});
