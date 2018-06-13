<template>
  <div class="purchase-view">
    <group>
      <cell>
        <div slot="title">
          <h5 style="font-size: 17px;color: #393D49 !important;">订单合计</h5>
        </div>
        <div slot>
          <b style="font-size: 22px;color: rgb(255, 113, 70);">
            ￥ {{formData.totalMoney}}
          </b>
        </div>
      </cell>
      <cell-form-preview
        :list="list">
      </cell-form-preview>
    </group>
    <group>
      <x-button @click.native="paymentBtn" type="primary">确认开通</x-button>
    </group>
    <loading :show="Loading" text="正在提交数据.."></loading>
  </div>
</template>
<script>
import HHeader from 'common/Header';
import { mapState } from 'vuex';
import { Group,Cell,CellFormPreview,XButton,Loading  } from 'vux';
export default {
  name: 'PurchaseView',
  components: {
    HHeader,
    Group,Cell,CellFormPreview,XButton,Loading
  },
  data(){
    return{
      calcluateParams: JSON.parse(localStorage.getItem('payment')).calcParams,
      formData: JSON.parse(localStorage.getItem('payment')).formParams,
      Loading: false,
      list: [
        {
          label: '规格型号',
          value: '规格1'
        },
        {
          label: '镜像类型',
          value: '镜像1'
        },{
          label: '规格型号',
          value: '规格1'
        },
        {
          label: '镜像类型',
          value: '镜像1'
        },{
          label: '规格型号',
          value: '规格1'
        },{
          label: '规格型号',
          value: '规格1'
        }
      ]
    }
  },
  methods: {
    paymentBtn(){
      this.Loading = true;
      setTimeout(() => {
        this.Loading = false;
        this.$router.push('/success')
      }, 1500)
    }
  }
}
</script>
<style lang="less">
.purchase-view{
  position: fixed;
  left: 0;
  top: 46px;
  right: 0;
  bottom: 0px;
  padding: 0 15px;
  background-color: #efefef;
  .weui-form-preview__item{
    padding: 8px 0;
    border-bottom: 1px solid #efefef;
  }
}

</style>
