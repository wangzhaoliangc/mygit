<template>
	<div class="addsafe">
		<CommHeader :title='title' @back='back'></CommHeader>
    <div class='safe-form'>
      <group :title="titleName">
      <x-input title="安全组名称" v-model='inpName' name="username" placeholder="请输入名称" :min='1' @on-change="change"></x-input>
    </group>
      <box gap='20px 0 50px 0 '>
        <group :title='titleText'>
      <x-textarea :min='0' :max="256" v-model='textareaVal' placeholder='描述'   @on-change="onEvent"></x-textarea>
    </group>
      </box>
      <box gap="10px">
        <x-button type='primary'  @click.native='group'  :disabled='safeDis' >确定</x-button>
      </box>
    </div>
	  <div v-transfer-dom>
      <confirm 
      v-model='show'
      title='操作提示'
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      >
      <p style="text-align:center;">{{ ifBack }}</p>
      </confirm>
    </div>
	</div>
</template>
<script type="text/javascript"> 
   import CommHeader from '../commHeader/commHeader.vue'
   import {addSafe,SafeList} from '../../api/unit.js'
   import {XInput, XTextarea,Group,Confirm ,XButton,Box,TransferDomDirective as TransferDom } from 'vux'
	export default{
		directives: {
		    TransferDom
		  },
		data(){
			return{
			  show:false,
        title:'创建安全组',
        ifBack:'确定要取消创建安全组吗？',
        titleName:'长度为1-128个字符。',
        titleText:'长度为0-256个字符。',
        inpName:'',
        safeDis:true,
        textareaVal:''
			}
		},
		methods:{
			back(){
        this.show = true;
			},
			onCancel(){
              
			},
			onConfirm(){
        this.inpName='';
        this.textareaVal= '';
				this.$emit('safeHide')	
			},
      onEvent(){
         console.log(this.textareaVal)
      },
      change(value){
         if(value){
          this.safeDis = false;
          this.inpName = value;

         }else{
          this.safeDis = true;
         }
      },
      group(){
        if(this.inpName != ''){
          let data={}
          data.name = this.inpName
          data.desc= this.textareaVal
          console.log(data)
          this.$vux.loading.show({
               text:'正在创建安全组'
          });
          this.$http.post(addSafe,data).then((res)=>{
            let re = res.data.data
            console.log(res)
            if(res.data.code == 0){
              this.safeList()
              this.$vux.toast.show({
                 text:'创建成功'
              })
              setTimeout(()=>{
                this.inpName='';
                this.textareaVal= '';
                this.$emit('safeHide')
              },20)
            }
          })
        }
      },
      //安全组列表
      safeList(){
        this.$http.post(SafeList,{currentpage:1,pageSize:10}).then((res)=>{
            console.log(res)
            if(res.data.code == 0){
              let data = res.data.data.results
              this.$store.dispatch('changeSafeGroup',data)
            }
        })
      }
		},
      components:{
      	CommHeader,Confirm,XInput,Box, Group,XTextarea,XButton
      }
	}
</script>
<style lang='less'>
  .addsafe {
  	position: fixed;
  	top: 0;
  	left: 0;
  	right: 0;
  	bottom: 0;
  	z-index: 100;
  	background-color: #fbf9fe;
    .safe-form{
      padding-top: 46px;
    }
  }
</style>