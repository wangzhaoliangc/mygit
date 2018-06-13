<template>

	<div class="recharge">
		<x-header :left-options="{backText:''}" >充值</x-header>
        <group title="充值金额(元)">
        <div class="select">
        	 <div v-for='(i,index) in commonList' class="select-item vux-1px-b" @click='selected(i,index)'>
        	 	<transition name='icon-scale'>
        	 		<icon type="success" v-show='seIdx == index'></icon>
        	 	</transition>	
        	 	<i class="radious " v-show='seIdx != index'></i>	
        	 	<span>{{i}}</span>
        	</div>
        </div>
       <!-- :disabled='inpDis' -->
	      <x-input title="自定义金额"  v-model='payVal' type="text"  placeholder=""   @on-change='payValue'  @on-focus ='focus'
	      ></x-input>
        </group>

        <div class="pay">
        	<span class="pay-title">充值方式</span>
        	<checker
	        v-model="payMethods"
		    default-item-class="demo5-item"
		    selected-item-class="demo5-item-selected"
		    :radio-required='true'
		    >
		     <!--  <checker-item v-for="i in ['支付宝', '微信']"  @on-item-click='payItem' :key="i" :value="i">{{i}}</checker-item>
		    </checker> -->
             <checker-item v-for="i in ['支付宝']"  @on-item-click='payItem' :key="i" :value="i">{{i}}</checker-item>
            </checker>
        </div>
        <div>
        	<box gap="40px 10px 10px 10px">
		      <x-button @click.native='pay' type="primary" :disabled='btnDis'>立即充值</x-button>
   			</box>
        </div>
	     <div v-html='ht'></div>
	</div>

</template>
<script type="text/javascript">
  import {XHeader , XInput,Group ,Checker,CheckerItem,Icon ,XButton,Box } from 'vux'
  import {payRecharge} from '../../api/unit.js'
	export default{
		data(){
			return{
				payMethods:'支付宝',
				commonList:[100,500,1000],
				radioValue:[100],
				seIdx:0,
				seval:100,
				payVal:'',
				inpDis:true,
                btnDis:false,
				ht:''
			}
		},
		methods:{
         payItem(value,disabled){
         	// console.log(value,disabled)
         },
         focus(value){
           this.seIdx = -1; 
           this.seval = 0;
           this.payVal = value;
            if(this.payVal>0){
                this.btnDis = false;
            }else{
                this.btnDis = true;
            }
        },
         payValue(value){
            this.payVal = value;
            if(this.payVal>0){
                this.btnDis = false;
            }
           
         },
         selected(item,idx){
         	if(idx === this.seIdx){
         		this.seIdx = -1;
         		this.seval = 0;
         		this.inpDis = false;
                this.btnDis = true;
         	}else{
	           this.seIdx = idx;
	           this.seval = item;
	           this.inpDis = true;
               this.btnDis = false;
	           this.payVal='';
         	}
         },
         pay(){
         	if(this.seval !=0 || this.payVal !=0){
         		let value = 0;
         		if(this.seval != 0){
         			value = this.seval
         		}else{
         			value = this.payVal
         		}
                this.$vux.loading.show({
                    text:'正在前往充值页面...'
                })
	         	this.$http.get(payRecharge+'?amount=' + value).then((res)=>{
          		const div = document.createElement('div');
			    this.ht = res.data.data;
			    setTimeout(()=>{
			    console.log(document.forms[0])	
			     document.forms[0].submit()
                 this.$vux.loading.hide()
			},200)
			    

          	})
              }
         	}
		},
		components:{
			XHeader,XInput,Group,Checker,CheckerItem,Icon ,XButton,Box
		}

	}
</script>
<style lang="less">
  @import '~vux/src/styles/1px.less';
 .recharge{
 	padding-top: 46px;
 	.weui-cells__title{
 		padding:5px 15px;
 		font-size: 16px;

 	}
 	.vux-x-input{
 		
 	  .weui-label{
 		color: #888;
 	   }
 	}
 	
 	.select{
 			padding:10px 0px 0 15px;
 			.select-item{
             padding:10px 0;
             position: relative;
             .weui_icon_success{
             	vertical-align: middle;
             	position: absolute;
             	left:1px;
             	top: 11px;
             }
             &:last-child.vux-1px-b:after{
               border:none;
             }
             .radious{
             	display: inline-block;
             	width: 21px;
             	height: 21px;
             	border:1px solid #ccc;
             	border-radius:50%;
             	position:absolute;
             	left:5px;
             	top: 11px;
             }
             span{
             	display: inline-block;
             	margin-left: 40px;
             }
 			}

 		}
 	.weui-cells_checkbox:after{
 		border:none;
 	}
 	.pay{
        .pay-title{
        	display: inline-block;
        	color: #888;
        	padding-left:15px;
        	font-size: 16px;
        	margin:10px 0;
        }
 		.demo5-item {
		  width: 100px;
		  height: 36px;
		  line-height: 36px;
		  text-align: center;
		  border-radius: 3px;
		  border: 1px solid #ccc;
		  background-color: #fff;
		  margin-right: 6px;
		  margin-left: 10px;
		}
	   .demo5-item-selected {
	   	background: #ffffff url(../../../assets/active.png) no-repeat right bottom;
		  border-color: #ff4a00;
		}
 	}
 	.icon-scale-enter-active,icon-scale-leave-active{
 		transition: all 0.2s;
 	}
 	.icon-scale-enter,icon-scale-leave-to{
 	  transform:scale(0);
 	}
 }
</style>