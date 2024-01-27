<template>
    <el-button text @click="open">Click to open the Message Box</el-button>
  </template>
  
  <script lang="ts" setup>
  import { ElMessage, ElMessageBox } from 'element-plus'

  
  const open = () => {
    ElMessageBox.alert('This is a message', 'Title', {
      // if you want to disable its autofocus
      // autofocus: false,
      confirmButtonText: 'OK',
      callback: () => {
        ElMessage({
          type: 'info',
          message: `action`,
        })
      },
    })
  }
  </script>
  

<style lang="scss" scoped>

</style>