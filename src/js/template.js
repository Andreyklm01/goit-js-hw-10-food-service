import galleryTemplate from '../templates/gallery.hbs';
import menu from '../menu.json';
const galleryMarkup = galleryTemplate(menu);

const menuListRef = document.querySelector('.js-menu');
menuListRef.insertAdjacentHTML('beforeend', galleryMarkup);
