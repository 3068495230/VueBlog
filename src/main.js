/*
 * @Description: 文件描述
 * @Author: CY小尘s
 * @Date: 2021-05-30 00:09:33
 * @LastEditTime: 2021-05-31 23:31:39
 * @LastEditors: 学习
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入富文本组件
import  VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)
// 引入粒子特效背景插件
import VueParticles from 'vue-particles'  
Vue.use(VueParticles)
// 引入 animate 动画
import animated from 'animate.css'
Vue.use(animated)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
