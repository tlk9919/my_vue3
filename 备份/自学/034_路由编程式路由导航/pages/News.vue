<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <!-- 第一种写法 -->
                <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{ news.title }}</RouterLink> -->
                <button @click="showNewsDetail(news)">查看新闻</button>
                <!-- 第二种写法 -->
                <RouterLink :to="{
                    name:'xiang',
                    query:{ //params用path会报红
                        id:news.id,
                        title:news.title,
                        content:news.content //id title content 与占位符一致
                        //params不能传对象和数组
                    }
                }">
                {{ news.title }}
            </RouterLink>
          
            </li>     
        </ul>
        <!-- 展示区 -->
        <div class="news-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts" name="News">
import { reactive } from 'vue';
import { RouterLink, RouterView,useRouter } from 'vue-router';

const newsList = reactive([
    { id: 'asfdtrfay01', title: '如何一夜暴富', content: '学IT' },
    { id: 'asfdtrfay02', title: '震惊，万万没想到', content: '明天是周一' },
    { id: 'asfdtrfay03', title: '好消息！', content: '快过年了' },
    { id: 'asfdtrfay04', title: '很好的抗癌食物！', content: '西南花' }
]);


const router=useRouter()

interface NewsInter{
    id:string
    title:string
    content:string
}
function showNewsDetail(news:NewsInter){
     router.push(//与RouterLink中to的用法一致
{
    name:'xiang',
                    query:{ //params用path会报红
                        id:news.id,
                        title:news.title,
                        content:news.content //id title content 与占位符一致
                        //params不能传对象和数组
                    }
}
     )
}
</script>

<style scoped>
.news {
    display: flex; /* 使用 flexbox 布局 */
    padding: 20px; /* 添加一些内边距 */
}


 
.news ul {
    list-style-type: none; 
    /* 去掉默认的列表样式 */
    padding: 0; /* 去掉内边距 */
    margin-right: 20px; /* 添加右边距，分隔导航区和展示区 */
}

li {
    margin-bottom: 10px; /* 列表项之间的间距 */
}

a {
    text-decoration: none; /* 去掉链接的下划线 */
    color: #3498db; /* 修改字体颜色 */
    font-size: 18px; /* 设置字体大小 */
}

a:hover {
    color: #2980b9; /* 悬停时更改颜色 */
}

.news-content {
    flex: 1; /* 使展示区占据剩余空间 */
    border: 1px solid #ccc; /* 添加边框 */
 
}
</style>
