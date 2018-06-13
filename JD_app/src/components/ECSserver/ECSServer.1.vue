<template>
  <div class="detail">
    <h-header :title="'电联通信企业用户终端'"></h-header>
    <div class="detail-cont">
      <h1 class="title">{{ title }}</h1>   
      <p class="desp">{{ desp }}</p> 
      <x-button type="primary" @click.native="goBought">立即购买</x-button>
    </div>
    <group class="list-group">
      <div class="header" slot="title">推荐配置</div>
      <div class="dim">
        <span class="iconfont icon-gantanhao-xianxingyuankuang"></span>
        ECS支持：随时不停机升级带宽，5分钟内停机升级CPU和内存，您可根据实际使用情况弹性扩展
      </div>
      <cell class="list-group-item" v-for="(item,index) in EcsProducts" :key="index">
        <template slot="title">
          <strong >{{item.title}}</strong>
          <small>{{item.desc}}</small>
        </template>
        <div class="value" slot>
          <span>
            {{item.price}}元/{{item.unit}}起
          </span>
          <x-button @click.native="payment(item.id)" mini :gradients="['yellow','orange']">购买</x-button>
        </div>
        <div class="content" slot="inline-desc">
          <p>
            1核 CPU | 4GB 内存 | 1M宽带
          </p>
        </div>
      </cell>
      <x-button link="/purchase" style="background-color: #00c2de;color: #fff;">选择更多配置</x-button>
      <tab :animate="true" active-color='#02c1e2' v-model="index">
        <tab-item selected>应用场景</tab-item>
        <tab-item>功能优势</tab-item>
      </tab>
      <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item>
          <div class="tab-swiper vux-center">应用场景</div>
        </swiper-item>
        <swiper-item>
          <div class="tab-swiper vux-center">功能优势</div>
        </swiper-item>
      </swiper>
    </group>
    <div v-transfer-dom>
      <loading :show="loadingShow" text="正在提交支付信息.."></loading>
    </div>
    <div v-transfer-dom>
      <confirm v-model="confirmShow"
        title="支付购买"
        @on-confirm="onConfirm">
        <p style="text-align:center;">确认支付吗?</p>
      </confirm>
    </div>
    <div v-transfer-dom>
      <transition name="translate" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { TransferDom,XHeader,XButton,CellBox,Group,Cell,Tab,TabItem,Swiper,SwiperItem,Confirm,Loading } from 'vux'
import HHeader from 'common/Header'

export default {
  name: 'ECSServer',
  directives: {
    TransferDom
  },
  components: {
    HHeader,
    XHeader,
    XButton,
    CellBox,
    Group,
    Cell,
    Tab, 
    TabItem,
    Swiper,
    SwiperItem,
    Confirm,
    Loading
  },
  data () {
    return {
      title: '云服务器 ECS',
      desp: '云服务器 ECS（Elastic Compute Service）是一种弹性可伸缩的计算服务，助您降低 IT 成本，提升运维效率，使您更专注于核心业务创新',
      loadingShow: false,
      confirmShow: false,
      EcsProducts: [
        {
          id: '0',
          title: '新用户专享',
          desc: '全网底价,上云捷径',
          price: 27,
          unit: '月',
        },{
          id: '11111',
          title: '新用户专享',
          desc: '全网底价,上云捷径',
          price: 27,
          unit: '月',
        },{
          id: '11111',
          title: '新用户专享',
          desc: '全网底价,上云捷径',
          price: 27,
          unit: '月',
        },{
          id: '11111',
          title: '新用户专享',
          desc: '全网底价,上云捷径',
          price: 27,
          unit: '月',
        },{
          id: '11111',
          title: '新用户专享',
          desc: '全网底价,上云捷径',
          price: 27,
          unit: '月',
        }
      ],
      tabContent: ['11','22'],
      index: 0,
    }
  },
  methods: {
    goBought(){
      if(!this.$store.state.isLogin){
        this.$router.push('./or')
      }else{
        this.$router.push('/login')
      }
    },
    payment(id){
      this.confirmShow = true;
    },
    onConfirm () {
      this.loadingShow = true;
      setTimeout(() => {
        this.loadingShow = false;
        this.$router.push('/success')
      }, 2000)
    },
    onHide(){

    }
  }
}
</script>

<style lang="less" scoped>
.detail{
  padding-top: 50px;
  background: #efefef;
  .vux-header{
    padding: 3px 25px;
    color: #f8fdff;
    background-color: #383d41;
    letter-spacing: 1px;
  }
  .detail-cont{
    padding: 0 25px 15px;
    background: #fff;
    .title{
      padding: 10px 0;
      font-size: 28px;
    }
    .desp{
      padding: 0 0 15px;
      line-height: 26px;
      color: #a4a7ab;
    }
  }
  .list-group{
    padding: 0 10px 15px;
    background: #fff;
    .header{
      padding: 5px 15px;
      font-size: 18px;
      color: #393D49;
      background-color: #efefef;
      letter-spacing: 1px;
      border-bottom: 1px solid #bfbfbf;
      margin: 0 -10px;
    }
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
        color: #333;
        letter-spacing: 1px;
      }
      small{
        font-size: 13px;
        color: #9f9f9f;
        letter-spacing: 1px;
      }
      .value{
        text-align:center;
        padding: 6px 5px;
        background-color: rgba(233,239,232,.5);
        border-radius: 4px;
        border: 1px solid #e9efe8;
        span{
          display: block;
          line-height:20px;
          font-size:14px;
          color: darkorange;
          font-style: italic;
          letter-spacing: 1.5px;
        }
      }
      .content{
        padding: 1px 3px 10px;
        p{
          font-size: 14px;
          color: #333;
        }
      }
      .weui-cell{
        padding: 0 0 0 15px;
        .vux-cell-bd{
          padding-right: 15px;
          background-color: #fff !important;
        }
      }
    }
  }
  .tab-swiper {
    padding: 5px 10px;
    background-color: #fff;
    font-size: 13px;
  }
  .slide {
    padding: 0 20px;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }
  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }
}

</style>
