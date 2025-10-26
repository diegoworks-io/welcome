import './style.css'
import { Hero } from './Hero.js';
import { Footer } from './Footer.js';
import './heroScroll.js';

document.querySelector('#app').innerHTML = Hero() + Footer();

// Animation-ready DOM references for hero (query immediately after mount)
const hero = document.getElementById('hero-section');
const logo = document.getElementById('hero-logo');
const title = document.getElementById('hero-title');
const subtitle = document.getElementById('hero-subtitle');

// (dev debug hooks removed) — production-ready mount

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
