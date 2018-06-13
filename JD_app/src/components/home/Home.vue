<template>
  <div class="home" ref="HomeName">
       <keep-alive>
      <router-view></router-view>
      </keep-alive>
    <tabbar class="footer">
      <tabbar-item :selected="$route.name == 'recommend' " link="/home">
        <i slot="icon" class="iconfont icon-shouye-xianxing"></i>
        <span slot="label"> </span>
      </tabbar-item>
      <tabbar-item :selected="$route.name == 'ProductsList' " link="/home/productsList">
        <i slot="icon" class="iconfont icon-leimupinleifenleileibie"></i>
        <!-- <span slot="label">产品分类</span> -->
      </tabbar-item>
      <tabbar-item :selected="$route.name == 'control' " link="/home/control">
        <i slot="icon" class="iconfont icon-baobiao-xianxing"></i>
        <!-- <span slot="label">控制台</span> -->
      </tabbar-item>
      <tabbar-item :selected="$route.name == 'Psearch' " link="/home/psearch">
        <i slot="icon" class="iconfont icon-sousuo-xianxing"></i>
        <!-- <span slot="label">搜索</span> -->
      </tabbar-item>
      <tabbar-item :selected="$route.name == 'mine' " link="/home/mine">
        <i slot="icon" class="iconfont icon-yonghu-xianxing"></i>
        <!-- <span slot="label">我的</span> -->
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar,TabbarItem } from 'vux'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: { Tabbar,TabbarItem },
  computed: {
    ...mapState(['tabbarChecked']),
  },
  mounted(){
    // 获取窗体高度  document.body.clientHeight
    // let clientHeight = document.body.clientHeight;
    // this.$refs.HomeName.style.height = (clientHeight - ) + 'px';
  },
  data () {
    return {
      showMenus: false,
      menus: {
        menu1: '拍照',
        menu2: '选择相册'
      },
      tabbarIndex: localStorage.getItem('tabbartype')

    }
  },
  methods: {
    onItemClick () {
      console.log('on item click')
    }
  },
  watch: {
    tabbarChecked(val){
      this.tabbarIndex = val;

    }
  }
}
</script>

<style lang="less" scoped>
.home{
  /*padding-bottom: 54px;*/
  height: 100%;
  .vux-header{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1;
    background-color: #2c2c31;
  }
  .slide-enter-active,.slide-leave-active{
    transition: all .3s;
  }
  .slide-enter{
    opacity: 1;
  }
  .slide-leave-to{
    opacity: 0;
  }
  .weui-tabbar__item{
    height:45px;
    line-height:45px;
  }
  .pro{
  padding: 0 15px;
  background: #f9f9f9;
  h5 {
    font-size: 20px;
    padding: 15px 0;
    text-align: center;
    color: #393D49;
    border-bottom: 1px solid #efefef;
    letter-spacing: 1px;
  }
  .pro-tab{
    text-align: center;
    a{
      font-size: 13px;
      color: #393D49 !important;
    }
  }
  .decp{
    text-align: center;
    p{
      font-size: 13px;
      letter-spacing: 1.5px;
      line-height: 24px;
      color: #9e9e9e;
    }
  }
}

a {
  color: #42b983;
  transition: all 0.3s;
  
}
.weui-bar__item_on{
  transform:scale(1.3);
 }
}

</style>
