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
  name: 'LineChart',
  components: {
    HHeader
  },
  data(){
    let lineData = {
      timeData: ['18-01','18-02','18-03','18-04','18-05','18-06'],
      values: [120, 132, 101, 134, 90, 230]
    }
    return{
      title: '服务器使用情况',
      options: {
          title: {
              text: '服务器使用情况',
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
          tooltip : {
              trigger: 'axis'
          },
          legend: {
              right: 'right',
              orient: 'vertical',
              data:[{
                  name: 'CPU',
                  icon: 'roundRect'
              },{
                  name: '带宽',
                  icon: 'roundRect'
              }]
          },
          grid: {
              left: '1',
              top: '70',
              right: '1',
              bottom: '2%',
              containLabel: true,
              show:true
          },
          xAxis : {
              type : 'category',
              boundaryGap : false,
              data : lineData.timeData,
              axisLine:{lineStyle:{color:'#999'}},
              axisLabel: { 
                  rotate: 30,
                  lineHeight: 40,
                  margin: 20,
                  align: 'right'
              }
            },
          yAxis : [
              { 
                  name: '单位/Mbps',
                  nameTextStyle: { color: '#01AAED' },
                  type : 'value',
                  axisLine:{lineStyle:{color:'#999'}},
                  splitLine:{lineStyle:{color:'#dfdfdf'}}
              }
          ],
          series : [
              {
                  itemStyle:{normal:{ color:'#96d6e8'}},
                  name:'CPU',
                  type:'line',
                  stack: '总量',
                  areaStyle: {normal: {}},
                  data: lineData.values
              },
              {
                  itemStyle:{normal:{ color:'#f4abab'}},
                  name:'带宽',
                  type:'line',
                  stack: '总量',
                  areaStyle: {normal: {}},
                  data:[150, 232, 201, 154, 190, 330]
              }
          ]
      }
    }
  },
  mounted(){
    let LineChart = echarts.init(document.getElementById('line_chart'));
    LineChart.setOption(this.options)
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
