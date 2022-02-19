<!--
 * @Description: 博客进入页
 * @Author: CY小尘s
 * @Date: 2021-07-04 17:59:04
 * @LastEditTime: 2022-02-19 17:38:14
 * @LastEditors: Please set LastEditors
-->
<template>
  <div class="home">
    <div class="mian">
      <div class="log">
        <a href="#">
          <img src="../assets/img/t01b3bc142b70ef7e0e.jpg" alt="你好" />
          <p>achens</p>
        </a>
      </div>
      <div class="but">
        <button onclick="window.location.href='https://gitee.com/achens'">
          Gitee
        </button>
        <button
          onclick="window.location.href='https://www.yuque.com/xiaochens'"
        >
          浏览语雀
        </button>
        <router-link to="blog/articleList">
          <button>浏览博客</button>
        </router-link>
        <router-link to="blog/about">
          <button>关于我</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  .mian {
    width: 100%;
    height: 50%;
    margin: 100px auto 0px auto;
    .log {
      width: 100%;
      height: 100%;
      text-align: center;
      a {
        img {
          border-radius: 50%;
          transition: 0.5s;
        }
        p {
          margin: 15px 0px 0px 0px;
          color: white;
        }
      }
      a:hover img {
        transform: rotate(-35deg);
      }
      a:focus img {
        transform: rotate(-35deg);
        transform: scale(1.1, 1.1);
      }
    }
    .but {
      width: 80%;
      height: 100%;
      margin: 0px auto;
      text-align: center;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      /* 按钮样式 */
      button {
        outline: 0;
        cursor: pointer;
        width: 128px;
        height: 45px;
        margin: 25px 0px 0px 10px;
        font-size: 1rem;
        text-align: center;
        color: white;
        background-color: transparent;
        border: 1px solid white;
        border-radius: 1px;
        box-shadow: 0px 0px 5px white;
        text-shadow: 0px 0px 2px white;
        transition: 0.3s;
      }
      button:hover {
        box-shadow: 0px 0px 15px white;
        padding-bottom: 5px;
      }
      button:active {
        font-size: 1.3rem;
      }
      button:focus {
        font-size: 1.3rem;
      }
    }
  }
}
</style>
