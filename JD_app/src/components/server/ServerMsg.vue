<template>
  <transition name="slide">
    <div class="server-msg" v-cloak>
      <h-header :title="title"></h-header>
      <group>
        <div class="btn-group">
          <x-button @click.native="opreateBtn('boot','开机')" type="primary" mini plain>开机</x-button>
          <x-button @click.native="opreateBtn('shutdown','关机')" :style="buttonStyle1" mini plain>关机</x-button>
          <x-button @click.native="opreateBtn('reboot','重启')" :style="buttonStyle2" mini plain>重启</x-button>
          <!-- <x-button @click.native="snapshootBtn('创建快照')" mini type="primary">创建快照</x-button>
          <x-button @click.native="commentBtn('修改备注')" mini type="primary">修改备注</x-button> -->
          <!-- <x-button @click.native="monit" style="float: right;" type="warn" mini>流量监控</x-button> -->
          <!-- <x-button mini plain :style="{border: '1px solid #01AAED',color: '#01AAED'}" link="/server/monit" style="float: right;">流量监控</x-button> -->
        </div>
      </group>
      <div class="content">
        <divider><h3>服务器详情</h3></divider>
        <div class="box">
          <p>服务器名称： {{serverMessage.name}}</p>
          <p>服务器编号： {{serverMessage.id}}</p>
          <p>浮动IP： {{serverMessage.ip}}</p>
          <p>镜像： {{serverMessage.image_name}}</p>
          <p>系统盘： {{serverMessage.disk_os}} GB</p>
          <p>磁盘大小： {{serverMessage.disk_data}} GB</p>
          <p>带宽大小： {{serverMessage.bandwidth}} Mbps</p>
          <p>CPU： {{serverMessage.cpu}} 核</p>
          <p>内存： {{serverMessage.ram}} G</p>
          <p>创建时间： {{serverMessage.created}}</p>
          <p>到期时间： {{serverMessage.expired}}</p>
        </div>
        <divider><h3>网络使用情况</h3></divider>
        <div class="btn-group">
          <x-button 
          :style="buttonStyle2"  
          :class='{btn:!chartShow}'
          @click.native="chartShow =false "  
          mini
          >CPU</x-button>
          <x-button 
          :style="buttonStyle2"
          :class='{btn : chartShow}'
           @click.native="chartShow = true"
            mini>带宽使用情况</x-button>
        </div>
        <CpuChart class="box" v-if= '!chartShow'></CpuChart>
        <WebChart class="box" v-if= 'chartShow'></WebChart>
        
      </div>
      <div>
        <loading :show="Loading" :text="LoadingText"></loading>
        <toast v-model="ToastShow" :text="ToastText" :type="ToastType">{{ToastText}}</toast>
      </div>
    </div>
  </transition>
</template>
<script>
import HHeader from 'common/Header';
import LineChart from 'components/charts/LineChart';
import CpuChart from 'components/charts/CpuChart';
import WebChart from 'components/charts/WebChart';
import { Group,XButton,Loading,Toast,Divider }  from 'vux';
import { getServer } from 'base/getData'
import { opreateServerURL, createSnapshootURL, editCommentURL } from 'api/unit'
export default {
  name: 'ServerMsg',
  components: {
    HHeader,LineChart,Group,XButton,Loading,Toast,Divider,CpuChart,WebChart
  },
  data(){
    let buttonStyle1 = {
      border: '1px solid #E64340',
      color: '#E64340'
    }
    let buttonStyle2 = {
      border: '1px solid #1E9FFF',
      color: '#1E9FFF'
    }
    return{
      chartShow:false,
      title: '服务器详情',
      Loading: false,
      LoadingText: '',
      ToastShow: false,
      ToastType: 'text',
      ToastText: '',
      serverMessage: {},
      buttonStyle1: buttonStyle1,
      buttonStyle2: buttonStyle2
    }
  },
  created(){
    this._getServer();
  },
  methods: {
    _getServer(){
      let id = this.$route.params.id;
      getServer(id).then((response) => {
        if(response.code == 0){
          // this.title = response.data.name;

          this.serverMessage = response.data;
          if(!this.serverMessage.ip){
            this.serverMessage.ip = '未分配';
          }
          
        }
      })
    },
    opreateBtn(type,title){
      let id = this.$route.params.id;
      this.Loading = true;
      this.LoadingText = '正在'+ title +'...';
      this.$http.post(opreateServerURL, {
          ecs_id: id,
          op_type: type
        }).then((res) => {
          setTimeout(() => {
            this.Loading = false;
            this.ToastShow = true;
            this.ToastType = 'success';
            this.ToastText = title + '成功！';
          }, 1000)
        })
    },
    monit(){
      
    },
    // snapshootBtn(){
    //   let id = this.$route.params.id;
    //   this.$http.post(createSnapshootURL, {
    //       id: id
    //     }).then((res) => {
    //       console.log(res)
    //     })
    // },
    // commentBtn(){
    //   let id = this.$route.params.id;
    //   this.$http.post(editCommentURL, {
    //       id: id
    //     }).then((res) => {
    //       console.log(res)
    //     })
    // }
  }
}
</script>
<style lang="less" scoped>
.btn{
  border: 1px solid #E64340 !important;
  color: #E64340 !important;
}
.server-msg{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  padding-top: 46px;
  background-color: #efefef;
  overflow: auto;
  .btn-group{
    margin: 10px 8px;
    padding-bottom: 15px;
    button{
      margin: 15px 0 5px;
    }
  }
  .content{
    margin: 10px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
    h3{
      padding: 0 25px;
      margin-bottom: 10px;
      line-height: 40px;
      border-bottom: 1px solid #ececec;
      border: 1px solid #1E9FFF;
      color: #1E9FFF;
      border-radius: 4px;
    }
    .box{
      padding: 10px 15px;
      line-height: 32px;
      font-size: 13px;
      color: #393D49;
      border: 1px solid #efefef;
    }
  }
  .slide-enter,.slide-leave-to{
    transition: all .3s;
  }
  .slide-enter-active,.slide-leave-active{
    transform: translate3d(100%,0,0);
  }
}
[v-cloak]{
  display: none;
}
</style>
