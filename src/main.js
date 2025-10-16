import './style.css'
import { Hero } from './Hero.js';
import { Footer } from './Footer.js';

document.querySelector('#app').innerHTML = Hero() + Footer();

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
