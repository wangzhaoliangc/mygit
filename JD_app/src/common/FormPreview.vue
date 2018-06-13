<template>
  <div class="form-preview">
    <!-- <h-header :title="title"></h-header> -->

  </div>
</template>
<script>
import HHeader from 'common/Header';
export default {
  name: 'FormPreview',
  data(){
    return{
      title: '我的订单'
    }
  },
  components: {
    HHeader
  }
}
</script>
