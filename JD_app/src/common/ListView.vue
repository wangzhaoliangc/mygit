<template>
  <scroll class="list-view"
    @scroll="scroll"
    :listen-scroll="listenScroll"
    :data="data"
    :pullup="pullup"
    :pulldown="pulldown"
    @pullup="pullupLoading"
    @pulldown="pulldownRefresh"
    ref="listView">
    <div>
      <group class="list-group">
        <cell-box class="list-group-item" v-for="(item,index) in data" @click.native="selectItem(item.url)" :key="index" is-link>
          <div :style="{paddingRight: '13px'}">
            <h4 class="title"> {{item.name}} </h4>
            <div class="descp">
              {{item.createTime}}
            </div>
          </div>
        </cell-box>
      </group>
      <!-- 上拉加载 -->
      <div class="bottom-tip" v-show="!hasNext">
          <x-button type="default">没有更多数据了！</x-button>
      </div>
      <div class="bottom-tip" v-show="hasNext">
          <x-button @click.native="loadMoreBtn" type="default">查看更多</x-button>
      </div>
    </div>
  </scroll>
</template>
<script>
import { Group,CellBox,XButton } from 'vux'
import Scroll from 'common/Scroll';
import Loading from 'common/Loading';

export default {
  name: 'ListView',
  components: { Scroll,Loading,Group,CellBox,XButton },
  props: ['data','title','hasNext'],
  data() {
    return {
      pullup: true,
      pulldown: true,
      listenScroll: true,
      scrollY: 0
    }
  },
  methods: {
    pulldownRefresh() {
      // 下拉刷新
      console.log(1)
    },
    pullupLoading(){
      // 加载更多
      
    },
    loadMoreBtn(){
      this.$emit('loading-more');
    },
    selectItem(url){
      let sindex = url.indexOf('=')+1;

      let surl = url.substr(sindex);

      this.$emit('select',surl)
    },
    scroll(pos){
      console.log(pos)
      this.scrollY = pos.y;
    }
  },
  watch: {
    scrollY(val){
      if(val > 60){
        this.$emit('listen-scroll')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.list-view{
  position: relative;
  width: 100%;
  height: 100%;
  .list-group{
    .list-group-item{
      .title{
        line-height: 30px;
        font-size: 13px;
        color: #2F4056;
      }
      .descp{
        font-size: 12px;
        color: #afafaf;
        letter-spacing: .6px;
      }
    }
  }
  .top-tip{
    text-align: center;
    padding: 13px 0 3px;
    line-height: 18px;
    font-size: 12px;
  }
  .bottom-tip{
    text-align: center;
    margin: 0 15px 30px;
    line-height: 18px;
    font-size: 12px;
  }
  .loading-container{

  }
}
</style>
