import { defineStore } from 'pinia'

import { ref } from 'vue'
import axiosObj from '@/api/index'

export const useBookStore = defineStore('book', () => {
  const bookList = ref({}) //书籍数据
  const cartInfo = ref({}) //购物车信息
  const searchByName = ref({}) //书名搜索结果
  const searchByAuthor = ref({}) //作者搜索结果
  //获取全部书籍信息
  const getBookList = async () => {
    //获取书籍信息
    const res = await axiosObj.get('/books')
    console.log('后台获取的书单信息是', res)
    bookList.value = res.data
    console.log(bookList.value)
  }
  //获取某一类的书籍信息
  const getBookByType = async (type) => {
    const res = await axiosObj.get(`/getBookByType?type=${type}`)
   
    console.log('获取到', type, '该分类的结果', res.data)
    return res.data
  }
  //获取该作者的数据
  const getBookByAuthor = async (author) => {
    const res = await axiosObj.get(`/getBookByAuthor?author=${author}`)
    console.log('获取到', author, '该作者的结果', res.data)
    searchByAuthor.value = res.data
  }
  //按照书名搜索
  const getBookByName = (async (query) => {
    const res =  await axiosObj.get(`/getBookByName?name=${query}`)
    searchByName.value = res.data
  console.log('按照书名搜索',searchByName.value);
     })
 //获取购物车信息
  const getCartInfo = async (name) => {
    //获取购物车信息
    const res = await axiosObj.get(`/getCart?username=${name}`)
    cartInfo.value = res.data
    console.log('后台获取的购物车信息是', res.data)
    console.log('最新的仓库中的购物车数据为', cartInfo.value)
  }

  //增加购物车中的商品
  const addCart = async (bookId, username, num) => {
    console.log('执行仓库中的增加购物车函数')
    console.log('添加书的id:', bookId, '添加的用户名', username, '添加的数量', num)
    const res = await axiosObj.post('/insertCart', {
      bookId,
      username: username,
      isBuyed: 'n',
      amount: num
    })
    console.log('后台返回的数据是', res)

    //刷新购物车信息
    getCartInfo(username)
  }

  //减少购物车中商品
  const reduceCart = async (bookId, username, num) => {
    console.log('执行减少购物车函数')
    console.log('书籍id是', bookId, '用户名是', username, '减少的数量是', num)
    const res = await axiosObj.post('/deleteCart', {
      bookId: bookId,
      username: username
    })
    console.log('减少函数的执行结果', res)
    getCartInfo(username)
  }
  //删除购物车中的某条购物信息
  const deleteBookRecord = async (bookId, username) => {
    console.log('执行删除购物记录函数')
    console.log('书籍id是', bookId, '用户名是', username)
    const res = await axiosObj.post('/deleteBookRecord', {
      bookId: bookId,
      username: username
    })
    console.log('删除购物记录的函数的执行结果', res)
    getCartInfo(username)
  }
  //清空购物车
  const clearCart = async (username) => {
    console.log('执行清空购物车函数')
    console.log('用户名是', username)
    const res = await axiosObj.post('/clearCart', {
      username: username
    })
    console.log('清空购物车的函数的执行结果', res)
    getCartInfo(username)
  }
//页面移动的方法
const targetNovel = null
const targetTechnology =null
const moveTo =(targetElement)=>{
    console.log("执行移动函数");
    console.log(targetElement);
    if (targetElement!=null) {
      targetElement.value.scrollIntoView({ behavior: 'smooth' });
    }
  
}


  return {
    bookList,
    cartInfo,
    getBookList,
    getCartInfo,
    addCart,
    reduceCart,
    deleteBookRecord,
    clearCart,
    getBookByType,
    getBookByName,
    searchByName,
    getBookByAuthor,
    searchByAuthor,
    moveTo,
    
    targetNovel,
    targetTechnology
  }
})
