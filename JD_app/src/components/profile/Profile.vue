<template>
  <div class="mine">
    <h-header :title="title"></h-header>
    <div class="user-img">
      <img :src="userImgSrc">
      <flexbox class="flex-box">
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
      </flexbox>
    </div>
    <group class="" style="padding: 0 10px 10px;">
      <cell class="list-item" :value="formData.email" is-link>
        <div slot="title">
          <i class="iconfont icon-morentouxiang co-1"></i>
          真实姓名
        </div>
      </cell>
      <cell class="list-item" :value="formData.email" is-link>
        <div slot="title">
          <i class="iconfont icon-yonghuziliao-xianxing co-2"></i>
          账  号
        </div>
      </cell>
      <cell class="list-item" :value="formData.email" is-link>
        <div slot="title">
          <i class="iconfont icon-dianhua co-3"></i>
          手机号
        </div>
      </cell>
      <cell class="list-item" :value="formData.email" is-link>
        <div slot="title">
          <i class="iconfont icon-xin-xianxing co-4"></i>
          邮  箱
        </div>
      </cell>
      <cell class="list-item" :value="formData.email" is-link>
        <div slot="title">
          <i class="iconfont icon-xinwenzixun co-5"></i>
          证件号
        </div>
      </cell>
      <cell class="list-item" :value="formData.email" is-link>
        <div slot="title">
          <i class="iconfont icon-shezhi-xianxing co-6"></i>
          设置
        </div>
      </cell>

      <div style="padding: 20px 10px 10px;">
        <x-button type="default">切换账号</x-button>
      </div>
    </group>

    <transition name="slide" >
      <router-view style="position: fixed;left: 0;top: 0;"></router-view>
    </transition>
  </div>
</template>
<script>
import HHeader from 'common/Header';
import { Flexbox,FlexboxItem,Group,Cell,XButton  } from 'vux';
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

      }
    }
  }
}
</script>
<style lang="less" scoped>
.mine{
  font-size: 12px !important;
  .user-img{
    padding-top: 20px;
    text-align: center  !important;
    background: url(../../assets/mine_page_hd.png);
    background-size: 100% 100%;
    img{
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .flex-box{
      padding-top: 15px;
      padding-bottom: 15px;
      background-color: rgba(0,0,0,.3);
      .flex-item{
        text-align: center!important;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: .5px;
        &:first-child{
          border-right: 1px solid #bfbfbf;
        }
        b.iconfont{
          font-size: 20px;
          color: rgb(0, 193, 222);
        }
      }
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

</style>
