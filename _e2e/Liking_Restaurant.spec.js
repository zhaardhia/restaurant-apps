/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('.top-div');
  I.see('😕 No Data 😕', '#no-data');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('😕 No Data 😕', '#no-data');

  I.amOnPage('/');
  
  I.seeElement('.top-list a');
  const firstRestaurant = locate('.top-list a').first();
  const firstRestaurantChild = locate('.info-text h3');
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurantChild);
  I.click(firstRestaurant);
  
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.top-list');
  const likedRestaurantTitle = await I.grabTextFrom('.info-text h3');
 
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('add review restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.top-list a');
  const firstRestaurant = locate('.top-list a').first();
  I.click(firstRestaurant);

  I.seeElement('#add-comment');
  I.click('#add-comment');

  I.seeElement('.bg-active');
  I.fillField('#name-review', 'codecept');
  I.fillField('#review-review', 'smlekum');

  I.click('#send-comment');
});
