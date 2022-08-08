<template>
	<view class="login">
		<view class="login-bg">
			<text class="iconfont" @click="goBack">&#xe65b;</text>
		</view>
		<view class="login-main">
			<view class="input-box">
				<image class="icon-phone" src="../../static/icons/icon-phone.png"></image>
				<input
					class="phone-input" 
					type="number"
					placeholder="填写需要绑定的手机号码"
					maxlength="11"
					:value="phone"
					@input="handlePhone">
				</input>
			</view>
			<view class="input-box">
				<image class="icon-yzm" src="../../static/icons/icon-yzm.png"></image>
				<input
					id="phone-input"
					class="code-input" 
					type="number"
					placeholder="填写验证码"
					maxlength="4"
					:value="code"
					@input="handleCode">
				</input>
				<text v-show="countDownShow" class="query-code active-code" @click="queryCode">获取验证码</text>
				<text v-show="!countDownShow" class="query-code">{{seconds}}s再次获取</text>
			</view>
			<view class="author-radio">
				<radio color="#FF4042" :checked="checked" @tap="handleCheck"/>
				<view class="author-text">
					登录即视为同意<navigator class="color-red" url="/pages/agreement/agreement">《青点服务协议》</navigator>和<navigator class="color-red" url="/pages/policy/policy">《青点隐私政策》</navigator>
				</view>
			</view>
			<view class="submit-button">
				<text class="auth-login" @click="submitBtn">绑定手机号</text>
				<text class="auth-text">本服务由瑶池文化提供技术支持</text>
			</view>
		</view>
		<view class="author-popup" v-show="authorShow">
			<view class="author-main">
				<view class="author-title">隐私政策与服务协议</view>
				<view class="author-text">
					感谢使用青点阅读！为了帮助您安全使用产品和服务，在您同意并授权的基础上，我们可能会收集您的设备信息。请您在使用前务必仔细阅读并透彻理解<navigator url="/pages/agreement/agreement" class="color-red">《服务协议》</navigator>和<navigator url="/pages/policy/policy" class="color-red">《隐私政策》</navigator>。如您同意此协议和政策，请点击“同意”并开始使用我们的产品和服务，我们尽力保护您的个人信息安全。
				</view>
				<view class="author-btns">
					<text class="cancel-btn" @click="goBack">不同意</text>
					<text @click="authorAgree">同意</text>
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
			phone: '',
			code: '',
			codeId: '',
			seconds: 60,
			countDownShow: true,
			authorShow: true,
			checked: true
		}
	},
	onLoad() {
		
	},
	onReady() {
		
	},
	computed: {
		...mapGetters([
			'userId'
		])
	},
	methods: {
		authorAgree() {
			this.authorShow = false
		},
		handleCheck() {
			this.checked = !this.checked
		},
		handlePhone(e) {
			this.phone = e.target.value
		},
		handleCode(e) {
			this.code = e.target.value
		},
		async submitBtn() {
			if (!this.checkPhoneNum()) {
				return
			} else if (this.code.length < 4){
				uni.showToast({
					icon: 'none',
					title: '验证码长度为4位'
				})
				return
			} else if (!this.checked) {
				uni.showToast({
					icon: 'none',
					title: '请勾选用户和隐私协议'
				})
				return
			} else {
				let para = {
					user_id: this.userId,
					mobile: this.phone,
					code: this.code,
					codeId: this.codeId,
					openFrom: 'toutiao'
				}
				// uni.showLoading({
				//   title: '正在绑定...'
				// })
				let res = await this.$api.login.BindPhone(para)
				// uni.hideLoading()
				if (res.code === 200) {
					uni.showToast({
						title: '绑定成功！'
					})
					// this._inintUserInfo()
					// 跳转
					uni.switchTab({
						url: '/pages/user/user'
					})
				} else {
					uni.showToast({
						icon: 'none',
						title: res.msg
					})
				}
			}
		},
		async queryCode() {
			// this.$element('phone-input').focus({focus:false})
			if (this.checkPhoneNum()) {
				let para = {
					mobile: this.phone
				}
				// uni.showLoading({
				//   title: '正在发送...'
				// })
				let res = await this.$api.login.GetBindPhoneCode(para)
				// uni.hideLoading()
				if (res.code === 200) {
					this.countDownShow = false
					this.countDown()
					uni.showToast({
						title: '短信验证码已发送到手机'
					})
					this.codeId = res.data.codeId
				} else {
					uni.showToast({
						icon: 'none',
						title: res.msg
					})
				}
			}
		},
		// 倒计时
		countDown() {
			if (this.seconds == 0) {
				this.countDownShow = true
				this.seconds = 60
				return
			} else {
				this.countDownShow = false
				this.seconds--
			}
			setTimeout(() => {
				this.countDown()
			}, 1000)
		},
		// 校验手机号
		checkPhoneNum() {
			if (this.phone === '') {
				uni.showToast({
					icon: 'none',
					title: '手机号码不能为空'
				})
				return false
			} else if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.phone))) {
				uni.showToast({
					icon: 'none',
					title: '请输入有效的手机号码'
				})
				return false
			} else {
				return true
			}
		},
		goBack() {
			uni.navigateBack()
		}
		
	}
}
</script>

