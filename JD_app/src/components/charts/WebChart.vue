<template>
  <div class="line-chart">
    <h-header :title="title"></h-header>
    <div id="web_chart"></div>
  </div>
</template>
<script>
import echarts from 'echarts';
import HHeader from 'common/Header';
export default {
  name: 'WebChart',
  components: {
    HHeader
  },
  data(){
    return{
      title: '服务器使用情况',
      option : {
        title: {
              text: '带宽使用情况',
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
                  name: '带宽',
                  icon: 'roundRect'
              }]
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['18-01','18-02','18-03','18-04','18-05','18-06']
          },
          yAxis: {
              name: '单位/Mbps',
              nameTextStyle: { color: '#f4abab' },
              type: 'value'
          },
          series: [{
              itemStyle:{normal:{ color:'#f4abab'}},
              name:'带宽',
              data:[150, 232, 201, 154, 190, 330],
              type: 'line',
              areaStyle: {}
          }]
        
          }
        }
  },
  mounted(){
    let WebChart = echarts.init(document.getElementById('web_chart'));
    WebChart.setOption(this.option)
  }
}
</script>
<style lang="less" scoped>
.line-chart{
  padding-top: 10px;
  #web_chart{
    display: block;
    padding: 15px;
    height: 300px;
  }
}
</style>
