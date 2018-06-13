<template>
  <div class="d-dos">
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
  name: 'DDOS',
  components: {BaseProducts,BaseProducts1,YunTitle},
  data(){
    return{
      titleText:{
          title: '云 抗D',
          class:'icon-kangddos',
          imgSrc:'./assets/yunwaf.jpg',
          style:{
            color:'rgb(255, 59, 59)',
            fontSize:'20px'
          },
          text:'金盾等保云-DDoS高防 是针对互联网服务器，在遭受大流量的DDoS攻击后导致服务不可用的情况下，推出的付费增值服务，用户可以通过配置高防IP，将攻击流量引流到高防IP，确保源站的稳定可靠。'
      },
      titleName1:'产品功能',
      titleName:'应用场景',
      list1:[
           {
            name:'云防御，在线进行流量清洗',
            text:'帮您节约超过80%的带宽成本，提供稳定防御服务。'
           },
           {
            name:'防御 DDoS+CC',
            text:'自主研发多层级防御体系，针对通信协议特点，有效防御流量+应用层攻击。'
           },
           {
            name:'策略灵活',
            text:'根据攻击变化分析，灵活调整策略，针对性设置 CC 防御触发参数，实时下发规则，全网秒级生效。'
           },
           {
            name:'多线路多机房协作',
            text:'专注于超大规模流量攻击，防御带宽储备不断增长，防御能力超过百G。'
           },
           {
            name:'运维支撑能力强',
            text:'独家拥有运营商线路接口，可实现 IP 地址自主尘封和解封，保证防御资源的可用性。'
           },
        ],
      list:[
          {
            name:'门户网站',
            text:'门户网站属于 DDoS 攻击的重灾区，攻击者可通过 DNS 解析轻松获得网站服务器的真实 IP，从而发起大流量攻击，导致网站访问缓慢甚至直接瘫痪无法访问。'
          },
           {
            name:'电商平台',
            text:'DDoS 攻击防护服务帮助用户有效抵御大流量 DDoS 攻击。用户可以通过配置 DDoS 攻击防护服务，将攻击流量引流到防护服务器，确保源站的稳定可靠。QingCloud DDoS 攻击防护服务为用户提供超 700Gb/s 的防护能力，支持 HTTP/TCP 协议，及 HTTPS 加密。无需软硬件部署，无需人工维护。可防御多种攻击类型，提供无缝实时扩容、超额流量防御、实时监控、流量告警等多种功能。'
          },
          {
            name:'网络游戏',
            text:'游戏行业是 DDoS 攻击的高发行业，攻击者利用 DDoS 攻击发起大流量攻击，可导致游戏访问缓慢、掉线。DDoS 攻击可能发生在任何时间，并在很短的时间内到达极高的攻击带宽。这种突发性，一方面考验防护服务的承载能力和可用性，另一方面也对用户的使用成本提出挑战。'
          },
        ]
    }
  },

}
</script>
<style lang="less" scoped>

</style>
