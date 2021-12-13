/* eslint-disable no-shadow */
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurant = {
  async render() {
    return `
      <section class="top-restaurant">
        <h3 class="top-restaurant-title">All Restaurant</h3>
        <hr>
        <div class="loader" style="margin-top: 2rem;"></div>
        <div class="top-div">
        
        </div>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    try {
      const restaurants = await RestaurantSource.mainRestaurant();
      const topdiv = document.querySelector('.top-div');
      restaurants.forEach((restaurant) => {
        topdiv.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      const topdiv = document.querySelector('.top-div');
      topdiv.innerHTML += `
        <h2>🙁 ${error.message} 😔</h2> <br>
        <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/H7wajFPnZGdRWaQeu0" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/SportsManias-sportsmanias-technical-difficulties-please-stand-by-H7wajFPnZGdRWaQeu0">via GIPHY</a></p>
      `;
    } finally {
      document.querySelector('.loader').style.display = 'none';
    }
  },
};

export default Restaurant;
