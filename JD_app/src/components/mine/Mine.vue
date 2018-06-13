<template>
  <div class="mine" v-cloak>
    <x-header class="header" :left-options="{showBack: false}">
      <div slot="right">
        <router-link to="/inbox">
          <i :style="{fontSize: '20px', color: '#fff'}" class="iconfont icon-xin-xianxing"></i>
        </router-link>
      </div>
    </x-header>
    <div class="user-img">
      <img :src="userImgSrc">
      <div style="color: #fefefe;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
        <div class="username" style="">
         <span> {{ userinfo.username }}</span>
        </div>
        <p style="font-size: 15px;">
          <i :style="{fontSize: '22px',color: 'coral'}" class="iconfont icon-youhuijuan-xianxing"></i>
          <span style="color: #00c1de;">{{ userinfo.balance }}</span>
          <router-link to='/recharge'>
          <span style="color: #00c1de;font-size: 10px; display:inline-block;padding:0 3px;border:1px solid #00c1de;border-radius:2px;">充值</span>
          </router-link>
        </p>
        <p class="authentication">实名认证</p>

      </div>
    </div>
    <group class=" person" style="padding: 0 15px 10px 15px;">
      <cell class="list-item" :value="userinfo.username" is-link link='/personmeans'>
        <div slot="title">
          <i class="iconfont icon-morentouxiang co-1"></i>
         个人资料
        </div>
      </cell>
      <cell class="list-item" link='/order' is-link>
        <div slot="title">
          <i class="iconfont icon-dingdanguanli co-5"></i>
          订单管理
        </div>
      </cell>
      <cell class="list-item" link='/individual' is-link>
        <div slot="title">
          <i class="iconfont icon-gongdan co-3"></i>
          我的工单
        </div>
      </cell>
      <cell class="list-item" link='/inbox' is-link>
        <div slot="title">
          <i class="iconfont icon-xin-xianxing co-4"></i>
          我的消息
        </div>
      </cell>
      <cell class="list-item" is-link link="/setting">
        <div slot="title">
          <i class="iconfont icon-shezhi-xianxing co-6"></i>
          设  置
        </div>
      </cell>
    </group>
    <transition name="slide" >
      <router-view style="position: fixed;"></router-view>
    </transition>
  </div>
</template>
<script>
import { Group,Cell,XButton,XHeader } from 'vux';
import { getUserinfo } from 'base/getData'
export default {
  name: 'Mine',
  components: {
    XHeader,
    Group,
    Cell,
    XButton
  },
  data(){
    return{
      title: '我的账户',
      userImgSrc: require('assets/userlogo.png'),
      formData: {
        username: 'admin',
        email: 'admin@htu.cc',
        phone: '13833182218',

      },
      userinfo: {
        username: '0',
        balance: 0,
        name: '',
        phone: '',
        email: ''
      }
    }
  },
  created(){
    this._getUserinfo();
    let pathName = this.$route.name;
    if(pathName == 'mine'){
      this.$store.dispatch('changeTabbarChecked',3)
    }
  },
  methods: {
    _getUserinfo(){
      getUserinfo().then((res) => {
        if(res.code == 0){
          this.userinfo = res.data
        }
      })
    }
  }
}
</script>
<style lang="less" >
.mine{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 12px !important;
  overflow: auto;
  padding-top: 45px;
  .header{
    background-color: rgba(0,0,0,0);
  }
  .user-img{
    display: flex;
    align-items: center;
    padding: 30px 30px;
    margin-top: -46px;
    text-align: center  !important;
    // background: url(../../../static/mine_page_hd.png) cadetblue;
    background-color: #373d41;
    background-size: 100% 100%;
    img{
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    p{
      display: flex;
      align-items: center;
      padding-left: 15px;
      font-family: '微软雅黑';
      text-align: left;
      text-shadow: 0 2px #333333;
      span{
        font-family: '楷体';
        margin: 0 10px;
      }
    }
    p.authentication{
      box-sizing: border-box;
      margin-left: 15px;
      border:1px solid coral;
      text-align:center;
      padding-left:5px;
      border-radius:5px;
      width: 60px;
      color: coral;
    }
  }
  .list-item{
    font-size: 13px;
    color: #2c3e50;
    letter-spacing: 1px;
    .iconfont{
      font-size: 18px;
      &.co-1{ color: #2cd6a4; }
      &.co-2{ color: #00c1e0; }
      &.co-3{ color: #00c1de; }
      &.co-4{ color: #00c1de; }
      &.co-5{ color: #f9aaa4; }
      &.co-6{ color: #59b5f6; }
    }
  }
}
[v-cloak]{
  display: none;
}
.username{
  width: 220px;
  padding-left: 15px;
  font-family: '微软雅黑';
  text-align: left;
  text-shadow: 0 2px #333333;
  color: #fff;
  font-size: 20px;
  white-space: nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
  
}
.person .weui-cell:first-child .weui-cell__ft{
  max-width: 75%;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
</style>
