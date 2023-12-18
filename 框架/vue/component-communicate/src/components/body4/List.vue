<template>
    <div class="body">
        <ul>
            <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  
    data() {
        return {
            // lists:['html','css']放置在公共仓库里面

        }
    },
    //mapState(['lists'])该函数自动被触发
    computed:mapState(['lists'])
}
</script>

<style lang="css" scoped></style>