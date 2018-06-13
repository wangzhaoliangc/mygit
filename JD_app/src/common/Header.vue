<template>
  <div class="header">
    <x-header :left-options="{showBack: showBack, backText: ''}">{{title}}</x-header>
  </div>
</template>
<script>
import { XHeader } from 'vux'
export default {
  name: 'HHeader',
  props: {
    title: {
      type: String,
      default: ''
    },
    showBack: {
      type: Boolean,
      default: true
    }
  },
  components: {
    XHeader
  }
}
</script>
<style lang="less" scoped>
.header{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 46px;
  z-index: 10;
}
</style>
