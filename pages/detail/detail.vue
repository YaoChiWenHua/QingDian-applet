<template>
	<view class="book">
	  <view class="wrapper">
	    <view class="book-title" v-if="book.book_id">
	      <image :src="`${base}${book.book_id}/${book.cover}`" />
	      <view class="book-text">
	        <view class="title1">{{book.book_title}}</view>
	        <view>书号{{book.book_id}}</view>
	        <view>{{book.pen_name}}</view>
	        <view>
						<text>{{book.word_count | wordsNum}} | </text>
						<text class="book-status">{{book.is_finish==='Y'?'已完结':'连载中'}}</text>
					</view>
	        <view>{{book.all_click}}次点击</view>
	      </view>
	    </view>
	    <view class="book-intro" v-if="book.book_id">
	      <view class="intro-cont">
	        {{book.description}}
	      </view>
	    </view>
			<view class="book-catalog">
			  <view class="catalog-title">
			    <view>
			      <text class="catalog-text">目录 · </text>
			      <text>{{total}} 章</text>
			    </view>
			    <navigator :url="`../catalog/catalog?id=${book.book_id}&title=${book.book_title}`">
			      <text>{{book.last_update_chapter_date}} ></text>
			    </navigator>
			  </view>
			  <view class="catalog-list">
			    <block v-for="(item, index) in cataloglist" :key="index">
			      <view class="catalog-item" @click="gotoRead(item.cindex)">
			        <view>
			          <text class="item-title">{{item.chapter_title}}</text>
			          <text v-if="index===0" class="icons-new"></text>
			        </view>
			        <text v-if="item.is_vip==='Y'" class="icons-vip"></text>
			      </view>
			    </block>
			  </view>
			</view>
			<view class="book-list">
				<view class="book-head">
				  <text>推荐书籍</text>
				  <!-- <navigator url="">更多></navigator> -->
				</view>
				<view class="list-wrapper">
					<block v-for="(item, index) in recommendlist" :key="index">
						<row-book :item="item"></row-book>
					</block>
				</view>
			</view>
			<view class="book-list other-list">
				<view class="book-head">
				  <text>同类推荐</text>
				  <!-- <navigator url="">更多></navigator> -->
				</view>
				<view class="other-wrapper">
					<block v-for="(item, index) in otherlist" :key="index">
					  <view class="other-item">
							<navigator :url="`../detail/detail?id=${item.book_id}`">
								<image :src="`${base}${item.book_id}/${item.cover}`"></image>
								<text>{{item.book_title}}</text>
							</navigator>
					  </view>
					</block>
				</view>
			</view>
	  </view>
	  <!-- <view class="bottom-fixed-btn">
	    <view class="buttons">
	      <button @tap="deleteBookShelf" v-if="isBookShelf" class="shiftout-btn" plain="true">移出书架</button>
	      <button @tap="addBookShelf" v-else class="cancel-btn" plain="true">添加书架</button>
	      <button @tap="gotoRead" class="delete-btn" plain="true">开始阅读</button>
	    </view>
	  </view> -->
		<view class="fixed-button">
		  <view v-if="isBookShelf">已加入书架</view>
		  <view v-else @click="addBookShelf">加入书架</view>
		  <view class="read-button" @click="gotoRead(1)">开始阅读</view>
		  <navigator class="buy-button" url="../recharge/recharge">
		    <text class="iconfont icons-buy">&#xe640;</text>
		    <text>充值</text>
		  </navigator>
		</view>
	</view>
</template>

<script>
import {coverUrl} from '../../api/base'
import RowBook from '../../components/rowbook'
import { wordsNumMixin } from '../../common/js/mixin'
import {mapGetters} from 'vuex'

export default {
	mixins: [wordsNumMixin],
	components: {
		RowBook
	},
	data() {
		return {
			base: coverUrl,
			bookId: '',
			book: {},
			cataloglist: [],
			total: '',
			recommendlist: [],
			otherlist: [],
			isBookShelf: false
		}
	},
	onLoad(option) {
		this.bookId = option.id
		this._initData()
		if (this.userId) {
			this.getIsBookShelf()
		}
	},
	onShow() {
		// if (this.userId) {
		// 	this.getIsBookShelf()
		// }
	},
	onReady() {
		// this._initData()
	},
	computed: {
		...mapGetters([
			'userId'
		])
	},
	methods: {
		// 添加书架
		async addBookShelf() {
		  if (this.userId) {
		    let para = {
		      user_id: this.userId,
		      book_id: this.bookId
		    }
				let res = await this.$api.bookshelf.AddUserCase(para)
				if (res.code === 200) {
					this.isBookShelf = true
				} else {
					this.isBookShelf = true
				}
		  } else {
		    uni.showToast({
		      title: '请先登录',
		      icon: 'none',
		      duration: 2000
		    })
		  }
		},
		async getIsBookShelf() {
		  let para = {
		    user_id: this.userId,
		    book_id: this.bookId
		  }
			let res = await this.$api.bookshelf.BookIsCase(para)
			if (res.code === 200) {
				let status = res.data.is_case === 'Y' ? true : false
				this.isBookShelf = status
			}
		},
		gotoRead(cid) {
		  // let title = this.data.book.book_title
		  // uni.setStorageSync('__bookid__', this.bookId)
		  // uni.setStorageSync('__sectionid__', 0)
		  // uni.navigateTo({
		  //   // url: `../read/read?title=${title}`
		  //   url: `../read/read`
		  // })
			uni.navigateTo({
				url: `../read/read?bId=${this.bookId}&cId=${cid}`
			})
		},
		async _initData() {
			let para = {
				book_id: this.bookId
			}
			uni.showLoading({
				title: '加载中...'
			})
			let res = await this.$api.book.Detail(para)
			if (res.code === 200) {
				this.book = res.data
				uni.setNavigationBarTitle({
					title: res.data.book_title
				})
			}
			let catalog = await this.$api.book.Directory({
			  book_id: this.bookId,
			  sort: 1,
			  rows: 4
			})
			if (catalog.code === 200) {
			  this.total = catalog.extra.count
			  this.cataloglist = catalog.data
			}
			let list = await this.$api.book.RecommendBook({
			  book_id: this.bookId,
			  rows: 4
			})
			if (list.code === 200) {
			  this.recommendlist = list.data
			}
			uni.hideLoading()
			let list3 = await this.$api.book.SimilarBook({
			  book_id: this.bookId,
			  rows: 4
			})
			if (list3.code === 200) {
			  this.otherlist = list3.data
			}
		}
		
	}
}
</script>

