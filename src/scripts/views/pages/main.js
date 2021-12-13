/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

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
          
        </div>
      </section>
    `;
  },
  async afterRender() {
    try {
      // document.querySelector('.loader').style.display = 'block';
      const restaurants = await RestaurantSource.mainRestaurant();
      const restaurant = restaurants.filter((element) => element.rating > 4.5);
      const topdiv = document.querySelector('.top-div');
      // topdiv.innerHTML += this.animateLoading();
      restaurant.forEach((resto) => {
        topdiv.innerHTML += createRestaurantItemTemplate(resto);
        // LikeButtonInitiator.init({
        //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
        //   restaurant: {
        //     id: r.id,
        //     name: r.name,
        //     pictureId: r.pictureId,
        //     description: r.description,
        //     city: r.city,
        //     rating: r.rating,
        //   },
        // });
      });
    } catch (error) {
      const topdiv = document.querySelector('.top-div');
      topdiv.innerHTML += `
        <h2 class="error-load-page">🙁 SYSTEM: ${error.message} 😔</h2> <br>
        <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/H7wajFPnZGdRWaQeu0" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/SportsManias-sportsmanias-technical-difficulties-please-stand-by-H7wajFPnZGdRWaQeu0">via GIPHY</a></p>
      `;
    } finally {
      document.querySelector('.loader').style.display = 'none';
    }
  },
};

export default Main;
