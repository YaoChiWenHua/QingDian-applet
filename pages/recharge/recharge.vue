<template>
	<view class="recharge">
		<view class="recharge-bg"></view>
		<view class="container">
		  <!-- <view class="pay-title">
		    <text>选择支付方式：</text>
		    <text>{{currentTab===1?'支付宝':'微信'}}</text>
		  </view> -->
		  <!-- <view class="pay-tab">
		    <text :class="{'active-tab': currentTab===1}" @click="handleTab(1)">支付宝</text>
		    <text :class="{'active-tab': currentTab===2}" @click="handleTab(2)">微信</text>
		  </view> -->
		  <view class="pay-main">
		    <block v-for="(item, index) in list" :key="index">
		      <view class="pay-item">
		        <view class="item-left">
		          <view :class="['price',`price${index}`]"></view>
		          <view class="item-price">
		            <view class="price-top">
		              <view>
		                <text>￥</text>
		                <text style="font-size:48rpx;">{{item.money}}</text>
		              </view>
		              <!-- <text v-if="index===2" class="price-yuanjia">￥ 100</text> -->
		            </view>
                <view class="price-baonian">
                  <view class="icons-hg"></view>
                  <text>{{item.title}}</text>
                </view>
		            <!-- <text class="price-bottom">{{getMoney(item.desc,item.present)}}</text> -->
		          </view>
		        </view>
            <view class="item-right" @click="weaerback(item.money)">
              <text>充值</text>
            </view>
		       <!-- <view class="item-right" @click="selectItem(item.money)">
		          <text>充值</text>
		        </view> -->
		        <view v-if="item.is_hot == 'Y'" class="item-recommend"></view>
		      </view>
		    </block>
		    <!-- <view class="pay-item">
		      <view class="item-left">
		        <view class="price price3"></view>
		        <view class="item-price">
		          <view class="price-top">
		            <view>
		              <text>￥</text>
		              <text style="font-size:48rpx;">168</text>
		            </view>
		            <text class="price-yuanjia">￥ 182</text>
		          </view>
		          <view class="price-baonian">
		            <view class="icons-hg"></view>
		            <text>半年免费畅读</text>
		          </view>
		        </view>
		      </view>
		      <view class="item-right" @click="selectItem(168)">
		        <text>充值</text>
		      </view>
		    </view>
		    <view class="pay-item">
		      <view class="item-left">
		        <view class="price price4"></view>
		        <view class="item-price">
		          <view class="price-top">
		            <view>
		              <text>￥</text>
		              <text style="font-size:48rpx;">249</text>
		            </view>
		            <text class="price-yuanjia">￥ 365</text>
		          </view>
		          <view class="price-baonian">
		            <view class="icons-hg"></view>
		            <text>全年免费畅读</text>
		          </view>
		        </view>
		      </view>
		      <view class="item-right" @click="selectItem(249)">
		        <text>充值</text>
		      </view>
		    </view> -->
		  </view>
		  <view class="rule">
        <text>＊开通前请阅读</text>
        <navigator class="color-red" url="/pages/payment/payment">《会员服务协议》</navigator>

		    <!-- <view>
		      <text>＊</text>
		      充值完成后，为确保充值到账，返回APP内请点击已完成支付。
		    </view>
		    <view>
		      <text>＊</text>
		      充值后阅读币到账可能有拖迟，24小时内未到账请与客服联系。
		    </view> -->
		  </view>
		</view>
	</view>
</template>

<script>
import {mapGetters} from 'vuex'
	
