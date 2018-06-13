<template>
  <div class="recommend">
    <x-header class="header" :left-options="{showBack: false}">
      <div slot="right">
        <router-link to="/inbox">
          <i :style="{fontSize: '20px', color: '#fff'}" class="iconfont icon-xin-xianxing"></i>
        </router-link>
      </div>
    </x-header>
    <swiper 
      :list="bannerLists" 
      :auto="true" 
      :loop="true" 
      :interval="5000" 
      style="width:100%;margin:0 auto;" 
      height="180px" 
      dots-class="custom-bottom" 
      dots-position="center"
      @on-index-change="selectBanner">
    </swiper>
   <!--  <div class="pro">
      <divider><h5>我们的产品</h5></divider>
      <div class="decp">
        <p>计算、存储、安全、大数据，助您业务飞跃发展！</p>
      </div>
      <grid class="pro-tab">
        <grid-item link="/ecs">
          云服务器
          <span slot="label">
            <i class="iconfont icon-ecsyunfuwuqi" style="color: rgb(138, 238, 177);"></i>
          </span>
        </grid-item>
        <grid-item link="/ssl">
          SSL证书
          <span slot="label">
            <i class="iconfont icon-drxx05" style="color: rgb(139, 138, 238);"></i>
          </span>
        </grid-item>
        <grid-item link="/waf">
          云WAF
          <span slot="label">
            <i class="iconfont icon-Webyingyongfanghuoqiangwaf" style="color: rgb(255, 59, 59);"></i>
          </span>
        </grid-item>
      </grid>
      <grid class="pro-tab">
        <grid-item link="/clear">
          GPU云服务器
          <span slot="label">
            <i class="iconfont icon-gpuyunfuwuqi" style="color: rgb(138, 238, 177);"></i>
          </span>
        </grid-item>
        <grid-item link="/cg">
          人脸识别
          <span slot="label">
            <i class="iconfont icon-renlianshibie" style="color: rgb(139, 138, 238);"></i>
          </span>
        </grid-item>
        <grid-item link="/ld">
          负载均衡
          <span slot="label">
            <i class="iconfont icon-fuzaijunheng" style="color: rgb(255, 59, 59);"></i>
          </span>
        </grid-item>
      </grid>
      <grid class="pro-tab">
        <grid-item link="/kd" >
          云抗D
          <span slot="label">
            <i class="iconfont icon-kangddos" style="color: rgb(138, 238, 177);"></i>
          </span>
        </grid-item>
        <grid-item link="/jc">
          对象存储
          <span slot="label">
            <i class="iconfont icon-ossduixiangcunchu" style="color: rgb(139, 138, 238);"></i>
          </span>
        </grid-item>
        
        <grid-item link="/jm">
          托管云
          <span slot="label">
            <i class="iconfont icon-hsmjiamifuwu" style="color: rgb(255, 59, 59);"></i>
          </span>
        </grid-item>
      </grid>
    </div> -->
    <!-- <div class="cloud-shop">
      <divider><h5>云市场</h5></divider> -->
      <!-- <div class="decp">
        <p>提供高质量的软件和服务！</p>
      <card >
      <div slot="content" class="card-demo-flex card-demo-content01">
      <router-link to='/cloudShop'>
        <div class="vux-1px-r">
          <span>
            <i class="iconfont icon-ecsyunfuwuqi" style="color: rgb(138, 238, 177);"></i>
          </span>
          <br/>
          全名建站
        </div>
        </router-link>
        <router-link to='/cloudShop'>
        <div class="vux-1px-r">
          <span>
             <i class="iconfont icon-kangddos" style="color: rgb(255, 59, 59);"></i>
          </span>
          <br/>
          服务市场
        </div>
        </router-link>
        <router-link to='/cloudShop'>
        <div class="">
          <span>
            <i class="iconfont icon-ossduixiangcunchu" style="color: rgb(138, 238, 177);"></i>
          </span>
          <br/>
          企业应用
        </div>
        </router-link>
      </div>
    </card>
      </div> -->
    <!-- </div> -->
    <div style="background-color: #fff;">
      <h2 style="font-size:16px;padding-left: 10px;padding-top: 5px;">等保云</h2>
      <box gap='10px'>
        <img src="../../assets/bg1.png" width="100%">
      </box>
       <box gap='0 10px 10px 10px' >
        <img src="../../assets/bg2.png" width="100%">
      </box>
      <box gap='0 10px 10px 10px' >
        <img src="../../assets/bg3.png" width="100%">
      </box>
      <box gap='0 10px 10px 10px' >
        <img src="../../assets/bg4.png" width="100%">
      </box>
      <box gap='0 10px 0px 10px' >
        <img src="../../assets/bg5.png" width="100%">
      </box>
    </div>
   <!--  <tabbar class="footer">
      <tabbar-item selected link="/">
        <i slot="icon" class="iconfont icon-shouye-xianxing"></i>
        <span slot="label">等保云</span>
      </tabbar-item>
      <tabbar-item link="/control">
        <i slot="icon" class="iconfont icon-baobiao-xianxing"></i>
        <span slot="label">控制台</span>
      </tabbar-item>
      <tabbar-item link="/about">
        <i slot="icon" class="iconfont icon-yingyongchengxu"></i>
        <span slot="label">关于我们</span>
      </tabbar-item>
      <tabbar-item link="/mine">
        <i slot="icon" class="iconfont icon-yonghu-xianxing"></i>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar> -->
  </div>
