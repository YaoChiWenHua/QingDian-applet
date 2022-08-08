<template>
  <view class="agreement">
    <text>{{list}}</text>
  </view>
</template>

<script>
export default {
  data() {
  	return {
      list:''
  	}
  },
	onLoad() {
		this._initData()
	},
  methods: {
  	async _initData() {
  		let para = {

  		}
  		let res = await this.$api.user.Xieyi(para)
  		this.list = res
  	}
  }
}
</script>

<style lang="less" scoped>
	.agreement {
		display: flex;
		flex-direction: column;
		padding: 0 30rpx;
		.title {
			font-weight: bold;
		}
		text{
			color: #333;
		}
	}
</style>