

import { effect } from '../effect'
import { reactive, shallowReactive } from '../reactive'

describe('测试响应式', () => {
  it('测试', () => {
    expect(1 + 2).toBe(3)
  })

  test('reactive基本使用', () => {
    const ret = reactive({ num: 0 })
    let val
    effect(() => {
      val = ret.num
    })
    expect(val).toBe(0)
    ret.num++
    expect(val).toBe(1)
    ret.num = 10
    expect(val).toBe(10)
  })

  test('一个reactive对象的属性在多个effect中使用', () => {
    const ret = reactive({ num: 0 })
    let val, val2
    effect(() => {
      val = ret.num
    })
    effect(() => {
      val2 = ret.num
    })
    expect(val).toBe(0)
    expect(val2).toBe(0)
    ret.num++
    expect(val).toBe(1)
    expect(val2).toBe(1)
    ret.num = 10
    expect(val).toBe(10)
    expect(val2).toBe(10)
  })

  test('shalldowReactive基本使用', () => {
    const ret = shallowReactive({ num: 0 })
    let val
    effect(() => {
      val = ret.num
    })
    expect(val).toBe(0)
    ret.num++
    expect(val).toBe(1)
    ret.num = 10
    expect(val).toBe(10)
  })

  test('reactive 嵌套', () => {
    const ret = reactive({
      name: '玩转Vue3',
      info: {
        price: 129,
        type: 'f2e'
      }
    })
    let price
    effect(() => {
      price = ret.info.price
    })
    expect(price).toBe(129)
    ret.info.price++
    expect(price).toBe(130)
  })
  test('shalldowReactive 浅层响应式', () => {
    const ret = shallowReactive({
      name: '玩转Vue3',
      info: {
        price: 129,
        type: 'f2e'
      }
    })
    let price
    effect(() => {
      price = ret.info.price
    })
    expect(price).toBe(129)
    ret.info.price++
    expect(price).toBe(129) // 嵌套的没有响应式效果
  })
})