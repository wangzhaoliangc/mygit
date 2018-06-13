<template>
  <div class="about">
    <h-header :title="'联系我们'"></h-header>
    <div class="list-group">
    <Panel  :list='list'></Panel>
      <div class="content">
       
        <img src="../../assets/map.png" width="100%">
    </div>
  </div>
</div>
</template>

<script>
import HHeader from 'common/Header'
import { Group,Cell,Panel } from 'vux';

export default {
  components: { HHeader,Map,Group,Cell,Panel },
  data () {
    return {
      list:[
      {
          title: '联系电话:',
          desc: '0371-55395205'
      },
      {
          title: '邮编:',
          desc: '450000'
      },
      {
          title: '公司地址:',
          desc: '郑州市郑东新区龙子湖湖心岛创意园孵化器6楼'
      },
      ]
    }
  },
  methods: {
    
  }
}
</script>

<style lang="less" >
.weui-media-box__desc{
  margin-top: 10px;
  font-size: 16px !important;
}
.about{
  padding-top: 50px;
  background: #fff;
  .about-cont{
    padding: 0 25px 15px;
    background: #fff;
  }
  .list-group{
    padding: 0 10px 15px;
    background: #fff;
    .content{
      margin-top: 20px;
      padding: 5px;
      line-height: 26px;
      font-size: 15px;
      color: #666;
    }
  }
}

</style>
