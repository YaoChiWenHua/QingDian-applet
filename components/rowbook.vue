<template>
	<view class="row-book">
		<navigator :url="`../detail/detail?id=${item.book_id}`">
		  <view class="hot-book">
		    <image :src="`${base}${item.book_id}/${item.cover}`" :lazy-load="true"></image>
		    <view class="book-detail">
		      <view class="b-title">{{item.book_title}}</view>
		      <view class="b-text">{{item.description}}</view>
		      <view class="text-bottom">
		        <view>{{item.pen_name}}</view>
		        <view class="text-icon">
		          <text>{{item.category_title}}</text>
		          <text>{{item.is_finish==='Y'?'完结':'连载'}}</text>
		          <text>{{item.word_count | wordsNum}}</text>
		        </view>
		      </view>
		    </view>
		  </view>
		</navigator>
	</view>
</template>

<script>
import {coverUrl} from '../api/base'
import { wordsNumMixin } from '../common/js/mixin'	
	
export default {
	mixins: [wordsNumMixin],
	props: {
		item: {
			type: Object,
			default: {}
		}
	},
	data() {
		return {
			base: coverUrl
		}
	},
	onLoad() {
		
	},
	onReady() {
		
	},
	methods: {
		
	}
}
</script>

<style lang="less" scoped>
@import '../common/less/const';
@import '../common/less/mixin';

	.hot-book{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin-top: 30rpx;
		>image{
			width: 150rpx;
			height: 200rpx;
			box-shadow: @color-img;
			// border-radius: 10rpx;
		}
		.book-detail{
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			height: 200rpx;
			margin-left: 30rpx;
			font-size: 24rpx;
			color: #333;
			.b-title{
				font-size: 32rpx;
				color: #000;
				// font-weight: bold;
			}
			.b-text{
				line-height: 1.5;
				.no-wrap-multi(2);
			}
			.text-bottom{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.icon-geren{
					font-size: 30rpx;
					color: #999;
				}
				.text-icon{
					text{
						padding: 5rpx 10rpx;
						margin-left: 20rpx;
						border: 1px solid #3bcb78;
						color: #3bcb78;
						border-radius: 10rpx;
					}
					text:nth-child(2){
						color: #00c3f0;
						border-color: #00c3f0;
					}
					text:nth-child(3){
						color: #ffb74d;
						border-color: #ffb74d;
					}
				}
			}
		}
	}
</style>
