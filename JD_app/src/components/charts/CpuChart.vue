<template>
  <div class="line-chart">
    <h-header :title="title"></h-header>
    <div id="line_chart"></div>
  </div>
</template>
<script>
import echarts from 'echarts';
import HHeader from 'common/Header';
export default {
  name: 'CpuChart',
  components: {
    HHeader
  },
  data(){
    return{
      title: '服务器使用情况',
      option : {
        title: {
              text: 'CPU使用情况',
              left: 'left',
              textStyle: {
                fontSize: 16,
                color: '#2F4056'
              },
              subtextStyle: {
                fontSize: 12,
                color: '#aaa'
              }
          },
          legend: {
              right: 'right',
              orient: 'vertical',
              data:[{
                  name: 'CPU',
                  icon: 'roundRect'
              }]
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['18-01','18-02','18-03','18-04','18-05','18-06']
          },
          yAxis: {
              // name: '单位/Mbps',
              nameTextStyle: { color: '#01AAED' },
              type: 'value'
          },
          series: [{
              itemStyle:{normal:{ color:'#96d6e8'}},
              name:'CPU',
              data: [120, 132, 101, 134, 90, 230],
              type: 'line',
              areaStyle: {}
          }]
        
          }
        }
  },
  mounted(){
    let LineChart = echarts.init(document.getElementById('line_chart'));
    LineChart.setOption(this.option)
  }
}
</script>
<style lang="less" scoped>
.line-chart{
  padding-top: 10px;
  #line_chart{
    display: block;
    padding: 15px;
    height: 300px;
  }
}
</style>
