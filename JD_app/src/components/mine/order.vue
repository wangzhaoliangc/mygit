<template>
  <div class="orders">
    <x-header :title="title" :left-options="{backText:''}"></x-header>
    <section class="content">
       <div class="list_title ">
         <div class="title_left vux-1px-r" @click='ulShow1'>
           <h5 class="vux-1px-b">{{h5Content1}}</h5>
           <i class="right-icon" :class="{active:liShow1}"></i>
         </div>
         <div class="title_center" @click='ulShow2'>
           <h5 class="vux-1px-b">{{h5Content2}}</h5>
           <i class="right-icon" :class="{active:liShow2}"></i>
         </div>
       </div>
       <div class="list-content">
         <transition name='slide'>
           <ul class="lists" v-show='liShow1'>
            <li v-for='(item,index) in li1' :class="{fcolor:duiShow1 == index}" class="vux-1px-b" @click='chickName1(item,index)'>{{item}}
             <i class="iconfont icon-duihao" v-show='duiShow1 == index'></i>
            </li>
           </ul>
          </transition>
           <transition name='slide'>
          <ul class="lists" v-show='liShow2'>
            <li v-for='(item,index) in li2' class="vux-1px-b" :class="{fcolor:duiShow2 == index}" @click="chickName2(item,index)">{{item}}
              <i class="iconfont icon-duihao" v-show='duiShow2 == index'></i>
            </li> 
           </ul>
           </transition>
           <transition name='fade'>
           <div class="mask" v-show='maskShow' @click='mask'></div>
           </transition>
       </div>
       <div class="order-list">
        <scroller lock-x  
        use-pullup 
        :pullup-config="pullupConfig" 
        @on-pullup-loading="loadMore" 
        use-pulldown 
        scrollbar-y
        :pulldown-config="pulldownConfig" 
        @on-pulldown-loading="refresh" 
        class='scroller' 
        ref="scrollerEvent"
        height='-91'
        v-if='orderList.length>0'
        >
        <div>
          <ul class="list-item" v-for='item in orderList' @click='selectdOrder(item)'>
            <p>
              <span class="name">{{item.prodcut_name}}</span> 
              <span class="pay_status" 
              :class='{npay_status: item.npay,delete_status:item.delete_status}'
              >{{item.delete_status || item.pay_status}}</span>

            </p>
            <p>
              <span class="total">￥{{item.product_price}}</span>&nbsp; &nbsp;|&nbsp;&nbsp;
              <span class="order_status">{{item.order_type}}</span>
            </p>
            <p>
              <span class="time">下单时间:{{item.create_time}}</span>
            </p>
            <i class="detail-icon"></i>
          </ul>
        </div>
        <div v-show="!hasNext && tipshow" class="bottom-tip">
        ~ 别拉了，到底了！
      </div>
       </scroller>
       </div>
    </section>
        <transition name='fade-left' mode='out-in'>
        <router-view></router-view> 
        </transition>
      <Placeholder :content='con' v-show='orderList.length==0'></Placeholder>

  </div>
</template>
<script>
import HHeader from 'common/Header'
import { Radio, Group,Scroller ,XHeader,Spinner } from 'vux'
import {mapMutations} from 'vuex'
import {getOrdersURL} from '../../api/unit.js'
import {getOrder} from '../../base/dom.js'

