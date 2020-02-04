import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/Home.vue'
import ProductList from '@/components/pages/ProductList.vue'
import Product from '@/components/pages/Product.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/product', component: ProductList },
    {
      path: '/product/:id(\\d+)',
      component: Product,
      props: route => ({ id: Number(route.params.id) })
    }
  ]
})
