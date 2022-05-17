import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HomeStoreFront from '../views/HomeStoreFront.vue'
import ProductSearch from '../views/ProductSearch.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Cart from '@/views/Cart.vue'
import Checkout from '@/views/Checkout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/homestorefront',
    name: 'HomeStorefront',
    component: HomeStoreFront
  },
  {
    path: '/search',
    name: 'SearchProducts',
    component: ProductSearch
  },
  {
    path: '/productDetails/:itemId?',
    name: 'ProductDetails',
    component: ProductDetails
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: 'history',
  routes
})

export default router
