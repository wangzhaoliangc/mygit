import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import axios from 'axios'

import App from './App'
import store from './vuex/store';
import router from './router/index'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '&services=true&t=20130716024058'
})
Vue.prototype.HOST = '/api';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
Vue.prototype.$http = axios;
Vue.use(VueRouter) 



// 路由拦截
setTimeout(() => {
  router.beforeEach((to,from,next) => {
    let isLogin = vm.$store.state.isLogin;
    if(to.path == '/login/register' || to.path == '/login/forgetPassWord'){
      next()
      return
    }
    if(!isLogin && to.path !== '/login'){
      next({path: '/login'})
    }else{
      next();
    }
  })
}, 30)

// http 请求拦截
import { LoadingPlugin,ToastPlugin,ConfirmPlugin  } from 'vux';

Vue.use(LoadingPlugin )
Vue.use(ToastPlugin )
Vue.use(ConfirmPlugin)
// axios.defaults.timeout = 20000;
axios.interceptors.request.use(config => {
    // vm.$vux.loading.show('正在发起请求..')
    return config;
  }, error => {
    console.log(error)
    vm.$vux.loading.hide();
    vm.$vux.toast.show('网络超时，请检查您当前的网络！')

    return Promise.reject(error);
  })

// http 响应拦截
axios.interceptors.response.use(response => {
  vm.$vux.loading.hide();
  
  let data = response.data;
  if(data.code == 0){
    return response;
  }else if(data.code == 1036){
    vm.$vux.toast.show({
      type: 'warn',
      text: '登录超时！'
    })
    setTimeout(() => {
      router.replace({
        path: '/login',
        query: { redirect: router.currentRoute.fullPath }   //  登录超时
      })
    }, 1000);
  }else{
    vm.$vux.toast.show({
      type: 'warn',
      text: data.msg
    })
  }
}, error => {
    let Error = error.response;
    if(Error){
      console.log(Error)
      vm.$vux.toast.show({
        type: 'warn',
        text: '内部异常，请联系管理员！'
      })
    }
})

import { setTimeout } from 'timers';

FastClick.attach(document.body)
var vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


