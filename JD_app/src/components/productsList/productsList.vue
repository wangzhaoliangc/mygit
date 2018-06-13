<template>
  <div class="products-list"  style="height:100%;">
 <view-box ref="viewBox" class='viewBox'  body-padding-bottom="50px" body-padding-top="46px">
 <x-header :left-options="{showBack:false}" title='产品分类'>
   <i slot='right' style='font-size:20px;color:#fff;' class="iconfont icon-03"></i>
 </x-header>
   <div class="menu-wrapper" ref="menuWrapper">
     <ul>
       <li v-for="(item,index) in productList" class="menu-item" :class="{'current':currentIndex===index}"
           @click="selectMenu(index)">
          <span class="text vux-1px-b">
           {{item.name}}
          </span>
       </li>
     </ul>
   </div>
   <div class="products-wrapper" ref="productsWrapper">
    <ul>
      <li v-for="(product,index) in productList" class="product-list-hook">
        <h1 class="title">{{product.name}}</h1>
        <ul>
          <li v-for="it in product.list" class="product-item vux-1px-b">
            <div class="content">
              <h2 class="name">{{it.name}}</h2>
              <p class="desc">{{it.desc}}</p>
              <div class="price">
                <span class="now">￥{{it.price}}</span>
              </div>
            </div>
          </li>
        </ul>

      </li>
    </ul>
   </div>
 </view-box>

  </div>
</template>

