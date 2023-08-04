import axios from 'axios'
import store from '@/store'

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

export default request
