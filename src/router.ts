import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Edit from './views/Edit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/edit/:noteId',
      name: 'edit',
      component: Edit,
    },
  ],
});
