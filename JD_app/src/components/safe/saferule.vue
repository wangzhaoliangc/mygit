<template>
	<div class="saferule">
		<x-header @on-click-back='goBack' :left-options="{backText:'',preventGoBack:go}" :title='title'>
			<i slot='right' class="iconfont icon-jiajianzujianjiahao" style="color: #fff;" @click.stop='addRule'></i>
		</x-header>
		<div class="list_title ">
         <div class="title_left " @click='ulShow1'>
           <h5 class="vux-1px-b">{{h5Content1}}</h5>
           <i class="right-icon" :class="{active:liShow1}"></i>
         </div>
         <!-- <div class="title_center" @click='ulShow2'>
           <h5 class="vux-1px-b">{{h5Content2}}</h5>
           <i class="right-icon" :class="{active:liShow2}"></i>
         </div> -->
       </div>
       <transition name='slide'>
           <ul class="lists" v-show='liShow1'>
            <li v-for='(item,index) in li1' :class="{fcolor:duiShow1 == index}" class="vux-1px-b" @click='chickName1(item,index)'>{{item}}
            <i class="iconfont icon-duihao" v-show='duiShow1 == index'></i>
            </li>
           </ul>
        </transition>
        <div class="group-list">
          <swipeout>
          	<swipeout-item @click.native='swipeouts(group,index)' v-for='(group,index) in rules' @on-close="groupEvent('close')" @on-open="groupEvent('open')" transition-mode="follow" 
          	ref='group'>
		        <div slot="right-menu">
		          <swipeout-button @click.native="onButtonClick(group)" type="primary">删除</swipeout-button>
		          <swipeout-button @click.native="onButtonClick('delete')" type="warn">取消</swipeout-button>
		        </div>
		        <div slot="content" class="demo-content ">
		        	<div class="rule-item">
				        <span><small>协议类型:&nbsp;&nbsp;</small>{{group.protocol}}</span>&nbsp;&nbsp;
				        <span><small>端口范围:&nbsp;&nbsp;</small>{{group.portRange}}</span>&nbsp;&nbsp;
                        <span><small>规则方向:&nbsp;&nbsp;</small>{{group.direction | direction}}</span>
				        <br>
				        <span><small>授权对象:&nbsp;&nbsp;</small>{{group.cidr}}</span><br>
				        <span><small>创建时间:&nbsp;&nbsp;</small>{{group.createTime}}</span>
		        	</div>
		        		<i v-show='iconIdx != index' class="iconfont icon-more" @click.stop='openItem(group,index)'></i>
		        </div>
		      </swipeout-item>
          </swipeout>
        </div>
        <transition name='fade'>
           <div class="mask" v-show='maskShow' @click='mask'></div>
        </transition>
         <transition name='add-left' mode='out-in'>
         <router-view :ruleId = 'groupData.id'></router-view>
          </transition>
        <Placeholder :content='con' v-show='rules.length==0'></Placeholder>
	</div>
