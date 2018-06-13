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
        title: '负载均衡',
        class:'icon-fuzaijunheng',
        style:{
            color:'rgb(255, 59, 59)',
            fontSize: '20px'
          },
        text:'负载均衡将来自多个公网地址访问的流量分发到多台主机上，支持自动检测并隔离故障主机，提升业务系统的服务能力和可用性。'
      },
      titleName1:'产品功能',
      titleName:'应用场景',
      list1:[
           {
            name:'超高性能',
            text:'支持负载均衡器集群，可将来自一个公网IP的流量分散至多个负载均衡器节点做并发处理，突破单个负载均衡器节点的能力瓶颈，可承载峰值流量达1Gbps，支撑千万级别并发访问请求。'
           },
           {
            name:'多种协议支持',
            text:'支持包括 HTTP/HTTPs/TCP 在内的多种协议，同时提供灵活多样的配置选项：负载均衡器可选配连接公网或放置于私有网络中；可连接基础网络或私有网络中的主机作为后端服务器。'
           },
           {
            name:'灵活的转发策略',
            text:'负载均衡的后端服务器可根据业务需求设置为对等或不对等两种模式。如果后端不对等，可以通过自定义转发策略来进行更高级转发控制。目前，可支持“按域名转发”和“按 URL 转发”两种规则，每条转发策略可配置多条规则，并可以自定义规则之间的匹配方式。'
           },

        ],
      list:[
          {
            name:'应对音视频大流量',
            text:'音视频应用中由于用户与主播之间需要实时大量的互动，因此，用户的流量非常大，而直播业务的波峰波谷效应明显，这对整个系统的弹性、稳定性和可用性带来了巨大的挑战。'
          },
           {
            name:'网络游戏动静分离',
            text:'游戏业务有很多图片等静态资源需要加载，通过CDN实现全球用户访问静态资源的加速；当用户在游戏中有互动时，产生的访问流量非常大，此时为了保证互动实时性，需要使用负载均衡进行流量分发。'
          },
          {
            name:'多层次容灾架构',
            text:'用户业务遍布各地域，使用云解析DNS将不同地域用户智能解析访问到相应的业务系统内，使用负载均衡进行海量的访问流量分发，还可构建地域级、可用区级的多层容灾架构。'
          },
          {
            name:'海量访问流量分发',
            text:'超多用户访问视频网站，使用负载均衡将用户访问流量分发到多台云服务器上，保证业务 系统平稳运行。多地域部署，需实现各节点之间的网络高速互联。'
          },
        ]
    }
  },

}
</script>
<style lang="less" scoped>

</style>
