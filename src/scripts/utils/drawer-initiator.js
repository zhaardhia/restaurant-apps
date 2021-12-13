/* eslint-disable no-param-reassign */
const DrawerInitiator = {
  init({ button, drawer }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
      button.classList.toggle('toggle');
    });

    // content.addEventListener('click', (event) => {
    //   this._closeDrawer(event, drawer);
    // });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('nav-active');
    drawer.style.display = 'flex';
    const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
        drawer.style.display = 'none';
      } else {
        drawer.style.display = 'flex';
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
  },

  // _closeDrawer(event, drawer) {
  //   event.stopPropagation();
  //   drawer.classList.remove('nav-active');
  // },
};

export default DrawerInitiator;
