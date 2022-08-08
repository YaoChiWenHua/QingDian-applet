<script>
	export default {
		// onLaunch: function () {
		//   // 展示本地存储能力
		//   var logs = wx.getStorageSync('logs') || []
		//   logs.unshift(Date.now())
		//   wx.setStorageSync('logs', logs)
		//   
		//   // 获取用户信息
		//   wx.getSetting({
		//     withCredentials: true,
		//     success: res => {
		//       if (res.authSetting['scope.userInfo']) {
		//         // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
		//         wx.getUserInfo({
		//           success: res => {
		//             // console.log(res)
		//             // 可以将 res 发送给后台解码出 unionId
		//             this.globalData.userInfo = res.userInfo
		// 
		//             // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
		//             // 所以此处加入 callback 以防止这种情况
		//             if (this.userInfoReadyCallback) {
		//               this.userInfoReadyCallback(res)
		//             }
		//           }
		//         })
		//       }
		//     }
		//   })
		// },
		// globalData: {
		//   userInfo: null,
		//   userId: null
		// }
	}
</script>

<style lang="less">
	/*每个页面公共css */
	
	/**app.wxss**/
	/* .container {
	  height: 100%;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: space-between;
	  padding: 200rpx 0;
	  box-sizing: border-box;
	}  */
	
	// @import './common/fonts/iconfont.css';
	@import './common/less/const.less';
	
	.bottom-fixed-btn{
	  width: 100%;
	  height: 121rpx;
	  border-top: 2rpx solid #EFEEEC;
	  background-color: #fff;
	  position: fixed;
	  bottom: 0;
	  left: 0;
	  z-index: 9;
	}
	.buttons{
	  display: flex;
	  justify-content: space-around;
	  align-items: center;
	  width: 100%;
	  height: 100%;
	}
	.buttons button{
	  width: 308rpx;
	  height: 80rpx;
	  line-height: 80rpx;
	  border-radius: 50rpx;
	  border: none;
	  font-size: 32rpx;
	  font-weight: bold;
	}
	.buttons .cancel-btn{
	  color: #FF5052;
	  background-color: #FFDEBF;
	}
	.buttons .delete-btn{
	  color: #fff;
	  background-color: #FF5052;
	}
	.buttons .shiftout-btn{
	  color: #333;
	  background-color: #E7E6E3;
	}
	
	.no-wrap{
	  -ms-text-overflow: ellipsis;
	  text-overflow: ellipsis;
	  overflow: hidden;
	  white-space: nowrap;
	}
	
	.no-wrap-two{
	  display: -webkit-box;
	  -ms-text-overflow: ellipsis;
	  text-overflow:ellipsis;
	  overflow: hidden;
	  word-break: break-all;
	  -webkit-line-clamp: 2;
	  -webkit-box-orient: vertical;
	}
	
	// img-box{
	//   box-shadow: 0 2rpx 6rpx rgba(0,0,0,0.3);
	//   border-radius: 10rpx;
	// }
	
	/* .navigator-hover{
	  background-color: rgba(0, 0, 0, 0.1); opacity: .3;
	} */
	
	/* test */
	/* @import '//at.alicdn.com/t/font_1218652_h6rrx3n933.css' */
</style>