</template>

<script>
import { XHeader,Swiper,Divider,Grid,GridItem,Tabbar,TabbarItem,Card,Box  } from 'vux'
import Slide from '../slide/slide.vue'
export default {
  name: 'Recommend',
  components: {
    XHeader,
    Swiper,
    Grid,
    GridItem,
    Tabbar,
    TabbarItem,
    Divider,
    Slide,
    Card,
    Box
  },
  data () {
    return {
      menus: {
        menu1: '拍照',
        menu2: '选择相册'
      },
      bannerLists: [
        {
          url: '/ecs',
          img: require('assets/bann1.png')
        },{
          // url: '/home/news/fd320852-e66d-4a0e-8942-9e5d855234b7',
          img: require('assets/bann2.png')
        },{
          // url: '/home/news/f595fd2d-0407-4b40-93a0-68694d6f1b28',
          img: require('assets/bann3.png')
        }
      ],
      showMenus: false
    }
  },
  created(){
    let pathName = this.$route.name;
    if(pathName == 'recommend'){
      this.$store.dispatch('changeTabbarChecked', 0)
    }
  },
  methods: {
    selectBanner(index){
      if(index == 1){
        this.$store.dispatch('changeNewsname', 'Web应用防火墙')
      }else if(index == 2){
        this.$store.dispatch('changeNewsname', '金盾等保云 · 等保合规服务')
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
.recommend{
  position: fixed;
  left: 0;
  top: 0px;
  bottom: 47px;
  width: 100%;
  overflow: auto;
  .header{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1;
    background-color: rgba(0,0,0,0);
  }
  .pro,.cloud-shop{
    padding: 0 15px;
    background: #f9f9f9;
    h5 {
      font-weight: normal;
      font-size: 17px;
      padding: 10px 0;
      text-align: center;
      color: #2F4056;
      border-bottom: 1px solid #efefef;
      letter-spacing: 1px;
    }
    .pro-tab{
      text-align: center;
      a{
        font-size: 12px;
        color: #393D49 !important;
        background-color: #fff;
      }
    }
    .decp{
      text-align: center;
      p{
        font-size: 12px;
        letter-spacing: 1.5px;
        line-height: 24px;
        color: #9e9e9e;
      }
    }
  }
  
  .iconfont{
    font-size: 26px;
  }
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  
}
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > a  {
  display: inline-block;
  flex: 1;
  text-align: center;
  font-size: 12px;
  padding-bottom: 5px;
  background-color: #fff;
  text-decoration: none;
}
.card-demo-flex span {
  color: #f74c31;
}
.weui-panel:before,.weui-panel:after{

  border:none;
}
.weui-panel__bd a{
  border-bottom: none;
}
</style>
