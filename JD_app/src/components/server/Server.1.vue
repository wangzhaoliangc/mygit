<template>
  <div class="server">
    <h-header :title="title"></h-header>
    <group class="list-group">
      <div class="dim">
        <span class="iconfont icon-gantanhao-xianxingyuankuang"></span>
        ECS支持：随时不停机升级带宽，5分钟内停机升级CPU和内存，您可根据实际使用情况弹性扩展
      </div>
      <cell class="list-group-item" v-for="(item,index) in YunProducts" :key="index">
        <template slot="title">
          <span :style="{fontSize: '14px',color: '#aaa'}">服务器：</span>
          <strong >{{item.name}}</strong>
          <small>{{item.ip}}</small>
        </template>
        <div slot>
          <x-button @click.native="detail(item.id)" mini :gradients="['#5FB878','green']">查看</x-button>
        </div>
        <div class="content" slot="inline-desc">
          <p>
            cpu：{{item.cpu}}核 | 系统盘：{{item.disk_data}}GB | 带宽：{{item.bandwidth}}Mbps
          </p>
        </div>
      </cell>
      <!-- <list-view ></list-view> -->
    </group>
    <div v-transfer-dom>
      <loading :show="Loading" text="正在查询数据.."></loading>
    </div>
    <transition name="slide" mode="out-in">
      <router-view style="position: fixed;left: 0;top: 0;"></router-view>
    </transition>
  </div>
</template>

<script>
import HHeader from 'common/Header'
import ListView from 'common/ListView'
import { TransferDom,XButton,CellBox,Group,Cell,Tab,TabItem,Swiper,SwiperItem,Confirm,Loading } from 'vux'
import { getServerList } from 'base/getData'

export default {
  name: 'Server',
  directives: {
    TransferDom
  },
  components: {
    HHeader,ListView,
    XButton,CellBox,Group,Cell,Tab, TabItem,Swiper,SwiperItem,Confirm,Loading
  },
  data () {
    return {
      title: '我的云主机',
      desp: '云服务器是一种弹性可伸缩的计算服务，助您降低 IT 成本，提升运维效率，使您更专注于核心业务创新！',
      Loading: false,
      confirmShow: false,
      YunProducts: [],
      tabContent: ['11','22'],
      index: 0,
    }
  },
  created(){
    this._getServerList();
  },
  methods: {
    _getServerList(){
      getServerList().then((res) => {
        if(res.code == 0){
          this.YunProducts = res.data.results;
          console.log(this.YunProducts)
        }
      })
    },
    detail(id){
      this.$router.push('/server/msg/'+ id)
    }
  }
}
</script>

<style lang="less" scoped>
.server{
  padding: 30px 5px 15px;
  background: #fff;
  .list-group{
    background: #fff;
    .dim{
      padding: 5px;
      line-height: 20px;
      font-size: 12px;
      color: #303c38;
      background: #b7dfff;
    }
    .list-group-item{
      background-color: #f9f9f9;
      margin-bottom: 5px;
      strong{
        display: inline-block;
        padding: 4px 0;
        font-weight: normal;
        color: #1E9FFF;
        letter-spacing: 1px;
      }
      small{
        font-size: 13px;
        color: #9f9f9f;
        letter-spacing: 1px;
      }
      .content{
        padding: 0 3px;
        p{
          font-size: 13px;
          color: #393D49;
        }
      }
      .weui-cell{
        padding: 0 0 0 15px;
        .vux-cell-bd{
          padding-right: 15px;
          background-color: #fff !important;
        }
      }
      .inline-desc{

      }
    }
  }
  .slide-enter-active,.slide-leave-active{
    transition: all .3s;
  }
  .slide-enter,.slide-leave-to{
    transform: translate3d(100%,0,0);
  }
}

</style>
