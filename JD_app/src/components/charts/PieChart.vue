<template>
  <div class="pie-chart">
    <div id="pie_chart">
111111111111111111111111111111111
    </div>
  </div>
</template>
<script>
import echarts from 'echarts';
export default {
  name: 'pieChart',
  data(){
    return{
      options: {

      }
    }
  },
  mounted(){
    let pieChart = echarts.init(document.getElementById('pie_chart'));
    pieChart.setOption(this.options)
  }
}
</script>
<style lang="less" scoped>
.pie-chart{
  #pie_chart{
    display: block;
    padding: 15px;
    height: 300px;
  }
}
</style>
