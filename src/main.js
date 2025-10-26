import './style.css'
import { Hero } from './Hero.js';
import { Footer } from './Footer.js';

document.querySelector('#app').innerHTML = Hero() + Footer();

// Animation-ready DOM references for hero (query immediately after mount)
const hero = document.getElementById('hero-section');
const logo = document.getElementById('hero-logo');
const title = document.getElementById('hero-title');
const subtitle = document.getElementById('hero-subtitle');

// quick sanity check — these should log DOM nodes
console.log('hero element:', hero);
console.log('logo element:', logo);
console.log('title element:', title);
console.log('subtitle element:', subtitle);

// Privacy modal logic
window.addEventListener('DOMContentLoaded', () => {
	const privacyBtn = document.getElementById('privacy-btn');
	const privacyModal = document.getElementById('privacy-modal');
	const closePrivacy = document.getElementById('close-privacy');
	if (privacyBtn && privacyModal && closePrivacy) {
		privacyBtn.addEventListener('click', () => {
			privacyModal.classList.remove('hidden');
		});
		closePrivacy.addEventListener('click', () => {
			privacyModal.classList.add('hidden');
		});
		privacyModal.addEventListener('click', (e) => {
			if (e.target === privacyModal) {
				privacyModal.classList.add('hidden');
			}
		});
	}
});
