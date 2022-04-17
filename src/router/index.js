import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

import Contact from '../views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/basic',
    name: 'basic',
    component: () => import('../views/BasicView.vue'),
  },
  {
    path: '/databinding',
    name: 'dataBinding',
    component: () => import('../views/DataBinding.vue'),
  },
  {
    path: '/databindinghtml',
    name: 'dataBindingHtml',
    component: () => import('../views/DataBindingHtml.vue'),
  },
  {
    path: '/inputBinding',
    name: 'inputBinding',
    component: () => import('../views/InputBinding.vue'),
  },
  {
    path: '/selectBinding',
    name: 'selectBinding',
    component: () => import('../views/SelectBinding.vue'),
  },
  {
    path: '/attrBinding',
    name: 'attrBinding',
    component: () => import('../views/AttrBinding.vue'),
  },
  {
    path: '/classBinding',
    name: 'classBinding',
    component: () => import('../views/ClassBinding.vue'),
  },
  {
    path: '/listRendering',
    name: 'listRending',
    component: () => import('../views/ListRendering.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
