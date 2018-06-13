<template>
  <div class="box">
    <div class="pros-group">
      <section class="group2">
        <div class="header" slot="title">{{titleName}}</div>
        <div  class="content" v-for='(item ,index) in list'>
          <h4 class="h4-name">{{item.name}}</h4>
          <transition  name="slide">
             <p class="p-text" :class='{active: idx === index}'>{{item.text}}
          </p>
          </transition >
          
        </div>
      </section>
      <slot></slot>  
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
    
  }
</script>
<style lang="less" scoped>
  .box {
    padding-top: 10px;
    background: #fff;
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
          
         
          
        }
      }
    }
  }
  
</style>
