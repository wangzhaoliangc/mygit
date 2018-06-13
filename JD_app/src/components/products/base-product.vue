<template>
  <div class="box">
    <div class="pros-group">
      <section class="group2">
        <div class="header" slot="title">{{titleName}}</div>
        <div ref='content' class="content" @click='slide(index)' v-for='(item ,index) in list'>
          <h4 class="h4-name">{{item.name}}</h4>
          <transition  name="slide">
             <p class="p-text" v-show='idx === index '>{{item.text}}
          </p>
          </transition >
          <i class="right-icon" :class='{active: idx === index}'></i>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  import HHeader from 'common/Header'
  export default {
    components: {HHeader},
    props:['list','titleName'],
    data() {
      return {
        idx:'',
      }
    },
    methods:{
      slide(index){
        if(this.idx === index){
          this.idx = ''
          return
        }
        this.idx = index

      }
    }
  }
</script>
<style lang="less" scoped>
  .box {
    background: #fff;
    padding-top: 10px;
    .pros-group{
      padding: 0 15px 15px;
      background: #fff;
      margin-top: 10px;
      section{
        margin-top: 10px;
        .header{
          padding: 5px 15px;
          font-size: 18px;
          color: #393D49;
          background-color: #efefef;
          letter-spacing: 1px;
          border-bottom: 1px solid #bfbfbf;
          margin: 0 -10px;
        }
        .content{
          margin-top: 10px;
          padding: 15px 10px;
          line-height: 32px;
          font-size: 14px;
          color: #666;
          position: relative;
          &.bottom{
            border-bottom:1px solid #ccc;
            &:last-child{
              border-bottom:none;
            }
          }
          .h4-name{
            border-bottom:1px solid #ccc;
          }
         .right-icon {
          position: absolute;
          right: 35px;
          top: 30px;
          margin-top: -4px;
          width: 6px;
          height: 6px;
          border-right: 1px solid #b2b2b2;
          border-bottom: 1px solid #b2b2b2;
          transform: rotate(45deg);
          transition:all 0.4s;
          &.active{
            transform: rotate(-135deg)
          }
        }
          
        }
      }
    }
  }
  .slide-enter-active,.slide-leave-active{
    transition:all 0.4s;
    opacity:1;
  }
  .slide-enter,.slide-leave-to{
    opacity: 0;

  }
</style>
