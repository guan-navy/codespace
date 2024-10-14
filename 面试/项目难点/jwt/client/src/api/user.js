import { post } from './index.js' 

export function login(body) {
  return post('/login', body).then(res => res.data)
}

export function home() {
  return post('/home').then(res => res.data)
}