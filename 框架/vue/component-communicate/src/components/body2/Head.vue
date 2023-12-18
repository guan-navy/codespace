<template>
    <div class="head">
        <input type="text" name="" v-model="message">
        <button @click="submit">确定</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: ''
        }
    },
    methods: {
        submit() {
            if (!this.message) return
            // 将message传给父组件使用
            this.$emit('add',this.message)
            this.message = ''
        }
    }
}
</script>

<style lang="css" scoped></style>