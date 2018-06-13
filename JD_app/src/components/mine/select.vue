<template>
  <div class="select">
       <div class="list_title">
         <div class="title_left" @click='ulShow1'>
           <h5 class="vux-1px-b">{{titleList}}</h5>
           <i class="right-icon" :class="{active:liShow1}"></i>
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
           <transition name='fade'>
           <div class="mask" v-show='maskShow' @click='mask'></div>
           </transition>
       </div>
  </div>
</template>
<script>
import {mapMutations } from 'vuex'
export default {
  name: 'VirtualServer',
  props:['titleList'],
  data(){
    return{
      title: '订单管理',
      liShow1:false,
      maskShow:false,
      h5Content1:'订单类型',
      li1:['全部状态','新购','续费','升级','退款'],
      duiShow1:0,
    }
  },
  methods:{
    ulShow1(){
      if(!this.liShow1){
        this.liShow1 = true;
        this.maskShow = true;
      }else{
        this.liShow1 = false;
        this.maskShow = false;
      }
      
    },
    chickName1(name,index){
      this.duiShow1 = index
      this.titleList = name
      this.liShow1 = false;
      this.maskShow = false;
    },
    mask(){
      this.liShow1 = false;
      this.maskShow = false;
    },
   
  }
}
</script>
<style lang="less" >
@import '~vux/src/styles/1px.less';
.select{
    padding-top: 46px;
    .list_title{
      display: flex;
      width: 100%;
      position:fixed;
      top: 46px;
      z-index: 10;
      background-color: #fff;
      .title_left{
        width: 33%;
        position:relative;
        text-align: center;
        h5{
          font-size: 16px;
          font-weight: normal;
          padding: 10px 0;
        }
        .right-icon {
          position: absolute;
          right: 5px;
          top: 20px;
          margin-top: -4px;
          width: 10px;
          height: 10px;
          border-right: 1px solid #b2b2b2;
          border-bottom: 1px solid #b2b2b2;
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
          z-index: 1;
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
        background-color: rgba(0,0,0,0.5)
      }  
    }
  
}
 .select{
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
 }

</style>
