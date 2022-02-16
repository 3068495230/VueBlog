/*
 * @Description: router 配置
 * @Author: CY小尘s
 * @Date: 2021-05-30 00:09:33
 * @LastEditTime: 2021-08-25 22:49:38
 * @LastEditors: 学习
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../view/Home.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../view/Home.vue")
  },
  {
    path: "/office",
    name: "Office",
    component: () => import("../view/Office.vue"),
    children: [
      {
        path: "offices",
        name: "Offices",
        meta: "offices",
        component: () => import("../components/offices.vue")
      },
      {
        path: "about",
        name: "About",
        meta: "about",
        component: () => import("../components/About.vue")
      }
    ]
  }
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "linkFocus"
});

export default router;
