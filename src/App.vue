<!--
 * @Description: blog 首页
 * @Author: CY小尘s
 * @Date: 2021-05-30 00:09:33
 * @LastEditTime: 2021-08-25 22:49:43
 * @LastEditors: 学习
-->
<template>
  <div id="app">
    <!-- 粒子特效背景 -->
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <!-- 页面显示 -->
    <transition
      mode="out-in"
      leave-active-class="animate__animated animate__fadeOut"
      enter-active-class="animate__animated animate__fadeIn"
      :duration="{ leave: 200, enter: 1500 }"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
* {
  margin: 0px;
  padding: 0px;
  color: white;
  text-decoration: none;
}
// 粒子特效背景
#particles-js {
  background-color: black;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: -1;
}
a {
  text-decoration: none;
}
</style>
