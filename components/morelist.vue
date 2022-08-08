<template>
	<view class="more-list">
		<!-- <scroll-view class="more-list" :style="{height: scrollHeight + 'rpx'}" :scroll-y="true" :enable-back-to-top="true" @scrolltolower="scrollMoreList"> -->
		  <block v-for="(item, index) in list" :key="index">
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
		  </block>
		  <view class="more">
		    <view v-show="loadingShow">正在加载中...</view>
		    <view v-show="!loadingShow">没有更多书籍</view>
		  </view>
		<!-- </scroll-view> -->
	</view>
</template>

<script>
import {coverUrl} from '../api/base.js'
import {wordsNumMixin} from '../common/js/mixin'
	
export default {
	mixins: [wordsNumMixin],
	props: {
	  list: {
	    type: Array,
	    default: []
	  },
	  loadingShow: {
	    type: Boolean,
	    default: true
	  },
	  clickType: {
	    type: String | Number,
	    default: ''
	  }
	},
	data() {
		return {
			base: coverUrl
		}
	},
	created() {
		// this.screenHeight = uni.getSystemInfoSync().windowHeight * 2
		// console.log(this.screenHeight)
	},
	onLoad() {
		// this.screenHeight = uni.getSystemInfoSync().windowHeight * 2
		// console.log(this.screenHeight)
	},
	onReady() {
		// this.screenHeight = uni.getSystemInfoSync().windowHeight * 2
		// console.log(this.screenHeight)
	},
	methods: {
		// scrollMoreList() {
		// 	console.log(1)
		// 	this.$emit('more')
		// }
	}
}
</script>

<style lang="less" scoped>
@import '../common/less/const';
@import '../common/less/mixin';

	.more-list{
		width: 100%;
		.hot-book{
			display: flex;
			justify-content: space-between;
			margin-top: 30rpx;
			padding: 0 30rpx;
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
				// width: 76%;
				height: 200rpx;
				margin-left: 30rpx;
				font-size: 24rpx;
				color: #333;
				.b-title{
					font-size: 32rpx;
					color: #000;
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
		.more{
			// width: 100%;
			padding: 30rpx 0;
			text-align: center;
			font-size: 24rpx;
			color: #666;
		}
	}
</style>
