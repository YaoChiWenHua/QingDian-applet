<template>
	<view class="home">
		<view class="home-nav">
			<view class="nav-tab">
				<text :class="{'active-tab': channel==='man'}" @click="tabNavBtn('man')">男生</text>
				<text :class="{'active-tab': channel==='woman'}" @click="tabNavBtn('woman')">女生</text>
			</view>
			<!-- <view class="nav-icons">
				<text class="iconfont">&#xe604;</text>
				<text class="iconfont">&#xe60e;</text>
			</view> -->
		</view>
		<view class="wrapper">
			<view class="search-box">
				<navigator class="search" url="../search/search">
					<text class="iconfont">&#xe600;</text>
					<text>搜索</text>
				</navigator>
			</view>
			<swiper class="swiper-container" :indicator-dots="true" indicator-active-color="#07c73b" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
				<block v-for="(item, index) in bannerlist" :key="index">
					<swiper-item>
						<navigator class="swiper-item" :url="`/pages/detail/detail?id=${item.url}`">
							<image :src="`${bannerUrl}${item.images}`"></image>
						</navigator>
					</swiper-item>
				</block>
			</swiper>
			<view class="tab-container">
				<view class="tab-wrapper">
					<navigator class="tab-icon" :url="`../rank/rank?channel=${channel}`">
						<image src="../../static/icons/icons-rank.png"></image>
						<text>排行</text>
					</navigator>
					<navigator class="tab-icon" :url="`../bookstore/bookstore?channel=${channel}`">
						<image src="../../static/icons/icons-sk.png"></image>
						<text>书库</text>
					</navigator>
					<navigator class="tab-icon" url="../recharge/recharge">
						<image src="../../static/icons/icons-cz.png"></image>
						<text>充值</text>
					</navigator>
				</view>
			</view>
		</view>
		<view class="container">
			<view class="book-style">
				<view class="head-style">
					<view>
						<text class="head-line"></text>
						<text>{{title1}}</text>
					</view>
					<navigator :url="`/pages/bookstore/bookstore?channel=${channel}`">
						<text>更多 ></text>
					</navigator>
				</view>
				<view class="book-list-style">
					<block v-for="(item, index) in list1" :key="index">
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
				</view>
			</view>
			<view class="center-banner">
				<navigator v-if="bigBanner.image" url="../recharge/recharge">
					<image :src="`${bannerUrl}${bigBanner.image}`"></image>
				</navigator>
			</view>
			<view class="second-style">
				<view class="head-style">
					<view>
						<text class="head-line"></text>
						<text>{{title2}}</text>
					</view>
					<navigator :url="`/pages/bookstore/bookstore?channel=${channel}`">
						<text>更多 ></text>
					</navigator>
				</view>
				<view class="second-list-style">
					<block v-for="(item, index) in list2" :key="index">
						<navigator :url="`../detail/detail?id=${item.book_id}`">
							<view class="second-book">
								<image :src="`${base}${item.book_id}/${item.cover}`" :lazy-load="true"></image>
								<text class="second-title">{{item.book_title}}</text>
								<text class="second-author">{{item.pen_name}}</text>
							</view>
						</navigator>
					</block>
				</view>
			</view>
			<view class="book-style">
				<view class="head-style">
					<view>
						<text class="head-line"></text>
						<text>{{title3}}</text>
					</view>
					<navigator :url="`/pages/bookstore/bookstore?channel=${channel}`">
						<text>更多 ></text>
					</navigator>
				</view>
				<view class="book-list-style">
					<block v-for="(item, index) in list3" :key="index">
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
				</view>
			</view>
			<view class="second-style">
				<view class="head-style">
					<view>
						<text class="head-line"></text>
						<text>{{title4}}</text>
					</view>
					<navigator :url="`/pages/bookstore/bookstore?channel=${channel}`">
						<text>更多 ></text>
					</navigator>
				</view>
				<view class="second-list-style">
					<block v-for="(item, index) in list4" :key="index">
						<navigator :url="`../detail/detail?id=${item.book_id}`">
							<view class="second-book">
								<image :src="`${base}${item.book_id}/${item.cover}`" :lazy-load="true"></image>
								<text class="second-title">{{item.book_title}}</text>
								<text class="second-author">{{item.pen_name}}</text>
							</view>
						</navigator>
					</block>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import {baseUrl, coverUrl} from '../../api/base'
import {wordsNumMixin} from '../../common/js/mixin'
	
