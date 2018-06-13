<template>
        <div class="register">
       <x-header :left-options="{backText:''}" :title='title'></x-header>
        <div class="page-container">
        <group title="为了你的账户安全请填写一个手机号完成验证">
            <!--  <x-input 
             title="+86" 
             mask="999 9999 9999" 
             v-model="resgisterData.phone" 
             :max="13" 
             is-type="china-mobile" 
             placeholder="请输入手机号"
             :required="required"
             @on-blur='phone'
             ></x-input> -->
            <x-input title="+86" 
             name="mobile"
             placeholder="请输入手机号码" 
             keyboard="number" 
             is-type="china-mobile"
             v-model="resgisterData.phone" 
             :required="required"
             @on-blur='phone'
             ></x-input>  
       
      <x-input 
          :required="required" 
          title="密码"
          type="password"
          placeholder=""
          v-model="resgisterData.password"
          :min="1" 
          @on-blur='setPassword'
          ></x-input>
      <x-input 
        :required="required" 
        title="确认密码"
        v-model="resgisterData.password1" 
        type="password"
        placeholder="" 
        :equal-with="resgisterData.password"
        @on-blur='rePassword' 
        ></x-input>
        <x-input title="发送验证码" 
        :required="required" 
         v-model="resgisterData.code" 
         class="weui-vcode"
         @on-blur='code'
         >
        <x-button slot="right" type="primary" @click.native='disabled' :disabled='dis' mini :text="btnText"></x-button>
      </x-input>    
    </group>
     
     <box class='btn' gap="30px 30px 10px 30px">
      <x-button @click.native='submit' :disabled='rdis' type='primary'>同意条款并注册</x-button>
    </box>
    <div class="agreement">
       <checklist  :options="commonList" v-model="dbxy" ></checklist>
    </div>
        </div>
      <Success 
      :setName='successName'
      :centent='centent' 
      @method="goLogin"
      v-show='successShow'
       ></Success>
      <toast v-model="show3"  :type="toastType" :text="toastText" ></toast>
      <loading :show="loadingS" :text="lodingText"></loading>
    </div>
</template>
<script>
import {Toast,Loading, XHeader,XInput,  Group, XButton, Cell,Box,Checklist} from 'vux';
import {registerURL,registerSendCodeURL} from 'api/unit'
import CommHeader from '../commHeader/commHeader.vue'
import Success from '../../common/Success.vue'
export default{
    name: 'register',
    props:['reShow'],
    components: {Toast,Loading, XHeader,XInput, Group, XButton, Cell,Box,Checklist,CommHeader,Success},
    data () {
    return {
      title:'等保云注册',
      position: 'default',
      show3: false,
      show:false,
      toastType:'warn',
      toastText:'手机号码格式不正确',
      lodingText:'Loading',
      password: '',
      password2: '',
      enterText: '',
      valid1: false,
      valid2: false,
      cancel:'cancel',
      iconType: '',
      commonList: [ '《等保云网站服务条款》|《法律声明和隐私权政策》' ],
      dbxy: ['《等保云网站服务条款》|《法律声明和隐私权政策》'],
      dis:true,
      required:true,
      btnText:'发送验证码',
      successName:'注册成功',
      centent:'注册成功，去登录',
      successShow:false,
      be2333: function (value) {
        return {
          valid: value === '2333',
          msg: 'Must be 2333'
        }
      },
      style: '',
      disabledValue: 'hello',
      debounceValue: '',
      maxValue: '',
      asyncList: [],
      asyncListValue: [],
      resgisterData:{
        code:'',
        phone:'',
        password:'',
        password1:''
      },
      phoneBoolean:false,
      codeBoolean:false,
      passwordBoolean:false,
      password1Boolean:false,
    }
  },
  computed:{
    loadingS (){
      return this.show
    },
    rdis(){
      let data = this.resgisterData;
      if(data.phone && data.code && data.password && data.password1 == data.password && this.dbxy[0] && this.phoneBoolean){
        return false
      }else{
        return true
      }
    }
  },
  methods:{
    disabled(){
      let phone = this.resgisterData.phone.split(' ').join('')
         this.show = true;
         this.lodingText ='正在发送短信...'
         this.$http.post(registerSendCodeURL,{phone:phone}).then((res)=>{
          if(!res){
            this.show = false;
            console.log(1)
            return
          }else if(res.data.code === 0){
              this.show = false;
              this.dis = true;
              this.btnText = '60s后重新发送'
              let timer =  setInterval(()=>{
              let num = parseInt(this.btnText)
                if(!num){
                    this.btnText = '重新发送验证码' 
                    this.dis = false;
                    clearInterval(timer)
                    return
                }
                   num --
                   this.btnText = num + 's后重新发送' 
              },1000)
            }else {
               this.show = false;
            }
          })
    },
   
    phone(){
      if(!(/^1[35789]\d{9}$/.test(this.resgisterData.phone)) || parseInt(this.btnText)){
          this.phoneBoolean = false;
          this.dis = true
          this.show3 = true
          this.toastText='手机格式不正确'
      }else{

          this.phoneBoolean = true;
          this.dis = false
      }
    },
    code(){
      if(!this.resgisterData.code){
        this.codeBoolean = false;
        this.show3 = true;
        this.toastText='验证码不能为空'
      }else{
        this.codeBoolean = true;
      }

    },
    setPassword(){
        if(!this.resgisterData.password ){
            this.passwordBoolean = false;
        }else{
           this.passwordBoolean = true;
        }
    },
    rePassword(){
         if(!this.resgisterData.password1){
            this.password1Boolean = false;
            this.show3 = true;
            this.toastText='两次输入不一样'
         }else{
            this.password1Boolean = true;
         }
    },
    submit(){
      let data = this.resgisterData;
        if(data.phone && data.code && data.password && data.password1 == data.password && this.dbxy[0] && this.phoneBoolean){
          this.$http.post(registerURL,this.resgisterData).then((res)=>{
             this.show = true;
             console.log(res)
             if(!res){
              this.show = false;
              return
             }
            if (res.data.code === 0) {
                this.show = false;
                this.successShow = true;
            }else{
               this.show3 = true;
               this.show = false;
               this.toastText = '注册失败';
            }

          })

      
        }      
    },
    goLogin(){
      this.successShow = false;
      this.$router.push('/login')
    }

   }
}
</script>

<style lang="less" >
    .register {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: #fff;
        z-index: 100;
        .page-container{
            padding: 10px 10px 0 10px;
        }
    }
   .register .weui-cells__title{
        font-size: 14px;
    }
   .register .vux-x-input{
        padding: 20px 15px !important;
        font-size: 14px;
    }
   .register .weui-input{
       padding: 5px 0;
       background-color: #f2f2f2 !important;
    }
    .agreement{
      font-size: 12px !important;
    }
   .register .btn .weui-btn{
        font-size: 10px;
        padding: 5px 0;
    }
   .register .weui-cells{
      font-size: 12px !important ;
      color: #888;
    }
   .register .agreement .weui-cells:before,.register .agreement .weui-cells:after{
          transform:scale(0) !important ;
    }
    
</style>