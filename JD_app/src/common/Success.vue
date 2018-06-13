<template>
  <transition name='slide'>
    <div class="success">
    <XHeader  :left-options="{showBack: false}">{{title}}</XHeader>
    <msg :title="setName" :description="desc" :icon="icon"></msg>
    <div style="margin: 0 15px;">
      <x-button @click.native="onConfirm" type="primary" class="">{{centent}}</x-button>
    </div>
  </div>
  </transition>  
  
</template>
<script>
import { XHeader, Msg, Divider, XButton } from 'vux'
export default {
  name: 'Success',
  props:['setName','centent'],
  components: {
    Msg, Divider, XButton,XHeader
  },
  data(){
    return{
      title: '操作提示',
      desc: '本次操作成功！如有疑问请及时联系客服！',
      icon: '',
    }
  },
  methods: {
   onConfirm(){
    this.$emit('method')
   }
    
  }
}
</script>
<style lang="less" scoped>
.success{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  padding: 50px 15px 15px 15px;
  .vux-button-group > a.vux-button-group-current{
    background-color: #54d5e9;
  }
  .vux-button-group > a.vux-button-tab-item-first:after,
  .vux-button-group > a.vux-button-tab-item-last:after{
    border-color: #54d5e9;
  }
  
}
.slide-enter-active,.slide-leave-active{
    transition: all .3s;
  }
.slide-enter,.slide-leave-to{
    transform: translate3d(100%,0,0)
  }
</style>
