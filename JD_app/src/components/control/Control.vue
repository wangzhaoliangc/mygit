<template>
  <div class="control">
    <x-header :left-options="{showBack: false}" :title="title">
      <div slot="right">
        <router-link to="/inbox">
          <i :style="{fontSize: '20px', color: '#fff'}" class="iconfont icon-xin-xianxing"></i>
        </router-link>
      </div>
    </x-header>
    <card>
      <div slot="content" class="card-flex">
        <div @click="serverManage" class="card-flex-1">
          <countup :start-val="0" :end-val="NumberView.all" :duration="1" tag="b" style="color: #00c1de;"> </countup>
          <br/>
          云主机数
        </div>
        <div class="card-flex-1">
          <countup :start-val="0" :end-val="NumberView.guoqi" :duration="1" tag="b" style="color: #f15533;"> </countup>
          <br/>
          过期数
        </div>
        <div class="card-flex-1">
          <countup :start-val="0" :end-val="NumberView.yunxing" :duration="1" tag="b" style="color: #00c1de;"> </countup>
          <br/>
          运行数
        </div>
        <div @click="individualWorkOrders" class="card-flex-1">
          <countup :start-val="0" :end-val="NumberView.gongdan" :duration="1" tag="b" style="color: darkorange;"> </countup>
          <br/>
          工单
        </div>
      </div>
    </card>
    <!-- <flexbox 
      justify="center"
      class="flex-box">
      <flexbox-item @click.native="serverManage" class="flex-item-1 border">
        <countup :start-val="0" :end-val="NumberView.all" :duration="5" tag="b" style="color: #00c1de;"> </countup> </br> 云主机数 
      </flexbox-item>
      <flexbox-item class="flex-item-1 border">
        <countup :start-val="0" :end-val="NumberView.guoqi" :duration="5" tag="b" style="color: #f15533;"></countup>
        </br> 过期数
      </flexbox-item>
      <flexbox-item @click.native="individualWorkOrders" class="flex-item-1">
        <countup :start-val="0" :end-val="NumberView.gongdan" :duration="5" tag="b" style="color: #00c1de;"></countup>
        </br> 工 单
      </flexbox-item>
    </flexbox> -->
   <!--  <group title="主机管理">
      <flexbox 
      justify="center"
      class="flex-box">
      <flexbox-item @click.native="startServer" class="flex-item-1">
        <i class="iconfont l-1 icon-tijikongjian-xianxing"></i>
        </br>
        开通云主机
      </flexbox-item>
      <flexbox-item @click.native="serverManage" class="flex-item-1">
        <i class="iconfont l-2 icon-ecsyunfuwuqi"></i>
        </br>
        云主机管理
      </flexbox-item>
    </flexbox>
    </group> -->
     <scroller lock-y :scrollbar-x=false>
      <div class="box1">
      <div class="box1-item" >
          <flexbox 
          justify="center"
          class="flex-box">
               <flexbox-item @click.native="startServer" class="flex-item-1">
               <i class="iconfont l-1 icon-tijikongjian-xianxing"></i>
               </br>
               开通云主机
               </flexbox-item>
          </flexbox>
        </div>
        <div class="box1-item" >
          <flexbox 
          justify="center"
          class="flex-box">
               <flexbox-item @click.native="serverManage" class="flex-item-1">
                <i class="iconfont l-2 icon-ecsyunfuwuqi"></i>
                </br>
                云主机管理
              </flexbox-item>
          </flexbox>
        </div>
        <div class="box1-item" >
          <flexbox 
          justify="center"
          class="flex-box">
               <flexbox-item @click.native="safety" class="flex-item-1">
               <i class="iconfont l-1 icon-anquanzu"></i>
               </br>
               安全组管理
               </flexbox-item>
          </flexbox>
        </div>
        <!-- <div class="box1-item" >
          <flexbox 
          justify="center"
          class="flex-box">
               <flexbox-item @click.native="startServer" class="flex-item-1">
               <i class="iconfont l-1 icon-tijikongjian-xianxing"></i>
               </br>
               开通云主机
               </flexbox-item>
          </flexbox>
        </div>
        <div class="box1-item" >
          <flexbox 
          justify="center"
          class="flex-box">
               <flexbox-item @click.native="startServer" class="flex-item-1">
               <i class="iconfont l-1 icon-tijikongjian-xianxing"></i>
               </br>
               开通云主机
               </flexbox-item>
          </flexbox>
        </div>
        <div class="box1-item" >
          <flexbox 
          justify="center"
          class="flex-box">
               <flexbox-item @click.native="startServer" class="flex-item-1">
               <i class="iconfont l-1 icon-tijikongjian-xianxing"></i>
               </br>
               开通云主机
               </flexbox-item>
          </flexbox>
        </div>
        <div class="box1-item" >
          <flexbox 
          justify="center"
          class="flex-box">
               <flexbox-item @click.native="startServer" class="flex-item-1">
               <i class="iconfont l-1 icon-tijikongjian-xianxing"></i>
               </br>
               开通云主机
               </flexbox-item>
          </flexbox>
        </div> -->
      </div>
    </scroller>
    <panel class='cloud-product' header="我的云产品" :footer="footer" :list="serverList" type="1"></panel>
  </div>
