<template>
  <div class="server-moni">
    <h-header :title="title"></h-header>
    <div :style="{padding: '0 15px 15px'}">
      <x-button type="primary" plain mini>CPU</x-button>
      <x-button type="primary" plain mini>带宽</x-button>
    </div>
    <hr style="margin: 0 10px;border: 1px solid #efefef" />
    <line-chart ></line-chart>
  </div>
</template>
<script>
import HHeader from 'common/Header';
import LineChart from 'components/charts/LineChart';
import { XButton } from 'vux';

export default {
  name: 'serverMoni',
  components: { HHeader,LineChart,XButton },
  data(){
    return{
      title: '服务器监控',

    }
  }
}
</script>
<style lang="less" scoped>
.server-moni{
  position: fixed;
  left: 0;
  top: 46px;
  right: 0;
  bottom: 0;
  z-index: 20;
  background-color: #fff;
}
</style>
