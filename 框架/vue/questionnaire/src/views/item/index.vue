<template>
    <div>
        <item-container parent-component="item"></item-container>
    </div>
</template>

<script>
import ItemContainer from '@/components/ItemContainer.vue';
import {mapActions} from 'vuex'
    export default {
       components:{
        ItemContainer
       } ,
       methods: {

        //将仓库内的方法拿出来
        ...mapActions(['getQuestionListAction'])
       },
       created() {
        this.getQuestionListAction()
       },
       
    }
</script>

<style lang="less" scoped>

</style>