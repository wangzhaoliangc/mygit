<template>
	<div class="commHeader">
		<span class="back" @click='hide'>
			<i class="iconfont icon-fanhui" style="color: rgb(255, 255, 255);font-size: 18px;"></i>
		</span>
		 <span>{{title}}</span>
	</div>
</template>
<script>

export default {
  name: 'commHeader',
  props: {
    title: {
      type: String,
      default: ''
    },
  },
  methods:{
		hide(){
        this.$emit('back')
		 }
  }
 
}
</script>
<style lang="less" scoped>
.commHeader{
  position: fixed;
  left: 0;
  right: 0;position: fixed;
  left: 0;
  right: 0;
	height: 46px;
  z-index: 101;
	background-color: #35495e;
  color: #fff;
  text-align: center;
  line-height: 46px;
  font-size: 18px;
  .back{
     position:absolute;
     left: 10px;
     height: 46px;
     width: 30px;
     text-align:center;
     line-height: 46px;

  }
}
</style>
