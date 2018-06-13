<template>
	<div class="addrule">
		<x-header @on-click-back='ruleBack' :left-options="{backText:'',preventGoBack:GoBack}" title='添加安全组规则'></x-header>
	<group title="">
       <popup-picker :title="title1" :data="list1" v-model="value1"></popup-picker>
    </group>
    <box gap='20px 0px'>
    	<group title="">
       <popup-picker :title="title2" :data="list2" v-model="value2"></popup-picker>
    </group>
    </box>	
    <box>
    	<group title="">
        <x-input title='端口范围' @on-change='pro' text-align='right' placeholder='-1/-1'  v-model="portVal" placeholder-align="right"></x-input>
    </group>
    <span class="ts" style="color: red;" v-if='errorShow'>{{error}}</span>
    <span class="ts">例如:1/65535,或者-1/-1(表示不限制,谨慎使用),'/'两边数字的是1到65536中的任意数字</span>
    </box>
    <box gap='10px 0'>
    	<group title="">
        <x-input title='授权对象' @on-change='cid' text-align='right' placeholder='建议添加可信IP'  v-model="cidrVal" placeholder-align="right"></x-input>
    </group>
    <span class="ts">请谨慎设置授权对象,0.0.0.0/0代表允许或拒绝所有IP的访问,格式:222.222.222.222/22 (说明:斜杠前面是ip,斜杠后面22的范围是0-32)</span>
    </box>
    <box gap='50px 10px 0 10px'>
    	<x-button type='primary' :disabled="dis" @click.native='rules'>创建安全组规则</x-button>
    </box>
	</div>
</template>
<script type="text/javascript">
import {XHeader,PopupPicker,Group,Box,XInput,XButton  } from 'vux'
import {addSafeRule,SafeRuleList} from '../../api/unit.js'
 export default{
 	props:['ruleId'],
 	data(){
 		return{
 		   value1:['入方向'],
 		   value2:['TCP'],
           title1:'规则方向',
           title2:'协议类型',
           title3:'端口范围',
           list1:[['入方向','出方向']],
           list2:[['TCP','UDP','ICMP']],
           portVal:'',
           cidrVal:'',
           port:true,
           cidr:true,
           GoBack:true,
           dis:true,
           error:'',
           errorShow:false
 		}
 	},
 	computed:{
        
 	},
 	methods:{
       ruleBack(){
       	let _this = this
       	this.$vux.confirm.show({
       		title:'操作提示',
       		content:'确定取消添加安全组规则吗？',
       		onConfirm(){
              _this.$router.push('/safety/saferule') 
       		}
       	})
       },
       pro(){
       	if(this.portVal == '' ){
       		this.dis = true;
       		return
       	}
          let reg = /^-?[1-9]{1,}\/{1}-?[1-9]{1,}$/g;
          let flag = reg.test(this.portVal);
          if(flag){
          	this.errorShow = false;
          	let proArr = this.portVal.split('/')
	          	if(parseInt(proArr[0]) > parseInt(proArr[1])){
	          		 this.errorShow = true;
                     this.error = '前面的数字应小于等于后面的数字';
	          	}else{
                     this.errorShow = false;
                     this.port = false;
                     if(this.cidrVal == ''){
                     	this.dis = true;
                     }else{
                     	this.dis = false;
                     }
                     
	          	}
          }else{
          	this.errorShow = true;
          	this.error = '格式错误';
          	this.port = true;
          	this.dis = true;
          }

       },
       cid(){
          if( this.cidrVal == '' ||  this.port){
          	this.dis = true;
          	this.cidr = true
          }else{
          	this.dis = false;
          	this.cidr=false
          }
       },
       rules(){
       	this.$vux.loading.show({
       		text:'正在创建安全组规则'
       	})
       	let data = {};
       	data.protocol =this.value2[0]; 
       	if(this.value1[0]=='入方向'){
           data.direction = 'in'
       	}else {
       		data.direction = 'out'
       	}
       	data.port_range = this.portVal;
       	data.cidr = this.cidrVal;
       	data.securityGroup_id = this.ruleId;
       	  this.$http.post(addSafeRule,data).then((res)=>{
       	  	if(res.data.code == 0){
       	  	  this.getRule()
       	  	  setTimeout(()=>{
       	  	  	this.$router.push('/safety/saferule')
       	  	  },200)
       	  	  
       	  	}
       	  })
       	},
       getRule(){
       	this.$http.post(SafeRuleList,{securityGroup_id:this.ruleId}).then(res=>{
           	console.log(res)
	           if(res.data.code == 0){
                 this.$store.dispatch('changeRules',res.data.data.results)
	           }
            })
       }
 	},
   components:{
     	XHeader,PopupPicker,Group,Box,XInput,XButton
   }
 }
	
</script>
<style lang='less'>
	 .addrule{
	 	position: fixed;
	 	top: 0px;
	 	left:0px;
	 	right: 0px;
	 	bottom: 0px;
	 	z-index: 101;
	 	background-color: #fbf9fe;
	 	padding-top: 46px;
	 	.weui-cells{
	 		&:before,&:after{
	 			height:0;
	 			border:none;
	 		}
	 		.weui-cell__bd{
	 		}
	 		.weui-label{
	 			color: #888;
	 		}
	 		.vux-cell-value{
	 			color: #000;
	 		}

	 	}
	 	.ts{
 			display: inline-block;
 			padding:1% 2%;
 			font-size: 10px;
 			color: #888;
	 		}
	 }
</style>
