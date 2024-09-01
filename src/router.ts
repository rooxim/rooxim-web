import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'Index',
    component:()=> import('./pages/Index.vue')
  },
  {
    path: '/about',
    name: 'AboutUs',
    component:()=> import('./pages/AboutUs.vue')
  },
  {
    path: '/news',
    name: 'News',
    component:()=> import('./pages/News.vue')
  },
  {
    path: '/service',
    name: 'Service',
    component:()=> import('./pages/Service.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component:()=> import('./pages/Contact.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component:()=> import('./pages/404.vue')
  }
];

const router = createRouter({
  scrollBehavior() {
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
