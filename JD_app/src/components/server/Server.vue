<template>
  <div class="server">
    <h-header :title="title"></h-header>
    <scroller 
      use-pullup 
      :pullup-config="pullupDefaultConfig" 
      @on-pullup-loading="loadMore" use-pulldown 
      :pulldown-config="pulldownDefaultConfig" 
      @on-pulldown-loading="refresh" 
      lock-x 
      ref="scrollerBottom" height="-60">
      <group class="list-group">
        <div class="dim">
          <span class="iconfont icon-gantanhao-xianxingyuankuang"></span>
          ECS支持：随时不停机升级带宽，5分钟内停机升级CPU和内存，您可根据实际使用情况弹性扩展
        </div>
        <cell @click.native="detail(item.id)" class="list-group-item" v-for="(item,index) in list" is-link :key="index">
          <template slot="title">
            <span :style="{fontSize: '12px',color: '#666666'}">服务器：</span>
            <strong >{{item.name}}</strong>
            <small>{{item.ip}}</small>
          </template>
          <div class="content" slot="inline-desc">
            <p>
              cpu：{{item.cpu}}核 | 系统盘：{{item.disk_data}}GB | 带宽：{{item.bandwidth}}Mbps
            </p>
          </div>
        </cell>
      </group>
      <div v-show="!hasNext" class="bottom-tip">
        ~ 别拉了，到底了！
      </div>
    </scroller>
    <transition name="slide" mode="out-in">
      <router-view :style="{position: 'fixed'}"></router-view>
    </transition>
  </div>
</template>
<script>
import HHeader from 'common/Header'
import { Scroller, XHeader,Group,Cell } from 'vux'
import { getServerList } from 'base/getData'
import axios from 'axios'

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
    XHeader,Scroller,Group,Cell
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.scrollerBottom.reset({ top: 0 })
    })
  },
  data() {
    return {
      title: '我的云主机',
      list: [],
      pageIndex: 1,
      hasNext: false,
      pullupDefaultConfig: pullupDefaultConfig,
      pulldownDefaultConfig: pulldownDefaultConfig
    }
  },
  created(){
    this.refresh();
  },
  methods: {
    fetchData(cb) {
      let params = {
        currentpage: this.pageIndex,
        pageSize: 10
      }
      getServerList(params).then(response => {
        if(response.code == 0){
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset()
            cb(response.data)
          })
        }
      })
    },
    refresh() {
      this.pageIndex = 1;
      this.fetchData(data => {
        
        this.hasNext = data.hasNext;
        this.list = data.results;

        this.$refs.scrollerBottom.enablePullup()
        this.$refs.scrollerBottom.donePulldown()
      })
    },
    loadMore() {
      if(this.hasNext){
        this.pageIndex++;
        this.fetchData(data => {
          this.hasNext = data.hasNext;
          this.list = data.results.concat(this.list);
          this.$refs.scrollerBottom.donePullup()
        })
      }else{
        this.$refs.scrollerBottom.disablePullup()
      }
    },
    detail(id){
      this.$router.push('/server/msg/'+id)
    }
  }
}
</script>
<style lang="less" scoped>
.server{
  padding-top: 46px;
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
      background-color: #fcfcfc;
      margin-bottom: 10px;
      strong{
        display: inline-block;
        padding: 4px 0;
        font-weight: normal;
        color: #009688;
        letter-spacing: .3px;
      }
      small{
        font-size: 13px;
        color: #9f9f9f;
        letter-spacing: .3px;
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


.xs-plugin-pulldown-container {
  line-height: 40px;
}

.xs-plugin-pullup-container {
  line-height: 40px;
}
</style>