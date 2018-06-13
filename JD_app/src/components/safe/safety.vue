<template>
  <div class="safety">
    <x-header :title="title" @on-click-back='backGo' :left-options="{backText:'',preventGoBack:back}"> <i slot='right' class="iconfont icon-jiajianzujianjiahao" style="color: #fff;" @click='addSafe'></i></x-header>
    <section class="content">
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
        height='-45'
        v-if='safeGroup.length>0'
        >
        <div>
          <ul class="list-item" v-for='item in safeGroup' @click='selectdSafe(item)'>
            <p>
              <span class="name">{{item.name}}</span> 
              <!-- <span class="pay_status" 
              :class='{npay_status: item.npay,delete_status:item.delete_status}'
              >{{item.pay_status || item.delete_status}}</span> -->
            </p>
            <p>
              <!-- <span class="total">￥{{item.product_price}}</span>&nbsp; &nbsp;|&nbsp;&nbsp; -->
              <span class="order_status">{{item.groupInstanceId}}</span>
            </p>
            <p>
              <span class="time">创建时间:&nbsp;&nbsp;{{item.createTime}}</span>
            </p>
            <i class="detail-icon iconfont icon-more" @click.stop='deleSafe(item)'></i>
          </ul>
        </div>
        <div v-show="!hasNext && tipshow" class="bottom-tip">
        ~ 别拉了，到底了！
       </div>
       </scroller>
       </div>
    </section>
        <transition name='add-left' mode='out-in'>
        <router-view :groupData='groupName'></router-view> 
        </transition>
    <Placeholder :content='con' v-show='safeGroup.length==0'>
    	<box gap='50px 20px 0 20px'>
    		<x-button type="primary" @click.native='addSafe'>创建安全组</x-button>
    	</box>
    </Placeholder>
    <transition name='add-left'>
    	<AddSafe v-show='safeShow' @safeHide = 'safeHide'></AddSafe>
    </transition>
    <actionsheet v-model="actionShow" :menus="actionMenus" @on-click-menu="actionClick" show-cancel></actionsheet>
  </div>
</template>
<script>
import HHeader from 'common/Header'
import AddSafe from './addsafe.vue'
import { Radio, Group,Scroller ,XHeader,Spinner,XButton,Box ,Actionsheet } from 'vux'
import {mapMutations,mapGetters} from 'vuex'
import {getOrdersURL,SafeList,deleSafeGroup} from '../../api/unit.js'
import {getOrder} from '../../base/dom.js'

import Placeholder from '../../common/placeholder.vue'
export default {
  name: 'VirtualServer',
  components: { HHeader,Radio ,Group,Scroller,XHeader,Placeholder,Spinner,XButton,Box,AddSafe,Actionsheet},
  data(){
    return{
      title: '安全组管理',
      detailShow:false,
      groupName:'',
      actionShow:false,
      actionMenus:['删除'],
      con:'暂无安全组',
      pullupEnabled:true,
      hasNext:true,
      tipshow:false,
      safeList:[],
      safeShow:false,
      back:true,
      deleId:null,
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
        pullUpHeight: 40,
        height: 40,
        autoRefresh: false,
        downContent: '释放后加载',
        upContent: '上拉加载更多',
        loadingContent: 'Loading...',
        clsPrefix: 'xs-plugin-pullup-'
      },
      safeData:{
        currentpage:1,
        pageSize:10
      }
    }
  },

  created(){
      this.safeLists()
  },
  methods:{
    addSafe(){
       this.safeShow = true;
    },
    safeHide(){
       this.safeShow = false;
    },
    safeLists(){
      this.safeData.currentpage = 1;
        this.$http.post(SafeList,{currentpage:1,pageSize:10}).then((res)=>{
            console.log(res)
            if(res.data.code == 0){
              this.hasNext = res.data.data.hasNext
              console.log(res.data.data.hasNext)
              let data = res.data.data.results
              this.safeGroups(data)
            }
        })
      },
    selectdSafe(val){
        this.groupName = val
        this.$router.push('/safety/saferule')
    },
    backGo(){
       this.$router.push('/home/control')
    },
    actionClick(key,item){
      if(key == 0){
        let _this = this
        this.$vux.confirm.show({
          title:'操作提示',
          content:'确定删除安全组吗？',
          onConfirm(){
            _this.$vux.loading.show({
              text:'正在删除安全组'
            })
            _this.$http.post(deleSafeGroup,{id:_this.deleId}).then((res)=>{
              if(res.data.code == 0){
               _this.safeLists()
              }
           })
          }
        })
       
      }
    },
    deleSafe(val){
      console.log(val)
       this.deleId = val.id
       this.actionShow = true
    },
    refresh(){
       this.safeLists()
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
        this.safeData.currentpage ++;
        this.$http.post(SafeList,this.safeData).then((res)=>{
        let data = res.data.data
        if(res.data.code == 0){
        this.hasNext = data.hasNext;
        console.log(data.hasNext)
        let list = this.safeGroup
        // console.log(list.concat(data.results))
        this.safeGroups(list.concat(data.results))
        this.$refs.scrollerEvent.donePullup()
        }
       
      })
     }
     
    },
   ...mapMutations({
       safeGroups:'SAFEGROUP'
   })
  },
  computed:{
     ...mapGetters([
        'safeGroup'
       ])
  }
}
</script>
<style lang="less" >
@import '~vux/src/styles/1px.less';
.safety{
  padding-top: 46px;
  height: auto;
  position:relative;
  section{
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
          color: #888;
          font-size: 20px;
        }
        
      }
    }
  }

 .safety{
  .vux-actionsheet-menu-default{
    color: red;
  }
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
	  .add-left-enter-active,.add-left-leave-active{
	    transition:all 0.3s;
	  }
	  .add-left-enter,.add-left-leave-to{
	    transform:translate3d(100%,0,0);
	    opacity:0;
	  }
 }

</style>
