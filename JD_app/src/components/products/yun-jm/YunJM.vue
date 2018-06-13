<template>
  <div class="tamper">
     <YunTitle :titleText='titleText'></YunTitle>
    <div class="pros-group">
      <BaseProducts1 :list="list1" :titleName='titleName1'></BaseProducts1>
      <BaseProducts :list="list" :titleName='titleName'></BaseProducts>
    </div>
  </div>
</template>
<script>
import BaseProducts from '../base-product.vue'
import BaseProducts1 from '../base-products1.vue'
import YunTitle from '../yunTitle.vue'
export default {

  components: {BaseProducts,BaseProducts1,YunTitle},
  data(){
    return{
      titleText:{
           title: '托管云',
          class:'icon-hsmjiamifuwu',
          style:{
            color:'rgb(255, 59, 59)',
          },
          text:'托管云方案致力于为用户提供一站式、高可用、高安全、快捷灵活的业务托管平台。整个托管云环境由 金盾云 服务团队提供 7×24 小时的运维支持，确保云平台的服务水平。'
      },
      titleName1:'服务特性',
      titleName:'应用场景',
      list1:[
           {
            name:'4A级数据中心机房',
            text:'双路市电，备用发电机供电可提供36小时连续运行统一的基础设施 SLA 保障，统一的基础设施服务体系'
           },
           {
            name:'一站式运维支持',
            text:'主动运行监控，无中断升级方式，定期提供运行分析报告专业人员服务，专职运维服务团队、7X24小时售后服务。'
           },

        ],
      list:[
          {
            name:'企业多数据中心灾备系统',
            text:'多线 BGP 互联网出口，SDH，MSTP，裸光纤多种接入模式，满足传输访问需求定制化云平台部署方案，整体运维服务，保障业务环境安全稳定金融级高可靠的 MySQL 集群，一主多从架构，最大支持六个从节点i2数据远程实时/定时备份方案，数据可在不同厂商、型号、平台的服务器间轻松同步。'
          },

        ]
    }
  },

}
</script>
<style lang="less" scoped>

</style>