import Placeholder from '../../common/placeholder.vue'
export default {
  name: 'VirtualServer',
  components: { HHeader,Radio ,Group,Scroller,XHeader,Placeholder,Spinner},
  data(){
    return{
      title: '订单管理',
      con:'暂无订单',
      liShow1:false,
      liShow2:false,
      liShow3:false,
      maskShow:false,
      detailShow:false,
      pullupEnabled:true,
      hasNext:true,
      tipshow:false,
      h5Content1:'订单类型',
      h5Content2:'支付状态',
      h5Content3:'订单状态',
      li1:['全部状态','新购','续费','升级','退款'],
      li2:['全部状态','未支付','已支付','作废'],
      duiShow1:0,
      duiShow2:0,
      duiShow3:0,
      orderList:[],
      selectOrder:{},
       status: {
        pullupStatus: 'default',
        pulldownStatus: 'default'
      },
      pulldownConfig:{
        content: '下拉刷新',
        height: 40,
        autoRefresh: false,
        downContent: '下拉刷新',
        upContent: '释放后刷新',
        loadingContent: 'Loading...',
        clsPrefix: 'xs-plugin-pulldown-'
      },
      pullupConfig:{
        content: '上拉加载更多',
        pullUpHeight: 90,
        height: 40,
        autoRefresh: false,
        downContent: '释放后加载',
        upContent: '上拉加载更多',
        loadingContent: 'Loading...',
        clsPrefix: 'xs-plugin-pullup-'
      },
      ordersData:{
        currentPage:1,
        pageSize:10,
        order_type:0,
        delete_status:0,
        pay_status:0
      }
    }
  },
  created(){
    this.$nextTick(()=>{
      this.orderData()
      this.getOrders()
    })
      
  },
  methods:{
    ulShow1(){
      if(!this.liShow1){
        this.liShow1 = true;
        this.liShow2 = false;
        this.maskShow = true;
      }else{
        this.liShow1 = false;
        this.maskShow = false;
      }
    },
    ulShow2(){
      if(!this.liShow2){
        this.liShow2 = true;
        this.liShow1 = false;
        this.maskShow = true;
      }else{
        this.liShow2 = false;
        this.maskShow = false;
      }
    },
    
    chickName1(name,index){
      this.duiShow1 = index
      this.h5Content1 = name
      this.liShow1 = false;
      this.maskShow = false;
      this.ordersData.currentPage=1;
      this.ordersData.order_type = index;
      this.getOrders()
    },
    chickName2(name,index){

      this.duiShow2 = index
      this.h5Content2 = name
      this.liShow2 = false;
      this.maskShow = false;
      this.ordersData.currentPage=1;
      this.ordersData.pay_status = index;
      this.getOrders()
    },
    mask(){
      this.liShow1 = false;
      this.liShow2 = false;
      this.maskShow = false;
    },
    getOrders(){
      this.$http.post(getOrdersURL,this.ordersData).then((res)=>{
        console.log(res)
        let data = res.data.data
        if(res.data.code == 0){
          this.orderData(data.results)
          this.orderList = data.results;
          this.hasNext = data.hasNext;
          this.tipshow = false;
        }
      })
       
    },
    orderData(data){
      getOrder(data)
    },
    refresh(){
       this.ordersData.currentPage =1;
       this.ordersData.pageSize = 10;
       this.getOrders()
       this.$nextTick(() => {
          setTimeout(() => {
            this.$refs.scrollerEvent.donePulldown()
            this.pullupEnabled && this.$refs.scrollerEvent.enablePullup()
          }, 50)
        })
    },
    loadMore(){
     if(this.hasNext){
        this.tipshow = true;
        this.ordersData.currentPage ++;
        this.$http.post(getOrdersURL,this.ordersData).then((res)=>{
        let data = res.data.data
        if(res.data.code == 0){
        this.orderData(data.results)
        this.hasNext = data.hasNext;
        this.orderList = this.orderList.concat(data.results)
        this.$refs.scrollerEvent.donePullup()
        }
       
      })
     }else{
        this.$refs.scrollerEvent.disablePullup()
      }
     
    },
    orderHide(){
       this.detailShow = false
    },
    selectdOrder(order){
      this.$router.push('/order/order-detail')
      this.orders(order)
    },
    ...mapMutations({
      orders:'ORDERS'
    })
  }
}
</script>
<style lang="less" >
@import '~vux/src/styles/1px.less';
.orders{
  padding-top: 46px;
  height: auto;
  position:relative;
  section{
    .list_title{
      display: flex;
      width: 100%;
      position:fixed;
      top: 46px;
      z-index: 50;
      background-color: #fff;
      .title_left,.title_center,.title_right{
        width: 50%;
        text-align:center;
        position:relative;
        h5{
          font-size: 16px;
          font-weight: normal;
          padding: 10px 0 10px 0;
        }
        .right-icon {
          position: absolute;
          right: 15px;
          top: 20px;
          margin-top: -4px;
          width: 8px;
          height: 8px;
          border-right: 2px solid #b2b2b2;
          border-bottom: 2px solid #b2b2b2;
          transform: rotate(45deg);
          transition:all 0.2s;
          &.active{
            transform: rotate(-135deg)
          }
        }
        .icon-mianfei-xianxing{
          position: absolute;
          right: 16px;
          top: 8px;
          color: #b2b2b2;
          font-size: 18px;
        }
        
      }
    }
    .list-content{
      .lists{
          width: 100%;
          position:fixed;
          top: 91px;
          left: 0;
          right:0;
          z-index: 10;
          li{
            list-style: none;
            padding:8px 0 8px 15px;
            font-size: 14px;
            background-color: #fff;
            &.fcolor{
              color:green;
            }
            .icon-duihao{
              float: right;
              padding-right: 20px;
              color: green;
            }
          }
        }
      .mask{
        position:fixed;
        top: 0px;
        left: 0px;
        right:0px;
        bottom:0px;
        width: 100%;
        z-index: 1;
        background-color: rgba(0,0,0,0.5);
      }  
    }
    .order-list{
      padding-top: 45px;
      
      .scroller{
        
      }
      .list-item{
        padding:10px;
        background-color: #fff;
        margin-top: 10px;
        position:relative;
        font-size: 14px;
        p{
          margin-top:3px;
          span{
          display: inline-block;
          &.name{
            font-size: 18px;
          }
          &.pay_status{
            border-radius: 5px;
            background-color: green;
            font-size: 8px;
            color: #fff;
            padding:1px 3px ;
            margin-left: 10px;
            &.npay_status{
              background-color: red;
            }
            &.delete_status{
              background-color: #888;
            }
          }
          &.total{
            color: red;
          }
          &.order_status,&.time{
            color: #888;
          }
         }
        }
        .detail-icon{
          position: absolute;
          right: 5%;
          top: 50%;
          margin-top: -4px;
          width: 8px;
          height: 8px;
          border-right: 2px solid #b2b2b2;
          border-bottom: 2px solid #b2b2b2;
          transform: rotate(-45deg);
          transition:all 0.2s;
        }
        
      }
    }
  }
}
 .orders{
  .bottom-tip{
    padding: 10px 0;
    margin: 40px 15px;
    font-size: 13px;
    color: #999;
    text-align: center;
    background: #fff;
    border: 1px solid #efefef;
  }
  .slide-enter-active,.slide-leave-active{
  transition:all 0.3s;
  }
  .slide-enter,.slide-leave-to{
    transform:translate3d(0,-100%,0);
    opacity: 0;
  }
  .fade-enter-active,.fade-leave-active{
      transition:all 0.3s;
  }
  .fade-enter,.fade-leave-to{
      opacity: 0;
  }
  .fade-left-enter-active,.fade-left-leave-active{
    transition:all 0.3s;
  }
  .fade-left-enter,.fade-left-leave-to{
    transform:translate3d(100%,0,0);
    opacity:0;
  }
 }

</style>