export default {
	mixins: [wordsNumMixin],
	data() {
		return {
			bannerUrl: baseUrl,
			base: coverUrl,
			channel: '',
			bannerlist: [],
			bigBanner: {},
			title1: '',
			list1: [],
			title2: '',
			list2: [],
			title3: '',
			list3: [],
			title4: '',
			list4: []
		}
	},
	onLoad() {
		this.channel = uni.getStorageSync('channel') || 'man'
		// this._initBannerData()
		this._initData()
	},
	onReady() {
		
	},
	onShow() {
		let sex = uni.getStorageSync('channel') || 'man'
		if (this.channel !== sex) {
			this.channel = sex
			this._initData()
		}
	},
	methods: {
		// async _initBannerData() {
		// 	let para = {
		// 		channel: this.channel
		// 	}
		// 	const res = await this.$api.home.Banner(para)
		// 	if (res.code === 200) {
		// 		this.bannerlist = res.data
		// 	}
		// },
		async _initData() {
			uni.showLoading({
				title: '加载中...'
			})
			let res = await this.$api.home.Banner({
				channel: this.channel
			})
			if (res.code === 200) {
				this.bannerlist = res.data
			}
			let res1 = await this.$api.home.Chart({
				channel: this.channel,
				sort: 1
			})
			if (res1.code === 200) {
				this.list1 = res1.data
				this.title1 = res1.extra.name
			}
			uni.hideLoading()
			let bigRes = await this.$api.home.AdvertList({
				place: 2
			})
			if (bigRes.code === 200) {
				this.bigBanner = bigRes.data[0]
			}
			let res2 = await this.$api.home.Chart({
				channel: this.channel,
				sort: 2
			})
			if (res2.code === 200) {
				this.list2 = res2.data
				this.title2 = res2.extra.name
			}
			let res3 = await this.$api.home.Chart({
				channel: this.channel,
				sort: 3
			})
			if (res3.code === 200) {
				this.list3 = res3.data
				this.title3 = res3.extra.name
			}
			let res4 = await this.$api.home.Chart({
				channel: this.channel,
				sort: 4
			})
			if (res4.code === 200) {
				this.list4 = res4.data
				this.title4 = res4.extra.name
			}
		},
		tabNavBtn(type) {
			this.channel = type
			uni.setStorageSync('channel', type)
			// this._initBannerData()
			this._initData()
		}
		
	}
}
</script>

<style lang="less">
@import '../../common/less/const';
@import '../../common/less/mixin';

	.home{
		width: 100%;
		// background-color: #F6F7F8;
		.home-nav{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 80rpx;
			border-bottom: 1rpx solid #f6f7f8;
			background-color: #fff;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 9;
			.nav-tab{
				display: flex;
				justify-content: center;
				align-items: center;
				width: 210rpx;
				height: 48rpx;
				line-height: 48rpx;
				font-size: 30rpx;
				border: 1rpx solid @color-background-c;
				border-radius: 5rpx;
				color: @color-background-c;
				text{
					width: 50%;
					height: 100%;
					text-align: center;
				}
				.active-tab{
					color: #fff;
					background-color: @color-background-c;
				}
			}
			.nav-icons{
				position: absolute;
				right: 30rpx;
				text{
					padding-left: 10rpx;
					font-size: 45rpx;
					color: @color-background-c;
				}
			}
		}
		.wrapper{
			width: 100%;
			margin-top: 80rpx;
			.search-box{
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 88rpx;
				text-align: center;
				background-color: #fff;
				.search{
					width: 90%;
					height: 48rpx;
					line-height: 50rpx;
					background-color: #efeeec;
					border-radius: 10rpx;
					font-size: 28rpx;
					color: #333;
					vertical-align: middle;
					text-align: center;
					text{
						padding-left: 10rpx;
					}
				}
			}
			.swiper-container{
				width: 100%;
				height: 240rpx;
				.swiper-item{
					image{
						width: 100%;
						height: 240rpx;
					}
				}
			}
			.tab-container{
				width: 100%;
				padding: 30rpx 0;
				background-color: #fff;
				.tab-wrapper{
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 60%;
					margin: 0 auto;
					.tab-icon{
						display: flex;
						flex-direction: column;
						align-items: center;
						image{
							width: 65rpx;
							height: 65rpx;
						}
						text{
							font-size: 24rpx;
							margin-top: 10rpx;
						}
					}
				}
			}
		}
		// 主体
		.container{
			width: 100%;
			padding-bottom: 30rpx;
			.head-style{
				display: flex;
				justify-content: space-between;
				align-items: center;
				// width: 100%;
				height: 56rpx;
				line-height: 56rpx;
				padding: 0 30rpx;
				font-size: 24rpx;
				border-bottom: 1rpx solid #e7e6e3;
				.head-line{
					display: inline-block;
					width: 5rpx;
					height: 30rpx;
					margin-right: 10rpx;
					background-color: @color-background-c;
					vertical-align: sub;
				}
			}
			.book-style{
				width: 100%;
				margin-top: 20rpx;
				background-color: #fff;
				.book-list-style{
					width: 100%;
					padding-bottom: 30rpx;
					.hot-book{
					  display: flex;
					  justify-content: space-between;
					  margin-top: 30rpx;
					  padding: 0 30rpx;
					  >image{
					    width: 150rpx;
					    height: 200rpx;
					    box-shadow: 0 2rpx 6rpx rgba(0, 0, 0, 0.3);
					    // border-radius: 10rpx;
					  }
					  .book-detail{
					    display: flex;
					    flex-direction: column;
					    justify-content: space-around;
					    width: 75%;
					    height: 200rpx;
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
					          border: 1rpx solid @color-background-c;
					          color: @color-background-c;
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
				}
			}
			.center-banner{
				width: 100%;
				margin-top: 20rpx;
				image{
					width: 100%;
					height: 144rpx;
				}
			}
			.second-style{
				width: 100%;
				margin-top: 20rpx;
				background-color: #fff;
				.second-list-style{
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					width: 90%;
					margin: 0 auto;
					margin-top: 20rpx;
					.second-book{
						display: flex;
						flex-direction: column;
						width: 206rpx;
						margin-bottom: 25rpx;
						font-size: 24rpx;
						>image{
							width: 206rpx;
							height: 270rpx;
							box-shadow: @color-img;
						}
						.second-title{
							padding: 5rpx 0;
							font-weight: bold;
							.no-wrap();
						}
						.second-author{
							color: #666;
						}
					}
				}
			}
		}
	}
</style>
