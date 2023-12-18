<template>
     <div class="head">
        <input type="text" name="" v-model="message">
        <button @click="submit">确定</button>
      </div>
</template>

<script>
import {mapMutations}  from 'vuex'
    export default {
        data() {
            return {
               message:''
            }
        },
        methods: {
          submit(){
            
            if(this.message == '') return
            this.listAdd(this.message)
            this.message =''
          },
          //将仓库中的方法搬到methods中
          ...mapMutations(['listAdd'])
      }
    }
</script>

<style lang="css" scoped>

</style>