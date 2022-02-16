<template>
  <div class="offices">
    <!-- 个人信息 -->
    <div class="information box">
      <!-- 头部 -->
      <div class="head">
        <img
          src="../assets/img/个人信息 .png"
          alt="个人信息"
          title="个人信息"
        />
        <h2>个人信息</h2>
      </div>
      <!-- 内容 -->
      <div class="body">
        <p>姓名：achens</p>
        <p>民族：汉</p>
        <p>联系方式：MC1744758326S（WeChat）</p>
        <p>邮箱：3068495230@qq.com</p>
        <p>现居：广州</p>
        <p>求职意向：前端开发</p>
        <p>
          <a href="https://www.yuque.com/xiaochens" target="_blank"
            >点击打开语雀<img src="../assets/img/分享.png"
          /></a>
        </p>
      </div>
    </div>
    <!-- 个人技术 -->
    <div class="technology box">
      <!-- 头部 -->
      <div class="head">
        <img src="../assets/img/个人技术.png" alt="个人技术" title="个人技术" />
        <h2>个人技术</h2>
      </div>
      <!-- 内容 -->
      <div class="body">
        <ul>
          <li>
            熟练使用 <span>DIV</span> +
            <span>CSS</span>、<span>Flex</span>、<span>Position</span>
            和响应式布局开发静态网站。 了解 <span>HTML5</span> 和
            <span>CSS3</span> 新特性。
          </li>
          <li>
            熟练使用 <span>JS</span>、<span>ES6</span> 进行开发，了解
            <span>TS</span>。
          </li>
          <li>
            熟练使用 <span>Ajax</span>、<span>Axios</span>
            异步更新技术，理解异步编程。
          </li>
          <li>
            熟练使用 <span>Vue2</span> 和 <span>Vue3</span> 全家桶进行项目开发。
          </li>
          <li>
            能够使用 <span>Webpack5</span> 和
            <span>Vite2</span> 搭建项目开发环境。
          </li>
          <li>
            会使用 <span>Git</span> 和<span> Gitee</span>、<span>Github</span>
            管理项目代码。
          </li>
          <li>
            了解且会使用 <span>Create-Vue</span>、<span>Pinia</span> 开发项目。
          </li>
          <li>
            能够熟练使用 <span>Json-Server</span>、<span>Mock.js</span>
            等插件辅助项目开发。
          </li>
        </ul>
      </div>
    </div>
    <!-- 项目经验 -->
    <div class="project box">
      <!-- 头部 -->
      <div class="head">
        <img src="../assets/img/项目经验.png" alt="项目经验" title="项目经验" />
        <h2>项目经验</h2>
      </div>
      <!-- 内容 -->
      <div class="body">
        <!-- S-cli -->
        <ul class="projectInfo">
          <li class="date">开发周期：<span>2022-01 ~ 2022-2</span></li>
          <li class="name">项目名称：<span>S-cli</span></li>
          <li class="position">负责：<span>开发</span></li>
        </ul>
        <!-- 项目介绍 -->
        <ul class="content">
          <li>
            1. 使用
            <span>commander</span
            >、<span>inquirer</span>、<span>Chalk</span>、<span
              >Ora-loading</span
            >
            等插件辅助开发命令行指令。
          </li>
          <li>
            2. 使用 <span>Webpack5</span> 和
            <span>Vite2</span> 搭建开发环境并上传至
            <span>Gitee</span> 作为使用模板。
          </li>
          <li>
            3. 已上传至 <span>NPM</span>，可使用命令
            <span>npm i achens-cli</span> 进行本地安装使用。
          </li>
          <li>
            4.
            <a
              href="https://www.yuque.com/docs/share/59d9a605-c7f7-4d14-9259-c03d7073b5ce"
              target="_blank"
              >点击查看开发过程<img src="../assets/img/分享.png"
            /></a>
          </li>
        </ul>
        <!-- SQuery -->
        <ul class="projectInfo">
          <li class="date">开发周期：<span>2022-01 ~ 2022-2</span></li>
          <li class="name">项目名称：<span>SQuery</span></li>
          <li class="position">负责：<span>开发</span></li>
        </ul>
        <!-- 项目介绍 -->
        <ul class="content">
          <li>1. 基于原型封装的类 <span>DOM</span> 操作库。</li>
          <li>
            2.
            总共封装有：<span>十一</span>类操作，<span>三十二</span>个方法，<span>两个</span>全局方法。
          </li>
          <li>
            3. 实现了正常开发中常用的大部分 DOM
            操作，包括但不限于<span>获取、修改</span>和<span>添加删除元素</span>以及<span>添加删除元素的属性</span>、<span>元素的样式</span>，<span>元素的父子元素</span>和<span>插入删除元素</span>、<span>子元素</span>等等。
          </li>
          <li>
            4. 已上传至 <span>NPM</span>，可使用命令
            <span>npm i achens-query</span> 安装至本地使用。
          </li>
          <li>
            5.
            <a
              href="https://www.yuque.com/xiaochens/mr72m3/ogp9tt"
              target="_blank"
              >点击查看开发过程<img src="../assets/img/分享.png"
            /></a>
          </li>
        </ul>
        <!-- VueGM -->
        <ul class="projectInfo">
          <li class="date">开发周期<span>2021-06 ~ 2021-7</span></li>
          <li class="name">项目名称：<span>VueGM</span></li>
          <li class="position">负责：<span>开发+设计</span></li>
        </ul>
        <!-- 项目介绍 -->
        <ul class="content">
          <li>1. 引入 <span>Echarts</span> 图标展示后台数据。</li>
          <li>
            2. 带有完整的权限管理及<span>权限验证</span>系统。
          </li>
          <li>3. 使用 <span>json-server</span> 模拟后台数据。</li>
          <li>4. 使用 <span>quill-editor</span> 实现富文本编辑。</li>
          <li>5. 整体 ui 风格使用 <span>element-ui</span>。</li>
          <li>
            6.
            <a
              href="https://www.yuque.com/xiaochens/nspcgn/lh9rba"
              target="_blank"
              >点击查看开发过程<img src="../assets/img/分享.png"
            /></a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 自我评价 -->
    <div class="evaluate box">
      <!-- 头部 -->
      <div class="head">
        <img src="../assets/img/自我评价.png" alt="自我评价" title="自我评价" />
        <h2>自我评价</h2>
      </div>
      <!-- 内容 -->
      <div class="body">
        <ul>
          <li>
            1. 自学能力强，适应能力快，有积极的向上学习心理。
          </li>
          <li>
            2. 对前端技术有持续的热情，会经常逛掘金以及 b 站等学习社区进行学习。
          </li>
          <li>
            3. 会主动去了解各种新技术，以及不会的技术栈。
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "offices"
};
</script>

