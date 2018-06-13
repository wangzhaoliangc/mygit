<template>
  <div class="mine">
    <!-- <h-header :showBack="false" :title="title"></h-header> -->
    <div class="user-img">
      <img :src="userImgSrc">
      <div style="padding: 20px 0 6px;color: #fefefe;">
        <p style="font-size: 24px;">
          <span>{{userinfo.username}}</span>
        </p>
        <p style="font-size: 13px;color: eee;">
          <span>账户余额：</span>
          <span style="color: orangered;">￥{{userinfo.balance}}</span>
        </p>
      </div>
      <!-- <flexbox class="flex-box">
        <flexbox-item class="flex-item">
          <b class="iconfont">￥100</b>
          </br>
          账户余额
        </flexbox-item>
      </flexbox> -->
      <!-- <flexbox class="flex-box">
        <flexbox-item class="flex-item">
          <b class="iconfont">￥100</b>
          </br>
          账户余额
        </flexbox-item>
        <flexbox-item  class="flex-item">
          <b class="iconfont" style="color: #f25838;">￥100</b>
          </br>
          我的余额
        </flexbox-item>
      </flexbox> -->
    </div>
    <group class="" style="padding: 0 15px 10px 15px;">
      <cell class="list-item" :value="userinfo.username" is-link>
        <div slot="title">
          <i class="iconfont icon-xinwenzixun co-5"></i>
          账  号
        </div>
      </cell>
      <cell class="list-item" :value="userinfo.name" is-link>
        <div slot="title">
          <i class="iconfont icon-morentouxiang co-1"></i>
          姓  名
        </div>
      </cell>
      <cell class="list-item" :value="userinfo.phone" is-link>
        <div slot="title">
          <i class="iconfont icon-dianhua co-3"></i>
          手机号
        </div>
      </cell>
      <cell class="list-item" :value="userinfo.email" is-link>
        <div slot="title">
          <i class="iconfont icon-xin-xianxing co-4"></i>
          邮  箱
        </div>
      </cell>
      <!-- <cell class="list-item" :value="formData.email" is-link>
        <div slot="title">
          <i class="iconfont icon-xinwenzixun co-5"></i>
          证件号
        </div>
      </cell> -->
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
import HHeader from 'common/Header';
import { Flexbox,FlexboxItem,Group,Cell,XButton  } from 'vux';
import { getUserinfo } from 'base/getData'
export default {
  name: 'Mine',
  components: {
    HHeader,
    Flexbox,
    FlexboxItem,
    Group,
    Cell,
    XButton
  },
  data(){
    return{
      title: '我的账户',
      userImgSrc: require('assets/avatar_01.png'),
      formData: {
        username: 'admin',
        email: 'admin@htu.cc',
        phone: '13833182218',

      },
      userinfo: {}
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
<style lang="less" scoped>
.mine{
  font-size: 12px !important;
  .user-img{
    padding: 30px 20px;
    text-align: center  !important;
    background: url(../../../static/mine_page_hd.png) cadetblue;
    background-size: 100% 100%;
    img{
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    // .flex-box{
    //   padding-top: 15px;
    //   padding-bottom: 15px;
    //   background-color: rgba(0,0,0,.3);
    //   .flex-item{
    //     text-align: center!important;
    //     font-size: 14px;
    //     color: #FFFFFF;
    //     letter-spacing: .5px;
    //     &:first-child{
    //       border-right: 1px solid #bfbfbf;
    //     }
    //     b.iconfont{
    //       font-size: 20px;
    //       color: rgb(0, 193, 222);
    //     }
    //   }
    // }
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

</style>
