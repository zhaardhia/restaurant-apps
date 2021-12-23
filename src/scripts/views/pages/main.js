import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate, createRestaurantSkeletonTemplate } from '../templates/template-creator';

const Main = {
  async render() {
    return `
      <section class="promo-banner">
        <img src="https://i.ibb.co/Ld0VNMC/Ja-Food-I-item.png" alt="Ja-Food-I-item">
        <p>Craving for discount?<br>Get 10% promo discount<br>by invite your friends to JaFood</p>
      </section>
      <section class="top-restaurant">
        <h3 class="top-restaurant-title">Top Restaurant</h3>
        <hr>
        <div class="loader" style="margin-top: 2rem;"></div>
        <div class="top-div">
          ${createRestaurantSkeletonTemplate(20)}
        </div>
      </section>
    `;
  },
  async afterRender() {
    try {
      const restaurants = await RestaurantSource.mainRestaurant();
      const restaurant = restaurants.filter((element) => element.rating > 4.5);
      const topdiv = document.querySelector('.top-div');
      topdiv.innerHTML = '';
      restaurant.forEach((resto) => {
        topdiv.innerHTML += createRestaurantItemTemplate(resto);
      });
    } catch (error) {
      const topdiv = document.querySelector('.top-div');
      topdiv.innerHTML += `
        <h2 class="error-load-page">🙁 SYSTEM: ${error.message} 😔<br>
        CHECK YOUR INTERNET CONNECTION ! <br>
        </h2> 
        
      `;
    } finally {
      document.querySelector('.loader').style.display = 'none';
    }
  },
};

export default Main;
