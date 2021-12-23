/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
import CONFIG from '../../globals/config';

const text_truncate = (str, length, ending) => {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = '...';
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  }
  return str;
};

const createRestaurantSkeletonTemplate = (count) => {
  let template = '';
  for (let i = 0; i < count; i += 1) {
    template += `
      <div class="top-list" tabindex="0">
      <a href="#">
      <div class="top-list-info">
          <div class="info-text">
              <h3>Loading...</h3>
              <p class="city">Loading...</p>
          </div>
          <p class="info-text info-text-desc">Loading...</p>
          <p class="info-text">⭐️ 0</p>
      </div>
      </a>
      <div id="likeButtonContainer">
        
      </div>
    </div>
  `
  }
  return template;
};

const createRestaurantItemTemplate = (restaurant) => `
  <div class="top-list" tabindex="0">
    <a href="#/detail/${restaurant.id}">
    <img src="${CONFIG.BASE_IMAGE_URL.SMALL}/${restaurant.pictureId}" alt="${restaurant.name}" width="234" height="156">
    <div class="top-list-info">
        <div class="info-text">
            <h3>${restaurant.name}</h3>
            <p class="city">${restaurant.city}</p>
        </div>
        <p class="info-text info-text-desc">${text_truncate(restaurant.description, 67, '...')}</p>
        <p class="info-text">⭐️ ${restaurant.rating}</p>
    </div>
    </a>
    <div id="likeButtonContainer">
      
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="detail-head" tabindex="0">
    <img class="img-detail" src="${CONFIG.BASE_IMAGE_URL.SMALL}/${restaurant.pictureId}" alt="">
    <div class="vl"></div>
    <div class="detail-head-container">
        <h3 class="">${restaurant.name}</h3>
        <p class="detail-street">${restaurant.address}, ${restaurant.city}</p>
        <p>Rate: ${restaurant.rating}⭐️</p>
        <p class="detail-description">${restaurant.description}</p>
    </div>
  </div>
  <div class="detail-menu" tabindex="0">
    <h3>Menu</h3>
    <hr>
    <div class="detail-menu-eat">
        <div class="detail-food">
            <h3>Food</h3>
            
        </div>
        <div class="detail-beverage">
            <h3>Beverage</h3>
            
        </div>
    </div>
  </div>
  <div class="detail-review" tabindex="0">
    <h3>Customer's Review</h3>
    <hr>
    <div class="detail-review-all">
        
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" tabindex="0" id="likeButton" class="likeDetail">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" tabindex="0" id="likeButton" class="likeDetail">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const bannerHome = `
  <div class="banner">
    <div class="hero-text">
        <h2>Craving For Food or Beverages?<br> Wanna Try Something New?</h2>
        <p>Checkout our best list of restaurant. We are ready to serve you.</p>
    </div>
  </div>
`;
const bannerOthers = `
  <div class="banner2">
          
  </div>
`;

const modalReview = () => `
<div class="modal-bg">
<div class="modal">
    <button class="modal-close">x</button>
    <div class="modal-main">
        <h3>Input Review</h3>
        <hr>
        <div>
            <label for="name">Name: </label>
            <input id="name-review" type="text" name="name">
        </div>
        <div>
            <label for="review">Review: </label>
            <textarea name="review" id="review-review" cols="30" rows="10"></textarea>
        </div>
        <div class="send-comment-div">
            <button id="send-comment">Send</button>
        </div>
    </div>
</div>
</div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantSkeletonTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  bannerHome,
  bannerOthers,
  modalReview,
};