</template>

<script>
import HHeader from 'common/Header';
import { Group,Card,Flexbox,FlexboxItem,Countup,Panel ,XHeader, Scroller} from 'vux';
import { getServerData,getServerList } from 'base/getData'
export default {
  name: 'Control',
  data(){
    return{
      title: '控制台',
      NumberView: {
        all: 0,
        yunxing: 0,
        guoqi: 0,
        gongdan: 0
      },
      serverList: [
        // {
        //   src: require('../../assets/cloud_server.png'),
        //   title: '标题一',
        //   desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        //   url: '/server/0000'
        // }
      ],
      footer: {
        title: '查看更多',
        url: '/server'
      }
    }
  },
  created(){
    this._getViewAll();
    this._getServerData();
    let pathName = this.$route.name;
    if(pathName == 'control'){
      this.$store.dispatch('changeTabbarChecked',1)
    }
  },
  mounted(){
    
  },
  methods: {
    _getViewAll(){
      getServerData().then(response => {
        if(response.code == 0){
          this.NumberView = response.data;
          this.NumberView.gongdan = 0;
        }
      });
    },
    _getServerData(){
      let params = {
        currentpage: 1,
        pageSize: 6
      };
      getServerList(params).then((response) => {
        if(response.code == 0){
          let LIST = response.data.results;
          LIST.map((item) => {
            this.serverList.push({
              src: require('../../assets/cloud_server.png'),
              title: '服务器:'+ item.name,
              desc: 'cpu:'+ item.cpu +'核 | '+ '系统盘:'+ item.disk_data +'GB | '+'带宽:'+ item.bandwidth +'Mbps',
              url: '/server/msg/'+ item.id
            })
          })
        }
      })
    },
    startServer(){    //  购买服务器
      this.$router.push('/purchase')
    },
    serverManage(){   //  主机管理
      this.$router.push('/server')
    },
    individualWorkOrders(){   //  工单
      this.$router.push('/individual')
    },
    safety(){//安全组
      this.$router.push('/safety')
    }
  },
  components: {
    HHeader,
    Group,
    Card,
    Flexbox,
    FlexboxItem,
    Countup,
    Panel,
    XHeader,
    Scroller
  }
}
  
</script>
<style lang="less">
.vux-header{
  position: fixed;
  top: 0px;
  left:0;
  right: 0;
  z-index: 100;
}
.control{
  position:absolute;
  top: 46px;
  left:0px;
  right: 0px;
  margin-bottom: 60px;
  background-color: #efefef;
  .card-flex{
    display: flex;
    .card-flex-1{
      flex: 1;
      text-align: center;
      margin: 15px 0;
      border-right: 1px solid #efefef;
      &:last-child{
        border: none;
      }
      b{
        font-size: 22px;
      }
    }
  }
  .flex-box{
    border-radius: 3px;
    border: 1px solid #e9e9e9;
    background-color: #fff;
    .flex-item-1{
      text-align: center;
      line-height: 26px;
      margin: 15px 0 !important;
      &.border{
        border-right: 1px solid #ccc;
      }
      b{
        font-size: 26px;
        color: #3c3c3c;
      }
      .iconfont{
        font-size: 40px;
        color: #3c3c3c;
        &.l-1{
          color: #01c0df;
        }
        &.l-2{
          color: #f25838;
        }
      }
    }
  }
  .weui-cell__bd{
    text-align: center;
  }
  .box1 {
  height: 93px;
  position: relative;
  //width: 1223px;
  width: 525px;
}
.box1-item {
  width: 170px;
  height: 93px;
  background-color: #ccc;
  display:inline-block;
  margin-left:5px;
  float: left;
  text-align: center;
  line-height: 93px;
}
.box1-item:first-child {
  margin-left: 0;
 }
 .cloud-product{
    margin-top: 0px;
 }
}
</style>
