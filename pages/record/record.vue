<template>
	<view class="record">
	  <!-- <view class="record-tabs">
	    <view class="tab-nav">
	      <text :class="{'active-tab':tabName==='chongzhi'}" @click="handleTabNav('chongzhi')">充值记录</text>
	      <text :class="{'active-tab':tabName==='xiaofei'}" @click="handleTabNav('xiaofei')">消费记录</text>
	    </view>
	  </view> -->
	  <view class="record-container">
	    <view class="cz-record" v-show="tabName==='chongzhi'">
	      <block v-for="(item, index) in czlist" :key="index">
	        <view class="cz-item">
	          <view class="cz-left">
	            <text>充值成功{{item.number}}元</text>
	            <text class="left-time">{{item.create_date}}</text>
	          </view>
	          <view class="cz-right">
	            <!-- <text class="cz-price">+ {{item.result_number}}</text> -->
	            <text class="cz-price">{{item.type == 'day' ? '天卡': (item.type == 'week' ? '周卡': (item.type == 'month' ? '月卡':(item.type == 'quarter'? '季卡':'年卡')))}}</text>
	          </view>
	        </view>
	      </block>
	      <view class="load-more">
	        <text v-show="czLoad">加载更多</text>
	        <text v-show="!czLoad">没有更多了~</text>
	      </view>
	    </view>
	    <view class="xf-record" v-show="tabName==='xiaofei'">
	      <block v-for="(item, index) in xflist" :key="index">
	        <view class="xf-item">
	          <view class="xf-left">
	            <text>{{item.book_title}}</text>
	            <text class="left-title">{{item.chapter_name}}</text>
	            <text class="left-time">{{item.create_date}} {{item.create_time}}</text>
	          </view>
	          <text>- {{item.pay_price}}阅币</text>
	        </view>
	      </block>
	      <view class="load-more">
	        <text v-show="xfLoad">加载更多</text>
	        <text v-show="!xfLoad">没有更多了~</text>
	      </view>
	    </view>
	  </view>
	</view>
</template>

<script>
import {mapGetters} from 'vuex'
	
export default {
	data() {
		return {
			tabName: 'xiaofei',
			czlist: [],
			czTotal: null,
			czPage: 1,
			czLoad: true,
			xflist: [],
			xfTotal: null,
			xfPage: 1,
			xfLoad: true
		}
	},
	onLoad(option) {
		this.tabName = option.tab
		this.handleBarTitle()
		this._initCZData()
		this._initXFData()
	},
	onReady() {
		
	},
	onReachBottom() {
		if(this.tabName === 'xiaofei') {
			this.xfMoreList()
		} else {
			this.czMoreList()
		}
	},
	computed: {
		...mapGetters([
			'userId'
		])
	},
	methods: {
		async _initCZData() {
		  let para = {
		    user_id: this.userId,
		    page: this.czPage,
		    rows: 12
		  }
		  let res = await this.$api.user.RechargeRecord(para)
		  if (res.code === 200) {
		    let data = res.data
		    let extra = res.extra
		    if (extra.count < extra.rows) {
		      this.czLoad = false
		    }
		    this.czTotal = extra.count
		    this.czlist = this.czlist.concat(data)
		  } else {
		    this.czLoad = false
		  }
		},
		async _initXFData() {
		  let para = {
		    user_id: this.userId,
		    page: this.xfPage,
		    rows: 12
		  }
		  let res = await this.$api.user.BuyRecord(para)
		  if (res.code === 200) {
		    let data = res.data
		    let extra = res.extra
		    if (extra.count < extra.rows) {
		      this.xfLoad = false
		    }
		    this.xfTotal = extra.count
		    this.xflist = this.xflist.concat(data)
		  } else {
		    this.xfLoad = false
		  }
		},
		czMoreList() {
		  let length = this.czlist.length
		  if (length >= this.czTotal) {
		    this.czLoad = false
		    return
		  } else {
		    this.czPage++
		    this._initCZData()
		  }
		},
		xfMoreList() {
		  let length = this.xflist.length
		  if (length >= this.xfTotal) {
		    this.xfLoad = false
		    return
		  } else {
		    this.xfPage++
		    this._initXFData()
		  }
		},
		handleTabNav(tab) {
		  this.tabName = tab
			this.handleBarTitle()
		},
		handleBarTitle() {
			let title = this.tabName === 'xiaofei' ? '消费记录' : '充值记录'
			uni.setNavigationBarTitle({
				title
			})
		}
		
	}
}
</script>

<style lang="less" scoped>
@import '../../common/less/const.less';

  .record{
    width: 100%;
    .record-tabs{
			display: flex;
      width: 100%;
      height: 88rpx;
			line-height: 88rpx;
      // padding: 0 30rpx;
      background-color: #fff;
      position: fixed;
      top: 0;
      left: 0;
			z-index: 10;
      .tab-nav{
        flex: 1;
				display: flex;
        justify-content: center;
        text{
          width: 190rpx;
          height: 84rpx;
          text-align: center;
          color: #333;
          font-size: 34rpx;
          border-bottom: 4rpx solid transparent;
        }
        .active-tab{
          border-bottom-color: @color-background-c;
        }
      }
    }
    .record-container{
      width: 100%;
      padding-top: 45rpx;
      .cz-record, .xf-record{
        padding: 0 30rpx;
        text{
          color: #333;
        }
        .cz-item{
					display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 140rpx;
          border-bottom: 1rpx solid #D3D0CB;
          .cz-left{
						display: flex;
            flex-direction: column;
          }
          .cz-price{
            color: @color-background;
          }
        }
        .xf-item{
					display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 177rpx;
          border-bottom: 1rpx solid #D3D0CB;
          .xf-left{
						display: flex;
            flex-direction: column;
          }
        }
        .left-time{
          font-size: 24rpx;
          color: #999;
        }
        .left-title{
          font-size: 28rpx;
          color: #999;
        }
        .load-more{
					display: flex;
          justify-content: center;
					width: 100%;
          padding: 30rpx 0;
          >text{
            font-size: 24rpx;
          }
        }
      }
    }
  }
</style>
