<template>
  <!-- 博客预览 -->
  <div class="blogShow" v-if="showBlog">
    <h1>博客预览</h1>
    <div class="row">
      标题：<b>{{ showBlog.title }}</b>
    </div>
    <div class="row">
      作者：<b>{{ showBlog.author }}</b>
    </div>
    <div class="row">
      分类：<b>{{ showBlog.classify }}</b>
    </div>
    <div class="row">
      时间：<time>{{ date() }}</time>
    </div>
    <div class="row">
      <!-- 将富文本内容加入页面中 -->
      内容：<b v-html="showBlog.content"></b>
    </div>
  </div>
</template>

<script>
// 引入公有函数
import time from "../assets/js/time.js";

export default {
  name: "ShowBlog",
  props: {
    showBlog: {}
  },
  methods: {
    // 获取当前时间
    date() {
      return time.newDate();
    }
  }
};
</script>

<style lang="less" scoped>
// 博客预览样式
.blogShow {
  font-size: 17px;
  color: #555;
  padding: 50px 0 0 30px;
  text-align: center;
  border-top: 1px solid #e4e4e4;
  margin: 10px 0px 20px 0px;
  h1 {
    font-size: 30px;
    padding-bottom: 30px;
  }
  .row {
    text-align: left;
    padding: 10px 0px;
  }
}
</style>
