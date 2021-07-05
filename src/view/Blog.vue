<template>
    <div class="blog">
        <!-- 头部 -->
        <Head></Head>
        <div class="bg">
            <transition mode="out-in"
                        leave-active-class="animate__animated animate__fadeOutLeft"
                        enter-active-class="animate__animated animate__fadeInRight"
                        :duration="{leave: 1000, enter: 2000}" 
            >
                <!-- 切换组件展示：AddArticle、ArticleList、About -->
                <router-view></router-view>
            </transition>
        </div>
        <!-- 尾部 -->
        <Footer></Footer>
    </div>
</template>

<script>
// 导入头部组件
import Head from '../components/Head.vue'
// 导入尾部组件
import Footer from '../components/Footer.vue'

export default {
    name: 'Blog',
    components: {
        Head,
        Footer
    } 
}
</script>

<style scoped>
.bg{
    max-width: 1000px;
    height: 100%;
    margin: 0px auto;
    
}
</style>