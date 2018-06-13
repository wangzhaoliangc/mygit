<template>
  <div class="tamper">
    <YunTitle :titleText='titleText'></YunTitle>
    <div class="pros-group">
      <BaseProducts1 :list="list1" :titleName='titleName1'></BaseProducts1>
      <BaseProducts1  :titleName='titleName2'>
      <div style="margin-top: 20px;">
       <x-table :cell-bordered="true" >
        <thead>
          <tr style="background-color:#f2f2f2;">
            <th>证书品牌</th>
            <th>证书对比</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Symantec</td>
            <td>兼容目前所有常见浏览器移动设备端兼容性第一市场认知度最优，附带诺顿安全签章</td>
          </tr>
          <tr>
            <td>TrustAsia</td>
            <td>域名型DV证书，安全级别低验证简单，不审核企业信息不支持多域名、通配符及绿色地址栏</td>
          </tr>
          <tr>
            <td>其他国产品牌</td>
            <td>起步晚、兼容性一般IE以外浏览器以及移动端支持度不是太好</td>
          </tr>
        </tbody>
      </x-table>
    </div>
      </BaseProducts1>
      <BaseProducts :list="list" :titleName='titleName'></BaseProducts>
      
    </div>
  </div>
</template>
<script>
import BaseProducts from '../base-product.vue'
import BaseProducts1 from '../base-products1.vue'
import YunTitle from '../yunTitle.vue'
import {XTable,LoadMore} from 'vux'
export default {
  components: {BaseProducts,BaseProducts1,YunTitle,XTable,LoadMore},
  data(){
    return{
      titleText:{
        title: 'SSL证书',
        class:'icon-drxx05',
        style:{
            color:'rgb(255, 59, 59)',
            fontSize: '20px'
          },
        text:'SSL证书（SSL Certificates）提供了安全套接层（SSL）证书的一站式服务，包括证书申请、管理及部署功能，与顶级的数字证书授权（CA）机构和代理商合作，为您的网站、移动应用提供 HTTPS 解决方案。'
      },
      titleName:'产品优势',
      titleName1:'SSL证书',
      titleName2:'品牌区别',
      list1:[
           {
            name:'SSL证书是什么？',
            text:'SSL是指安全套接层协议层（以及传输层协议TLS）绑定域名及公司名称申请,按域名数量和年限收费提供Https信息传输加密功能，保护站点信息传输安全增强型EV，而且SSL证书带绿色地址栏和公司名显示。'
           },
           {
            name:'哪些地方需要SSL证书？',
            text:'金融、电商、互联网行业官网首页、注册登录等重要页面、响应苹果ATS安全规范，app开发必须使用Https通信、后端数据系统、支付接口，涉及资金流动等敏感信息交互的、Exchange邮箱系统、SSLVPN系统等'
           },

        ],
      list:[
          {
            name:'顶级 CA 机构',
            text:'SSL 证书由国际顶级 CA 机构授权颁发，安全有保障数字证书授权机构（CA，Certificate Authority）是管理和签发安全凭证和加密信息安全密钥的网络机构，承担公钥体系中公钥的合法性检验的责任，需要对用户、企业的身份真实性进行验证，其权威性、公正性十分重要，腾讯云只选择和顶级权威的 CA 机构合作，提供安全有保障的 SSL 证书。'
          },
           {
            name:'加密传输',
            text:'加密保护浏览器/APP 与服务器之间的数据传输安全采用 Https 加密 APP 及网页通讯，防止数据在传送过程中被窃取、篡改，确保数据的完整性；防止运营商的流量劫持、网页植入广告现象；同时有效抵挡中间人的攻击，大大提升安全性。'
          },
          {
            name:'100%兼容性',
            text:'Symantec 根证书签发，支持所有浏览器和移动设备兼容性关系到用户访问时浏览器是否会正确给予网页安全的提示，Symantec 根证书的浏览器兼容性目前市场上排名第一，支持目前所有主流的浏览器和移动设备。'
          },
          {
            name:'提升搜索排名',
            text:'采用 Https 有利于提升网站的搜索排名及站点可信度2014年 Google 调整了搜索引擎算法，“比起同等 Http 网站，采用 Https 加密的网站在搜索结果中的排名将会更高”，同时国内的搜索引擎厂商也在加强对 Https 的重视，采用 Https 可以辅助站点的 SEO 优化。'
          },
        ]
    }
  },

}
</script>
<style lang="less" scoped>
   td{
    padding:5px;
    color: #333;
    font-size: 14px;
    line-height: 24px;
   }
   tr td:last-child{
       font-size: 10px;
       line-height: 20px;
       color: #888;
   }
</style>
