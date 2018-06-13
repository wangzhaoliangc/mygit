<template>
  <div class="purchase">
    <h-header :title="title"></h-header>
    <group aria-label="5em">
     <!--  <div slot="title">
        <span style="display: inline-block;padding: 8px 25px;background:#1E9FFF;color: #fff;margin: 15px 0 0 15px;">
          自选配置
        </span>
      </div> -->
      <popup-picker 
        title="选择机房" 
        :popup-title="'机房选择'" 
        :data="jfList" 
        placeholder="请选择"
        v-model="formData.jf">
      </popup-picker>
      <popup-picker 
        title="选择规格" 
        @on-change="calculateMomey"
        popup-title="选择规格"
        :data="specList" 
        :columns="3" 
        placeholder="请选择"
        v-model="formData.spec">
      </popup-picker>
      <cell title="系统盘">
        高性能系统盘
      </cell>
      <popup-picker 
        title="开通时长" 
        @on-change="calculateMomey"
        popup-title="选择时长"
        placeholder="请选择"
        :data="timeList" 
        :columns="2"
        v-model="formData.ms">
      </popup-picker>
      <cell title="数据盘">
        <x-number @on-change="calculateMomey" v-model="formData.disk_data" :min="0" :max="2048" title="单位：G" fillable></x-number>
      </cell>
      <cell title="公网带宽">
        <x-number @on-change="calculateMomey" v-model="formData.bandwidth" :min="0" :max="200" title="单位：Mbps" fillable></x-number>
      </cell>
      <popup-picker 
        title="选择镜像"
        popup-title="选择镜像"
        placeholder="请选择"
        :data="mirrorList" 
        :columns="2"
        v-model="formData.image">
      </popup-picker>
    </group>
    <group>
      <cell>
        <div slot="title">
          配置费用：<b style="font-size: 22px;color: #ff7146;">￥{{totalMoney}}</b>
        </div>
        <div>
          <x-button type="primary" @click.native="boughtBtn" class="btn-bought">立即购买</x-button>
        </div>
      </cell>
      <cell>
        <div slot="title">
          可用余额：<b style="font-size: 18px;color: green;">￥{{balance}}</b>
        </div>
        <div>
          <x-button type="primary" @click.native="alipay" class='paybtn'>立即充值</x-button>
        </div>
      </cell>
    </group>
    <toast v-model="toastShow" :type="toastType" :text="toastText" position="middle"></toast>
    
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import HHeader from 'common/Header';
import {  XCircle, Range, Icon, Toast, Loading, Group, Cell, PopupPicker, XButton, XNumber } from 'vux';
import {  TIME_LIST } from 'api/config';
import { calcMoneyURL,serverStartUpURL,serverStartupURL } from 'api/unit';
import { getMirrorList,getSpecList } from 'base/startup';
import { getUserinfo } from 'base/getData'
import {getOrder } from 'base/dom'
import {mapMutations} from 'vuex'
export default {
  name: 'Purchase',
  components: {
    HHeader,
    Toast, Loading, Group, Cell, PopupPicker, XButton, XNumber,XCircle, Range, Icon
  },
  data(){
    return{
      percent:0,
      balance:'',
      percentShow:false,
      title: '开通云主机',
      loadingShow: false,
      toastShow: false,
      toastType: 'cancel',
      toastText: '请选择配置参数！',
      totalMoney: 0,
      jfList: [['洛阳机房']],
      specList: [],
      mirrorList: [],
      timeList: TIME_LIST,
      formData: {
        jf: ['洛阳机房'],
        spec: [],
        disk_data: 50,
        bandwidth: 10,
        ms: ['一个月'],
        image: [],
        disk_os:40
      },
      calculatePrams: {}
    }
  },
  computed:{
      Pshow(){
        return this.percentShow
      }
  },
  created(){
    this._getMirrorList();
    this._getSpecList();
    this._getUserinfo()
  },
  methods: {
   _getUserinfo(){
        getUserinfo().then((res) => {
          if(res.code == 0){
            this.balance = res.data.balance
            // console.log(this.balance)
          }
        })
      },
    _getMirrorList(){
      getMirrorList().then((res) => {
        if(res.code == 0){
          let Data = res.data;
          Data.map((item) => {
            this.mirrorList.push({name: item.name,value: item.name,id: item.id})
          })
          this.$store.dispatch('changeMirrors', Data)
        }
      })
    },
    _getSpecList(){
      getSpecList().then((res) => {
        if(res.code == 0){
          let Data = res.data;
          Data.map((item) => {
            this.specList.push({name: item.name,value: item.name,id: item.id})
          })
          this.$store.dispatch('changeSpecs', Data)
        }
      })
    },
    filterParams(obj,item){
      let value;
      if(item){
        obj.map(element => {
          if(element.name == item){
            if(element.id){
              value = element.id;
            }else{
              value = element.sumValue;
            }
          }
        });
      }
      return value;
    },
    calculateMomey(){
      let data = this.formData;
      if(data.spec[0] && data.disk_data && data.bandwidth && data.ms[0]){
        let params = {};
        params.spec = this.filterParams(this.specList, data.spec[0]);
        params.disk_data = data.disk_data;
        params.bandwidth = data.bandwidth;
        params.disk_os = data.disk_os;
        params.ms = this.filterParams(this.timeList, data.ms[0]);
        this.calculatePrams = params;
        this.$http.post(calcMoneyURL, params).then((res) => {
            let response = res.data;
            if(response.code == 0){
              this.totalMoney = response.data.toFixed(2);
            }
          })
      }else{
        this.totalMoney = 0;
      }
    },
   
    boughtBtn(){
      if(this.formData.spec[0] && this.formData.image[0] && this.formData.disk_data && this.formData.bandwidth && this.formData.ms){
        let formParams = Object.assign(this.formData,{totalMoney: this.totalMoney});
        let params = {};
        params.calculatePrams = this.calculatePrams;
        params.formParams = formParams;

        localStorage.setItem('payment', JSON.stringify(params))
        
        this.$vux.loading.show({
          text:'正在生成订单'
        })
        let ig = '';
        formParams.image[0] ? ig = this.filterParams(this.mirrorList, formParams.image[0]) : '';
        this.$http.post(serverStartupURL, Object.assign(this.calculatePrams,{
          image: ig
        })).then(res => {
            if(!res){
              this.$vux.loading.hide()
              return
            }
            let response = res.data;
            if(response.code == 0){
              this.$vux.loading.hide()
               this.$vux.toast.show({
                text:'生成订单成功'
               })
              setTimeout(() => {
                this.$vux.toast.hide()
                this.$router.push('/order/order-detail');
                getOrder(response.data)
                console.log(response.data)
                this.$store.dispatch('changeOrders', response.data)
              }, 100)
            }else{
              // this.percentShow = false 
              setTimeout(() => {
                this.toastShow = true;
                this.toastType = 'warn';
                this.toastText = response.msg;
              }, 30)
            }
          })
         
      }else{
        this.toastShow = true;
        this.toastType = 'cancel';
        this.toastText = '请选择相关配置！'
      }
      
    },
    alipay(){
      this.$router.push('/recharge')
    },
    
  }
  
  
  
  
}
</script>

<style lang="less" scoped>

.purchase{
  padding-top: 50px;
  .btn-bought{
    padding:8px 18px;
    font-size:13px;
    color: #fcfcfc;
    background: #ec5731;
  }
  .paybtn{
    padding:8px 18px;
    font-size:13px;
    color: #fcfcfc;
  }
  .slide-enter-active,.slide-leave-active{
    transition: all 0.3s;
  }
  .slide-enter,.slide-leave-to{
    transform: translate3d(100%,0,0);
  }
}
.picker-buttons {
  margin: 0 15px;
}
</style>