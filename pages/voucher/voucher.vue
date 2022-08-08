<template>
	<view class="voucher">
		<view class="voucher-money">
		  <text class="big-money">{{userInfo.voucher_money}}</text>
		  <text>代金券（付费时优先扣除）</text>
		</view>
		<block v-for="(item, index) in voucherlist" :key="index">
		  <view class="voucher-list">
		    <view class="voucher-item" @click="gotoVoucherDetail(item)">
		      <view class="item-left">
		        <text class="big-text">代金券</text>
		        <text>有效时间：至{{item.create_date}}</text>
		      </view>
		      <text class="item-right">{{item.money}}</text>
		    </view>
		  </view>
		</block>
		<view class="load-more">
		  <text v-show="loadingShow">加载更多</text>
		  <!-- <text v-show="!loadingShow">我是有底线的~</text> -->
		</view>
	</view>
</template>

<script>
import {mapGetters} from 'vuex'	
	
export default {
	data() {
		return {
			voucherlist: [],
			loadingShow: false,
			page: 1,
			total: null
		}
	},
	onLoad() {
		this._initData()
	},
	onReady() {
		
	},
	computed: {
		...mapGetters([
			'userId',
			'userInfo'
		])
	},
	onReachBottom() {
		this.moreListData()
	},
	methods: {
		async _initData() {
		  let para = {
		    user_id: this.userId,
		    page: this.page
		  }
			uni.showLoading({
				title: '加载中...'
			})
		  let res = await this.$api.voucher.Vouchers(para)
			uni.hideLoading()
		  if (res.code === 200) {
		    if (res.extra.count < res.extra.rows) {
		      this.loadingShow = false
		    }
		    let data = res.data
		    this.total = res.extra.count
		    this.voucherlist = this.voucherlist.concat(data)
		  } else {
		    this.loadingShow = false
		  }
		},
		gotoVoucherDetail(item) {
		  // router.push({
		  //   uri: '/pages/voucherDetail',
		  //   params: {
		  //     userId: this.userId,
		  //     time: item.create_date
		  //   }
		  // })
			
			uni.navigateTo({
				url: `/pages/voucherlist?time=${item.create_date}`
			})
		},
		moreListData() {
		  let length = this.voucherlist.length
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

  .voucher{
		width: 100%;
    .voucher-money{
			display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30rpx 0;
      text{
        font-size: 30rpx;
        color: #999;
      }
      .big-money{
        font-size: 80rpx;
        font-weight: bold;
        color: @color-background;
      }
    }
    .voucher-list{
			display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      .voucher-item{
				display: flex;
        justify-content: space-between;
        align-items: center;
        width: 640rpx;
        height: 182rpx;
        margin-bottom: 20rpx;
        background: url('~@/static/icons/voucher.png') no-repeat center;
        background-size: cover;
        .item-left{
					display: flex;
          flex-direction: column;
          margin-left: 40rpx;
          text{
            font-size: 27rpx;
          }
          .big-text{
            font-size: 48rpx;
            /* font-weight: bold; */
            color: #333;
          }
        }
        .item-right{
          width: 232rpx;
          text-align: center;
          font-size: 90rpx;
          font-weight: bold;
          color: #fff;
        }
      }
    }
    .load-more{
			display: flex;
      justify-content: center;
      padding: 10rpx 0;
      >text{
        font-size: 24rpx;
      }
    }
  }
</style>
