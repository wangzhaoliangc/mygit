<template>
  <div class="about">
    <h-header :title="'关于我们'"></h-header>
    <div class="about-cont">
      <h4 class="title">
        <img src="../../assets/logo.png" width="45px"/>
        {{ title }}  
      </h4>   
      <p class="desp">{{ desp }}</p> 
    </div>
    <div class="list-group">
      <div class="header" slot="title">公司概况</div>
      <div class="content">
        <p>
          河南金盾等保云，由河南省金盾信息安全等级技术测评中心、河南电联通信技术有限公司、绿盟科技强强联手所打造的一个安全，可靠，高效于一体的安全云平台，为政府、运营商、金融、能源、互联网以及教育、医疗等行业用户，提供具有核心竞争力的安全云产品及解决方案，帮助客户实现业务的安全顺畅运行。 基于多年的安全攻防研究，金盾等保云在检测防御类、安全评估类、安全平台类、远程安全运维服务等领域，为客户提供入侵检测/防护、抗拒绝服务攻击、远程安全评估以及Web安全防护等产品以及安全运营等专业安全服务。 以集各家所长创新突破为愿景，以保障客户业务顺畅运行为使命 在全国范围内，提供基于自身核心竞争力的企业级网络安全云产品，成为最受客户信赖的网络安全云平台。
        </p>

        <p>
          河南省金盾信息安全等级技术测评中心是国家发改委《信息安全等级保护测评专业化服务》项目中“建设等级测评示范工程”的试点单位，拥有信息安全风险评估业务管理系统、设备管理系统、文档管理系统、安全功能测试平台、攻击与防御渗透测试平台、安全培训课件平台等业务软硬件支撑平台，以支撑项目实施。我中心在技术服务方面有着丰富的经验和成功的案例，具有技术精湛、经验丰富的网络攻击与反攻击、数据恢复、木马病毒代码分析、web应用漏洞扫描技术方向的专业技术人才，可为各行业单位在信息安全等级保护相关技术领域提供强有力的服务。
        </p>
        <p>
          河南电联通信技术有限公司是一家向客户提供全方位互联网运营解决方 案，主要业务涵盖IDC、云计算的大型电信增值业务运营企业。自主开发了一系列的CDN软件服务（SAAS）技术，包括为静态加 速， 动态加速，网站 访问分析，网络状态探测，火警预警，等等，这些软件服务产品加上丰富的运营经验以及完善的服务体系为门户、新闻、媒体、游戏、电子商务、 金融、证券、政府、科技、网络教学、大型企业等各类网站提供了加速、备份、托管、存储、负载均衡、日志分析、等优质服务。此外河南电联 通信在河南省拥有带宽规模最高、稳定性最好的BGP多线机房，可为用户提供最优体验的数据中心服务。
        </p>
        <p>
          北京神州绿盟信息安全科技股份有限公司在国内外设有40多个分支机构，为政府、运营商、金融、能源、互联网以及教育、医疗等行业用户，提供具有核心竞争力的安全产品及解决方案，帮助客户实现业务的安全顺畅运行。 基于多年的安全攻防研究，绿盟科技在检测防御类、安全评估类、安全平台类、远程安全运维服务、安全SaaS服务等领域，为客户提供入侵检测/防护、抗拒绝服务攻击、远程安全评估以及Web安全防护等产品以及安全运营等专业安全服务。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import HHeader from 'common/Header'

export default {
  name: 'ECSServer',
  components: { HHeader },
  data () {
    return {
      title: '金盾等保云',
      desp: '《网络安全法》正式实施，对等保合规作了明文规定。为了帮助企业用户快速满足等保合规的要求，金盾等保云整合云盾产品的技术优势，建立“等保合规生态”，联合金盾等保云在各地的合作测评机构、安全咨询合作厂商，为您提供一站式等保测评，完备的攻击防护、数据审计、加密、安全管理，助您快速省心地通过等保合规。',
    }
  },
  methods: {
    // goBought(){
    //   if(!this.$store.state.isLogin){
    //     this.$router.push('./or')
    //   }else{
    //     this.$router.push('/login')
    //   }
    // },
  }
}
</script>

<style lang="less" scoped>
.about{
  padding-top: 50px;
  background: #efefef;
  .about-cont{
    padding: 0 25px 15px;
    background: #fff;
    .title{
      padding: 10px 0;
      font-size: 22px;
      color: #2F4056;
      line-height: 60px;
      height: auto;
      overflow: hidden;
      img{
        float: left;
        margin-right: 10px;
      }
    }
    .desp{
      padding: 0 0 15px;
      line-height: 26px;
      color: #a4a7ab;
      text-indent:1.5em;
    }
  }
  .list-group{
    padding: 0 10px 15px;
    background: #fff;
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
      padding: 5px;
      line-height: 26px;
      font-size: 15px;
      color: #666;
      p{
        margin-top: 20px;
        margin-bottom: 35px;
        text-indent: 2em;
        letter-spacing: .6px;
      }
    }
  }
}

</style>
