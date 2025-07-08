// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Example: Alert when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded and scripts are running.');
    // You can add more interactive features here.
    // For example, a simple animation or a dynamic project loader.

    // Example: Add a class to the header on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// Add a 'scrolled' class style to style.css for the header
// This is just a placeholder; you'll need to add the actual styles in style.css
// For example:
// header.scrolled {
//    background-color: #222; /* Darker background on scroll */
//    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
// }
