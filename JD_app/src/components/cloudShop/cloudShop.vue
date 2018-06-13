<template>
	<div class="cloud-shop">
		<x-header :left-options="{backText:''}">云市场</x-header>
		<div class="title">
		   <h3>加入我们的TEAM</h3>
		   <p>网络安全、主机安全、应用安全、数据安全...</p>
		   <p>我们为你提供各种安全服务，为你的业务保驾护航。</p>
           <div class="tab">
           	<grid >
		      <grid-item >
			        <span slot="label">
		             <i class="iconfont icon-msnui-software" style="font-size: 30px;color: rgb(255, 0, 0);"></i>
		            </span>
                    软件安全
		      </grid-item>
		      <grid-item >
		            <span slot="label">
		             <i class="iconfont icon-yingjianshili" style="font-size: 30px;color: rgb(255, 0, 0);"></i>
		            </span>
                    硬件安全
		      </grid-item>
		      <grid-item >
		            <span slot="label">
		             <i class="iconfont icon-yidongduan" style="font-size: 30px;color: rgb(255, 0, 0);"></i>
		            </span>
		            移动安全
		      </grid-item>
            </grid>
           </div>
		</div>
		<div class="cloud-list">
			<ul class="list-ul">
				<li class="safety vux-1px-b"  v-for='(item,index) in safety' @click='safe(index)' ref='safety'>
					<i class="safety-icon iconfont" :class='item.icon'></i>
					<span class="safety_title">{{item.safety_title}}</span>
					<i class="icon-right" :class="{roted:sidx === index}"></i>
					<transition name='silde-height' >
						<div class="safe"  ref='safe'>
							<div class="desc" v-for='(i,index) in item.safeList' :key='index' >
								<h5>{{i.item_title}}</h5>
								<p>{{i.desc}}</p>
							</div>
					    </div>
					 </transition>
				</li>
			</ul>
		</div>
		
	</div>
</template>
<script type="text/javascript">
    import {XHeader, Grid, GridItem} from 'vux'
	export default{
		data(){
			return{
			  safeShow:false,
			  sidx:'',
			  safeHeight:[],
			  safeObj:[],
              safety:[
                {
                 	safety_title:'网络安全',
                 	icon:'icon-wangluoanquanguanli',
                 	safeList:[
                 	   {
                 	   	item_title:'防火墙/UTM/安全网关/NGFW',
                 	   	desc:'web攻击、漏洞攻击、病毒木马等类型的应用层攻击的防护，对服务器或终端外发的流量进行检查。'
                 	   },
                 	   {
                 	   	item_title:'IPS/IDS',
                 	   	desc:'入侵防御系统，对网络系统的运行状况进行监视，采用匹配技术通过一定的安全策略尽可能的去发现各种攻击事件，用以保证网络系统中资源的机密性、完整性。'
                 	   },
                 	   {
                 	   	item_title:'上网行为管理',
                 	   	desc:'防范非法用户非法访问、防范合法用户非授权访问和防范假冒合法用户非法访问。'
                 	   },
                 	   {
                 	   	item_title:'网络安全审计',
                 	   	desc:'对互联网进行全面控制管理，规范内网人员上网行为，提高人力资源效率，强化网络安全，保护重要机密。'
                 	   },
                 	   {
                 	   	item_title:'流控',
                 	   	desc:'流量控制，智能流控方式，通过专业的流控设备实现基于应用层的流控，属于七层流控。'
                 	   },
                 	   {
                 	   	item_title:'网络流量分析',
                 	   	desc:'有效的网络业务流量监测系统对其网络以及网络所承载的各类业务进行及时、准确的流量和流向分析，进而挖掘网络资源潜力，控制网络互联成本，并为网络规划、优化调整和业务发展提供基础依据。'
                 	   },
                 	   {
                 	   	item_title:'防毒墙/防病毒网关',
                 	   	desc:'用以保护网络内（一般是局域网）进出数据的安全。主要体现在病毒杀除、关键字过滤（如色情、反动）、垃圾邮件阻止的功能，同时部分设备也具有一定防火墙（划分Vlan）的功能。'
                 	   },
                 	   {
                 	   	item_title:'APT未知威胁发现',
                 	   	desc:'APT攻击检测系统针对APT攻击的特点，为用户提供多视角的检测发现能力，及时发现针对客户的重要资产实施的多种形式的定向高级攻击，而这类攻击行为是传统安全检测系统无法有效检测发现。'
                 	   },
                 	   {
                 	   	item_title:'抗DDoS服务',
                 	   	desc:'分布式拒绝服务，采用阻断服务、分布式阻断服务、预防DDoS攻击等等。'
                 	   },
                 	   {
                 	   	item_title:'负载均衡/应用交付',
                 	   	desc:'负载均衡 建立在现有网络结构之上，它提供了一种廉价有效透明的方法扩展网络设备和服务器的带宽、增加吞吐量、加强网络数据处理能力、提高网络的灵活性和可用性。分摊到多个操作单元上进行执行，例如Web服务器、FTP服务器、企业关键应用服务器和其它关键任务服务器等，从而共同完成工作任务。'
                 	   }
                 	  
                    ]
                },
                {
                 	safety_title:'主机安全',
                 	icon:'icon-ecsyunfuwuqi',
                 	safeList:[
                 	   {
                 	   	item_title:'单机防病毒',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'网络防病毒',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'主机文档加密与权限控制/HDLP',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'主机安全加固',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'终端登录/身份认证',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'移动存储介质管理',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'补丁管理',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   }
                    ]
                },
                {
                 	safety_title:'应用安全',
                 	icon:'icon-yingyong',
                 	safeList:[
                 	   {
                 	   	item_title:'网页防篡改',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'硬件WAF',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'软件WAF',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'云WAF',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'WEB漏扫',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'网站安全监控产品与服务',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'单点登录&身份认证',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'加密安全设备/NDLP',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'反钓鱼反欺诈',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'邮件安全',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   }
                    ]

                },
                {
                 	safety_title:'数据安全&数据库安全',
                 	icon:'icon-iconset0358',
                 	safeList:[
                 	   {
                 	   	item_title:'数据库漏扫',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'数据库防火墙',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'数据库加密与脱敏',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'数据库审计',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'数据备份',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'数据清除工具',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'数据恢复',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   }
                    ]
                },

				{
                 	safety_title:'移动与虚拟化安全',
                 	icon:'icon-yidongduan',
                 	safeList:[
                 	   {
                 	   	item_title:'虚拟化安全防护',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'手机防病毒',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'移动安全管理EMM',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'移动APP安全',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   }
                    ]
                },

				{
                 	safety_title:'安全管理',
                 	icon:'icon-anquanguanli',
                 	safeList:[
                 	   {
                 	   	item_title:'SOC/SIEM',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'运维审计/4A/堡垒机',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'网管软件/ITIL',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'漏洞扫描与管理',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'网络和主机配置核查系统',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'主机安全保密检查工具',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'信息安全等级保护测评工具箱',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'网络安全态势感知',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'网络舆情监控',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'威胁情报',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   }
                    ]
                },

				{
                 	safety_title:'工控安全',
                 	icon:'icon-chedaogongkongji',
                 	safeList:[
                 	   {
                 	   	item_title:'工控防火墙',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'工控安全审计',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'工控漏洞扫描&挖掘',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'工控其他类',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   }
                    ]
                },

				{
                 	safety_title:'物理安全',
                 	icon:'icon-physics-world',
                 	safeList:[
                 	   {
                 	   	item_title:'存储介质信息消除/粉碎机',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   }
                    ]
                },
                {
                 	safety_title:'其他安全相关',
                 	icon:'icon-qita',
                 	safeList:[
                 	   {
                 	   	item_title:'CASB/云业务安全接入代理',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'国产操作系统',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'国产数据库',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'业务风控安全',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'安全硬件平台/工控机',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   },
                 	   {
                 	   	item_title:'安全蜜罐',
                 	   	desc:'ad哈师大萨科技大厦大大好大萨达卡'
                 	   }
                    ]
                }

              ],

			}
		},
		created(){
			this.$nextTick(()=>{
				this.safeClientheight()
			})
		},
		methods:{
           safe(index){
           	for(let i = 0; i < this.safeObj.length;i++){
	               this.safeObj[i].style.height = 0 + 'px'
	           	}
           	 if(this.sidx === index){
		        this.sidx = ''
		        return
              }
        	    this.sidx = index
        	    this.safeObj[this.sidx].style.height = this.safeHeight[this.sidx] + 'px'

           },
           safeClientheight(){
           	this.safeObj = this.$refs.safe
	            for(let i = 0; i < this.safeObj.length;i++){
	               this.safeHeight.push(this.safeObj[i].clientHeight)
	               this.safeObj[i].style.height = 0 + 'px'
	           	}
	           
           }
		},
		components:{
			XHeader, Grid, GridItem
		}
       

	}
