<template>
	<div class="detail">
		<x-header :left-options="{backText:''}" :title='title'></x-header>
		<div class="detail-list" :class='{padBottom:orders.npay}'>
	        <group title='订单概览'>
			    <cell title='订单编号' >{{orders.order_sn}}</cell>
			    <cell title='订单类型' >{{orders.order_type}}</cell>
			    <cell title='下单时间' >{{orders.create_time}}</cell>
			    <cell title='订单金额' class='price'>￥{{orders.product_price}}</cell>
			    <cell title='支付状态' class='pay_status' :class='{npay_status:orders.npay,delete_status:orders.delete_status}'>{{orders.pay_status||orders.delete_status}}</cell>
            </group>	
            <group title='订单详情'>
			    <cell title='产品' >{{orders.prodcut_name}}</cell>
			    <cell title='数量' >1</cell>
			    <cell title="具体配置" align-items="flex-start" v-if='orders.alldata'>
                        规格:&nbsp;{{orders.alldata.spec}}<br>
                        CPU:&nbsp;{{orders.alldata.vcpu}}<br>
                        内存:&nbsp;{{orders.alldata.ram}}<br>
                        带宽:&nbsp;{{orders.alldata.bandwidth}}<br>
                        系统盘:&nbsp;{{orders.alldata.os_data}}<br>
                        操作系统:&nbsp;{{orders.alldata.os}}
		        </cell>
		        <cell title='付款方式'>{{orders.payment_type | day}}</cell>
		        <cell title='支付方式' v-if='orders.pay_type'>{{orders.pay_type}}</cell>
		        <cell title='支付时间' v-if='orders.pay_time'>{{orders.pay_time}}</cell>
                <cell title='金额' >￥{{orders.product_price}}</cell>
            </group>
		</div>
		<div class="detail-foot" v-if='orders.npay' >

			<div class="pay-methods vux-1px-t vux-1px-b" :class="{payHeight:payH}">
				<ul>
					<li @click='payShow'>
						<span>支付方式:</span>
						<img :src='payData.logo' width="40" class="payicon">
						<!-- <span class="paytext">{{payData.title}}</span> -->
					</li>
					<li v-for='(item,index) in paymtods'  @click='payType(item,index)'>
						<img :src='item.logo' width="40" >
						<span>{{item.title}}</span>
					</li>
				</ul>
				<i class="right-icon" :class='{active: payH}'></i>
			</div>
			<flexbox>
		        <flexbox-item>
		          <x-button type="primary" @click.native='total'>立即支付</x-button>
		        </flexbox-item>
		        <flexbox-item>
		          <x-button type="warn" @click.native='update' class='vux-1px'>作废订单</x-button>
		        </flexbox-item>
            </flexbox>
		</div>
		<transition name='fade'>
           <div class="mask" v-show='maskShow' @click='mask'></div>
           </transition>
           <div class="circle" ref='circle' v-show='percentShow' style='width:150px;height:150px;'>
		      <x-circle :percent="percent" :stroke-width="10" stroke-color="#04BE02">
		        <span>{{percent}}%</span>
		      </x-circle>
    		</div>
           <div v-html='payFrom'></div>

	</div>
</template>
<script type="text/javascript">