export default {
	data() {
		return {
      fullPath:'',
      urltype:0,
      bookId:'',
			currentTab: 1,
			list: [],
			weixinOrderId: ''
		}
	},
	onLoad(option) {
    this.urltype = option.type
    this.bookId = option.bid == 'null' ? 0 : option.bid
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
    async weaerback(money){
      var _this = this
      //#ifdef MP-KUAISHOU
      let para = {
      	user_id: this.userId,
      	money: money,
        fromtype:this.urltype,
        bid:this.bookId
      }
      let para1 = {
      	user_id: this.userId,
      }
      let res = await this.$api.user.CreateOrder(para)
      if (res.code === 200) {
        let order_data = res.data
        ks.pay({
            serviceId: '1',
            orderInfo: {
                order_no: order_data.order_no,
                order_info_token: order_data.order_info_token,
            },
            success: async jay=> {
              // console.log('支付成功')
              let res1 = await this.$api.user.UserInfo(para1)
              if (res1.code === 200) {
                let user = res1.data
                let pages = getCurrentPages();             //获取所有页面栈实例列表   //当前页页面实例
                let prevPage = pages[ pages.length - 2 ];  //上一页页面实例
                if(_this.urltype == 1){
                  if(user.is_user_vip == 'Y'){
                    prevPage.$vm.Test_clothes = false;         //修改上一页面的 couponNumber 参数值为 value                //修改上一页面的 couid 参数值为 vid
                    uni.showToast({
                      title: '充值成功',
                      duration: 2000
                    });
                    setTimeout(function(){
                      uni.navigateBack({                         //uni.navigateTo跳转的返回，默认1为返回上一级
                          delta: 1
                      });
                    },2000);
                  }else{
                    uni.showLoading({
                      title: '充值异常'
                    });
                    setTimeout(function(){
                      uni.navigateBack({                         //uni.navigateTo跳转的返回，默认1为返回上一级
                          delta: 1
                      });
                    },2000);
                  }
                }else{
                  if(user.is_user_vip == 'Y'){
                    uni.showToast({
                      title: '充值成功',
                      duration: 1500
                    });
                    setTimeout(function(){
                      uni.navigateBack({                         //uni.navigateTo跳转的返回，默认1为返回上一级
                          delta: 1
                      });
                    },1500);
                  }else{
                    uni.showLoading({
                      title: '充值异常'
                    });
                    setTimeout(function(){
                      uni.navigateBack({                         //uni.navigateTo跳转的返回，默认1为返回上一级
                          delta: 1
                      });
                    },1500);
                  }
                }
                
              }
                
                // 支付成功
            },
            fail() {
              console.log('支付失败')
                // 支付失败
            },
        });
      }
      
      //#endif
    },
		async _initData() {
		  let res = await this.$api.user.RechargeConfig()
		  if (res.code === 200) {
		    this.list = res.data
		  }
		},
		getMoney(money, present) {
		  if (present == 0) {
		    return `${money} 阅币`
		  } else {
		    return `${money}+${present*100} 阅币`
		  }
		},
		handleTab(tab) {
		  this.currentTab = tab
		},
		async selectItem(money) {
			var provider = ''
			if (this.userId == '') {
			  uni.showToast({
					icon: 'none',
			    title: '请先登录'
			  })
			  return
			}
			uni.getProvider({
				service: 'payment',
				success: async res => {
					provider = res.provider
					let para = {
						user_id: this.userId,
						money: money
					}
					let paraSign = {
						alipay_url: 'https://www.alipay.com',
						app_id: '800410585624',
						body: 'qingjureadtest',
						currency: 'CNY',
						merchant_id: '1900041058',
						notify_url: 'https://www.baidu.com/',
						out_order_no: Date.parse(new Date()),
						payment_type: 'direct',
						product_code: 'pay',
						sign_type: 'MD5',
						subject: 'qingjureadtest',
						timestamp: Date.parse(new Date()),
						total_amount: 1,
						trade_time: Date.parse(new Date()),
						trade_type: 'H5',
						uid: '17160',
						valid_time: '300',
						version: '2.0',
						wx_type: 'MWEB',
						wx_url: 'https://www.wxpay.com/'
					}
					let risk_info = {
						risk_info: '{"ip":"127.0.0.1", "device_id":"485737374363263"}'
					}
					uni.showLoading({
						title: '正在发起支付，请稍等...'
					})
					if (this.currentTab === 1) {
						// 支付宝支付
						let res = await this.$api.user.Alipay(para)
						if (res) {
							paraSign.alipay_url = res
							let signRes = await this.$api.user.AlipaySign(paraSign)
							let orderInfo = {}
							Object.assign(orderInfo, signRes, risk_info)
							console.log(orderInfo)
							// tt.pay({
							uni.requestPayment({
								provider,
								orderInfo,
								service: 4,
								_debug: 1,
								getOrderStatus: res => {},
								success: res => {
									uni.hideLoading()
									console.log('成功:'+ res.code)
									if (res.code === 0) {
										uni.showToast({
											title: '支付成功',
											success() {
												uni.switchTab({
													url: '/pages/user/user'
												})
											}
										})
									} else {
										uni.showToast({
											icon: 'none',
											title: '支付失败'
										})
									}
								},
								fail: res => {
									console.log('失败：'+ res.errMsg)
									console.log('失败：'+ res.errCode)
									uni.showToast({
										icon: 'none',
										title: '唤起支付宝失败'
									})
								}
							})
						} else {
							// 唤起支付宝失败
						}
					} else {
						// 微信支付
						let res = await this.$api.user.WeixinPay(para)
						if (res.code === 200) {
							paraSign.wx_url = res.data.mweb_url
							this.weixinOrderId= res.data.out_trade_no
							let signRes = await this.$api.user.AlipaySign(paraSign)
							let orderInfo = {}
							Object.assign(orderInfo, signRes, risk_info)
							console.log(orderInfo)
							// tt.pay({
							uni.requestPayment({
								provider,
								orderInfo,
								service: 3,
								_debug: 1,
								getOrderStatus: res => {},
								success: async res => {
									console.log('成功:' + res.code)
									let para = {
										user_id: this.userId,
										order_id: this.weixinOrderId
									}
									let orderRes = await this.$api.user.OrderInfo(para)
									uni.hideLoading()
									if (orderRes.code === 200) {
										if (orderRes.data.result === 'Y') {
										  uni.showToast({
										    title: '支付成功',
												success() {
													uni.switchTab({
														url: '/pages/user/user'
													})
												}
										  })
										} else {
										  uni.showToast({
												icon: 'none',
										    title: '支付失败'
										  })
										}
									} else {
										uni.showToast({
											icon: 'none',
										  title: orderRes.msg
										})
									}
								},
								fail: res => {
									console.log('失败：' + res.errMsg)
									console.log('失败：' + res.errCode)
									uni.showToast({
										icon: 'none',
										title: '唤起微信失败'
									})
								}
							})
						}
					}
				}
			})
		}
		
	}
}
</script>

