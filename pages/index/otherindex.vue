<template>
	<view class="other-index">
		<block v-for="(item, index) in list" :key="index">
			<navigator class="item_box" :url="`../read/otherread?bid=${item.book_id}&totype=0`">
				<view class="item">
					<view class="item-right">
						<image mode="widthFix" :src="`${base}/${item.book_id}/${item.cover}`"></image>
					</view>
					<view class="item-left">
						<text>{{item.recommend}}</text>
						<!-- <text>{{item.description}}</text> -->
						<!-- <view class="item-left-bottom">
							<text>作者：{{item.author}}</text>
							<text>人气：{{item.click?item.click:0}}</text>
						</view> -->
					</view>
					
				</view>
			</navigator>
		</block>
	</view>
</template>

<script>
import {coverUrl} from '../../api/base'
import {mapGetters} from 'vuex'
	
export default {
	data() {
		return {
			base: coverUrl,
			list: []
		}
	},
	onLoad() {
    if(!this.userId){
      this.$util.createAutoLogin()
    }
		this._initData()
	},
  computed: {
  	...mapGetters([
  		'userId'
  	])
  },
	methods: {
		async _initData() {
			let para = {
				openFrom: 'toutiao',
				page: 1,
				rows: 100
			}
			let res = await this.$api.home.Flows(para)
			if (res.code === 200) {
				this.list = res.data
			}
		}
	}
	
}
</script>

<style lang="less">
@import '../../common/less/mixin';

	.other-index{
		width: 100%;
    margin-bottom: 15rpx;
    padding-top: 10rpx;
    .item_box{
      overflow: hidden;
    }
		.item{
			display: flex;
			justify-content: space-between;
			padding: 0 30rpx 20rpx 30rpx;
			margin-top: 30rpx;
			border-bottom: 4rpx solid #F1F1F1;
			.item-left{
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				width: 73%;
				>text{
					// font-size: 36rpx;
          font-size: 30rpx;
					color: #333;
				}
				.item-left-bottom{
					display: flex;
					text{
						margin-right: 30rpx;
						font-size: 30rpx;
						color: #333;
					}
				}
			}
			.item-right{
				>image{
					width: 150rpx;
					// height: 200rpx;
				}
			}
		}
	}
</style>