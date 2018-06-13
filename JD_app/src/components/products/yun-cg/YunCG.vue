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
  name: 'VirtualServer',
  components: {BaseProducts,BaseProducts1,YunTitle},
  data(){
    return{
         titleText:{
          title: '人脸识别',
          class:'icon-renlianshibie',
          style:{
            color:'rgb(255, 59, 59)',
            fontSize:'20px'
          },
          text:'人脸识别实现了图像或视频中人脸的检测、分析和比对，包括人脸检测定位、人脸属性识别和人脸比对等独立服务模块，可为开发者<br>和企业提供高性能的在线API服务，应用于人脸AR、人脸识别和认证、大规模人脸检索、照片管理等各种场景。'
      },
       titleName1:'产品功能',
       titleName:'应用场景',
       list1:[
           {
            name:'识别精准度高',
            text:'人脸检测识别等算法精度处于业内领先水平，支持实时识别。'
           },
           {
            name:'一站式服务',
            text:'可与金盾等保云其他产品合力打造一站式解决。'
           },
           {
            name:'产品服务定制服务',
            text:'与SDK相结合，根据客户需求快速定制开发。'
           },

        ],
       list:[
          {
            name:'人脸识别场景',
            text:'人脸识别解决方案广受市场追捧，在诸多行业应用广泛，例如金融、安防、电子商务、智能手机、娱乐图片等行业。随着技术发展市场扩大，人脸识别技术在现实生活中的应用场景越来越多，价值及作用越来越大。以下是人脸识别方向的部分使用场景举例身份验证场景、人脸AR场景、安防监控场景、智能相册管理，可用于刷脸付款、扫脸开卡、人脸登录、VIP人脸识别、人脸签到、人脸通关等一系列人脸应用场景下的身份验证。'
          },

        ]
    }
  },

}
</script>
<style lang="less" scoped>
    
</style>
