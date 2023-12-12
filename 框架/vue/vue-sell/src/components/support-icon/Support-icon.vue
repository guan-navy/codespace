<!-- 父子组件通信 -->

<template>
    <span class="support-icon" :class="iconClass">
    </span>
</template>

<script>
export default {
    props: {
        size: {
            type: Number,
            default: 1
        },
        type: {
            type: Number,
            default: 0
        }
    },
    computed:{//计算属性中的函数名直接当成数据源来使用
        iconClass(){
            const classMap =[ 'decrease','special',,'invoice','discount','guarantee']
            return `icon-${this.size} ${classMap[this.type]}`
        }
    }
}
</script>

<style lang="less" scoped>
 @import '@/common/style/mixin.less';
.support-icon {
    display: inline-block;
    background: no-repeat;
    
}
.icon-1{
    width: 12px;
    height: 12px;
    background-size: 100% 100%;
    // 继承上一个类名
    &.decrease{
        .bg-image('decrease_1')
    }
    &.special{
        .bg-image('special_1')
    }
    &.invoice{
        .bg-image('invoice_1')
    }
    &.discount{
        .bg-image('discount_1')
    }
    &.guarantee{
        .bg-image('guarantee_1')
    }
}
.icon-2{
    width: 16px;
    height: 16px;
    background-size: 100% 100%;
    // 继承上一个类名
    &.decrease{
        .bg-image('decrease_2')
    }
    &.special{
        .bg-image('special_2')
    }
    &.invoice{
        .bg-image('invoice_2')
    }
    &.discount{
        .bg-image('discount_2')
    }
    &.guarantee{
        .bg-image('guarantee_2')
    }
}
.icon-3{
    width: 12px;
    height: 12px;
    background-size: 100% 100%;
    // 继承上一个类名
    &.decrease{
        .bg-image('decrease_3')
    }
    &.special{
        .bg-image('special_3')
    }
    &.invoice{
        .bg-image('invoice_3')
    }
    &.discount{
        .bg-image('discount_3')
    }
    &.guarantee{
        .bg-image('guarantee_3')
    }
}
.icon-4{
    width: 16px;
    height: 16px;
    background-size: 100% 100%;
    // 继承上一个类名
    &.decrease{
        .bg-image('decrease_4')
    }
    &.special{
        .bg-image('special_4')
    }
    &.invoice{
        .bg-image('invoice_4')
    }
    &.discount{
        .bg-image('discount_4')
    }
    &.guarantee{
        .bg-image('guarantee_4')
    }
}
</style>