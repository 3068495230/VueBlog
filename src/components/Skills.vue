<!--
 * @Description: 文件描述
 * @Author: CY小尘s
 * @Date: 2021-07-04 17:59:04
 * @LastEditTime: 2021-08-25 22:49:21
 * @LastEditors: 学习
-->
<template>
  <div class="skills-flex">
    <!-- 技术条 -->
    <div class="box" v-for="(item, key) in skillsMsg" :key="key">
      <!-- 技术名称 -->
      <p class="box-text">{{ item.title }}</p>
      <!-- 技术能力 -->
      <div class="box-skills">
        <!-- 进度条 -->
        <div class="skills" :style="'width:' + item.skills + '%;'"></div>
        <!-- 提示内容 -->
        <div class="content">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  props: {
    // 接收技能数据
    skillsMsg: Array
  }
};
</script>

<style lang="less" scoped>
// 技术点盒子
.skills-flex {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  // 进度条样式
  .box {
    width: 300px;
    height: auto;
    font-size: 15px;
    margin: 0px 50px 10px 0px;
    display: flex;
    align-items: center;
    padding: 0px;
    // 技术名
    p {
      width: 95px;
    }
    // 进度条
    .box-skills {
      width: 200px;
      height: 3px;
      padding: 0px;
      margin: 0px 0px 0px 10px;
      border: 1px solid white;
      background: transparent;
      border-radius: 15px;
      position: relative;
    }
    // 进度条进度
    .box-skills .skills {
      height: 3px;
      position: absolute;
      left: 0;
      top: 0;
      background-color: white;
    }
    // 提示文本
    .box-skills .content {
      padding: 5px;
      background-color: rgb(119, 116, 116);
      border-radius: 5px;
      font-size: 13px;
      position: absolute;
      top: -50px;
      left: 0px;
      display: none;
    }
  }
  // 鼠标滑过进度条时显示文本
  .box:hover .box-skills .content {
    display: block;
  }
}
</style>
