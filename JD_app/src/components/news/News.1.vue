<template>
  <div class="news">
    <h-header :title="title"></h-header>
    <div class="news-content" ref="news">
      <div v-show="downRefresh" class="top-tip">
        <img src="../../assets/loading.gif" width="22px"/>
        <br/>
        <span v-text="downRefreshTitle"></span>
      </div>
      <list-view @loading-more="loadMore" :hasNext="hasNext" @select="selectItem" @listen-scroll="pulldownRefresh" :data="list" :title="title"></list-view>
    </div>
    <toast v-model="toastShow" :text="toastText"></toast>
    <transition name="slide" mode="out-in">
      <router-view style="position: fixed;top: 0;left:0;z-index:10;"></router-view>
    </transition>
  </div>
</template>
<script>
import HHeader from 'common/Header'
import LLoading from 'common/Loading'
import BScroll from 'better-scroll'

import ListView from 'common/ListView'
import { Group,CellBox,Loading,Toast } from 'vux'
import { getNewsList,getNews } from 'base/getData'
export default {
  name: 'News',
  components: {
    HHeader,LLoading,ListView,
    Group,CellBox,Loading,Toast
  },
  data(){
    return{
      title: '新闻资讯',
      Height: '',
      downRefreshTitle: '正在载入..',
      downRefresh: true,
      loadingMore: false,
      toastShow: false,
      toastText: '数据更新完成！',
      list: [],
      count: 0,
      hasNext: false,
      pageData: {
        currentpage: 1,
        pageSize: 30
      }
    }
  },
  created(){
    this._getNewsList(this.pageData);
  },
  mounted(){
    let Height = this.$refs.newsCont
      console.log(Height)
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.news, {})
    })
  },
  methods: {
    _getNewsList(params){
      getNewsList(params).then((response) => {
        if(response.code == 0){
          this.downRefreshTitle = '数据已更新！';

          this.hasNext = response.data.hasNext;

          setTimeout(() => {
            // this.downRefreshTitle = '数据已更新！';

            // this.list = response.data.results.concat(this.list)
            // for(let i = 0;i < 10; i++){
            // this.list = response.data.results.concat(this.list)
            // }

            this.downRefresh = false;
          }, 500);
          this.list = response.data.results; 
          
        }
      })
    },
    pulldownRefresh(){
      this.downRefresh = true;
      this.downRefreshTitle = '正在刷新..';
      // this.toastShow = true;
      this._getNewsList(this.pageData);
    },
    loadMore(){
      if(hasNext){
        this.count++;
        let params = Object.assign(this.pageData,{currentpage: this.count})
        
        getNewsList(params).then((response) => {
          if(response.code == 0){
            this.list = response.data.results.concat(response.data.results);
            console.log(this.list)
          }
        })
      }
      
    },
    selectItem(surl){
      this.$router.push('/home/news/'+ surl)
    }
  },
  watch: {
    list(){
      
    }
  }
}
</script>
<style lang="less" scoped>
.news{
  position: relative;
  padding-top: 46px;
  height: 100%;
  .news-content{
    position: fixed;
    top: 46px;
    bottom: 70px;
    width: 100%;
    padding-bottom: 10px;
    .top-tip{
      // position: absolute;
      // left: 0;
      // top: 0;
      // right: 0;
      text-align: center;
      padding: 13px 0 3px;
      line-height: 18px;
      font-size: 12px;
    }
    .bottom-tip{
      text-align: center;
      padding: 10px 0;
      line-height: 18px;
      font-size: 12px;
    }
  }
  .loading-more{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 5px 0;
    background-color: rgba(0, 0, 0, .3);
    color: #fff;
  }

}
</style>
