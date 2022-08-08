<template>
	<view class="catalog">
		<view class="catalog-head">
		  <text class="catalogue-sort">共 {{total}} 章</text>
		  <view class="catalogue-right" @click="arrayType">
		    <text class="iconfont">&#xe614;</text>
		    <text>{{sortType===0?'倒序':'正序'}}</text>
		  </view>
		</view>
		<view class="container">
			<block v-for="(item, index) in cataloglist" :key="index">
			  <navigator class="catalog-list" :url="`../read/read?bId=${item.book_id}&cId=${item.cindex}`">
			    <text class="item-title">{{item.chapter_title}}</text>
			    <text v-if="item.is_vip==='Y'" class="icons-vip"></text>
			  </navigator>
			</block>
		</view>
		<view class="load-more">
		  <text v-show="loadingShow">加载更多</text>
		  <text v-show="!loadingShow">没有更多了~</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bookId: '',
				sortType: 0,
				page: 1,
				total: null,
				cataloglist: [],
				loadingShow: true
			}
		},
		onLoad(option) {
			this.bookId = option.id
			uni.setNavigationBarTitle({
				title: option.title
			})
			this._initData()
		},
		onReachBottom() {
			this.loadMoreList()
		},
		methods: {
			async _initData() {
			  let para = {
			    book_id: this.bookId,
			    page: this.page,
			    sort: this.sortType
			  }
			  const res = await this.$api.book.Directory(para)
			  if (res.code === 200) {
			    if (res.extra.count < res.extra.rows) {
			      this.loadingShow = false
			    }
			    let data = res.data
			    this.total = res.extra.count
			    this.cataloglist = this.cataloglist.concat(data)
			  } else {
			    this.loadingShow = false
			  }
			},
			arrayType() {
			  if (this.sortType === 0) {
			    this.sortType = 1
			  } else {
			    this.sortType = 0
			  }
			  this.loadingShow = true
			  this.page = 1
			  this.cataloglist = []
			  this._initData()
			},
			loadMoreList() {
			  let length = this.cataloglist.length
			  if (length >= this.total) {
			    this.loadingShow = false
			    return
			  } else {
			    this.page++
			    this._initData()
			  }
			}
			
		}
	}
</script>

<style lang="less">
@import '../../common/less/const.less';
@import '../../common/less/mixin.less';

  .catalog{
    width: 100%;
    .catalog-head{
			display: flex;
      justify-content: space-between;
      align-items: center;
      // width: 100%;
      height: 88rpx;
      padding: 0 30rpx;
      background-color: #EFEEEC;
      .catalogue-sort{
        /* font-size: 28px; */
        color: #333;
      }
      .catalogue-right{
				display: flex;
        justify-content: center;
        align-items: center;
        width: 140rpx;
        height: 57rpx;
				line-height: 57rpx;
        background-color: @color-background;
        border-radius: 10rpx;
        text{
          padding-left: 5rpx;
          font-size: 30rpx;
          color: #fff;
        }
      }
    }
		.container{
			padding: 0 30rpx;
			.catalog-list{
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				height: 75rpx;
				.item-title{
					flex: 1;
					font-size: 28rpx;
					color: #333;
					.no-wrap();
				}
			}
		}
    .load-more{
			display: flex;
      justify-content: center;
      >text{
        font-size: 24rpx;
      }
    }
  }
</style>
