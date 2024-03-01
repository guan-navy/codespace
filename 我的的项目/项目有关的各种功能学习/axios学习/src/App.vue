<template>
  <div>
    axios的使用
    <template>
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>用户名</th>
              <th>年龄</th>
              <th>地址</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data.list" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.age }}</td>
              <td>{{ item.addr }}</td>
              <td>
                <button @click="detailData(item.id )">详情</button>
                <button @click="putData(item)">修改</button>
                <button @click="deleteData(item)">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
        <button Gclick="create">新增一条</button>
      </div>
    </template>
  </div>
</template>

<script setup>
import axios from "axios"
axios.get('http://localhost:3000/users').then((res) => {
  console.log(res.data);
})
</script>

<style lang="scss" scoped></style>