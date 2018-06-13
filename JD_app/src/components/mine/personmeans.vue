<template>
  <div class="setting">
    <h-header :title="title"></h-header>
    <group class='infoName'>
      <cell :value='userinfo.username'  >
        <div slot="title">
          账号
        </div>
      </cell>
      <cell :value='userinfo.name'  >
        <div slot="title">
          姓名
        </div>
      </cell>
      <cell :value='userinfo.phone'  >
        <div slot="title">
          手机号码
        </div>
      </cell>
      <cell :value='userinfo.email'  >
        <div slot="title">
          邮箱
        </div>
      </cell>
      <cell :value='userinfo.balance'  >
        <div slot="title">
          余额
        </div>
      </cell>
    </group>
   <!--  <group style="margin-top: 20px;">
      <cell link="/inbox" is-link>
        <div slot="title">
          我的消息 
        </div>
        <div slot>
          <badge text="8"></badge>
        </div>
      </cell>
      <cell link="/about" is-link>
        <div slot="title">
          关于我们
        </div>
      </cell>
      <cell is-link>
        <div slot="title">
          当前版本 
        </div>
        <div slot>
          1.0 
        </div>
      </cell>
    </group>
    <group style="margin-top: 50px;">
      <div style="padding: 0 15px;">
        <x-button @click.native="loginOut" type="warn">退出当前账号</x-button>
      </div>
    </group>
    <loading :show="loadingShow"></loading>
    <toast v-model="toastShow" :type="toastType" :text="toastText"></toast> -->
  </div>
</template>
<script>
import HHeader from 'common/Header';
import { loginOutURL } from 'api/unit';
import { getUserinfo } from 'base/getData'
import { Group,Cell,XButton,Toast,Loading,Badge } from 'vux';
export default {
  name: 'Setting',
  components: { HHeader,Group,Cell,XButton,Toast,Loading,Badge },
  data(){
    return{
      title: '个人资料',
      // loadingShow: false,
      // toastShow: false,
      // toastType: '',
      // toastText: '',
      userinfo:{}
    }
  },
  created(){
    this._getUserinfo();

    let pathName = this.$route.name;
    if(pathName == 'mine'){
      this.$store.dispatch('changeTabbarChecked',3)
    }
  },
  methods: {
    _getUserinfo(){
      getUserinfo().then((res) => {
        if(res.code == 0){
          this.userinfo = res.data
          console.log(this.userinfo)
        }
      })
    }
  }
}
</script>
<style lang="less" >
.setting{
  position: fixed;
  left: 0;
  top: 0px;
  right: 0;
  bottom: 0;
  background-color: #fafafa;
  z-index: 100;
  padding-top: 66px;
  padding-bottom: 10px;
}
.infoName{
  .weui-cell__ft{
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
  }
}
</style>
