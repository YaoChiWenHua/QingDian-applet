<template>
	<view class="voucher-list">
		<block v-for="(item, index) in list" :key="index">
		  <view class="detail-item">
		    <view class="item-top">
		      <text>{{item.money}}代金券</text>
		      <text>来自：{{item.type}}</text>
		    </view>
		    <text class="item-bottom">获得时间：{{item.create_datetime}}</text>
		  </view>
		</block>
		<view class="load-more">
		  <text v-show="loadingShow">加载更多</text>
		  <text v-show="!loadingShow">没有更多了~</text>
		</view>
	</view>
</template>

<script>
import {mapGetters} from 'vuex'
	
export default {
	data() {
		return {
			time: '',
			list: [],
			loadingShow: false,
			page: 1,
			total: null
		}
	},
	onLoad(option) {
		this.time = option.time
		this._initData()
	},
	onReady() {
		
	},
	computed: {
		...mapGetters([
			'userId'
		])
	},
	methods: {
		async _initData() {
		  let para = {
		    user_id: this.userId,
		    date: this.time,
		    page: this.page
		  }
		  let res = await this.$api.voucher.Details(para)
		  if (res.code === 200) {
		    if (res.extra.count < res.extra.rows) {
		      this.loadingShow = false
		    }
		    let data = res.data
		    this.total = res.extra.count
		    this.list = this.list.concat(data)
		  } else {
		    this.loadingShow = false
		  }
		},
		moreListData() {
		  let length = this.list.length
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

<style lang="less" scoped>
@import '../../common/less/const.less';

  .voucher-detail{
		width: 100%;
    padding: 0 30rpx;
    margin-top: 30rpx;
    .detail-item{
      width: 100%;
      padding-bottom: 25rpx;
      margin-bottom: 30rpx;
      border-bottom: 1rpx solid #DBD8D5;
      .item-top{
				display: flex;
        justify-content: space-between;
        text{
          font-size: 30rpx;
          color: #333;
        }
      }
      .item-bottom{
        font-size: 24rpx;
        color: #999;
      }
    }
    .load-more{
			display: flex;
      justify-content: center;
      padding: 30rpx 0;
      >text{
        font-size: 24rpx;
      }
    }
  }	
</style>
