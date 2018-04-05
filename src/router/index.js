import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Game from '@/pages/Game';
import About from '@/pages/About';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/play',
      name: 'Game',
      component: Game,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});
