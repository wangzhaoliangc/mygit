<template>
  <div class="purchase-success">
    <h-header :title="title"></h-header>
    <msg title="开通成功！" :description="desc" :icon="icon"></msg>
    <div style="margin: 0 15px;">
      <x-button @click.native="onConfirm" type="primary" >快去查看</x-button>
    </div>
  </div>
</template>
<script>
import HHeader from 'common/Header'

import { Msg, Divider, XButton } from 'vux'
export default {
  name: 'Success',
  components: {
    HHeader,
    Msg, Divider, XButton
  },
  data(){
    return{
      title: '操作提示',
      desc: '本次操作成功！如有疑问请及时联系客服！',
      icon: '',
    }
  },
  mounted(){

  },
  methods: {
    changeIcon () {
      if (!this.icon || this.icon === 'success') {
        this.icon = 'warn'
        return
      }
      if (this.icon === 'warn') {
        this.icon = 'info'
        return
      }
      if (this.icon === 'info') {
        this.icon = 'waiting'
        return
      }
      if (this.icon === 'waiting') {
        this.icon = 'success'
      }
    },
    onConfirm(){
      this.$router.push('/server')
    }
  }
}
</script>
<style lang="less" scoped>
.purchase-success{
  position: fixed;
  left: 0px;
  top: 50px;
  right: 0px;
  bottom: 15px;
  background-color: #fff;
  .vux-button-group > a.vux-button-group-current{
    background-color: #54d5e9;
  }
  .vux-button-group > a.vux-button-tab-item-first:after,
  .vux-button-group > a.vux-button-tab-item-last:after{
    border-color: #54d5e9;
  }

  .slide-enter-active,.slide-leave-active{
    transition: all .3s;
  }
  .slide-enter,.slide-leave-to{
    transform: translate3d(100%,0,0)
  }
}
</style>
