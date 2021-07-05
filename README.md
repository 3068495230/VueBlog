<!--
 * @Description: 响应式博客描述文件
 * @Author: CY小尘s
 * @Date: 2021-07-04 17:58:40
 * @LastEditTime: 2021-07-05 16:14:41
 * @LastEditors: 学习
-->
# 导言
    期初只是在 B 站上看见的一个小 Demo，想着跟着视频写一遍练练手。但是写完后看着这单挑页面便想着美
化一下，攒攒经验，为以后自己的个人博客大点经验，但是没想到。。。emmm，写着写着写多了，想着这里加点,哪里加点，就慢慢改成这个样子了。
制作思路及过程：
https://www.yuque.com/docs/share/77578f40-8201-4682-aeba-880b1b497dfc?#
## 一、分支说明
- master：默认分支，是完整版响应式 VueBlog，使用 json-server 模拟了后台服务器。
- dev：去除了 json-server、axios 的版本，数据都是固定的，主要用于搭建静态网站。
## 二、后台页面说明
### Src --> View（blog 页面视图）：
#### Home ：
```
单页面，作为博客的进入页
```
#### Blog：
```
多页面，负责展示页面
```
### Src --> components（blog 组件）：
#### Header：
```
blog 展示的头部组件
```
#### ArticleList：
```
blog 展示的主要内容组件
```
#### AddArticle：
```
blog 文章添加组件
```
#### Flooter：
```
博客尾部组件
```
#### QuillEditor：
```
富文本组件
```
#### ShowBlog：
```
博客预览组件
```
#### About：
```
关于博客
```
#### Artiecle：
```
博客文章
```
#### Skills：
```
技能条
```
### src --> assets --> js（公有函数库）：
#### commons.js：
```
初始化博客上传时间插件
```
## 三、使用教程
### 克隆项目
```
git clone https://gitee.com/qingchen666/VueBlog.git
```
### 在克隆的文件夹下安装配置文件
```
npm install
```
### 运行（建议在 Vue ui 中调试运行）
```
// 运行项目
npm run serve
// 运行服务器
npm run server
```