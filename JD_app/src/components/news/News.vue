<template>
  <div class="news">
    <x-header :left-options="{showBack: false}" :title="title">
      <div slot="right">
        <router-link to="/inbox">
          <i :style="{fontSize: '20px', color: '#fff'}" class="iconfont icon-xin-xianxing"></i>
        </router-link>
      </div>
    </x-header>
    <scroller 
    v-if='list.length>0'
      use-pullup 
      :pullup-config="pullupDefaultConfig" 
      @on-pullup-loading="loadMore" 
      use-pulldown 
      :pulldown-config="pulldownDefaultConfig" 
      @on-pulldown-loading="refresh" 
      lock-x 
      class='scroll'
      ref="scrollerBottom" height="-74">
      <group class="list-group">
        <cell class="list-group-item" v-for="(item,index) in list" @click.native="detail(item.name,item.url)" is-link :key="index">
          <div class="top" v-if="item.weight !== 0">
            <img src="../../assets/hot1.png" height="25" width="25"> 
          </div>
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
      <div v-show="!hasNext" class="bottom-tip">
        ~ 别拉了，到底了！
      </div>
    </scroller>
    <transition name="slide" mode="out-in">
      <router-view :style="{position: 'fixed',top: 0}"></router-view>
    </transition>
     <Placeholder :content='con' v-show='list.length==0'></Placeholder>
  </div>
</template>
<script>
import HHeader from 'common/Header'
import { Scroller, XHeader,Group,Cell,XButton ,Badge,Loading} from 'vux'
import { getNewsList } from 'base/getData'
import axios from 'axios'
import Placeholder from '../../common/placeholder.vue'
const pulldownDefaultConfig = {
  content: '下拉刷新',
  height: 40,
  autoRefresh: true,
  downContent: '下拉刷新',
  upContent: '释放后刷新',
  loadingContent: '正在刷新...',
  clsPrefix: 'xs-plugin-pulldown-'
}
const pullupDefaultConfig = {
  content: '上拉加载更多',
  pullUpHeight: 60,
  height: 40,
  autoRefresh: false,
  downContent: '释放后加载',
  upContent: '上拉加载更多',
  loadingContent: '加载中...',
  clsPrefix: 'xs-plugin-pullup-'
}
export default {
  components: {
    HHeader,
    XHeader,Scroller,Group,Cell,XButton,Badge,Loading,Placeholder
  },
  mounted() {
    this.$nextTick(()=>{
      // this.$refs.scrollerBottom.rest({top:0})
    })
  },
  data() {
    return {
      title: '信安资讯',
      list: [],
      con:'暂无新闻',
      pageIndex: 1,
      hasNext: true,
      pullupDefaultConfig: pullupDefaultConfig,
      pulldownDefaultConfig: pulldownDefaultConfig
    }
  },
  created(){
    this.refresh();
    let pathName = this.$route.name;
    let pathUrl = this.$route.path;
    if(pathName == 'news'){
      this.$store.dispatch('changeTabbarChecked',2)
    }
  },
  methods: {
    fetchData(cb) {
      let params = {
        currentPage: this.pageIndex,
        pageSize: 10
      }
      getNewsList(params).then(response => {
        if(response.code == 0){
          this.$nextTick(() => {
            cb(response.data)
          })
        }
      })
    },
    refresh() {
      this.pageIndex = 1;
      this.fetchData(data => {
        console.log(data)
      this.list = data.results;
      this.hasNext = data.hasNext;
      // this.$refs.scrollerBottom.rest()
      this.$nextTick(() => {
          setTimeout(() => {
            this.$refs.scrollerBottom.donePulldown()
            this.pullupEnabled && this.$refs.scrollerBottom.enablePullup()
          }, 50)
        })
     
      })
    },
    loadMore() {
      if(this.hasNext){
        console.log(this.hasNext)
        this.pageIndex++;
        this.fetchData(data => {
          this.hasNext = data.hasNext;
          this.list = this.list.concat(data.results);
          this.$refs.scrollerBottom.donePullup()
        })
      }else{
        this.$refs.scrollerBottom.disablePullup()
      }
    },
    detail(name,url){
      let sindex = url.indexOf('=')+1;
      let surl = url.substr(sindex);
      this.$router.push('/home/news/'+surl)
      // 保存新闻标题
      console.log(name)
      this.$store.dispatch('changeNewsname', name);
    }
  }
}
//padding-top: 46px;
</script>
<style lang="less" >
.vux-header{
  position: fixed;
  top: 0px;
  left:0;
  right: 0;
  z-index: 100;
}
.scroll{
  position:absolute;
  top: 46px;
  left:0px;
  right:0px;
}
.news{
  padding-top:45px;
  .list-group{
    padding: 10px 0;
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
  .bottom-tip{
    padding: 10px 0;
    margin: 10px 15px;
    font-size: 13px;
    color: #999;
    text-align: center;
    background: #fff;
    border: 1px solid #efefef;
  }
  .slide-enter-active,.slide-leave-active{
    transition: all .3s;
  }
  .slide-enter,.slide-leave-to{
    transform: translate3d(100%,0,0);
  }
}
.weui-cells{
  margin-top: 0px !important;
}


.xs-plugin-pulldown-container {
  line-height: 40px;
}

.xs-plugin-pullup-container {
  display: none !important;
  line-height: 40px;
}

</style>