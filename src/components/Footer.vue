<!--
 * @Description: 底部组件
 * @Author: CY小尘s
 * @Date: 2021-05-30 01:02:51
 * @LastEditTime: 2021-05-30 01:07:46
 * @LastEditors: 学习
-->
<template>
  <div class="footer">
      <span>$copy;版权所有 a尘s 2021-5-30 copyright newsight</span>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="less" scoped>
.footer{
  max-width: 1000px;
  margin: 0px auto;
  height: 60px;
  line-height: 60px;
  background-color: rgba(66,66,66,.3);
  color: white;
  border: 1px solid white;
  border-radius: 5px 5px 0px 0px;
  text-align: center;
  font-size: 14px;
  span:hover{
    text-shadow: 0px 0px 1px #41b841;
  }
}
.footer:hover{
  box-shadow: 0px 0px 5px #2f2f2f;
}
</style>
