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
          title: 'GPU云服务器',
          class:'icon-gpuyunfuwuqi',
          style:{
            color:'rgb(255, 59, 59)',
            fontSize:'20px'
          },
          text:'GPU云服务器是基于GPU应用的计算服务，多适用于AI深度学习,视频处理，科学计算，图形可视化，等应用场景。采用直通方式与虚拟主机对接，省去虚拟化带来的损耗，全面释放物理 GPU 的计算加速能力。'
      },
      titleName1:'产品功能',
      titleName:'应用场景',
      list1:[
           {
            name:'AI深度学习',
            text:'深度学习训练和推理在线服务，图像识别图像内容鉴别,语音识别。'
           },
           {
            name:'视频处理',
            text:'大规模高清视频转码,4K/8K高清直播多人视频会议,片源修复。'
           },
           {
            name:'科学计算',
            text:'影视渲染制作，碰撞模拟计算金融，基因工程，气象预测。'
           },
           {
            name:'图形可视化',
            text:'工程设计，非线性编辑远程教育应用，3D展示'
           },
           {
            name:'运维支撑能力强',
            text:'独家拥有运营商线路接口，可实现 IP 地址自主尘封和解封，保证防御资源的可用性。'
           },
        ],
      list:[
          {
            name:'云端在线渲染',
            text:'通过云桌面，在线实时渲染获得更好的视觉和操控体验。也可以通过远程桌面连接协议可以实现在线实时的渲染和图形图像编辑，可在任何地点使用多种设备接入。数据存储在NAS或者OSS上，随时内网访问拉取使用，保护数据安全固定办公场所可通过高速通道和NAT网关进一步的提升网络体验和降低成本。'
          },

        ]
    }
  },

}
</script>
<style lang="less" scoped>

</style>
