import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async mainRestaurant() {
    const response = await fetch(API_ENDPOINT.MAIN);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReview(comment) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });
    return response;
  }
}

export default RestaurantSource;
