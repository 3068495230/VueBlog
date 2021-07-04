<!--
 * @Description: 添加博客
 * @Author: CY小尘s
 * @Date: 2021-05-30 22:14:20
 * @LastEditTime: 2021-07-04 17:56:09
 * @LastEditors: 学习
-->
<template>
    <div class="addblog">
        <div class="addMain">
            <!-- 博客标题 -->
            <label for="title">
                <p>标题:</p>
                <input type="text" name="title" id="title" v-model="blogObj.title" placeholder="标题...">
            </label>
            <!-- 博客作者 -->
            <label for="author">
                <p>作者:</p>
                <input type="text" name="author" id="author" v-model="blogObj.author" placeholder="作者信息...">
            </label>
            <!-- 博客分类 -->
            <label for="classify">
                <p>分类:</p>
                <select name="classify" id="classify" v-model="blogObj.classify">
                    <option v-for="(item, key) in blogClassify" :key="key" :selected="key == 0 ? 'selected' : ''">{{ item }}</option>
                </select>
            </label>
            <!-- 博客内容 -->
            <label for="content">
                <p>内容:</p>
                <!-- 使用 $emit 方法调佣父组件内容 -->
                <Editor @content='content'></Editor>
            </label>
            <!-- 发表博客 -->
            <button @click="onSubmit()">发表博客</button>
            <!-- 跳转到博客预览 -->
            <div @click="showBlog()" class="showFixed">
                    <p>{{ showFixed ? '返回写作' : '预览博客'}}</p>
            </div>
        </div>
        <!-- 博客预览 -->
        <ShowBlog :showBlog="blogObj"></ShowBlog>
    </div>
</template>

<script>
// 引入 axios
import axios from 'axios'
// 引入处理时间的公有函数
import time from '../assets/js/time.js'
// 引入富文本组件
import Editor from './QuillEditor.vue'
// 引入博客预览页
import ShowBlog from './ShowBlog.vue'

export default {
    name: 'AddArticle',
    components:{
        Editor,
        ShowBlog
    },
    data(){
        return{
            // 博客文章内容
            blogObj: {
                title: '',
                author: '',
                classify: '',
                content: '',
                time: time.newDate()
            },
            // 博客分类
            blogClassify: [],
            // 是否处于预览博客状态
            showFixed: false,
            // 当前所处位置
            offsetTop: 0
        }
    },
    methods: {
        // 获取博客分类
        getClassify(){
          axios.get('http://localhost:3001/classify')
          .then(res => {
              this.blogClassify = res.data
          }, err => {
              console.log(err)
          })
        },
        // 发表博客
        onSubmit(){
            if(this.blogObj.title == '' || this.blogObj.author == '' || this.blogObj.classify == '' || this.blogObj.content == ''){
                alert('不能为空！')
                return false
            }
            // 发送添加请求
            axios.post('http://localhost:3001/user', this.blogObj)
            .then(res => {
                console.log(res)
                alert('发表成功！')
                this.$router.push('/blog/articleList')
            }, err => {
                console.log(err)
            })
        },
        // 获取富文本输入内容
        content(data){
            this.blogObj.content = data
        },
        // 修改是否预览博客状态
        showBlog(){
            let blogShow = document.getElementsByClassName('blogShow')[0]
            if(this.showFixed == false){
                this.showFixed = !this.showFixed
                // 获取当前屏幕所处位置
                this.offsetTop = parseInt(window.scrollY)
                // 修改屏幕位置
                // IE 内核浏览器修改屏幕位置(360 浏览器使用)
                document.documentElement.scrollTop = blogShow.offsetTop
                // safari 浏览器使用
                document.body.scrollTop = blogShow.offsetTop
                // opera，FireFox 浏览器使用
                window.scrollY = blogShow.offsetTop
            }else if(this.showFixed == true){
                this.showFixed = !this.showFixed
                // 修改屏幕位置
                // IE 内核浏览器修改屏幕位置(360 浏览器使用)
                document.documentElement.scrollTop = this.offsetTop
                // safari 浏览器使用
                document.body.scrollTop = this.offsetTop
                // opera，FireFox 浏览器使用
                window.scrollY = this.offsetTop
            }
        }
    },
    mounted() {
        // 获取分类
        this.getClassify()
        // 使用防抖
        function debounce(func, time){
            let status = false
            return function(){
                if(status !== false){
                    clearTimeout(status)
                }
                status = setTimeout(func, time)
            }
        }
        // 监听 window 的 scroll 属性
        window.addEventListener('scroll', debounce(() => {
                // 获取编辑博客
                let addMain = document.getElementsByClassName('addMain')[0]
                // 获取博客预览的内容区域
                let blogShow = document.getElementsByClassName('row')[4]
                // 浏览器兼容性问题，不同浏览器使用不同属性
                var thisTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop
                // 只在 showFixed 为false，也就是预览博客时进行判断
                if(this.showFixed == false){
                    if(addMain.offsetHeight + thisTop > blogShow.offsetTop){
                        this.showFixed = true
                    }
                      // 编辑博客时判断
                }else if(this.showFixed == true){
                    if(addMain.offsetHeight + thisTop < blogShow.offsetTop){
                        this.showFixed = false
                    }
                }
        }, 100))
    }
}
</script>

<style lang="less" scoped>

// 添加博客样式
.addMain{
    width: 100%;
    // 设置 .addMain 下的所有标签同一样式
    * {
        display: block;
        outline: none;
    }
    // 所有 input
    input{
        border-radius: 5px;
        margin: 5px;
        padding: 2px;
        background: transparent;
        border: 1px solid white;
        color: white;
    }
    input:hover{
        box-shadow: 0px 0px 5px white;
    }
    #classify:hover{
        box-shadow: 0px 0px 5px white;
    }
    // 所有 p
    p {
        margin: 5px;
        padding: 2px;
    }
    // 标题样式
    #title{
        width: 400px;
        height: 40px;
    }
    // 作者样式
    #author{
        width: 400px;
        height: 40px;
    }
    // 分类样式
    #classify{
        width: 150px;
        height: 30px;
        color: gray;
        border: 1px solid white;
        background: transparent;
        border-radius: 5px;
        margin: 5px;
        padding: 2px;
    }
    // 发表博客样式
    button{
        width: 90px;
        height: 42px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        color: white;
        border: 1px solid white;
        background: transparent;
        margin: 5px auto;
    }
    button:hover{
        box-shadow: 0px 0px 5px white;
    }
    button:active{
        background: transparent;
        color: #41B883;
    }
    // 固定按钮样式
    .showFixed{
        position: fixed;
        bottom: 65px;
        right: 20px;
        width: 90px;
        line-height: 32px;
        cursor: pointer;
        color: white;
        border: 1px solid white;
        background: transparent;
        border-radius: 5px;
        text-align: center;
    }
    .showFixed:hover{
        box-shadow: 0px 0px 5px white;
    }
    .showFixed:active{
        background: transparent;
        color: #41B883;
    }
    @media screen and (min-width: 1000px) {
        .showFixed{
            position: fixed;
            bottom: 65px;
            right: 58px;
            width: 90px;
            line-height: 32px;
            cursor: pointer;
            color: white;
            border: 1px solid white;
            background: transparent;
            border-radius: 5px;
            text-align: center;
        }
    }
}
</style>