<style lang="less" scoped>
@import '../../common/less/const';
@import '../../common/less/mixin';
	
	.book{
	  width: 100%;
	  .wrapper{
	    padding: 20rpx 30rpx 100rpx 30rpx;
	    .book-title{
	      display: flex;
	      justify-content: space-between;
	      width: 100%;
	      image{
	        width: 208rpx;
	        height: 265rpx;
	        box-shadow: @color-img;
	        border-radius: 10rpx;
	      }
	      .book-text{
					flex: 1;
	        display: flex;
	        flex-direction: column;
	        justify-content: space-around;
	        height: 265rpx;
					margin-left: 30rpx;
	        view{
	          font-size: 24rpx;
	          color: #666;
	        }
	        .title1{
	          font-size: 36rpx;
	          font-weight: bold;
	          color: #333;
	        }
	        .book-status{
	          color: #00CC39;
	        }
	      }
	    }
	    .book-intro{
	      margin-top: 30rpx;
	      .intro-cont{
	        line-height: 1.5;
	        font-size: 28rpx;
	        color: #333;
					.no-wrap-multi(3);
	      }
	    }
			.book-catalog{
			  margin-top: 30rpx;
			  .catalog-title{
					display: flex;
			    flex-direction: row;
			    justify-content: space-between;
			    align-items: center;
			    padding-bottom: 20rpx;
			    border-bottom: 1rpx solid #F1F0EE;
			    .catalog-text{
			      font-weight: bold;
			      font-size: 30rpx;
			      color: #333;
			    }
			    text{
			      font-size: 24rpx;
			    }
			  }
			  .catalog-list{
			    .catalog-item{
			      display: flex;
			      justify-content: space-between;
			      align-items: center;
			      height: 70rpx;
			      .item-title{
							font-size: 26rpx;
							.no-wrap();
			      }
			      .icons-new{
			        margin-left: 10rpx;
							vertical-align: middle;
			      }
			    }
			  }
			}
			.book-list{
				width: 100%;
				margin-top: 20rpx;
				.book-head{
					display: flex;
				  justify-content: space-between;
				  align-items: center;
				  height: 70rpx;
					border-top: 2rpx solid @color-background-d;
				  >text{
				    font-size: 28rpx;
				    font-weight: bold;
				    color: #333;
				  }
				  >a{
				    font-size: 24rpx;
				  }
				}
				.list-wrapper{
					display: flex;
					flex-direction: column;
				}
			}
			.other-list{
			  padding-bottom: 20rpx;
			  margin-bottom: 20rpx;
			  /* padding-bottom: 110px; */
			  .other-wrapper{
					display: flex;
			    flex-direction: row;
			    justify-content: space-between;
			    /* align-items: center; */
			    .other-item{
						display: flex;
			      flex-direction: column;
			      width: 145rpx;
			      image{
			        width: 145rpx;
			        height: 201rpx;
			        border-radius: 10rpx;
			      }
			      text{
							display: inline-block;
							width: 100%;
			        font-size: 24rpx;
			        font-weight: bold;
			        color: #333;
							.no-wrap();
			      }
			    }
			  }
			}
	  }
		.fixed-button{
			display: flex;
		  justify-content: center;
		  width: 100%;
		  height: 100rpx;
			line-height: 100rpx;
		  // padding: 0 30rpx;
		  background-color: #fff;
			border-top: 1rpx solid @color-background-d;
		  position: fixed;
		  bottom: 0;
		  left: 0;
			z-index: 9;
		  >view{
		    width: 217rpx;
		    height: 100%;
		    text-align: center;
		    font-size: 32rpx;
		    color: #333;
		  }
		  .read-button{
		    width: 256rpx;
		    background-color: @color-background;
		    color: #fff;
		    border-top-left-radius: 20rpx;
		    border-top-right-radius: 20rpx;
		  }
		  .buy-button{
				display: flex;
		    justify-content: center;
		    align-items: center;
		    width: 217rpx;
				font-size: 32rpx;
				color: #333;
				.icons-buy{
					margin-right: 5rpx;
					font-size: 50rpx;
					vertical-align: middle;
				}
		  }
		}
	}
</style>
