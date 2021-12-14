const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev',
  BASE_IMAGE_URL: {
    SMALL: 'https://restaurant-api.dicoding.dev/images/small',
    MEDIUM: 'https://restaurant-api.dicoding.dev/images/medium',
    LARGE: 'https://restaurant-api.dicoding.dev/images/large',
  },
  DEFAULT_LANGUAGE: 'en-us',
  DATABASE_NAME: 'restaurant-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
  CACHE_NAME: new Date().toISOString(),
};

export default CONFIG;
