<template>
	<view class="user-info">
	  <view class="user-bg"></view>
	  <view class="user-main">
	    <view class="user-head">
        <text v-if="userInfo.is_user_vip == 'Y'" class="icon-crown icon-fudon"></text>
				<image v-if="userInfo.user_image" :src="userInfo.user_image"></image>
	      <image v-else src="../../static/icons/default-head.png"></image>
	      <view class="have-login" v-if="userInfo.user_id&&userId">
	        <view>
	          <text class="text-crown">{{userInfo.mobile?userInfo.mobile:userInfo.name}}</text>
	          <text v-if="userInfo.is_user_vip == 'Y'" class="icon-crown"></text>
	        </view>
	        <!-- <text v-if="!userInfo.mobile" class="bind-phone" @click="gotoBindPhone">绑定手机号</text> -->
<!-- 	        <text class="vip-time1" v-if="userInfo.is_user_vip == 'Y'">vip</text>
          <text class="vip-time1" v-else></text> -->
	      </view>
	      <!-- <view class="not-login" v-else-if="!userInfo.user_id&&!userId" @click="getUserInfo">
	        <text class="login-btn">登录/注册</text>
	      </view> -->
	    </view>
			<view class="user-recharge">
				<!-- <text>我的余额：{{userInfo.money?userInfo.money:0}} 阅币</text> -->
        <text class="vip-time" v-if="userInfo.is_user_vip == 'Y'">会员到期：{{userInfo.end_time}}</text>
        <text class="vip-time" v-else>开通VIP会员</text>
				<text class='recharge-btn' v-if="userInfo.is_user_vip == 'Y'" @click="gotoRecharge">立即续费</text>
        <text class='recharge-btn' v-else @click="gotoRecharge">立即开通</text>
			</view>
			<!-- <view class="user-money">
				<view>
					<text class="money-num">{{userInfo.money?userInfo.money:0}}</text>
					<text>阅币</text>
				</view>
				<view class="money-line"></view>
				<view @click="gotoVoucher">
					<text class="money-num">{{userInfo.voucher_money?userInfo.voucher_money:0}}</text>
					<text>代金券</text>
				</view>
			</view> -->
			<view>
				<!-- <navigator class="box-xf" url="../record/record?tab=xiaofei">
					<view>
						<image src="../../static/icons/user-xf.png"></image>
						<text>消费记录</text>
					</view>
					<text class="iconfont">&#xe70c;</text>
				</navigator> -->
				<navigator class="box-xf" url="../record/record?tab=chongzhi">
					<view>
						<image src="../../static/icons/user-cz.png"></image>
						<text>充值记录</text>
					</view>
					<text class="iconfont">&#xe70c;</text>
				</navigator>
			</view>
			<!-- <navigator class="box-xf" open-type="switchTab" url="../bookshelf/bookshelf"> -->
			<navigator class="box-xf" url="../readlist/readlist">
				<view>
					<image src="../../static/icons/user-sc.png"></image>
					<text>最近阅读</text>
				</view>
				<text class="iconfont">&#xe70c;</text>
			</navigator>
			<!-- <navigator class="box-xf" url="../collectlist/collectlist">
				<view>
					<image src="../../static/icons/user-zx.png"></image>
					<text>我的收藏</text>
				</view>
				<text class="iconfont">&#xe70c;</text>
			</navigator> -->
			<!-- <view class="box-xf" @click="copyService">
				<view>
					<image src="../../static/icons/user-lx.png"></image>
					<text>联系我们</text>
				</view>
				<text class="qq-number">（点击复制QQ号：2095827074）</text>
			</view> -->
			<!-- <navigator class="box-xf" url="../gender/gender">
				<view>
					<image src="../../static/icons/user-sz.png"></image>
					<text>偏好设置</text>
				</view>
				<text class="iconfont">&#xe70c;</text>
			</navigator> -->
			<!-- <view class="box-xf" @click="accountClose">
				<view>
					<image src="../../static/icons/user-zx.png"></image>
					<text>注销账号</text>
				</view>
				<text class="iconfont">&#xe70c;</text>
			</view> -->
			<!-- <view class="login-out">
				<text v-if="userId" @click="loginOut">退出登录</text>
			</view> -->
	  </view>
	</view>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'	
	
export default {
	data() {
		return {
			time: '',
			flag: 1,
      userInfo:{}
		}
	},
	onLoad() {
		// if(!this.userId){
		//   // this.$util.createAutoLogin()
  //     this.$util.createAutoLogin(async()=> {
        

  //     })
		// }
	},
	onReady() {
		
	},
	onShow() {
		// this._initFlagShow()
		if (!this.userId) {
      this.$util.createAutoLogin(async()=> {
        this._inintUserInfo()
      })
		}else{
      this._inintUserInfo()
    }
	},
	computed: {
		...mapGetters([
			'userId'
		])
	},
	methods: {
		// async _initFlagShow() {
		// 	let res = await this.$api.read.FlowInfo()
		// 	if (res.code === 200) {
		// 		this.flag = res.data.flag
		// 	}
		// },
		copyService() {
			uni.setClipboardData({
				data: '2095827074',
				success: () => {
					uni.showToast({
						icon: 'success',
						title: '复制成功'
					})
				}
			})
		},
		loginOut() {
			
		},
		gotoBindPhone() {
			uni.navigateTo({
				url: '/pages/phone/phone'
			})
		},
		gotoRecharge() {
			uni.navigateTo({
				url: '/pages/recharge/recharge?type=0'
			})
		},
		gotoVoucher() {
			uni.navigateTo({
				url: '/pages/voucher/voucher'
			})
		},
    getUserInfo() {
    	var provider = ''
    	var para = {}
    	uni.getProvider({
    		service: 'oauth',
    		success: (res) => {
    			provider = res.provider
    			console.log(provider,'provider----')
    				uni.login({
    					provider,
    					// scopes: 'auth_base',
    					success: async res => {
    						para.code = res.code
                //#ifdef MP-KUAISHOU
                let res2 = await this.$api.login.KSLogin(para)
                if (res2.code === 200) {
                	let user = res2.data
                	this.setUser(user)
                }
                //#endif
    					}
    				})
    			// }
    		}
    	})
    },
		async _inintUserInfo() {
		  let para = {
		    user_id: this.userId
		  }
		  let res = await this.$api.user.UserInfo(para)
			let res1 = await this.$api.user.CheckUserYear(para)
		  if (res.code === 200) {
		    let user = res.data
        this.userInfo = user
				this.setUserInfo(user)
		  }
			// if (res1.code === 200) {
			//   this.time = res1.data.end_time
			// } else {
			//   this.time = ''
			// }
		},
		...mapMutations([
			'setUser',
			'setUserInfo'
		])
		
	}
}
</script>

