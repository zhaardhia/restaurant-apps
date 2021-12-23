import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate, createRestaurantSkeletonTemplate } from '../templates/template-creator';

const Restaurant = {
  async render() {
    return `
      <section class="top-restaurant">
        <h3 class="top-restaurant-title">All Restaurant</h3>
        <hr>
        <div class="loader" style="margin-top: 2rem;"></div>
        <div class="top-div">
          ${createRestaurantSkeletonTemplate(20)}
        </div>
      </section>
    `;
  },

  async afterRender() {
    const topdiv = document.querySelector('.top-div');
    topdiv.innerHTML = ``;
    try {
      const restaurants = await RestaurantSource.mainRestaurant();
      restaurants.forEach((restaurant) => {
        topdiv.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      topdiv.innerHTML += `
        <h2 class="error-load-page">🙁 SYSTEM: ${error.message} 😔<br>CHECK YOUR INTERNET CONNECTION !</h2>
      `;
    } finally {
      document.querySelector('.loader').style.display = 'none';
    }
  },
};

export default Restaurant;