<style lang="less">
@import '../../common/less/const.less';

  .recharge{
    width: 100%;
    .recharge-bg{
      width: 100%;
      height: 366rpx;
      background: url('~@/static/icons/recharge-bg.png') no-repeat center;
    }
    .container{
      // width: 100%;
      padding: 0 60rpx;
      margin-top: -330rpx;
      .pay-title{
				font-size: 36rpx;
        color: #fff;
      }
      .pay-tab{
				display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        text{
          width: 50%;
          padding: 25rpx 0;
          text-align: center;
          color: #fff;
          font-size: 34rpx;
        }
        .active-tab{
          border-bottom: 4rpx solid #fff;
        }
      }
      .pay-main{
        width: 100%;
        margin-top: 100rpx;
        background-color: #fff;
        border: 1rpx solid #DFE6F3;
        .pay-item{
					display: flex;
          justify-content: space-between;
          align-items: center;
          // width: 100%;
          height: 166rpx;
          padding: 0 35rpx;
          border-bottom: 1rpx solid #F1F1EF;
          position: relative;
          .item-left{
						display: flex;
            .item-price{
              margin-left: 20rpx;
              .price-top{
								display: flex;
								align-items: center;
                text{
                  font-size: 26rpx;
                  color: #333;
                }
                .price-yuanjia{
                  margin-left: 10rpx;
                  text-decoration: line-through;
                }
              }
              .price-bottom{
                color: #999;
								font-size: 32rpx;
              }
              .price-baonian{
								display: flex;
                .icons-hg{
                  width: 42rpx;
                  height: 36rpx;
                  margin-right: 5rpx;
                  background: url('~@/static/icons/r-hg.png') no-repeat center;
									background-size: cover;
                }
                text{
                  color: #999;
									font-size: 32rpx;
                }
              }
            }
            .price{
              width: 91rpx;
              height: 91rpx;
              background-repeat: no-repeat;
              background-position: center;
							background-size: cover;
            }
            .price0{
              background-image: url('~@/static/icons/r-price0.png');
            }
            .price1{
              background-image: url('~@/static/icons/r-price1.png');
            }
            .price2{
              background-image: url('~@/static/icons/r-price2.png');
            }
            .price3{
              background-image: url('~@/static/icons/r-price3.png');
            }
            .price4{
              background-image: url('~@/static/icons/r-price4.png');
            }
          }
          .item-right{
						display: flex;
            justify-content: center;
            align-items: center;
            width: 173rpx;
            height: 80rpx;
            background: linear-gradient(#FF4042, #FF8B5D);
            border-radius: 50rpx;
            text{
              font-size: 34rpx;
              color: #fff;
            }
          }
          .item-right:active{
            opacity: 0.8;
          }
          .item-recommend{
            width: 92rpx;
            height: 35rpx;
            background: url('~@/static/icons/r-tj.png') no-repeat center;
						background-size: cover;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
      .rule{
        margin-top: 30rpx;
        font-size: 25rpx;
        display:flex;
        .color-red{
          color: @color-background;
        }
      }
    }
  }
</style>
