<!--
 * @Description: 头部组件
 * @Author: CY小尘s
 * @Date: 2021-05-30 00:17:39
 * @LastEditTime: 2022-02-16 19:31:59
 * @LastEditors: Please set LastEditors
-->
<template>
  <div class="header">
    <!-- 左边 Logo 区域 -->
    <div class="logo">
      <router-link to="/home">
        <img src="../assets/img/t01b3bc142b70ef7e0e.jpg" alt="Logo" />
      </router-link>
      <div class="text">
        <p>achens -</p>
        <p>Office</p>
      </div>
    </div>
    <!-- 右边切换页面路由 -->
    <div class="link">
      <!--屏幕宽度大于 600px 时  -->
      <div class="linkMax">
        <router-link to="offices">Office</router-link>
        <a href="https://www.yuque.com/xiaochens" target="_blank">语雀</a>
        <router-link to="about">关于我</router-link>
      </div>
      <!--屏幕宽度小于 600px 时  -->
      <div class="linkMin">
        <ul @click="showMenu()">
          <span :class="show ? 'rotate' : ''"></span>
          <li v-show="show">
            <router-link
              :class="this.$route.meta == 'offices' ? 'focus' : ''"
              to="offices"
              >Office</router-link
            >
            <a href="https://www.yuque.com/xiaochens" target="_blank">语雀</a>
            <router-link
              :class="this.$route.meta == 'about' ? 'focus' : ''"
              to="about"
              >关于我</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      // 下拉菜单是否显示
      show: false
    };
  },
  methods: {
    showMenu() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="less" scoped>
// 使用 less 处理 CSS 样式
.header {
  max-width: 1000px;
  height: 80px;
  background-color: rgba(66, 66, 66, 0.3);
  border: 1px solid white;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0px 0px 5px 5px;
  // 头部左边 logo 样式
  .logo {
    height: 100%;
    // Logo 图片
    img {
      height: 100%;
      float: left;
      border-radius: 0px 0px 0px 5px;
    }
    // Logo 文本
    .text {
      p {
        float: left;
        margin-left: 5px;
      }
      line-height: 60px;
      float: left;
      padding: 10px 0px 0px 5px;
    }
  }
  .link {
    display: flex;
    padding-right: 20px;
    .linkMax {
      a {
        color: white;
        background-color: transparent;
        border: 1px solid white;
        box-shadow: 0px 0px 2px white;
        border-radius: 5px;
        padding: 5px 30px;
        margin-left: 30px;
      }
      a:hover {
        box-shadow: 0px 0px 5px white;
      }
      // 路由获得焦点时样式
      .linkFocus {
        box-shadow: 0px 0px 10px white;
      }
    }
    .linkMin {
      display: none;
    }
  }
  // 头部右边链接样式
  // 宽小于 600px 修改样式
  @media screen and (max-width: 665px) {
    .link {
      .linkMax {
        display: none;
      }
      .linkMin {
        display: block;
        ul {
          width: 30px;
          height: 40px;
          position: relative;
          display: inline-block;
          // 图标样式
          span {
            display: block;
            width: 30px;
            height: 4px;
            background-color: white;
            box-shadow: 0px 0px 3px white;
            transition: 0.3s;
            cursor: pointer;
            position: relative;
            margin-top: 20px;
          }
          span::after {
            content: "";
            width: 30px;
            height: 4px;
            background-color: white;
            box-shadow: 0px 0px 3px white;
            position: absolute;
            top: -10px;
          }
          span::before {
            content: "";
            width: 30px;
            height: 4px;
            background-color: white;
            box-shadow: 0px 0px 3px white;
            position: absolute;
            top: 10px;
          }
          span.rotate {
            transform: rotate(90deg);
          }
          // 选项样式
          li {
            display: block;
            position: absolute;
            left: -85px;
            top: 40px;
            text-align: center;
            background-color: rgba(66, 66, 66, 0.3);
            min-width: 120px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          }
          li a {
            display: block;
            color: white;
            padding: 12px 12px;
          }
          li a.focus {
            text-shadow: 0px 0px 5px white;
          }
        }
      }
    }
  }
}
</style>