import {mapGetters } from 'vuex'
import { aliPay , wxPay ,rePay,updateOrder} from '../../api/unit.js'
import {Cell,Group,XHeader,Flexbox, FlexboxItem,XButton,XCircle} from 'vux'

	export default{
		data(){
			return{
			  percent:0,
			  percentShow:false,
              title:'订单详情',
              payIdex:0,
              payH:false,
              maskShow:false,
              payFrom:'',
              payData:{
                  	logo:require('../../../assets/biao.png'),
                  	title:'支付宝'
                   },
                paymtods:[
                  {
                  	logo:require('../../../assets/biao.png'),
                  	title:'支付宝',
                  	payId:0
                  },
                  // {
                  // 	logo:require('../../../assets/weixin.png'),
                  // 	title:'微信',
                  // 	payId:1
                  // },
                  {
                  	logo:require('../../../assets/logo.png'),
                  	title:'余额',
                  	payId:2
                  }
              ],
              id:0,
              payIdx:0
			}
		},
		methods:{
          payType(item,index){
          	this.payData = item;
          	this.payH = false;
          	this.maskShow = false;
          	this.payIdx = item.payId
          },
          payShow(){
          	if(this.payH){
          		this.payH = false;
          		this.maskShow = false;
          	}else{
          		this.payH = true;
          		this.maskShow = true;
          	}
          	
          },
          mask(){
		      this.maskShow = false;
		      this.payH = false;
		    },
		  total(){
		  	 this.id = this.orders.id
             if(this.payIdx==0){
             	this.$vux.loading.show({
             		text:'正在前往支付宝...'
             	})
             	this.$http.get(aliPay + '?id=' + this.id ).then((res)=>{
             		this.payFrom = res.data.data
             		console.log(this.payFrom )
             		setTimeout(()=>{
                      document.forms[0].submit()  
                      this.$vux.loading.hide()  
             		}, 200)
             		
             	})
             }else if(this.payIdx==1){
			    this.$http.get(wxPay + '?id=' + this.id ).then((res)=>{
			        console.log(res)
			    })
             }else if(this.payIdx ==2){
             	this.percentShow = true  
			    this.percent = 0
			    let timer = setInterval(this.percentS, 1000)  
             	this.$http.post(rePay , {id:this.id} ).then((res)=>{
             		console.log(res)
             		if(!res){
		              this.percentShow = false;
		              return
		            }
			       if(res.data.code == 0){
		  			  this.percent = 100;
		              setTimeout(() => {
		               this.percentShow = false;
		               this.$router.push('/home/control')
		              },1000)
		  		    }
			    })
             }
		  },
		  update(){
		  	this.id = this.orders.id
		  	this.$http.post(updateOrder,{id:this.id}).then((res)=>{
		  		// /home/control
		  		// this.$router.go(-1)
		  		if(res.data.code == 0){
		  		 	this.$router.push('/order')
		  		}
		  	})
            
		  },
		   percentS(){
		      if(this.percent <= 80){
		       this.percent += 10;
		      }
		       
		    },
		},
		filters:{
           day:function(value){
           	if(!value){
           		return
           	}
          	let val = parseInt(value)
          	if(val >= 12){
          	  return '按年( ' + val / 12 + '年 )'
          	}else{
          		return '按月( ' + val + '个月 )'
          	}
          }
		},
		computed:{
           ...mapGetters([
		      'orders'
          ])
		},
		components:{
			Cell,Group,XHeader,Flexbox,FlexboxItem,XButton,XCircle
		}

	}
</script>
<style lang="less">
@import '~vux/src/styles/1px.less';
	.detail{
		position: absolute;
		top:0;
		left:0;
		right: 0;
		z-index: 100;
		background-color: #f9f9f9;
		height: 100%;
		.detail-list{
			background-color: #f9f9f9;
			padding-top: 46px;
			&.padBottom{
               padding-bottom: 131px;
			}
			.weui-cells__title{
				padding:1px 15px;
				font-size: 16px;
			}
			.vux-label{
				color: #999999;
			}
			.weui-cell__ft{
				max-width:75%;
				white-space: nowrap;
				overflow: hidden;
				text-overflow:ellipsis;
				color: #000;
				font-size:14px;
			}
			.price{
				.weui-cell__ft{
					color: red !important;
				}
			}	
			.pay_status{
				.weui-cell__ft{
					color: green;
				}
			}
			.pay_status.npay_status{
				.weui-cell__ft{
					color: red;
				}
			}
			.pay_status.delete_status{
				.weui-cell__ft{
					color: #888;
				}
				
			}
		}
		.detail-foot{
			position:fixed;
			bottom: 0;
			left:0;
			right: 0;
			background-color: #fff;
			margin-top: 10px;
			padding:0 0 20px 0;
			z-index:10;
			.pay-methods{
				background-color: #fff;
				transition:all 0.3s;
				height: 60px;
				overflow: hidden;
				margin-bottom: 10px;
				z-index:2;
				&.payHeight{
					height: 180px;
				}
				ul{
					li{
						height: 60px;
						line-height: 60px;
						padding-left: 20px;
                        position: relative;
						img{
							vertical-align: middle;
							margin-right: 30px;
							border-radius: 50%;
						}
						.payicon{
							margin-left: 30px;
							margin-right:0;
							position: absolute;
							right:15%;
							top: 10px;
						}
						.paytext{
							position: absolute;
							right:15%;
						}
					}
				}
				.right-icon{
				  position: absolute;
		          right: 15px;
		          top: 25px;
		          margin-top: -4px;
		          width: 10px;
		          height: 10px;
		          border-right: 2px solid #b2b2b2;
		          border-bottom: 2px solid #b2b2b2;
		          transform: rotate(45deg);
		          transition:all 0.4s;
		          &.active{
		          	transform:rotate(-135deg);
		          }
				}
			}
			.vux-flexbox-item{
				.weui-btn{
					width: 70%;
				}
				.weui-btn_warn{
					
				}

			}
			
		}
		.mask{
	        position:fixed;
	        top: 0px;
	        left: 0px;
	        right:0px;
	        bottom:0px;
	        width: 100%;
	        z-index: 1;
	        background-color: rgba(0,0,0,0.5);
      } 
      .vux-circle-demo {
		  text-align: center;
		}
		.vux-circle-demo > div {
		  margin: 0 auto;
		}
		.circle{
		  width: 100%;
		  height: 100%;
		  position:fixed;
		  top: 30%;
		  left:50%;
		  color: #fff;
		  transform:translate3d(-50%,0,0);
		  background-color: rgba(0,0,0,0.5);
		  border-radius: 5px;
		} 
		
	}
</style>