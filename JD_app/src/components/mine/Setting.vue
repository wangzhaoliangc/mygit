<template>
  <div class="setting">
    <h-header :title="title"></h-header>
    <group>
      <cell link="/login" is-link>
        <div slot="title">
          切换账号
        </div>
      </cell>
    </group>
    <group style="margin-top: 20px;">
      <!-- <cell link="/inbox" is-link>
        <div slot="title">
          我的消息 
        </div>
        <div slot>
          <badge text="8"></badge>
        </div>
      </cell> -->
      <cell link="/about" is-link>
        <div slot="title">
          关于我们
        </div>
      </cell>
      <cell link="/call" is-link>
        <div slot="title">
         联系我们
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
    <group class='bg_color' style="margin-top: 50px;">
      <div class="tc_btn" style="padding: 0 15px;">
        <x-button @click.native="loginOut" type="warn">退出当前账号</x-button>
      </div>
    </group>
    <loading :show="loadingShow"></loading>
    <toast v-model="toastShow" :type="toastType" :text="toastText"></toast>
  </div>
</template>
<script>
import HHeader from 'common/Header';
import { loginOutURL } from 'api/unit';
import { Group,Cell,XButton,Toast,Loading,Badge } from 'vux';
export default {
  name: 'Setting',
  components: { HHeader,Group,Cell,XButton,Toast,Loading,Badge },
  data(){
    return{
      title: '设 置',
      loadingShow: false,
      toastShow: false,
      toastType: '',
      toastText: ''
    }
  },
  methods: {
    loginOut(){
      this.$vux.loading.show({
        text: '正在退出...'
      })
      let userId = localStorage.getItem('userId');
      this.$http.post(loginOutURL, { id: userId})
        .then((res) => {
          let response = res.data;
          if(response.code == 0){
            setTimeout(() => {
              this.$vux.loading.hide();

              this.toastShow = true;
              this.toastType = 'success';
              this.toastText = '退出成功！';
              this.$router.push('/login')
            }, 1500)
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
  .bg_color{
    .weui-cells{
      background: transparent;
      &:after,&:before{
        display: none;
      }
    }
  }

  
}
    

</style>
