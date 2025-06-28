// leaStudios Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const mobileBreakpoint = 768;

    // Function to check if we're on mobile view
    function isMobileView() {
        return window.innerWidth < mobileBreakpoint;
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
                    top: targetElement.offsetTop - 70, // Offset for fixed header
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (isMobileView()) {
                    // Add mobile menu toggle functionality here if needed
                }
            }
        });
    });

    // Add active class to current page in navigation
    const currentPath = window.location.pathname;
    document.querySelectorAll('nav a').forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || 
            (currentPath === '/' && linkPath === '/') || 
            (currentPath.endsWith('/privacy-policy') && linkPath === '/privacy-policy') ||
            (currentPath.endsWith('/agatha-christie-reading-list-support') && linkPath === '/agatha-christie-reading-list-support')) {
            link.classList.add('active');
        }
    });
});
