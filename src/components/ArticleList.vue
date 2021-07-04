<!--
 * @Description: 博客列表
 * @Author: CY小尘s
 * @Date: 2021-05-30 15:58:54
 * @LastEditTime: 2021-07-04 15:23:25
 * @LastEditors: 学习
-->
<template>
    <div class="blogList">
        <!-- 博客列表 -->
        <div class="list" :style="blogArr == Array ? 'paddingTop: 0px;' : ''">
            <!-- 文章 -->
            <Article v-for="(item, key) in blogArr" :key="key"
                        :title="item.title"
                        :posttime="item.posttime"
                        :content="item.content"
                        :classify="item.classify"
                        :author="item.author"
                        :item="item"
            ></Article>
        </div>
        <!-- 文章为空时 -->
        <div v-if="blogArr == Array" class="item-null">
            目前还木有文章哦...
        </div>
        <!-- 分页 -->
        <div class="page" :style="blogArr == Array ? 'paddingTop: 0px;' : ''">
            <!-- 上一页 -->
            <!-- @click="prev()" -->
            <div class="prev" @click="prev()">
                上一页
            </div>
            <!-- 当前页 -->
            <p>当前是第{{ page }}页</p>
            <!-- 下一页 -->
            <!-- @click="next()" -->
            <div class="next" @click="next()">
                下一页
            </div>
        </div>
    </div>
</template>

<script>
// 引入 axios
import axios from 'axios'
// 引入文章
import Article from '../components/Article.vue'

export default {
    name: 'ArticleList',
    components: {
        Article
    },
    data(){
        return{
            // 存放获取到的数据
            blogArr: Array,
            // 当前分页页码
            page: 1
        }
    },
    created(){
        this.getData(this.page)
    },
    methods: {
      // 获取数据
      getData(page){
          axios.get('http://localhost:3001/user', {
              params:{
                  _page: page,
                  _limit: 9
              }
          })
          .then(res => {
              this.blogArr = res.data
          }, err => {
              console.log(err)
          })
      },
      // 点击返回上一页
      prev(){
          if(this.page > 1){
              this.page--
              this.getData(this.page)
              this.top()
          }
      },
      // 点击进入下一页
      next(){
          if(this.blogArr.length < 9 || this.blogArr == 0){
              alert("已经是最后一页啦！")
              return
          }
          this.page++
          this.getData(this.page)
          this.top()
      },
      // 切换页数时返回最上面
      top(){
          // 修改屏幕位置
        // IE 内核浏览器修改屏幕位置(360 浏览器使用)
        document.documentElement.scrollTop = 0
        // safari 浏览器使用
        document.body.scrollTop = 0
        // opera，FireFox 浏览器使用
        window.scrollY = 0
      }
    },
}
</script>

<style lang="less" scoped>
.blogList{
    // 博客列表样式
    .list{
        padding: 40px 40px 10px 40px;
    }
    // 分页样式
    .page{
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        padding: 20px 0px 40px 0px;
        // 前进后退页码样式
        div{
            padding: 10px 20px;
            border: 1px solid white;
            box-shadow: 0px 0px 2px white;
            margin: 0px 10px;
            font-size: 14px;
            color: white;
            cursor: pointer;
            // & 代表 div 本身
            &:hover{
                background-color: transparent;
                box-shadow: 0px 0px 5px white;
            }
        }
    }
    // 无文章时样式
    .item-null{
        color: white;
        text-align: center;
        margin: 10px 0px 20px 0px;
    }
}
</style>
