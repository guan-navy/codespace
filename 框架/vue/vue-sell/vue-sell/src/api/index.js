import { get } from './axios.js'

const getSeller = get('/api/seller')
const getGoods = get('/api/goods')

export {
  getSeller,
  getGoods
}