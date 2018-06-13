<template>
	<div class="yun-title">
		<x-header  :left-options="{backText: ''}">{{titleText.title}}</x-header>
		<section >
      <div class="y-title">
        <img src="../../assets/yunwaf.jpg"/>
        <div class="mask">
            <h2 class="name">
              <span slot="label">
                <i class="iconfont" :class='titleText.class' :style="titleText.style"></i>
              </span>
               &nbsp;{{titleText.title}}</h2>
             <p class="text">{{titleText.text}}</p>
        </div>  
      </div>
    </section>
	</div>
</template>
<script >
  import {XHeader} from 'vux'
	export default{
    props:['titleText'],

		components:{
			XHeader
		}

	}
</script>
<style lang="less" scoped>
  .yun-title{
    padding-top: 10px;
    section {
      font-size: 14px;
      .y-title{
        background: #fff;
        position: relative;
        box-sizing: border-box;
        margin: 36px 0 0 0;
        width: 100%;
        color: #fff;
        img{
          width: 100%;
        }
        .mask{
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          padding: 30px;          
          h2{
            line-height: 44px;
          }
          .name{
            font-size: 18px;
            margin-bottom: 5px;
          }
          p{
            line-height: 30px;
            font-size: 12px;
          }
        }
      }
    }
  }
  
</style>