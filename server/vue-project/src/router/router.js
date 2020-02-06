import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/Home.vue'
import ProductList from '@/components/pages/ProductList.vue'
import Product from '@/components/pages/Product.vue'

import ProductHome from '@/components/pages/Product/Home.vue'
import ProductReview from '@/components/pages/Product/Review.vue'
import ProductReviewDetail from '@/components/pages/Product/ReviewDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/product',
      component: ProductList
    },
    {
      path: '/product/:id(\\d+)',
      component: Product,
      props: route => ({ id: Number(route.params.id) }),
      children: [
        {
          name: 'product-home',
          path: '',
          component: ProductHome
        },
        {
          name: 'product-review',
          path: 'review',
          component: ProductReview
        },
        {
          name: 'review-detail',
          path: 'review/:id',
          component: ProductReviewDetail
        }
      ]
    }
  ]
})
