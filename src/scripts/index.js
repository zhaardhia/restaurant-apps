import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import App from './views/app';
import './components/footerApp';
import swRegister from './utils/sw-register';

const imgNavbar = document.querySelector('nav a img');
imgNavbar.setAttribute('src', 'https://i.ibb.co/xh621tP/Ja-Food-putih.png');

const imgFooter = document.querySelector('.footer-container-first img');
imgFooter.setAttribute('src', 'https://i.ibb.co/xh621tP/Ja-Food-putih.png');

const app = new App({
  button: document.querySelector('#mobile-menu'),
  drawer: document.querySelector('.nav-links'),
  hero: document.querySelector('#hero-banner'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('sticky', window.scrollY > 0);
});
