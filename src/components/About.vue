<template>
  <div class="about">
    <!-- 个人介绍 -->
    <div class="my">
      <img src="https://cdn.jsdelivr.net/gh/AyagawaSeirin/homepage@double/assets/img/logo-circul-100.png" alt="网络错误">
      <h2># 关于我</h2>
      <pre>你好，这里是 aChens，普通的男生一枚~
坐标湖南衡阳，是一名技术热爱人员。对 Web 以及 ACG 文化感兴趣。
咱有很多昵称：achens、a尘s、小achen、尘s。
How lucky to meet you!
求职中！！！</pre>
    </div>
    <!-- 技术点 -->
    <div class="skills">
      <h2># 技术能力</h2>
      <Skills :skillsMsg="skillsMsg"></Skills>
    </div>
    <!-- 个人网站 or 项目（线上）地址 -->
    <div class="website but">
      <h2># 个人项目 or 网站</h2>
      <!-- 按钮组 -->
      <div class="but-group">
        <button onclick="window.location.href='https://gitee.com/qingchen666/VueBlog'">VueBlog</button>
        <button onclick="window.location.href='https://gitee.com/qingchen666/vue-blog-admin'">VueBlog</button>
        <button onclick="window.location.href='https://gitee.com/qingchen666/cool-button'">CoolButon</button>
        <button onclick="window.location.href='https://gitee.com/qingchen666/daily-algorithm'">jsonRequest</button>
      </div>
    </div>
    <!-- 个人联系方式 or 活跃的社区 -->
    <div class="contact but">
      <h2># 活跃社区</h2>
      <!-- 按钮组 -->
      <div class="but-group">
        <button onclick="window.location.href='https://github.com/3068495230'">Github</button>
        <button onclick="window.location.href='https://gitee.com/qingchen666'">Gitee</button>
        <button onclick="window.location.href='https://space.bilibili.com/1484980985'">BiliBili</button>
        <button onclick="window.location.href='https://blog.csdn.net/qq_53521722?spm=1000.2115.3001.5343'">CSDN</button>
        <button onclick="window.location.href='https://www.zhihu.com/people/xiao-yu-yan-44'">知乎</button>
        <button onclick="window.location.href='https://juejin.cn/user/3588439135500206'">掘金</button>
        <button onclick="window.location.href='https://www.jianshu.com/u/c0b389ce90e5'">简书</button>
      </div>
    </div>
    <!-- 其他 -->
    <div class="other but">
      <h2># 其他</h2>
      <!-- 按钮组 -->
      <div class="but-group">
        <button onclick="window.location.href='https://gitee.com/qingchen666'">测试</button>
        <button onclick="window.location.href='https://gitee.com/qingchen666'">测试</button>
      </div>
    </div>
  </div>
</template>

<script>
import Skills from './Skills'
export default {
    name: 'About',
    components: {
      Skills
    },
    data(){
      return {
        skillsMsg: [
          {title: 'HTML/CSS', skills: '65', content: '熟练使用 HTML + CSS 制作网站'},
          {title: 'JavaScript', skills: '50', content: '熟练使用 JavaScript 进行网页开发'},
          {title: 'jQuery', skills: '40', content: '熟悉 jQuery，能封装实现简单的 jQuery 库'},
          {title: 'Vue', skills: '60', content: '熟练使用 Vue 全家桶开发项目，了解 Vue 响应式原理'},
          {title: 'PHP/MySql', skills: '45', content: '会使用 PHP + MySQL 进行简单的后台开发，了解 PHP 面向对象'},
          {title: 'TS/ES', skills: '40', content: '了解 TS，且掌握 ES，能在项目中使用 ES 进行开发'},
          {title: 'Webpack/Vite', skills: '30', content: '会使用 Webpack 和 Vite 进行项目打包'},
          {title: 'Git', skills: '40', content: '熟练使用 Git 进行代码管理'},

        ]
      }
    }
}
</script>

<style lang="less" scoped>
.about{
  max-width: 1000px;
  height: 100%;
  margin: 5px auto;
  border-radius: 5px;
  background-color: rgba(66,66,66,.3);
  color: white;
  padding: 0px 20px;
  // 个人介绍样式
  div{
    width: 100%;
    height: auto;
    padding: 10px 0px;
  }
  .my{
    margin: 0px 0px 15px 0px;
    // 标题样式
    h2{
      margin: 0px 0px 5px 0px;
    }
    // 介绍文本样式
    pre{
      font-size: 17px;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
  }
  // 技术点样式
  .skills{
    width: 100%;
  }
  .but{
    .but-group{
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      button{
        outline: none;
        cursor: pointer;
        min-width: 108px;
        min-height: 35px;
        background: transparent;
        border: 1px solid white;
        padding: 0px 20px;
        color: white;
        margin: 0px 20px 10px 0px;
      }
      button:hover{
        box-shadow: 0px 0px 3px white;
      }
    }
  }
}
// 屏幕宽度小于 600px 时设置图片为居中
@media screen and (max-width: 600px) {
  .about{
    padding: 0px 0px 0px 10px;
  }
  .about .my img{
    display: block;
    margin: 0px auto;
  }

}
</style>