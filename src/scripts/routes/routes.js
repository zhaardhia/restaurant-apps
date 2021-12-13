/* eslint-disable no-unused-vars */
import Main from '../views/pages/main';
import Restaurant from '../views/pages/restaurant';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Main,
  '/main': Main,
  '/restaurant': Restaurant,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
