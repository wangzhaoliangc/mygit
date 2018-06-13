<template>
  <div class="login-box" :style="loginBg">
    <img src="../assets/login_bg.png" style="position: absolute;left: 0;top: 0;z-index: -1;" height="100%" width="100%" alt="">
    <x-header style="position: fixed;left: 0;right: 0;top:0;" :left-options="{showBack: false}" :title="title"></x-header>
    <div class="cont">
      <div style="padding: 25px 0 15px;text-align: center;">
        <img src="../assets/logo.png" width="60px"/>
      </div>
      <group>
        <x-input v-model="formData.username" name="username" placeholder="请输入用户名"></x-input>
      </group>
      <!-- <group title="验证码" class="weui-cells_form">
        <x-input title="验证码" class="weui-cell_vcode">
          <img slot="right" class="weui-vcode-img" src="https://i.loli.net/2017/09/18/59bf7f32425d5.jpg">
        </x-input>
        <x-input title="发送验证码" class="weui-vcode">
          <x-button slot="right" type="primary" mini>发送验证码</x-button>
        </x-input>
      </group> -->
      <group>
        <x-input v-model="formData.password" name="password" type="password" placeholder="请输入密码"></x-input>
      </group>
      <x-button class="sign-in" @click.native="loginIn" action-type="button" :show-loading="loginType" text="登录" type="primary"></x-button>
      <p class="ft">
        <span class="f-l" >忘记密码？</span>
        <span key='1' class="f-r"  @click='register'>注册账号></span>
      </p>

     <!--  <div class="third-party">
        <divider> 第三方登录 </divider>
        <div class="third-party-platform">
          <span>
            <img src="../assets/zfb.png"/>
          </span>
          <span>
            <img src="../assets/wx.png"/>
          </span>
          <span>
               <img src="../assets/qq.png"/>
          </span>
        </div>
      </div> -->
      <div class="footer" style="position:static;">
        运营单位：金盾信安 <br />
       <!--  技术支持：河南电联通信技术有限公司 -->
      </div>
    </div>
    <loading v-model="loadingShow"></loading>
    <toast v-model="toastShow" :type="toastType" width="150px" :time="800" :text="toastText" position="middle"></toast>
     <transition name='fade'>
      <router-view></router-view>
    </transition> 
    
  </div>
</template>
<script>
import { Toast,Group,XHeader,XButton,XInput,Loading,Flexbox, FlexboxItem, Divider } from 'vux'
import { loginURL } from 'api/unit'
import Register from '../components/register/register.vue'


export default {
  name: 'login',
  components: {
    Toast,Group,XHeader,XButton,XInput,Loading,Flexbox, FlexboxItem, Divider,Register
  },
  data(){
    return{
      title: '等保云登录',
      isFor:false,
      toastText: '',
      loginType: false,
      loadingShow: false,
      toastShow: false,
      toastType: 'warn',
      reShow:false,
      loginBg: {
        'background-image': '../assets/login_bg.png',
        'background-size': '100% 100%'
      },
      formData: {
        username: '',
        password: ''
      }
    }
  },
  created(){
    let jd_un = localStorage.getItem('username');
    let jd_ps = localStorage.getItem('password');

    if(jd_un){this.formData.username = jd_un}
    if(jd_ps){this.formData.password = jd_ps}
  },
  methods: {
    loginIn(){
      this.$vux.loading.show({
        text: '正在登录..'
      })
      this.$http.post(loginURL, this.formData)
        .then(res => {
          this.$vux.loading.hide();
          let response = res.data;
          if(response.code == '0'){
            localStorage.setItem('username',this.formData.username);
            localStorage.setItem('password',this.formData.password);
            localStorage.setItem('userId',response.data);
            this.$store.dispatch('changeLogin', true)
            this.$store.dispatch('changeTabbarChecked', 0);
            setTimeout(() => {
              this.$router.push('/home');
            },500)

          }else{
            this.toastShow = true;
            this.toastType = 'warn';
            this.toastText = response.msg;
          }
        })
    },
    register(){
      this.reShow = true
      this.$router.push('/login/register');
    },
    
    reHide(){
      this.reShow = false
    }
  }
}
</script>
<style lang="less" scoped>
.login-box{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding-top: 50px;
  .cont{
    padding: 15px 10px;
    transform:translateY(-50%);
    position:absolute;
    top: 40%;
    left:0px;
    right: 0px;
  }
  .sign-in{
    margin-top: 30px;
    padding: 3px 0;
    background-color: #2269d4;
  }
  .footer{
    width: 100%;
    padding-top: 20px;
    text-align: center !important;
    font-size: 14px;
    color: #9f9f9f;
    letter-spacing: 1px;
  }
  .ft{
    padding: 0 10px;
    height: auto;
    overflow: hidden;
    line-height: 30px;
    font-size: 14px;
    color: lightseagreen;
    .f-l{
      float: left;
      text-decoration: underline;
    }
    .f-r{
      float: right;
      display:inline-block;
      text-decoration: underline;
      position:relative;
      z-index: 1;
    }
  }
  .third-party{
    text-align: center;
    font-size: 15px;
    .third-party-platform{
      padding-top: 20px;
      span{
        display: inline-block;
        padding: 10px;
        background-color: #fcfcfc;
        border-radius: 50%;
        img{
          width: 30px;
          height: 30px;
          vertical-align: middle;
          border-radius: 5px;
        }
      }
    }
  }
} 

  

    .fade-enter-active,.fade-leave-active{
        transition:all 0.4s;
    }
    .fade-enter,.fade-leave-to{
        transform:translate3d(100%,0,0)
    }
</style>
