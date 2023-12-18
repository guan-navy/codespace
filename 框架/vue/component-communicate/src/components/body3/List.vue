<template>
    <div class="body">
        <ul>
            <li v-for="(item, index) in addlists" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        addlists: {
            type: String,
            default: ''
        }

    },
    data() {
        return {

        }
    }
}
</script>

<style lang="css" scoped></style>