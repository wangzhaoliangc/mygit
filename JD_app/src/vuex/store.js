import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLogin: false,
    tabbarChecked: 0,
    payment: {},
    specs: [],
    mirrors: [],
    newsName: '',
    orders:{},
    safeGroup:{},
    rules:{}
  },
  mutations: {
    CHANGELOGIN(state,value){
      state.isLogin = value;
    },
    CHANGETABBARCHECKED(state,value){
      state.tabbarChecked = value;
    },
    CHANGEPAYMENT(state,value){
      state.payment = value;
    },
    CHANGESPECS(state,arr){
      state.specs = arr;
    },
    CHANGEMIRRORS(state,arr){
      state.mirrors = arr;
    },
    CHANGENEWSNAME(state,value){
      state.newsName = value;
    },
    ORDERS(state,obj){
      state.orders = obj;
    },
    SAFEGROUP(state,obj){
      state.safeGroup = obj;
    },
    RULES(state,obj){
      state.rules = obj;
    }

  },
  getters :{
      orders:state =>state.orders,
      safeGroup:state=>state.safeGroup,
      rules:state=>state.rules
  },
  actions: {
    changeLogin({commit}, value){
      commit('CHANGELOGIN', value)
    },
    changeTabbarChecked({commit}, value){
      commit('CHANGETABBARCHECKED', value)
      localStorage.setItem('tabbartype', value)
    },
    changePayment({commit}, value){
      commit('CHANGEPAYMENT',value)
    },
    changeSpecs({commit}, arr){
      commit('CHANGESPECS',arr)
    },
    changeMirrors({commit}, arr){
      commit('CHANGEMIRRORS',arr);
    },
    changeNewsname({commit}, value){
      commit('CHANGENEWSNAME', value);
    },
    changeOrders({commit},obj){
      commit('ORDERS',obj)
    },
    changeSafeGroup({commit},obj){
      commit('SAFEGROUP',obj)
    },
    changeRules({commit},obj){
      commit('RULES',obj)
    }
    
  }
})

export default store; 