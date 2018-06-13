<template>
  
  <div class="news-msg">
    <h-header :title="title"></h-header>
    <div class="news-content">
       <loading :show="show" text="loading"></loading>
      <div class="content" v-html="message">
        <!-- <div class="sign-tally">2018-01-28 12:20</div>
        <div class="text">
          
        </div> -->
      </div>
    </div>
  </div>

</template>
<script>
import HHeader from 'common/Header'
import { getNewsMsg } from 'base/getData'
import { baseURL } from 'api/unit'
import {Loading }  from 'vux'

import { mapState  } from 'vuex'
export default {
  name: 'NewsMsg',
  props: ['id'],
  computed: {
    ...mapState(['newsName']),
    ID(){
      return this.id;
    }
  },
  data(){
    return{
      title: '',
      message: '',
      show:false
    }
  },
  created(){
    this.cons()
    this._getNewsMsg();
    this.title = this.newsName;
    this.$store.dispatch('changeTabbarChecked', 2);
  },
  methods: {
    // 获取新闻详情
    _getNewsMsg(){
      this.show = true
      console.log(this.$route.params)
      let surl = '/news/getOne?url=' + this.$route.params.sid;
      getNewsMsg(surl).then((response) => {
        if(response.code == 0){
          this.show = false
          this.message = response.data;

        }
      })
    },
    cons(){
     console.log(this.newsName)
    }
  },
  components: {
    HHeader,
    Loading
  }
}
</script>
<style lang="less" scoped>
.news-msg{
  position: fixed;
  left: 0;
  right: 0;
  top: 50px;
  bottom: 0;
  z-index: 501;
  padding: 50px 15px 60px;
  background-color: #fff;
  overflow: auto;
  .news-content{
    .title{
      font-size: 24px;
      color: #333333;
      letter-spacing: .5px;
    }
    .content{
      padding:0 15px;
      p{
        max-width:100% !important; 
      }
      .sign-tally{
        font-size: 13px;
        color: #9f9f9f;
      }
      .text{
        padding: 5px 0;
      }
    }
  }

}

</style>