</template>
<script type="text/javascript">
import {XHeader,Scroller,Swipeout, SwipeoutItem, SwipeoutButton} from 'vux'
import Placeholder from '../../common/placeholder.vue'
import {SafeRuleList,deleSafeRule} from '../../api/unit.js'
import {mapGetters,mapMutations} from 'vuex'
	export default{
		props:['groupData'],
       data(){
       	return{
       		h5Content1:'安全组规则',
       		liShow1:false,
       		maskShow:false,
       		duiShow1:0,
       		iconIdx:null,
       		con:'暂无此安全组规则',
       		li1:['全部','入方向','出方向'],
       		liscon:'',
       		title:'yyl',
       		sefeId:null,
       		go:true
        	}
       },
       computed:{
          ...mapGetters([
                'rules'
          	])
       },
       created(){
        this.name()
        this.getRuleList()
       },
       filters:{
         direction(val){
            if(val == 'ingress'){
            	return '入方向'
            }else{
            	return '出方向'
            }
         } 
       },
       methods:{
         name(){
          this.title = this.groupData.name;
          this.sefeId = this.groupData.id
         },
         getRuleList(){
         	this.$vux.loading.show({
         		text:'正在加载安全组...'
         	})
         	let data ={}
         	data.securityGroup_id = this.sefeId,
         	data.direction = this.liscon
           this.$http.post(SafeRuleList,data).then(res=>{
           	if(!res){
           		this.$vux.loading.hide()
           	}
	           if(res.data.code == 0){
	           	this.$vux.loading.hide()
                 this.ruleList(res.data.data.results) 
	           }
            })
         },
         ulShow1(){
			if(!this.liShow1){
		        this.liShow1 = true;
		        // this.liShow2 = false;
		        this.maskShow = true;
		      }else{
		        this.liShow1 = false;
		        this.maskShow = false;
		      }
	        },
	        chickName1(name,index){
			    this.duiShow1 = index
			    this.h5Content1 ='安全组规则:' + name 
			    this.liShow1 = false;
			    this.maskShow = false;
			    if(name == '入方向'){
            	this.liscon = 'in'
	            }else if(name == '出方向'){
	            	this.liscon = 'out'
	            }else{
	            	this.liscon = null;
	            }
			    this.getRuleList()
	        },	        
	        mask(){
		      this.liShow1 = false;
		      // this.liShow2 = false;
		      this.maskShow = false;
	        },
            groupEvent(type){
               console.log(type)
               if(type == 'close'){
               	 this.iconIdx = null
               }else{
               	  
               }
            },
            onButtonClick(val){
               let id  = val.id
               let _this = this
               this.$vux.confirm.show({
               	 title:'提示',
               	 content:'确定删除此安全规则？',
                 onConfirm(){
                 	_this.$vux.loading.show({
                 		text:'正在删除,请稍等...'
                 	})
                   _this.$http.post(deleSafeRule,{id:id}).then((res)=>{
                   	if(res.data.code == 0){
                   	_this.$vux.toast.show({
                 		text:'删除成功',
                 		type:'success'
                 	})
                   	  _this.getRuleList()
                   	  _this.$vux.loading.hide()
                   	 }
                   })
                 } 
               })
            },
            openItem(val,index){
               this.iconIdx = index
               let groups = this.$refs.group
               groups[index].open()
            },
            swipeouts(val,idx){
            	this.iconIdx = null
            },
            addRule(){
            	this.$router.push('/safety/saferule/addrule')
            },
            goBack(){
            	this.$router.push('/safety')
            },
            ...mapMutations({
                 ruleList:'RULES'
            })
       },
       
       components:{
       	XHeader,Placeholder,Scroller,Swipeout, SwipeoutItem, SwipeoutButton
       }
	}
</script>
<style lang="less">
@import '~vux/src/styles/1px.less';
	.saferule{
		padding-top: 86px;
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom:0px;
		z-index: 100;
		background-color: #fbf9fe;
        .list_title{
	      display: flex;
	      width: 100%;
	      position:fixed;
	      top: 46px;
	      z-index: 50;
	      background-color: #fff;
	      .title_left,.title_center,.title_right{
	        width: 100%;
	        text-align:center;
	        position:relative;
	        h5{
	          font-size: 16px;
	          font-weight: normal;
	          padding: 10px 0 10px 0;
	        }
	        .right-icon {
	          position: absolute;
	          right: 15px;
	          top: 20px;
	          margin-top: -4px;
	          width: 8px;
	          height: 8px;
	          border-right: 2px solid #b2b2b2;
	          border-bottom: 2px solid #b2b2b2;
	          transform: rotate(45deg);
	          transition:all 0.2s;
	          &.active{
	            transform: rotate(-135deg)
	          }
	        }
	        .icon-mianfei-xianxing{
	          position: absolute;
	          right: 16px;
	          top: 8px;
	          color: #b2b2b2;
	          font-size: 18px;
	        }
	        
	      }
	    }
	    .lists{
          width: 100%;
          position:fixed;
          top: 91px;
          left: 0;
          right:0;
          z-index: 10;
          li{
            list-style: none;
            padding:8px 0 8px 15px;
            font-size: 12px;
            background-color: #fff;
            &.fcolor{
              color:green;
            }
            .icon-duihao{
              float: right;
              padding-right: 20px;
              color: green;
            }
          }
        }
        .rule-item{
        	width: 90%;
        	font-size: 12px;
        	small{
        		color: #888;
        	}

        }
        .vux-swipeout-item{
        	margin-top:10px;
        	
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
	      .demo-content {
	      	  position:relative;
			  padding: 10px 10px;
			  .icon-more{
        		position:absolute;
        		right:5%;
        		top:35%;
        		font-size: 20px;
        		color: #888;
        	}
			} 
	      .fade-enter-active,.fade-leave-active{
		      transition:all 0.3s;
		  }
		  .fade-enter,.fade-leave-to{
		      opacity: 0;
		  }
	    .slide-enter-active,.slide-leave-active{
		  transition:all 0.3s;
		}
		.slide-enter,.slide-leave-to{
		    transform:translate3d(0,-100%,0);
		    opacity: 0;
	    }

	}
</style>