<template>
	<view class="logout">
		<view class="logout-rule">
		  <text class="title">*注销须知</text>
		  <text>注销账号是不可恢复的操作，在您提交注销申请之前，请先确认以下信息：</text>
		</view>
		<view class="logout-rule">
		  <text class="title">1.账号内的财产已经结清</text>
		  <text>注销后，账号内的财产将会被清零。请您务必确认账号内的：熊猫币，礼券，特权等资产。请提前对其处置，避免注销后被清零无法挽回。</text>
		</view>
		<view class="logout-rule">
		  <text class="title">2.账号相关行为信息将被清零</text>
		  <text>注销后，您的个人资料，历史记录，收藏，评论等用户行为信息将被清零，请您注销前，妥善处理。</text>
		</view>
		<view class="logout-rule">
		  <text class="title">3.已订阅的作品将视为自动放弃</text>
		  <text>账号注销后，该账户已购买的虚拟资产（阅读书籍，音频及动漫作品）将被视为自动放弃。</text>
		</view>
		<view class="logout-rule">
		  <text class="title">4.账号注销后，注销账户无法找回</text>
		  <text>账号注销后，即使您再次使用以前的手机或者第三方账号，都将无法登录原账号，原来的手机号可以绑定其他新的账号。</text>
		</view>
		<view class="logout-rule">
		  <text class="title">5.账号注销审核期</text>
		  <text>在您提交注销账号申请后，我们有一定时间来完成注销操作（不超过一个月），当申请的账号被客服人员确认为本人真实操作之后就会完成注销操作，操作完成后账号将无法访问。</text>
		</view>
		<view class="logout-bottom">
		  <text class="bottom-rule">若您已经了解以上情况，仍要选择注销操作，请完成以下操作：</text>
		  <text class="title">*填写联系方式，方便客服与您确认联系</text>
		  <input
		    class="input-phone" 
		    type="number"
		    placeholder="请输入手机号"
		    maxlength="11"
		    :value="mobile"
		    @input="handlePhone">
		  </input>
		  <text class="title">*注销文本</text>
		  <!-- <textarea class="input-text" @input="handleContent">
		   {{content}}
		  </textarea> -->
			<textarea class="input-text" :value="content" placeholder="" @input="handleContent"/>
		  <text class="input-rule">*请把XXX替换成本人真实信息</text>
		  <view class="logout-btn">
		    <text class="confirm-text">再次确认您要注销当前账号（UID：{{mobile}}）</text>
		    <text class="confirm-btn" v-if="notBtn" @click="submitBnt">提交</text>
		    <text class="confirm-btn not-btn" v-else>已申请</text>
		  </view>
		</view>
	</view>
</template>

<script>
import {mapGetters} from 'vuex'
	
export default {
	data() {
		return {
			mobile: '',
			content: '本人：XXX，账号： XXX，手机号：XXX，现申请注销青桔免费小说小程序下账户。本人承诺自愿放弃在该小程序中所有权益、信息、虚拟货币等，愿意承担账户注销可能给本人带来的一切损失，并保证不再申请找回账户相关信息。',
			notBtn: true
		}
	},
	onLoad() {
		
	},
	onReady() {
		this.mobile = this.userInfo.mobile
	},
	computed: {
		...mapGetters([
			'userId',
			'userInfo'
		])
	},
	methods: {
		handlePhone(e) {
		  this.mobile = e.target.value
		},
		handleContent(e) {
		  this.content = e.target.value
		},
		async submitBnt() {
		  if (!this.checkPhoneNum()) {
		    return
		  } else if (this.content === '') {
		    uni.showToast({
		      title: '注销文本不能为空！'
		    })
		    return
		  } else {
		    let para = {
		      user_id: this.userId,
		      mobile: this.mobile,
		      content: this.content
		    }
		    let res = await this.$api.login.AccountCancel(para)
		    if (res.code === 200) {
		      this.notBtn = false
		    } else {
		      uni.showToast({
						icon: 'none',
		        title: res.msg
		      })
		    }
		  }
		},
		// 校验手机号
		checkPhoneNum() {
		  if (this.mobile === '') {
		    uni.showToast({
					icon: 'none',
		      title: '手机号码不能为空'
		    })
		    return false
		  } else if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.mobile))) {
		    uni.showToast({
					icon: 'none',
		      title: '请输入有效的手机号码'
		    })
		    return false
		  } else {
		    return true
		  }
		}
		
	}
}
</script>

<style lang="less" scoped>
@import '../../common/less/const.less';

  .logout{
		width: 100%;
    .logout-rule{
			display: flex;
      flex-direction: column;
      margin-bottom: 40rpx;
      padding: 0 30rpx;
    }
    .title{
      margin-bottom: 20rpx;
      font-size: 34rpx;
      font-weight: bold;
      color: #333;
    }
    .logout-bottom{
			display: flex;
      flex-direction: column;
      padding: 0 30rpx;
      border-top: 20rpx solid #f1f1f1;
      .bottom-rule{
        margin: 30rpx 0;
        font-size: 24rpx;
      }
      .input-phone{
        width: 100%;
        height: 80rpx;
        margin: 10rpx 0 30rpx 0;
        padding-left: 20rpx;
        font-size: 30rpx;
        background-color: #f1f1f1;
      }
      .input-rule{
        font-size: 24rpx;
        color: @color-background;
        /* color: #333; */
      }
      .input-text{
        padding: 10rpx 20rpx;
        font-size: 30rpx;
        background-color: #f1f1f1;
      }
      .logout-btn{
				display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 200rpx;
        padding-bottom: 100rpx;
        .confirm-text{
          font-size: 28rpx;
        }
        .confirm-btn{
          width: 100%;
          height: 80rpx;
					line-height: 80rpx;
          margin-top: 20rpx;
          text-align: center;
          color: #fff;
          background-color: @color-background;
          border-radius: 10rpx;
        }
        .not-btn{
          background-color: #999;
        }
        .confirm-btn:active{
          opacity: 0.8;
        }
      }
    }
  }
</style>