<script type="text/javascript">
  import BScroll from 'better-scroll'
  import {ViewBox,XHeader} from 'vux'
    export default {
        'name': "products-list",
        data(){
            return{
              listHeight: [],
              scrollY: 0,
              productList:[
                {
                 'name':'防火墙',
                 type:0,
                 list:[
                    {
                      'name':'下一代防火墙软件（200M授权）',
                      'desc':'每年200M应用层安全防护性能，安全防护功能包括ACL访问策略划分、NAT地址转换等网络层安全防护，以及漏洞检测和防护，web应用层安全防护，僵尸网络检测，病毒防护的功能；该费用包含所有安全规则库升级和软件升级费用',
                      'num':1,
                      'price':'23800'
                    },{
                      'name':'下一代防火墙软件（500M授权）',
                      'desc':'每年500M应用层安全防护性能，安全防护功能包括ACL访问策略划分、NAT地址转换等网络层安全防护，以及漏洞检测和防护，web应用层安全防护，僵尸网络检测，病毒防护的功能；该费用包含所有安全规则库升级和软件升级费用',
                      'num':1,
                      'price':'49800'
                    },{
                      'name':'下一代防火墙软件（1000M授权）',
                      'desc':'每年1000M应用层安全防护性能，安全防护功能包括ACL访问策略划分、NAT地址转换等网络层安全防护，以及漏洞检测和防护，web应用层安全防护，僵尸网络检测，病毒防护的功能；该费用包含所有安全规则库升级和软件升级费用',
                      'num':1,
                      'price':'89800'
                    }
                  ]
                },
                {
                  'name':'SSL VPN',
                  type:1,
                  list:[
                    {
                      'name':'VPN软件（每SSL VPN并发）（CSSP-SSL-1）',
                      'desc':'每SSL VPN并发每年费用，实现移动办公安全接入，包括接入用户身份认证、传输数据加密、权限划分和接入审计',
                      'num':1,
                      'price':'80'
                    },{
                      'name':'VPN软件（每IPSEC并发）(CSSP-IPSEC-1)',
                      'desc':'每IPSEC VPN并发每年费用，实现多分支的IPSec VPN组网，传输链路加密',
                      'num':1,
                      'price':'80'
                    }
                  ]
                },
               
                 {
                  'name':'运维安全管理',
                  type:2,
                  list:[
                    {
                      'name':'运维安全管理(10资产)',
                      'desc':'LogBase运维安全管理系统是思福迪公司自主研发的，具有完全知识产权的安全审计类产品...',
                      'num':1,
                      'price':'5400'
                    },{
                      'name':'运维安全管理(30资产)',
                      'desc':'LogBase运维安全管理系统是思福迪公司自主研发的，具有完全知识产权的安全审计类产品...',
                      'num':1,
                      'price':'14040'
                    },{
                      'name':'运维安全管理(50资产)',
                      'desc':'LogBase运维安全管理系统是思福迪公司自主研发的，具有完全知识产权的安全审计类产品...',
                      'num':1,
                      'price':'21060'
                    },{
                      'name':'运维安全管理(100资产)',
                      'desc':'LogBase运维安全管理系统是思福迪公司自主研发的，具有完全知识产权的安全审计类产品...',
                      'num':1,
                      'price':'35100'
                    },{
                      'name':'运维安全管理(500资产)',
                      'desc':'LogBase运维安全管理系统是思福迪公司自主研发的，具有完全知识产权的安全审计类产品...',
                      'num':1,
                      'price':'117000'
                    }

                  ]
                },
                {
                  'name':'数据库安全审计',
                  type:3,
                  list:[
                    {
                      'name':'数据库安全审计(200M)',
                      'desc':'数据库安全审计系统DAS（ Database security Audit System ）对用户数据安全新方向的不断探索，创新地将数据安全防护与大数据分析相结合，它能为用户提供完整的数据库审计分析、泄密轨迹分析、数据库访问关系可视、数据库攻击威胁分析。',
                      'num':1,
                      'price':'67000'
                    }

                  ]
                },
               
                {
                  'name':'上网行为管理',
                  type:4,
                  list:[
                    {
                      'name':'上网行为管理系统（200M）',
                      'desc':'200M上网行为管理每年费用，该费用包含所有规则库升级费用；实现业务流量的管理、应用管控、核心应用的带宽保障、非核心业务的带宽限制和行为审计',
                      'num':1,
                      'price':'21800'
                    },{
                      'name':'上网行为管理系统（500M）',
                      'desc':'500M上网行为管理每年费用，该费用包含所有规则库升级费用；实现业务流量的管理、应用管控、核心应用的带宽保障、非核心业务的带宽限制和行为审计',
                      'num':1,
                      'price':'46800'
                    },{
                      'name':'上网行为管理系统（1000M）',
                      'desc':'1000M上网行为管理每年费用，该费用包含所有规则库升级费用；实现业务流量的管理、应用管控、核心应用的带宽保障、非核心业务的带宽限制和行为审计',
                      'num':1,
                      'price':'62800'
                    }
                  ]
                },{
                  'name':'风险监测',
                  type:5,
                  list:[
                    {
                      'name':'风险监测(100业务系统)',
                      'desc':'风险监测服务，7*24小时监控业务风险，具备全天候全方位感知风险，以及全局可视的能力，帮助用户第一时间掌握业务系统的漏洞，遭受的攻击事件等风险，让危害可控',
                      'num':1,
                      'price':'138000'
                    }
                  ]
                },
                {
                  'name':'日志审计',
                  type:6,
                  list:[
                    {
                      'name':'日志审计服务-20授权',
                      'desc':'含20个接入日志源许可；10G/天日志处理能力；0.8T数据存储空间；包含日志分析系统全功能模块（日志的采集、过滤、归并、关联分析、展现、告警监控、实施事件监控、报表等）',
                      'num':1,
                      'price':'11200'
                    },{
                      'name':'日志审计服务-50授权',
                      'desc':'含50个接入日志源许可；10G/天日志处理能力；0.8T数据存储空间；包含日志分析系统全功能模块（日志的采集、过滤、归并、关联分析、展现、告警监控、实施事件监控、报表等）',
                      'num':1,
                      'price':'28000'
                    },{
                      'name':'日志审计服务-200授权',
                      'desc':'含200个接入日志源许可；30G/天日志处理能力；3.6T数据存储空间；包含日志分析系统全功能模块（日志的采集、过滤、归并、关联分析、展现、告警监控、实施事件监控、报表等）',
                      'num':1,
                      'price':'42800'
                    }
                  ]
                },  {
                  'name':'配置安全评估',
                  type:7,
                  list:[
                    {
                      'name':'配置安全评估服务（漏洞扫描）-100授权',
                      'desc':'含100个IP的评估许可；含配置核查、漏洞扫描、配置变更检查三大引擎。功能包括：任务管理、检测报告、结果对比，告警分析、综合报表、综合仪表板等；',
                      'num':1,
                      'price':'28000'
                    },{
                      'name':'配置安全评估服务（漏洞扫描）-200授权',
                      'desc':'含200个IP的评估许可；含配置核查、漏洞扫描、配置变更检查三大引擎。功能包括：任务管理、检测报告、结果对比，告警分析、综合报表、综合仪表板等；',
                      'num':1,
                      'price':'38000'
                    }
                  ]
                }, {
                  'name':'堡垒机',
                  type:8,
                  list:[
                   {
                      'name':'堡垒机(50授权)',
                      'desc':'支持登录业务系统的身份鉴别、单点登录、访问授权、关键访问二次审批、违规访问告警与阻断、操作过程监控、历史记录查询、综合审计报告。支持SSH、RDP协议。可管理资产数为50个',
                      'num':1,
                      'price':'28000'
                    },{
                      'name':'堡垒机(100授权)',
                      'desc':'支持登录业务系统的身份鉴别、单点登录、访问授权、关键访问二次审批、违规访问告警与阻断、操作过程监控、历史记录查询、综合审计报告。支持SSH、RDP协议。可管理资产数为20个',
                      'num':1,
                      'price':'58000'
                    },{
                      'name':'堡垒机(200授权)',
                      'desc':'支持登录业务系统的身份鉴别、单点登录、访问授权、关键访问二次审批、违规访问告警与阻断、操作过程监控、历史记录查询、综合审计报告。支持SSH、RDP协议。可管理资产数为20个',
                      'num':1,
                      'price':'84000'
                    }
                  ]
                },
                 {
                  'name':'应用交付',
                  type:9,
                  list:[
                    {
                      'name':'应用交付软件（200M）',
                      'desc':'200M应用交付每年费用，该费用包含单边加速模块、应用性能分析模块，多线路模块、web漏洞扫描分析模块需自行购买；实现业务系统的负载均衡',
                      'num':1,
                      'price':'6600'
                    },{
                      'name':'应用交付软件（500M）',
                      'desc':'500M应用交付每年费用，该费用包含单边加速模块、应用性能分析模块，多线路模块、web漏洞扫描分析模块需自行购买；实现业务系统的负载均衡',
                      'num':1,
                      'price':'16800'
                    },{
                      'name':'应用交付软件（1000M）',
                      'desc':'1000M应用交付每年费用，该费用包含单边加速模块、应用性能分析模块，多线路模块、web漏洞扫描分析模块需自行购买；实现业务系统的负载均衡',
                      'num':1,
                      'price':'32000'
                    }
                  ]
                },{
                  'name':'企业移动管理',
                  type:10,
                  list:[
                    {
                      'name':'企业移动管理模块EMM，移动终端的安全接入和管控',
                      'desc':'EMM模块费用,购买后无需每年购买',
                      'num':1,
                      'price':'24800'
                    },{
                      'name':'企业移动管理接入授权（基础版，EasyAPP）',
                      'desc':'每EMM授权每年费用，按照接入并发数，支持移动APP的SDK代码自动封装，实现移动终端APP的安全接入，身份认证、传输加密、权限划分等，支持单点登录',
                      'num':1,
                      'price':'80'
                    },{
                      'name':'企业移动管理接入授权（标准版，EasyWork）',
                      'desc':'每EMM授权每年费用，按照接入终端数量，支持移动终端EasyWork双域隔离，实现移动终端上工作域名和安全域的安全隔离',
                      'num':1,
                      'price':'120'
                    },{
                      'name':'企业移动管理接入授权（高级版，EasyWork+）',
                      'desc':'每EMM授权每年费用，按照接入终端数量，支持移动终端EasyWork双域隔离+设备管理的终端接入',
                      'num':1,
                      'price':'160'
                    },{
                      'name':'企业移动管理接入授权（管控版，EasyMDM）',
                      'desc':'每EMM授权每年费用，按照接入终端数量，支持移动终端的设备管理',
                      'num':1,
                      'price':'70'
                    }

                  ]
                },
              ]
            }
        },
      computed: {
        currentIndex() {
          for (let i = 0; i < this.listHeight.length; i++) {
            let height1 = this.listHeight[i];
            let height2 = this.listHeight[i + 1];
            if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
              return i;
            }
          }
          return 0;
        },
      },
      created(){
        this.$nextTick(() => {
        this._initScroll();
        this._calculateHeight();
      });
      },
      methods:{
        selectMenu(index){
          // if (!event._constructed) {
          //           return;
          //       }
              let productList = this.$refs.productsWrapper.getElementsByClassName('product-list-hook');
              let el = productList[index];
              this.productsScroll.scrollToElement(el, 300);
              },
        _initScroll() {
          this.meunScroll = new BScroll(this.$refs.menuWrapper, {
            click: true
          });

          this.productsScroll = new BScroll(this.$refs.productsWrapper, {
            click: true,
            probeType: 3
          });

          this.productsScroll.on('scroll', (pos) => {
            this.scrollY = Math.abs(Math.round(pos.y));
          });
        },
        _calculateHeight() {
          let productList = this.$refs.productsWrapper.getElementsByClassName('product-list-hook');
          let height = 0;
          this.listHeight.push(height);
          for (let i = 0; i < productList.length; i++) {
            let item = productList[i];
            height += item.clientHeight;
            this.listHeight.push(height);

          }
        }
      },
      components: {
        ViewBox,XHeader
      }

    }
