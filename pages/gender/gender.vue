<template>
	<view class="gender" :style="{'height':wHeight+'rpx'}">
		<view class="gender-woman" @click="gotoIndex('woman')">
		  <image src="../../static/gender-woman.png"></image>
		  <text>女生频道</text>
		</view>
		<view class="gender-man" @click="gotoIndex('man')">
		  <image src="../../static/gender-man.png"></image>
		  <text>男生频道</text>
		</view>
	</view>
</template>

<script>
import {mapGetters} from 'vuex'	
	
export default {
	data() {
		return {
			wHeight: 0
		}
	},
	onLoad() {
		this.wHeight = uni.getSystemInfoSync().screenHeight * 2
		console.log(this.wHeight)
	},
	onReady() {
		
	},
	computed: {
		...mapGetters([
			'userId'
		])
	},
	methods: {
		async _initData(channel) {
			let para = {
			  user_id: this.userId,
			  channel
			}
			let res = await this.$api.user.EditUserInfo(para)
		},
		gotoIndex(sex) {
			uni.setStorageSync('once', 1)
			uni.setStorageSync('channel', sex)
			if (this.userId) {
				this._initData(sex)
			}
			uni.navigateTo({
				url: '/pages/index/index'
			})
			// uni.switchTab({
			// 	url: '/pages/index/index'
			// })
		}
	}
}
</script>

<style lang="less">
@import '../../common/less/const';

	.gender{
		display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  width: 100%;
		height: 100%;
	  background: url('~@/static/gender-bg.jpg') no-repeat center;
		background-size: cover;
	  .gender-woman, .gender-man{
			display: flex;
	    flex-direction: column;
	    align-items: center;
	    image{
	      width: 189rpx;
	      height: 264rpx;
	    }
	    text{
	      font-size: 36rpx;
	      color: #333;
	      font-weight: bold;
	    }
	  }
	  .gender-woman{
			margin-top: -130rpx;
	    margin-bottom: 50rpx;
	  }
	  .gender-woman:active, .gender-man:active{
	    opacity: 0.8;
	  }
	}
</style>
