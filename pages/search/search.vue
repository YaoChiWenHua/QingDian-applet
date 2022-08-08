<template>
	<view class="search">
	  <view class="wrapper">
	    <view class="search-box">
	      <icon type="search" :size="16" color="#07c73b" />
	      <input
	        class="search-input" 
	        type="text"
	        confirm-type="search"
	        placeholder="搜索书名/书号或者作者"
	        placeholder-class="search-init" 
	        v-model="query" />
				<view class="icons-clear-btn" v-show="query" @tap="clearQuery">
					<icon type="clear" :size="14" color="#999" />
				</view>	
	    </view>
	    <!-- 推荐搜索 -->
	    <view class="short-cut" v-show="!query">
	      <view class="hot-word">
	        <view class="hot-head">
	          <view class="hot-title">搜索热词</view>
	          <view class="hot-icon" @tap="exchangeFuncBtn">
	            <text class="iconfont icon-huanyihuan1"></text>
	            换一批
	          </view>
	        </view>
	        <view class="hot-main">
	          <block v-for="(item, index) in hotlist" :key="index">
	            <view @tap="queryHotBtn(item.book_title)">{{item.book_title}}</view>
	          </block>
	        </view>
	      </view>
	      <view class="hot-word">
	        <view class="hot-head">
	          <view class="hot-title">搜索历史</view>
	          <view class="hot-icon" @tap="clearHistoryBtn">
	            <text class="iconfont icon-shanchu"></text>
	            清空
	          </view>
	        </view>
	        <view class="hot-main">
	          <block v-for="(item, index) in historylist" :key="index">
	            <view @tap="queryHotBtn(item)">{{item}}</view>
	          </block>
	        </view>
	      </view>
	    </view>
	    <!-- 搜索结果 -->
	    <view class="search-result" v-show="query">
	      <scroll-view class="result-main" :style="{height: scrollHeight + 'rpx'}" :scroll-y="true" :enable-back-to-top="true" @scrolltolower="scrollMoreList">
	        <view class="result-head">
	          <text class="result-title">热门搜索</text>
	          <text class="result-count"> · {{count}} 条</text>
	        </view>
	        <view class="result-list">
	          <block v-for="(item, index) in resultlist" :key="index">
	            <navigator>
	              <view class="hot-book" @tap.native.stop="selectItem(item)">
	                <image :src="`${base}${item.book_id}/m_${item.cover}`" :lazy-load="true"/>
	                <view class="book-detail">
	                  <view class="b-title">{{item.book_title}}</view>
	                  <view class="b-text">{{item.description}}</view>
	                  <view class="text-bottom">
	                    <view>
	                      <text class="iconfont icon-geren"></text>
	                      {{item.pen_name}}
	                    </view>
	                    <view class="text-icon">
	                      <text>{{item.category_title}}</text>
	                      <text>{{item.is_finish==='Y'?'完结':'连载'}}</text>
	                      <text>{{wordsCount(item.word_count)}}</text>
	                    </view>
	                  </view>
	                </view>
	              </view>
	            </navigator>
	          </block>
	          <view class="more">
	            <view v-show="loading">正在加载中...</view>
	            <view v-show="!loading">没有更多书籍</view>
	          </view>
	        </view>
	      </scroll-view>
	    </view>
	  </view>
	</view>
</template>

<script>
import {coverUrl} from '../../api/base'
import { debounce, insertArray } from '../../common/util'

const SEARCH_KEY = '__search__'
const SEARCH_MAX_LENGTH = 6

