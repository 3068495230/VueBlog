/*
 * @Description: 文件描述
 * @Author: CY小尘s
 * @Date: 2021-05-30 00:09:33
 * @LastEditTime: 2021-07-21 01:57:02
 * @LastEditors: 学习
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../view/Home.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../view/Home.vue')
  },
  {
    path: '/blog',
    component: () => import('../view/Blog.vue'),
    children: [
      {
        path: '',
        name: 'articleList',
        component: () => import('../components/ArticleList.vue')
      },
      {
        path: 'articleList',
        name: 'ArticleList',
        meta: 'articleList',
        component: () => import('../components/ArticleList.vue')
      },
      {
        path: 'addArticle',
        name: 'AddArticle',
        meta: 'addArticle',
        component: () => import('../components/AddArticle.vue')
      },
      {
        path: 'about',
        name: 'About',
        meta: 'about',
        component: () => import('../components/About.vue')
      }
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'linkFocus'
})

export default router