</script>

<style lang='less'>
.products-list{
  #vux_view_box_body{
    display: flex;
  }
  .menu-wrapper{
    flex: 0 0 80px;
    width: 100px;
    height: 100%;
    background: #f3f5f7;
    .menu-item{
      display: table;
      height: 54px;
      width: 65px;
      padding: 0 12px;
      line-height: 14px;
      &.current{
        position: relative;
        z-index: 10;
        margin-top: -1px;
        background: #fff;
        font-weight: 700;
        .vux-1px-b:after{
          border: none;
        }
      }
      .text{
        display: table-cell;
        width: 56px;
        text-align: center;
        vertical-align: middle;
        font-size: 12px;
      }


    }

 }
  .products-wrapper{
    flex:1;
    background-color: #fff;
    .title{
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      color: rgb(147, 153, 159);
      background: #f3f5f7;
    }
    .product-item{
      display: flex;
      margin: 18px;
      padding-bottom: 18px;
      .content{
        flex: 1;
        .name{
          margin: 2px 0 8px 0;
          height: 28px;
          line-height: 14px;
          font-size: 14px;
          color: rgb(7, 17, 27);
          word-break: break-all;
          word-wrap: break-word;
          white-space: pre-wrap;
        }
        .desc{
          font-size: 10px;
          color: rgb(147, 153, 159);
          line-height: 14px;
          margin-top: 8px;
          margin-bottom: 8px;
        }
        .price{
          font-weight: 700;
          line-height: 24px;
        }
        .now{
          margin-right: 8px;
          font-size: 14px;
          color: rgb(240, 20, 20);
        }

      }


    }

  }
}
</style>
