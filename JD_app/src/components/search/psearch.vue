<template>
    <div class="search1">
      <search
        @on-change="getResult"
        :results="results"
        v-model="value"
        position="absolute"
        :auto-fixed="autoFixed"
        auto-scroll-to-top
        top="0px"
        placeholder='搜索新闻'
        cancel-text=''
        @on-focus="onFocus"
        @on-cancel="onCancel"
        @on-submit="onSubmit"
        @on-clear='onClear'
        ref="search">
          <div slot='right' class="right">
             <box gap='0 0 0 5px' class='pickBtn'>
               <x-button   mini  @click.native='pick'>
                {{pickText}}
                 <!-- <i class="right-icon" :class='{active:isPick}'></i> -->
               </x-button></box>
               <!-- <transition name='slide'>
                  <ul class="pickList" v-if='isPick'>
                   <li v-for='item in pickList' class="vux-1px-b" @click='pickItem(item)'>{{item.text}}</li>
                  </ul>
               </transition> -->
             
          </div>
        </search>
     <div class="hot-search" v-if='isLoad'>
       <span class="hot">热门搜索</span>
        <div class="hot-list">
          <x-button mini v-for='item in hotList' @click.native='pickHot(item)'>{{item.text}}</x-button>
        </div>
     </div>
    <div class="LoadMore" v-if='!isLoad'>
    <load-more tip="正在加载" v-if='isData'></load-more>
    <load-more :show-loading="false" v-if='isData1' tip="暂无数据" background-color="#fbf9fe"></load-more>
    <div class="list" v-if='!isData1'>
       <group class="list-group">
        <cell class="list-group-item" v-for="(item,index) in list" @click.native="detail(item.name,item.url)" is-link link='' :key="index">
          <template slot="title">
            <strong >{{item.name}}</strong>
          </template>
          <div class="content" slot="inline-desc">
            <p>
              {{item.createTime}}
            </p>
          </div>
        </cell>
      </group>
    </div>
  </div>
   <transition name="slider" mode="out-in">
      <router-view :style="{position: 'fixed',top: 0}"></router-view>
    </transition>
    </div>
</template>

<script type="text/javascript">
  import { XHeader,Search,XButton,Box,LoadMore,Group,Cell} from 'vux'
  import {newsListURL} from '../../api/unit.js'
    export default { 
        name: "Psearch",
        data(){
          return {
            results: [],
            value: '',
            autoFixed:false,
            isLoad:true,
            isData:true,
            isData1:false,
            pickList:[
              {
                  text:'新闻',
                  id:'0'
              },
              {
                  text:'产品',
                  id:'1'
              },{
                  text:'活动',
                  id:'2'
              }
            ],
            pickText:'新闻',
            isPick:false,
            list:[],
            hotList:[
             {
              text:'云主机'
             },{
              text:'网络安全'
             },{
              text:'等保测评'
             },{
              text:'GPU云服务器'
             },{
              text:'人脸识别'
             },{
              text:'SSL证书'
             }
            ]
          }
      },
      methods:{
        setFocus () {
          this.$refs.search.setFocus()
        },
        getResult (val) {
          console.log( val)
          if(val != ''){
            this.list = []
            this.isLoad = false
            this.isData = true
             this.isData1 = false
            this.$http.post(newsListURL,{name:val}).then((res)=>{
              let data = res.data
              if(data.code == 0){
                this.isData = false
                if(data.data.results.length == '0'){
                  console.log(data.data.results.length)
                    this.isData1 = true 
                }else{
                  this.isData1 = false
                  this.list = data.data.results
                }
              }
            })
          }
         
        },
        onSubmit () {
          this.$refs.search.setBlur()
          this.$vux.toast.show({
            type: 'text',
            position: 'top',
            text: 'on submit'
          })
        },
        onFocus () {
          console.log('on focus')
          this.isPick = false
        },
        onCancel () {
          console.log('on cancel')
          this.isPick = false
          this.isLoad = true
        },
        onClear(){
          this.isLoad = true
          console.log(2)
        },
        pick(){
          if(this.isPick){
            this.isPick = false
            return
          }
          this.isPick = true
        },
        pickItem(val){
          this.pickText = val.text
          this.isPick = false
        },
        pickHot(val){
          this.value = val.text
          this.isLoad = false
          this.getResult(val.text)
        },
        detail(name,url){
          console.log('跳转了')
          let sindex = url.indexOf('=')+1;
          let surl = url.substr(sindex);
          this.$router.push('/home/psearch/'+surl)
          // 保存新闻标题
          console.log(name)
          this.$store.dispatch('changeNewsname', name);
        }
      },
        components:{
          XHeader,Search,XButton,Box,LoadMore,Group,Cell
        }
    }
</script>
  <!-- padding:0px 1.5em 0 0.5em; -->
<style lang='less'>
 .search1{
  .weui-search-bar{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
  }
  .right{
    position: relative;
     .pickBtn{
       .weui-btn_mini{
        padding:0px 0.5em 0 0.5em;
        background-color: #fff;
        position: relative;
        .right-icon {
            position: absolute;
            right:5px;
            top: 21px;
            margin-top: -12px;
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
    .pickList{
      position: absolute;
      left: 6px;
      z-index: 100;
      width: 50px;
      text-align: center;
      font-size: 13px;
      background-color: #fff;
      box-shadow: 0 0 2px 0 #ccc;
      li{
        background-color: #fff;
        padding: 5px;

      }

    }
  }
 .hot-search{
   padding:50px 10px 10px 10px;
   button{
    margin-right: 5px;
   }

 }
 .LoadMore{
  padding-top: 46px;
 }
 .list-group{

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
      position:relative;
      strong{
        display: inline-block;
        padding: 4px 0;
        font-weight: normal;
        font-size: 15px;
        color: #393D49;
        letter-spacing: 1px;
        line-height: 30px;
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
          color: #999;
        }
      }
      
    }
  }
  .slide-enter-active,.slide-leave-active{
    transition: all .4s;
  }
  .slide-enter,.slide-leave-to{
    opacity: 0;
   transform:translate3d(100%,0,0);
  }
   .slider-enter-active,.slider-leave-active{
    transition: all .3s;
  }
  .slider-enter,.slider-leave-to{
    transform: translate3d(100%,0,0);
  }
 }
</style>
