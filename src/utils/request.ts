import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'

const request = axios.create({
  // 配置选项
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 在这里通过改写 config 配置信息来实现业务功能的统一处理
  const { user } = store.state
  if (user && user.access_token) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    config.headers!.Authorization = user.access_token
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) { // 状态码为 2XX 都会在这里执行
  // console.log('请求响应成功了', response)
  // 如果是自定义错误状态码，错误处理就写到这里
  return response
}, function (error) { // 状态码超出 2XX 的都会在这里执行
  // 如果使用 HTTP 状态码，错误处理写到这里
  // console.log('请求响应失败了', error)
  if (error.response) { // 请求发出去收到响应了，但是状态码超出了 2XX 范围

  } else if (error.request) { // 请求发送出去没有收到响应
    Message.error('请求超市，请刷新重试')
  } else { // 在设置请求时发生了一些事情，触发了一个错误
    Message.error(`请求失败：${error.message}`)
  }
  return Promise.reject(error)
})

export default request
