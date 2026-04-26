/**
 * Portfolio Navigation
 * Handles mobile menu toggle and active page highlighting
 */

// Mobile Menu Toggle
function toggleMenu() {
	const navMenu = document.getElementById('navMenu');
	const hamburger = document.querySelector('.hamburger');
	navMenu.classList.toggle('active');
	hamburger.classList.toggle('active');
}

// Highlight active page based on current URL
document.addEventListener('DOMContentLoaded', () => {
	// Get current page filename
	const currentPath = window.location.pathname;
	const currentPage = currentPath.split('/').pop() || 'index.html';

	// Add active class to matching navigation link
	const navLinks = document.querySelectorAll('.nav-link');
	navLinks.forEach(link => {
		const href = link.getAttribute('href');

		// Match current page or handle root/index cases
		if (href === currentPage ||
			(currentPage === '' && href === 'index.html') ||
			(currentPage === 'index.html' && href === 'index.html')) {
			link.classList.add('active');
		} else {
			link.classList.remove('active');
		}
	});
});