</script>
<style lang="less" >
@import '~vux/src/styles/1px.less';
	.cloud-shop{
	  .title{
	  	padding-top:66px; 
	  	text-align: center;
	  	h3{
	  		font-weight: normal;
	  		font-size: 22px;
	  		color: #333;
	  		margin-bottom: 10px;
	  	}
	  	p{
	  		font-size: 14px;
	  		color: #888;
	  		line-height: 24px;
	  	}
	  	.tab{
	  		margin: 20px 0;
	  		.weui-grids{
	  			margin:0 10px;
	  			background-color: #fff;
	  			&:before,&:after{
	  				height:0;
	  				border: none;
	  				
	  			}
	  			a{
	  				color: #333;
	  				&:after{
	  						border: none;
	  						width: 0px;
	  					}
	  				&:last-child:before{
	  					border: none;
	  					width: 0px;
	  				}	
	  				}
	  			p{
	  			line-height: 40px;
	  		}
	  		}
	  		
	  	}
	  }
	  .cloud-list{
         transition: height 0.3s;
	  	.list-ul{
	  		padding:0 10px;
	  		.safety{
	  			position:relative;
	  			padding:15px 5px 15px 10px;
	  			background-color: #fff;
	  			margin-top:10px;
	  			list-style: none;
	  			&:before{

	  			}
	  			.safety-icon{
	  				font-size: 24px;
	  				display: inline-block;
	  				padding:0 10px;
	  				vertical-align: middle;
	  				color: red;
	  			}
	  			.safety_title{
	  				display: inline-block;
	  				width: 70%;
	  			}
	  			.icon-right{
			  	  position: absolute;
		          right: 35px;
		          top: 25px;
		          width: 10px;
		          height: 10px;
		          border-right: 1px solid #b2b2b2;
		          border-bottom: 1px solid #b2b2b2;
		          transform: rotate(45deg);
		          transition:all 0.3s;
		          &.roted{
		          	 transform: rotate(-135deg);
		          }
	  	        }
	  	        .safe{
	  	        	transition: height 0.5s;
	  	        	overflow: hidden;
	  	        	.desc{
	  	        		padding:10px 5px 10px 10px;
	  	        		h5{
	  	        			font-weight: normal;
	  	        			font-size: 14px;
	  	        		}
	  	        		p{
	  	        			font-size: 12px;
	  	        			color: #888;
	  	        			margin-top: 5px;
	  	        		}
	  	        	}
	  	        	
	  	        }
	  		}
	  	}

	  	
	  	
	}

}
			


</style>