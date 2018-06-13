<template>
  <div class="ecs">
    <h-header :title="'金盾云服务'"></h-header>
    <div class="ecs-cont">
      <h1 class="title">{{title}}</h1>  
      <div class="subtitle">{{subtitle}}</div> 
      <div class="descp">
        <p>
          DDoS防护：本地清洗、云端清洗，二合一对抗DDoS
        </p>
        <p>
          Web防护：WAF+云端专家，持续优化防护规则、精准拦截Web攻击， 
          全面抵御OWASP Top 10 Web应用风险
        </p>
      </div>

      <x-button type="primary" link="/purchase">立即购买</x-button>
    </div>
    <div class="pros-group">
      <section>
        <div class="header" slot="title">基础型</div>
        <div class="content">
          Web应用防火墙: 防入侵、防篡改，CC高级防护；
          态势感知: 实时监控、漏洞扫描、webshell检测、威胁分析
          证书服务: 加密功能,对申请者做严格的身份审核验证,提供可信身份证明
          数据安全: trustAsia OV通配符，https数据加密；网站身份实名认证；支持*.泛解析域名。
          网络安全: 抗D-5G，网络层防护；DDOS、CC防护（DDOS峰值5G）。
        </div>
      </section>
      <section>
        <div class="header" slot="title">专业型</div>
        <div class="content">
          Web应用防火墙: 防入侵、防篡改，CC高级防护；
          态势感知: 实时监控、漏洞扫描、webshell检测、威胁分析
          证书服务: 加密功能,对申请者做严格的身份审核验证,提供可信身份证明
          数据安全: GeoTrust OV通配符，https数据加密；网站身份实名认证；支持*.泛解析域名。
          网络安全: 抗D-10G，网络层防护；DDOS、CC防护（DDOS峰值10G）。
        </div>
      </section>
      <section>
        <div class="header" slot="title">高级型</div>
        <div class="content">
          Web应用防火墙（企业版）： 专业版所有功能；Oday补丁防御、防信息泄露:
          态势感知（企业版）： 专业版所有功能；支持https、ATP识别
          证书服务（GeoTrust OV通配符）: 加密功能,对申请者做严格的身份审核验证,提供可信身份证明
          数据安全: Symantec ov 通配符，https数据加密；网站身份实名认证；支持*.泛解析域名。
          网络安全: 云WAF-高级版（含24T流量），网站应用防火墙；防入侵、防篡改；实时防御动态；非80、443端口配置。
        </div>
      </section>
    </div>
    <div v-transfer-dom>
      <loading :show="loadingShow" text="正在提交支付信息.."></loading>
    </div>
    <div v-transfer-dom>
      <confirm v-model="confirmShow"
        title="支付购买"
        @on-confirm="onConfirm">
        <p style="text-align:center;">确认支付吗?</p>
      </confirm>
    </div>
    <div v-transfer-dom>
      <transition name="translate" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { TransferDom,XHeader,XButton,CellBox,Group,Cell,Tab,TabItem,Swiper,SwiperItem,Confirm,Loading } from 'vux'
import HHeader from 'common/Header'

export default {
  name: 'ECSServer',
  directives: {
    TransferDom
  },
  components: {
    HHeader,
    XHeader,
    XButton,
    CellBox,
    Group,
    Cell,
    Tab, 
    TabItem,
    Swiper,
    SwiperItem,
    Confirm,
    Loading
  },
  data () {
    return {
      title: '金盾"等保云"重磅上线',
      subtitle: '灵活、安全的部署方式   满足任意规模的企业需求打造企业数据统一存储管理平台',
      loadingShow: false,
      confirmShow: false,
      tabContent: ['11','22'],
      index: 0,
    }
  },
  methods: {
    payment(id){
      this.confirmShow = true;
    },
    onConfirm () {
      this.loadingShow = true;
      setTimeout(() => {
        this.loadingShow = false;
        this.$router.push('/success')
      }, 2000)
    },
    onHide(){

    }
  }
}
</script>

<style lang="less" scoped>
.ecs{
  padding-top: 50px;
  background: #efefef;
  .ecs-cont{
    padding: 0 25px 15px;
    background: #fff;
    .title{
      padding: 10px 0;
      font-size: 28px;
    }
    .subtitle{
      padding: 0 0 15px;
      line-height: 26px;
      color: #a4a7ab;
    }
    .descp{
      line-height: 24px;
      color: #555;
      padding: 15px 0;
    }
  }
  .pros-group{
    padding: 0 15px 15px;
    background: #fff;
    section{
      .header{
        padding: 5px 15px;
        font-size: 18px;
        color: #393D49;
        background-color: #efefef;
        letter-spacing: 1px;
        border-bottom: 1px solid #bfbfbf;
        margin: 0 -10px;
      }
      .content{
        padding: 15px 10px;
        line-height: 32px;
        font-size: 14px;
        color: #666;
      }
    }
  }
}

</style>
