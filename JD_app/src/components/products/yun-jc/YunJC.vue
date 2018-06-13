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
          title: '对象存储',
          class:'icon-ossduixiangcunchu',
          style:{
            color:'rgb(255, 59, 59)',
            fontSize:'20px'
          },
          text:'对象存储是面向海量非结构化数据的通用数据存储平台，使用RESTful API 可以在互联网任何位置存储和访问，容量和处理能力弹性扩展，多种存储类型供选择全面优化存储成本。'
      },
      titleName1:'产品功能',
      titleName:'应用场景',
      list1:[
           {
            name:'安全',
            text:'100% 网络隔离 (多租户隔离) ，性能优异的防火墙及 DDoS 防护为用户提供全方位的防护服务。完善的访问控制；支持客户端及服务端加密；数据传输支持 SSL，使您在团队协作中依旧保持数据不泄露，不被轻易篡改。'
           },
           {
            name:'低成本',
            text:'成本低廉，无需采购、部署和运维，按量付费；通过存储分层及对象生命周期管理，可将成本降至更低。深度集成数据处理服务。'
           },
           {
            name:'自动扩容，弹性扩展',
            text:'系统可无限水平扩展，且在存储容量水平扩展时，数据存取的性能线性提升。可承载无限存储空间，每个存储空间的容量亦可无限扩展。'
           },
           {
            name:'数据持久性高',
            text:'数据持久性达 99.99999999%，具备跨地域的多数据中心服务能力；规模自动扩展，提供数据异地容灾。'
           },

        ],
      list:[
          {
            name:'文件存储',
            text:'金盾等保云-对象存储提供了安全、可靠的数据存储服务，适用于各种类型文件的存储，支持用户通过控制台、API、SDK 等各种方式进行读写，同时 金盾等保云-对象存储在架构的各个层面都实现了高扩展性。相较于块存储，可以更好地满足企业海量数据的存储和访问需求，同时节约了大量的存储成本，帮助应用持续高性能的支撑业务未来的高速发展。'
          },
           {
            name:'数据备份',
            text:'金盾等保云- 对象存储服务具有可无限扩展的存储空间、快速的数据存取性能、高度的服务可靠性和数据安全性，通过细粒度的权限控制、简单易用的接口以及完善的解决方案来帮助企业用户备份与管理自己的数据，同时节约更多的本地的存储成本、维护成本和人力资源成本。'
          },
          {
            name:'数据处理',
            text:'企业有大量的数据处理需求，如图片的放大、缩小、打水印，音视频的转码，图片的鉴黄，人脸识别等。金盾等保云- 对象存储通过可扩展的异步数据处理框架接入了各种数据处理服务，帮助用户从通用的数据处理方式中抽离出来，从而更好地聚焦业务的创新。'
          },
          {
            name:'存储与分发',
            text:'金盾等保云-对象存储作为 CDN 加速的源站，可以有效承载海量的存储需求，并进行有效的管理，而配合 CDN 加速，可以利用 CDN 网络对数据进行本地缓存的特性，降低源站的流量晨成本，同时提供数据方案的访问速度，从而为互联网应用的图片、音视频以及应用分发提供最佳的用户体验。'
          },
        ]
    }
  },

}
</script>
<style lang="less" scoped>

</style>
