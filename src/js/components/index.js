import { setHeader } from './Header.js';

// Header

setHeader();

// Compensate for fixed header
document.querySelector('main').style.paddingTop = '68px';
document.querySelector('.header-placeholder').classList.add('hidden');
