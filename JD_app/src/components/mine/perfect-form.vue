<template>
  <div class="form-edit">
    <h-header :title="title"></h-header>
  </div>
</template>
<script>
import HHeader from 'common/Header'
export default {
  name: 'FormEdit',
  components: { HHeader },
  data(){
    return{
      title: '修改资料'
    }
  }
}
</script>
<style lang="less" scoped>
.form-edit{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: #fff;
  overflow: auto;
}
</style>
