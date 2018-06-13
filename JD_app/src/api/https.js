import Vue from 'vue'
import axios from 'axios'
import router from '../router/index'
import { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)
console.log(LoadingPlugin)
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.timeout = 10000
// 请求拦截
axios.interceptors.request.use(config => {
  console.log(config)
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})
// 响应拦截
axios.interceptors.response.use(
  response => {
    return response 
  },
  error => {
    if(error.response){
      switch(error.response.status){
        case 401:   
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }   //登录成功后跳入浏览的当前页面
          })
          break;
        case 404:
          
          break;
        case 500: 
          // 服务器异常，请联系管理员！

          break;
        default:
          alert('服务器异常，请联系管理员！');
          break;
      }
    }
  }
)

export default axios;