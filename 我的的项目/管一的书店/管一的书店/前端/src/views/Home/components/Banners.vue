<template>
      <el-carousel :interval="4000" type="card" height="250px">
    <el-carousel-item>
      <el-image style="width: 100%; height: 100%" src='https://img0.baidu.com/it/u=3852039510,1420760012&fm=253&fmt=auto&app=120&f=JPEG?w=1470&h=800' fit="cover" />
    </el-carousel-item>
    <el-carousel-item>
      <el-image style="width: 100%; height: 100%" src='https://pic3.zhimg.com/v2-65e1a2f73ef37cd15cd698042e3526ea_r.jpg' fit="cover" />
    </el-carousel-item>
    <el-carousel-item>
      <el-image style="width: 100%; height: 100%" src='https://pic1.zhimg.com/v2-0a3b6f2dd4fd5e63ae7bf95cf64d44a8_r.jpg' fit="cover" />
    </el-carousel-item>
    <el-carousel-item>
      <el-image style="width: 100%; height: 100%" src='https://pic2.zhimg.com/v2-892c6a5f72e0e75251f59ba9d7bfbf91_r.jpg' fit="cover" />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>