<style lang="less" scoped>
@import '../../common/less/const.less';

  .login{
		width: 100%;
    .login-bg{
			display: flex;
      flex-direction: column;
      align-items: flex-start;
      // width: 100%;
      height: 572rpx;
      padding: 30rpx 0 0 30rpx;
      background: url('~@/static/login-bg.png') no-repeat center;
			background-size: cover;
			.iconfont{
				margin-top: 55rpx;
				font-size: 54rpx;
				color: #fff;
			}
    }
    .login-main{
			display: flex;
      flex-direction: column;
      align-items: center;
      .input-box{
				display: flex;
        align-items: center;
        width: 80%;
        height: 127rpx;
        border-bottom: 2rpx solid #F2F1F0;
				// font-size: 42rpx;
        .icon-phone{
          width: 27rpx;
          height: 43rpx;
        }
        .icon-yzm{
          width: 31rpx;
          height: 39rpx;
        }
        input{
          flex: 1;
          color: #333;
          height: 100%;
          padding-left: 36rpx;
        }
				// .input-placeholder{
				// 	font-size: 42rpx;
				// }
        .query-code{
          padding-left: 35rpx;
          color: @color-background;
          border-left: 1rpx solid #E0DED9;
					// font-size: 32rpx;
        }
        .active-code:active{
          opacity: 0.8;
        }
      }
      .author-radio{
				display: flex;
				align-items: center;
        width: 80%;
        margin-top: 20rpx;
        .author-text{
          font-size: 22rpx;
        }
      }
      // .auth-rule{
      //   width: 80%;
      //   margin-top: 30rpx;
      //   text{
      //     font-size: 24rpx;
      //   }
      //   >view{
      //     align-items: center;
      //   }
      //   .icon-check{
      //     width: 26rpx;
      //     height: 26rpx;
      //     margin-right: 10rpx;
      //     background: url('~@/static/icons/login-check.png') no-repeat center;
      //   }
      // }
      .submit-button{
				display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 100rpx;
        .auth-login{
          width: 452rpx;
          height: 90rpx;
					line-height: 90rpx;
          text-align: center;
          font-size: 34rpx;
          color: #fff;
          background-color: @color-background;
          border-radius: 50rpx;
        }
        .auth-login:active{
          opacity: 0.8;
        }
        .auth-text{
          margin-top: 35rpx;
          font-size: 24rpx;
        }
      }
    }
    .author-popup{
			display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      position: fixed;
      top: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.3);
			z-index: 9;
      .author-main{
				display: flex;
				flex-direction: column;
				align-items: center;
        width: 75%;
        padding: 30rpx;
        background-color: #fff;
        border-radius: 15rpx;
        font-size: 32rpx;
				// box-sizing: border-box;
        .author-title{
          align-self: center;
          color: #333;
					font-size: 36rpx;
        }
        .author-text{
          padding: 20rpx 0;
        }
        .author-btns{
					display: flex;
          justify-content: space-around;
					width: 100%;
          text{
            width: 180rpx;
            height: 80rpx;
						line-height: 80rpx;
            text-align: center;
            background-color: @color-background;
            border-radius: 10rpx;
            color: #fff;
          }
          .cancel-btn{
            background-color: #f1f1f1;
            color: #999;
          }
        }
      }
    }
		.color-red{
			display: inline-block;
		  color: @color-background
		}
  }
</style>
