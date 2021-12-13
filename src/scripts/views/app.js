/* eslint-disable class-methods-use-this */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import { bannerHome, bannerOthers } from './templates/template-creator';

class App {
  constructor({
    button, drawer, hero, content,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._hero = hero;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      hero: this._hero,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    await this.checkBanner(url);
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }

  checkBanner(url) {
    if (url === '/' || url === '/main') {
      this._hero.innerHTML = bannerHome;
    } else {
      this._hero.innerHTML = bannerOthers;
    }
  }
}

export default App;
