<template>
  <div class="app" ref="AppName">
      <transition name='slide' mode='out-in'>
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default{
  name: 'app',
  mounted(){
    // 获取窗体高度  document.body.clientHeight
    let clientHeight = document.body.clientHeight;
    this.$refs.AppName.style.height = (clientHeight - 0) + 'px';
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './assets/fonts/iconfont.css';

html,body{
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fbf9fe;
  font-family:'微软雅黑'; 
}
.app{
  .footer{
    position: fixed;
    .active{
      .weui-tabbar__icon .iconfont,
      .weui-tabbar__label{
        color: rgb(138, 238, 177);
      }
    }
  }
}
.slide-leave-active,.slide-enter-active{
    transition: all .1s;
  }
  .slide-enter,.slide-leave-to{
    opacity: 0;
  }
  
</style>
