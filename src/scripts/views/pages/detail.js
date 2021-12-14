/* eslint-disable quotes */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate, modalReview } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant-detail" class="detail-restaurant"></div>
      <div class="loader" style="margin-top: 2rem;"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      const restaurantContainer = document.querySelector('#restaurant-detail');
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          pictureId: restaurant.pictureId,
          description: restaurant.description,
          city: restaurant.city,
          rating: restaurant.rating,
        },
      });
      await this._foodsMenu(restaurant);
      await this._drinksMenu(restaurant);
      await this._customerReviews(restaurant);
      await this._modalReview();
      await this._sendReview(url);
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

  async _foodsMenu(restaurant) {
    const restaurantFoods = document.querySelector('.detail-food');
    restaurant.menus.foods.forEach((food) => {
      restaurantFoods.innerHTML += `<div class="detail-menu-card"> <p>${food.name}</p> </div>`;
    });
  },

  async _drinksMenu(restaurant) {
    const restaurantDrinks = document.querySelector('.detail-beverage');
    restaurant.menus.drinks.forEach((drink) => {
      restaurantDrinks.innerHTML += `<div class="detail-menu-card"> <p>${drink.name}</p> </div>`;
    });
  },

  async _customerReviews(restaurant) {
    const restaurantReviews = document.querySelector('.detail-review-all');
    restaurant.customerReviews.forEach((customerReview) => {
      restaurantReviews.innerHTML += `
      <div class="detail-comment">
        <p>From: ${customerReview.name}</p>
        <p class="comment-date">${customerReview.date}</p>
        <p>${customerReview.review}</p>
      </div>
    `;
    });
    restaurantReviews.innerHTML += `
      <div class="div-comment">
        <button id="add-comment">Add Review</button>
      </div>
      ${modalReview()}
    `;
  },

  async _modalReview() {
    const modalBtn = document.querySelector('#add-comment');
    const modalBg = document.querySelector('.modal-bg');
    const modalClose = document.querySelector('.modal-close');
    modalBtn.addEventListener('click', () => {
      modalBg.classList.add('bg-active');
    });
    modalClose.addEventListener('click', () => {
      modalBg.classList.remove('bg-active');
    });
  },

  async _sendReview(url) {
    const inputName = document.querySelector('#name-review');
    const inputReview = document.querySelector('#review-review');
    const buttonAdd = document.querySelector('#send-comment');

    buttonAdd.addEventListener("click", () => {
      const comment = {
        id: url.id,
        name: inputName.value,
        review: inputReview.value,
      };
      RestaurantSource.addReview(comment);
      document.querySelector('.modal-bg').classList.remove('bg-active');
      this.afterRender();
    });
  },

};

export default Detail;