export default {
	data() {
		return {
			base: coverUrl,
			query: '',
			scrollHeight: 0,
			hotlist: [],
			resultlist: [],
			page: 1,
			limit: 10,
			count: '',
			loading: true,
			historylist: []
		}
	},
	onLoad() {
		this.historylist = uni.getStorageSync(SEARCH_KEY) || []
		this.getHotListData(1)
		this.$watch('query', debounce((newQuery) => {
			if (!newQuery) {
			} else {
				// setTimeout(() => {
					this.resultlist = []
					this.page = 1
					this.getResultListData()
				// }, 20)
			}
		}, 200))
	},
	onReady() {
		const windowHeight = wx.getSystemInfoSync().windowHeight
		this.scrollHeight = (windowHeight - 65) * 2
	},
	onShow() {
		// this.$watch('query', debounce((newQuery) => {
		//     if (!newQuery) {
		// 			
		//     } else {
		//       // setTimeout(() => {
		//         this.resultlist = []
		//         this.page = 1
		//         this.getResultListData()
		//       // }, 20)
		//     }
		//   }, 200))
	},
	methods: {
		// 字数转换
		wordsCount(num) {
			if (num > 10000) {
			  return Math.round(num / 10000) + '万字'
			} else {
			  return num + '字'
			}
		},
		// queryInput(e) {
		//   let newQuery = e.detail.value
		//   let oldQuery = this.data.query
		//   this.setData({
		//     query: newQuery,
		//   })
		//   if (newQuery !== oldQuery) {
		//     this.setData({
		//       resultlist: [],
		//       page: 1
		//     })
		//     this.getResultListData()
		//     // util.debounce(this.getResultListData(), 200)
		//   }
		// },
		clearQuery() {
			this.query = ''
		  this.resultlist = []
		  this.page = 1
		},
		exchangeFuncBtn() {
		  let num = Math.floor(Math.random()*(90 - 1) + 1)
		  this.getHotListData(num)
		},
		queryHotBtn(title) {
		  this.query = title
		  // this.getResultListData()
		},
		scrollMoreList() {
		  let length = this.resultlist.length
		  if (length >= this.count) {
				this.loading = false
		  } else {
		    this.page++
		    this.getResultListData()
		  }
		},
		// 选中书籍跳转
		selectItem(item) {
		  uni.navigateTo({
		    url: `../detail/detail?id=${item.book_id}`,
		    success: () => {
		      this.saveSearch(this.query)
		    }
		  })
		},
		saveSearch(query) {
		  let searches = this.historylist
		  insertArray(searches, query, item => {
		    return item === query
		  }, SEARCH_MAX_LENGTH)
		  uni.setStorageSync(SEARCH_KEY, searches)
		  this.historylist = searches
		},
		clearHistoryBtn() {
		  uni.removeStorageSync(SEARCH_KEY)
		  this.historylist = []
		},
		async getHotListData(page) {
			let res = await this.$api.home.SearchHot({
				page
			})
			if (res.code === 200) {
				this.hotlist = res.data
			}
		},
		async getResultListData() {
		  let para = {
		    keywords: this.query,
		    page: this.page,
		    rows: this.limit
		  }
			let res = await this.$api.home.SearchResult(para)
			if (res.code === 200) {
				let status = true
				let arr = this.resultlist
				arr = arr.concat(res.data)
				if (res.extra.count < this.limit) {
					status = false
				} else {
					status = true
				}
				this.resultlist = arr
				this.count = res.extra.count
				this.loading = status
			} else {
				if (this.page === 1) {
					this.resultlist = []
					this.count = 0
					this.loading = false
				}
			}
		}
		
	}
}	
</script>

<style lang="less" scoped>

	.search{
	  width: 100%;
	  .wrapper{
	    padding-top: 30rpx;
	    .search-box{
	      display: flex;
	      // justify-content: space-between;
	      align-items: center;
	      width: 93%;
	      height: 71rpx;
	      margin: 0 auto;
	      padding: 0 20rpx;
	      margin-bottom: 30rpx;
	      background-color: #EEEBEF;
	      border-radius: 20rpx;
	      box-sizing: border-box;
	      .search-input{
	        width: 83%;
					height: 100%;
	        margin-left: 20rpx;
	        margin-right: 30rpx;
	        color: #333;
	        font-size: 30rpx;
					background-color: #EEEBEF;
					box-sizing: border-box;
	      }
	      .search-init{
	        font-size: 24rpx;
	        color: #D7D4CF;
	      }
				.icons-clear-btn{
					icon{
						vertical-align: middle;
					}
				}
	    }
	    .short-cut{
	      width: 93%;
	      margin: 0 auto;
	      .hot-word{
	        margin-top: 50rpx;
	        .hot-head{
	          display: flex;
	          justify-content: space-between;
	          align-items: center;
	          width: 100%;
	          .hot-title{
	            font-size: 42rpx;
	            font-weight: bold;
	            color: #333;
	          }
	          .hot-icon{
	            font-size: 24rpx;
	            color: #07c73b;
	            text{
	              vertical-align: middle;
	            }
	          }
	        }
	        .hot-main{
	          display: flex;
	          flex-wrap: wrap;
	          width: 100%;
	          margin: 50rpx 0;
	          view{
	            margin-left: 30rpx;
	            margin-bottom: 30rpx;
	            padding: 10rpx 25rpx;
	            background-color: #EEEBEF;
	            color: #666;
	            font-size: 24rpx;
	            border-radius: 30rpx;
	          }
	          view:first-child{
	            margin-left: 0;
	          }
	        }
	      }
	    }
	    .search-result{
	      width: 100%;
	      .result-main{
	        width: 100%;
	        .result-head{
	          padding: 0 30rpx;
	          .result-title{
	            font-size: 32rpx;
	            font-weight: bold;
	          }
	          .result-count{
	            font-size: 24rpx;
	            color: #666;
	          }
	        }
	        .result-list{
	          width: 100%;
	          .hot-book{
	            display: flex;
	            justify-content: space-between;
	            margin-top: 30rpx;
	            padding: 0 30rpx;
	            image{
	              width: 150rpx;
	              height: 200rpx;
	              box-shadow: 0 2rpx 6rpx rgba(0,0,0,0.3);
	              border-radius: 10rpx;
	            }
	            .book-detail{
	              display: flex;
	              flex-direction: column;
	              justify-content: space-around;
	              width: 76%;
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
	                display: -webkit-box;
	                -ms-text-overflow: ellipsis;
	                text-overflow: ellipsis;
	                overflow: hidden;
	                word-break: break-all;
	                -webkit-line-clamp: 2;
	                -webkit-box-orient: vertical;
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
	            width: 100%;
	            padding: 30rpx 0;
	            text-align: center;
	            font-size: 24rpx;
	            color: #666;
	          }
	        }
	      }
	    }
	  }
	}
</style>
