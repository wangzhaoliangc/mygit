<template>
  <div class="domain">
     <YunTitle :titleText='titleText'></YunTitle>
    <div class="pros-group">
      <BaseProducts1 :list="list1" :titleName='titleName1'></BaseProducts1>
      <BaseProducts :list="list" :titleName='titleName'></BaseProducts>
    </div>

  </div>
</template>
<script>
  import BaseProducts from '../base-product.vue'
  import BaseProducts1 from '../base-products1.vue'
  import YunTitle from '../yunTitle.vue'
  export default {
    name: 'VirtualServer',
    components: {YunTitle,BaseProducts,BaseProducts1},
    data() {
      return {
        titleText:{
        title: '云 WAF',
        class:'icon-Webyingyongfanghuoqiangwaf',
        style:{
            color:'color: rgb(139, 138, 238)',
            fontSize: '20px'
          },
        text:'基于云安全大数据能力实现，通过防御SQL注入、服务器漏洞等常见Web应用攻击，过滤海量CC攻击，避免网站资产数据泄露，保障网站的安全与可用性。'
      },
        titleName1:'产品功能',
        titleName:'应用场景',
        list1:[
           {
            name:'Web 常见攻击防护',
            text:'系统默认提供 200 多条防护规则，单个负载均衡器支持最大配置防护规则 200 条、域名数量 100 个，覆盖30 余类通用 Web 攻击特征，能够有效防御 SQL 注入、XSS 跨站脚本、Webshell 上传、命令注入、非法 HTTP 协议请求等常见 Web 攻击。'
           },
           {
            name:'CC 恶意攻击防护',
            text:'可基于请求字段细粒度检测 CC 攻击，支持请求速率和请求集中度双重算法检测，能够有效应对 CC 慢速攻击，识别人机访问缓解服务器压力，同时还能解决密码暴力猜解和商业爬虫行为。'
           },
           {
            name:'0day 补丁与规则更新',
            text:'提供 7×24 小时安全监控，第一时间获取各种 0day 漏洞信息，及时更新防护规则，降低 0day 漏洞攻击带来的影响。通过云端大数据监测和学习引擎，实时同步防护规则，降低误报和漏报率。'
           },
           {
            name:'自定义防护策略',
            text:'用户可结合自身业务特点，灵活自定义基于 IP、URL、黑白名单和 CC 防护策略，精准拦截恶意流量或者放行合法请求。网站新上线的业务可设置旁路观察模式，对于匹配防护规则的疑似攻击只告警不阻断，便于评估多种规则在实际业务中的适用性。'
           },
           {
            name:'攻击事件管理',
            text:'WAF 日志与 QingCloud ELK 服务无缝集成，ELK 实时分布式搜索和分析引擎提供 WAF 海量日志的集中管理，支持日志的检索、分析和关联展示；WAF 日志同时支持以 syslog 形式发送到用户自定义的日志服务器，满足审计和合规的要求。'
           },
        ],
        list:[
          {
            name:'防数据泄露',
            text:'黑客对金融、电商、企业网站进行扫描，通过 SQL 注入利用漏洞入侵服务器和数据库，窃取业务核心数据。采用金盾等保云-云WAF 可避免因黑客的注入入侵攻击导致网站核心数据库泄露，保护业务核心数据。'
          },
           {
            name:'防恶意 CC 攻击',
            text:'网站被恶意攻击，发起大量的恶意 CC 请求，长时间造成服务器性能瓶颈，导致网站业务相应缓慢或无法提供正常服务。采用金盾等保云-云WAF 通过请求速率和请求集中度双重算法检测，阻断海量的恶意请求，保障网站可用性。'
          },
          {
            name:'防 0day 漏洞攻击',
            text:'针对已经被发现而官方还未提供相关补丁的 0day 漏洞，QingCloud WAF 运营人员第一时间下发防护规则拦截攻击代码，对网站进行安全防护，为修复漏洞、安装补丁争取宝贵时间。'
          },

        ]


      }
    },

  }
</script>
<style lang="less" scoped>
</style>
