<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">店铺名称</span>
                </div>

                <div class="description">蜂鸟转送</div>
                <div class="support">
                    <!-- 父组件给子组件传值 -->
                    <SupportIcon :size="1" :type="0"></SupportIcon>
                    <span class="text">满28减5</span>
                </div>
            </div>
            <div class="support-count">
                <span class="count">5个</span>
                <i class="iconfont icon-xuanzetiaozhuanyou_xian24"></i>
            </div>
        </div>
        <div class="bulletin-wrapper">

        </div>
        <div class="bg"
            style="background-image: url('http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg');">
            <br>
            <br>
        </div>
    </div>
</template>

<script>
import SupportIcon from '@/components/support-icon/Support-icon.vue'
export default {
    components: {
        SupportIcon
    }

}
</script>

<style lang="less" scoped>
@import '@/common/style/variable.less';
@import '@/common/style/mixin.less';

.header {

    position: relative;
    background: @color-background-ss;

    .content-wrapper {
        position: relative;
        display: flex;
        padding: 24px 12px 18px 24px;

        .avatar {
            width: 64px;
            height: 64px;

            img {
                width: 100%;
                border-radius: 2px;
            }
        }

        .content {
            flex: 1;
            margin-left: 16px;
            color: @color-white;

            .title {
                display: flex;
                align-items: center;
                margin-bottom: 8px;

                .brand {
                    // 弹性容器的子元素也可以设置宽高
                    width: 30px;
                    height: 18px;
                    .bg-image('brand');
                    background-image: url('./picture/brand@2x.png');
                    background-size: cover;
                }

                .name {
                    font-size: @fontsize-large;
                }
            }

            .description {
                font-size: @fontsize-small;
                margin-bottom: 8px;
            }

            .support {
                display: flex;
                align-items: center;

                .text {
                    font-size: @fontsize-small-s;
                    margin: 4px;
                }
            }
        }

        .support-count {
            position: absolute;
            right: 12px;
            bottom: 14px;
            padding: 0 8px;
            line-height: 24px;
            text-align: center;
            background: @color-background-sss;
            border-radius: 14px;
            display: flex;
            align-items: center;
            color: @color-white;

            .count {
                font-size: @fontsize-small-s;

                .iconfont {
                    font-size: @fontsize-small-s;
                    margin-left: 2px;
                }
            }


        }

    }

    .bg {
        
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        // background-image: url('http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg');
        background-size: 100% 100%;
        filter: blur(10px);
        z-index: -1;
    }

}
</style>