import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <section class="top-restaurant">
        <h3 class="top-restaurant-title">Favorite Restaurant</h3>
        <hr>
        <div class="loader" style="margin-top: 2rem;"></div>
        <div class="top-div">
            
        </div>
    </section>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
      const topdiv = document.querySelector('.top-div');
      if (restaurants.length < 1) {
        topdiv.innerHTML += '<p id="no-data">😕 No Data 😕</p>';
      }
      restaurants.forEach((restaurant) => {
        topdiv.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      const topdiv = document.querySelector('.top-div');
      topdiv.innerHTML += `
        <h2>🙁 ${error.message} 😔</h2> <br>
        <h2>CHECK YOUR INTERNET CONNECTION</h2>
        <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/H7wajFPnZGdRWaQeu0" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/SportsManias-sportsmanias-technical-difficulties-please-stand-by-H7wajFPnZGdRWaQeu0">via GIPHY</a></p>
      `;
    } finally {
      document.querySelector('.loader').style.display = 'none';
    }
  },
};

export default Like;
