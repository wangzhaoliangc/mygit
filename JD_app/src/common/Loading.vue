<template>
  <div class="loading">
    <img width="36" height="36" src="../assets/loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'Loading',
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  }
</script>
<style lang="less" scoped>
.loading{
  width: 100%;
  padding: 5px 0;
  text-align: center;
  .desc{
    line-height: 20px;
    font-size: 12px;
    // color: '#fff';
  }
}
</style>