<style lang="less">
@import '../../common/less/const.less';
	
	.user-info{
		width: 100%;
		.user-bg{
			width: 100%;
			height: 292rpx;
			background: url('~@/static/user-bg.jpg') no-repeat center;
			background-size: cover;
		}
		.user-main{
			// flex: 1;
			// flex-direction: column;
			// width: 100%;
			margin: 0 30rpx;
			margin-top: -270rpx;
			padding-bottom: 50rpx;
      position: relative;
			.user-head{
				display: flex;
				align-items: center;
				width: 100%;
				height: 251rpx;
				padding-bottom: 50rpx;
				background: url('~@/static/user-box.png') no-repeat center;
				background-size: cover;
				border-radius: 10px;
        
				>image{
					width: 138rpx;
					height: 138rpx;
					margin-left: 45rpx;
					border-radius: 50%;
				}
        .icon-fudon{
          position: absolute;
          top: 160rpx;
          left: 74rpx;
          display: inline-block;
          width: 84rpx;
          height: 40rpx;
          background: url('~@/static/icons/vip_re.png') no-repeat center;
          background-size: cover;
        }
				.not-login{
					display: flex;
					flex-direction: column;
					margin-left: 20rpx;
					text{
						font-size: 24rpx;
					}
					.login-btn{
						font-size: 34rpx;
						font-weight: bold;
						color: #333;
					}
				}
				.have-login{
					display: flex;
          align-items:center;
					// flex-direction: column;
					margin-left: 20rpx;
          height:100rpx;
          // justify-content:space-between;
					/* margin-top: 30rpx; */
					text{
						// font-size: 30rpx;
						color: #333;
					}
					.vip-time{
						margin-top: 10rpx;
						font-size: 24rpx;
					}
          .vip-time1{
            font-size: 32rpx;
          }
          .text-crown{
            font-size: 36rpx;
          }
					.icon-crown{
						display: inline-block;
						width: 42rpx;
						height: 36rpx;
						margin-left: 10rpx;
						background: url('~@/static/icons/r-hg.png') no-repeat center;
						background-size: cover;
					}
					.bind-phone{
						/* display: none; */
						width: 200rpx;
						height: 50rpx;
						line-height: 50rpx;
						margin-top: 20rpx;
						text-align: center;
						background-color: @color-background;
						color: #fff;
						border-radius: 30rpx;
						font-size: 30rpx;
					}
				}
			}
			.user-recharge{
				display: flex;
				justify-content: space-between;
				align-items: center;
				// width: 100%;
				height: 88rpx;
				padding: 0 30rpx;
				margin-top: -50rpx;
				background: linear-gradient(to right,#FF6749,#FF4042);
				border-radius: 50rpx;
				text{
					color: #fff;
				}
				.recharge-btn{
					width: 147rpx;
					height: 55rpx;
					line-height: 55rpx;
					text-align: center;
					border: 1rpx solid #fff;
					border-radius: 30rpx;
				}
			}
			.user-money{
				display: flex;
			  justify-content: space-around;
			  align-items: center;
			  width: 80%;
			  margin: 0 auto;
			  padding: 30rpx 0;
			  .money-line{
			    width: 2rpx;
			    height: 50rpx;
			    background-color: #999;
			  }
			  >view{
					display: flex;
			    flex-direction: column;
			    align-items: center;
			    text{
			      color: #333;
						font-size: 32rpx;
			    }
			    .money-num{
			      font-size: 42rpx;
			      font-weight: bold;
			    }
			  }
			}
			.box-xf{
				display: flex;
				justify-content: space-between;
				align-items: center;
				// width: 100%;
				height: 80rpx;
				padding: 0 10rpx;
				margin-top: 30rpx;
				border: 1rpx solid #E9E6E3;
				border-radius: 10rpx;
				>view{
					display: flex;
					align-items: center;
				}
				image{
					width: 65rpx;
					height: 65rpx;
					margin-right: 10rpx;
				}
				text{
					color: #333;
				}
				.qq-number{
					font-size: 24rpx;
					color: #999;
				}
			}
			.box-xf:active{
				background-color: #f1f1f1;
			}
			/* .box-bottom{
				margin-top: 30rpx;
				flex-direction: column;
				.box-xf{
					margin-top: 0;
				}
			} */
			.login-out{
				display: flex;
				justify-content: center;
				width: 100%;
				padding-bottom: 30rpx;
				margin-top: 70rpx;
				text{
					color: @color-background;
				}
			}
		}
	}
</style>