<style lang="less">
.offices {
  padding: 5px 10px 10px 10px;
  div.box {
    background-color: rgba(66, 66, 66, 0.3);
    border: 1px solid white;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 5px 7px 5px;
    div.head {
      width: 100%;
      height: 90px;
      display: flex;
      line-height: 115px;
      img {
        width: 90px;
        height: 90px;
        margin-right: 5px;
      }
    }
  }
  div.information {
    div.head {
      height: 80px;
    }
    div.body {
      p {
        margin: 5px;
        a {
          color: #42b983;
        }
        img {
          width: 15px;
          height: 15px;
          margin: 0px 0px 0px 2px;
        }
      }
    }
  }
  div.technology {
    div.head {
      height: 80px;
      line-height: 100px;
      img {
        width: 80px;
        height: 80px;
      }
    }
    div.body {
      ul {
        list-style-type: circle inside;
        li {
          margin: 5px 5px 5px 15px;
          span {
            color: orange;
          }
        }
      }
    }
  }
  div.project {
    div.head {
      height: 80px;
      line-height: 95px;
      img {
        width: 70px;
        height: 75px;
        margin-right: 15px;
      }
    }
    div.body {
      ul.projectInfo {
        width: 100%;
        height: 25px;
        list-style-type: none;
        li {
          float: left;
          font-size: 18px;
          margin: 0px 100px 0px 0px;
          span {
            font-weight: 600;
          }
        }
      }
      ul.content {
        list-style-type: none;
        li {
          margin: 0px 0px 3px 0px;
          a {
            color: #42b983;
          }
          span {
            color: orange;
          }
        }
      }
    }
  }
  div.evaluate {
    div.head {
      height: 87px;
      line-height: 105px;
    }
    div.body {
      ul {
        list-style-type: none;
      }
    }
  }
}
@media screen and (max-width: 665px) {
  div.blog {
    div.bg {
      div.offices {
        div.project {
          ul.projectInfo {
            height: 80px;
          }
        }
      }
    }
  }
}
</style>
