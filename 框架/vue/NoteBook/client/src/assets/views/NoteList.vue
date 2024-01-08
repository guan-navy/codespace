<template>
    <div class="note-list">
        <ul>
            <li>
                <div class="img"><img
                        src="https://img1.baidu.com/it/u=3519458463,1887460190&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                        alt="">
                </div>
                <p class="time"> 2023-01-08</p>
                <p class="title"> 今天去吃了猪脚饭</p>
            </li>
            <li>
                <div class="img"><img
                        src="https://img1.baidu.com/it/u=3519458463,1887460190&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                        alt="">
                </div>
                <p class="time"> 2023-01-08</p>
                <p class="title"> 今天去吃了猪脚饭</p>
            </li>
            <li>
                <div class="img"><img
                        src="https://img1.baidu.com/it/u=3519458463,1887460190&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                        alt="">
                </div>
                <p class="time"> 2023-01-08</p>
                <p class="title"> 今天去吃了猪脚饭1234567890-1234567890-1234567890</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
//页面加载中发请求,拿到当前分类的数据
import { onBeforeMount ,onMounted} from 'vue';
onBeforeMount(() => {

})
onMounted(() => {
    //发送请求获取分类数据
    
})
</script>

<style lang="less" scoped>
.note-list {
    width: 100%;
    padding: 1rem 0.667rem 0;
    box-sizing: border-box;
    // ul{
    //     display: flex;
    //     flex-wrap: wrap;
    //     justify-content: space-between;
    //     li{
    //         padding:0  10px;
    //         box-sizing: border-box;
    //         width: 50%;
    //         img{
    //             width: 100%;
    //         }
    //     }
    // }

    // ul {
    //     overflow: auto;
    //     li {
    //         float: left;
    //         padding: 0 10px;
    //         box-sizing: border-box;
    //         width: 33%;

    //         img {
    //             width: 100%;
    //         }
    //     }

    // }
    //网格布局,适合9宫格布局
    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 50px;//间距
        grid-row-gap:30px;
        
        li {
            
           
            img {
                width: 100%;
                border-radius: 0.27rem;
            }
            .time
            {
                font-size: 0.37rem;
                color: rgb(16,16,16,1);
                margin: 10px 5px 0;
            }
            .title
            {
                width: 4rem;
                font-size: 0.37rem;
                color: rgb(16,16,16,1);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
}</style>