<template>
    <article>
        <div>
            <!-- 文章 -->
            <div class="item" v-if="item">
                <!-- 文章上部分 -->
                <div class="top">
                    <h2>{{ title }}</h2>
                    <time>{{ posttime }}</time>
                </div>
                <!-- 文章内容部分 -->
                <div v-html="content" class="center" :style="hieghts ? 'height: auto;' : 'height: 120px;' "></div>
                <!-- 文章下半部分 -->
                <div class="bottom">
                    <div class="classify">所属分类：<span>{{ classify }}</span></div>
                    <!-- 点击阅读全文 -->
                    <div class="reading">
                        <span @click="readingText()" :class="hieghts ? 'rotate' : '' ">{{ hieghts ? '收起' : '阅读全文' }}</span>
                    </div>
                    <div class="author">作者：{{ author }}</div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>

export default {
    name: 'Aricle',
    data(){
        return{
            // 是否处于阅读全文状态
            hieghts: false
        }
    },
    // 接收父组件参数
    props: {
        // 标题
        title: String,
        // 日期
        posttime: String,
        // 文章内容
        content: String,
        // 分类
        classify: String,
        // 作者
        author: String,
        // 选项，判断当前是否还有数据需要渲染
        item: {}
    },
    methods: {
      // 修改阅读全文状态
      readingText(){
        if(this.hieghts == true){
            // 获取文章
            let item = this.$el.querySelector('.item')
            // IE 内核浏览器修改屏幕位置(360 浏览器使用)
            document.documentElement.scrollTop = item.offsetTop
            // safari 浏览器使用
            document.body.scrollTop = item.offsetTop
            // opera，FireFox 浏览器使用
            window.scrollY = item.offsetTop
        }
        // 修改阅读状态
        this.hieghts = !this.hieghts
      }
    }
}
</script>

<style lang="less" scoped>
// 文章样式
.item{
    border-radius: 23px;
    background-color: rgba(66,66,66,.3);
    color: white;
    padding: 10px;
    margin-bottom: 20px;
    // 文章上半部分
    .top{
        display: flex;
        justify-content: space-between;
        // 标题样式
        h2{
            margin-left: 20px;
        }
        // 时间样式
        time{
            font-size: 14px;
            color: gray;
        }
    }
    // 文章内容
    .center{
        width: 100%;
        height: 120px;
        overflow: hidden;
        position: relative;
        padding: 10px 10px;
        margin: 10px auto;
        color: white;
        text-indent: 30px;
    }
    // 文章下半部分样式
    .bottom{
        font-size: 14px;
        color: #999;
        display: flex;
        justify-content: space-between;
        span{
            font-size: 16px;
            color: #666;
        }
        @media screen and (max-width: 600px) {
            .reading{
                margin: 0px 15px 0px 0px;
            }
        }
        // 阅读全文样式
        .reading{
            text-align: center;
            height: 20px;
            // 阅读全文文本样式
            span{
                display: block;
                cursor: pointer;
                text-align: center;
                color: dodgerblue;
                position: relative;
            }
            // 鼠标滑过
            span:hover{
                text-shadow: 0px 0px 1px #1e90ff;
                position: relative;
                bottom: 1px;
            }
            span::after{
                content: '';
                display: inline-block;
                width: 15px;
                height: 15px;
                position: absolute;
                top: 3px;
                right: -17px;
                background: url('../assets/img/reading.png');
            }
            // 阅读全文被点击时
            span.rotate::after{
                transform: rotate(180deg);
            }
        }
    }
}
// 手机端样式（屏幕小于 471px 时）
@media screen and (max-width: 471px) {
    .item{
        // 标题与时间部分
        .top{
            display: block;
            h2{
                margin-left: 12px;
            }
            time{
                display: inline;
                margin-left: 12px;
            }
        }
        // 文章内容部分
        .center{
            margin: 0px 0px 0px 0px;
            height: 60px;
        }
        // 文章分类、作者、阅读全文部分
        .bottom{
            display: block;
            height: 45px;
            position: relative;
            // 分类
            .classify{
                position: absolute;
                top: 2px;
                left: 12px;
            }
            // 阅读全文
            .reading{
                position: absolute;
                top: 00px;
                right: 5px;
            }
            // 作者
            .author{
                position: absolute;
                top: 22px;
                left: 12px;
            }
        }
    }
}
</style>