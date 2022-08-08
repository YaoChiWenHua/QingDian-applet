<template>
	<view class="read" :class="nightMode?'night-mode': ''" @tap="setShowBtn">
	  <view class="wrapper" v-if="book.content">
	    <view class="book-title">
	      <view class="title">{{book.chapter_title}}</view>
	      <view class="title-time">发布：{{book.create_date}}</view>
	    </view>
	    <view class="read-main" :style="{fontSize: fontSize + 'rpx'}">
	      <!-- <rich-text class="book-cont" nodes="{{book.content}}" :style="{font-size:fontSize+'rpx'}"></rich-text> -->
	      <!-- <rich-text class="book-cont" :nodes="book.content" :style="{fontSize: fontSize + 'rpx'}"></rich-text> -->
				<block v-for="(item, index) in book.content" :key="index">
					<view>{{item}}</view>
				</block>
	    </view>
			<view class="read-vip" v-if="book.is_fee==='Y'">
			  <view class="vip-content">
			    <text>本章是VIP章节</text>
			    <text>——感谢支持作家，支持正版阅读——</text>
			  </view>
			  <view class="have-login" v-if="userId">
			    <view class="user-money">
			      <view>
			        <text>余额：</text>
			        <text class="color-red">{{userInfo.money}}</text> 
			        <text>阅币</text>
			      </view>
			      <!-- <view>
			        <text>代金券：</text>
			        <text class="color-red">{{userInfo.voucher_money}}</text> 
			      </view> -->
			    </view>
			    <view class="not-auto">
			      <view class="default-button" v-if="userInfo.money>=0&&userInfo.money>=book.price" @click.native.stop="buyOneChapter(book)">继续阅读（{{book.price}}阅币）</view>
			      <view class="default-button" v-else @click.native.stop="gotoRecharge">余额不足，请充值</view>
			    </view>
			    <!-- <view class="have-auto" elif="{{item.auto==='Y'&&userInfo.money<item.price}}">
			      <text class="default-button" @click="gotoRecharge">余额不足，请充值</text>
			    </view> -->
			  </view>
			  <view class="not-login" v-else>
			    <text class="default-button" @click.native.stop="gotoLogin">登录阅读</text>
			  </view>
			</view>
	    <view class="bottom-btn" @tap.native.stop>
	      <button :plain="true" :disabled="isDisablePre" @tap.native.stop="preChapter">上一章</button>
	      <button @tap.native.stop="showCataMenuBtn" class="book-catalogue">
	        <text class="iconfont icon-mulu1"></text>
	        目录
	      </button>
	      <button :plain="true" :disabled="isDisableNext" @tap.native.stop="nextChapter">下一章</button>
	    </view>
	  </view>
	  <!-- 书籍目录 -->
	  <!-- <view class="catalogue-menu" :class="showCataMenu?'slideInTop':''" :style="background-color:nightMode?'#292929':'#F5EEE9'" @touchmove.native.stop="returnBtn"> -->
	  <!-- <view class="catalogue-menu" :class="showCataMenu?'slideInTop':''" @touchmove.native.stop> -->
	  <view class="catalogue-menu" :class="showCataMenu?'slideInTop':''">
	    <view class="cata-head" @touchmove.native.stop>
	      <view>目录（共{{total}}章）</view>
	      <picker mode="selector" :range="pickerlist" :value="index" @change="changePickerValue">
	        <view>
	          {{pickerlist[pickerIndex]}}
	          <text class="iconfont icon-icon"></text>
	        </view>
	      </picker>
	    </view>
	    <scroll-view class="cata-main" :style="{height:scrollHeight+'rpx'}" :scroll-y="true">
	      <block v-for="(item, index) in cataloguelist" :key="index">
	        <view class="cata-cont no-wrap" :class="item.cindex==sectionId?'active-title':''" :data-item="item" @click.native.stop="selectCatalogue(item.cindex)">
						<view class="cata-cont-left">
							<!-- <text class="cata-number">{{index<9?'0'+(index+1):index+1}}</text> -->
							<text class="cata-number">{{index+1+(page-1)*100}}</text>
							<text class="cata-title">{{item.chapter_title}}</text>
						</view>
						<view v-if="item.is_vip==='Y'" class="icons-vip"></view>
	        </view>
	      </block>
	    </scroll-view>
	    <view class="close-btn" @touchmove.native.stop>
	      <button @tap.native.stop="showCataMenuBtn" :plain="true">关闭</button>
	    </view>
	  </view>
	  <!-- 设置 -->
	  <view class="setting" :class="showSet?'slideInBottom':''" @tap.native.stop="returnBtn">
	    <view class="setting-bottom">
	      <view v-show="setFontSize">
	        <view class="set-head">
	          <button :plain="true" :disabled="isDisablePre" @tap.native.stop="preChapter">上一章</button>
	          <view class="title no-wrap">{{book.chapter_title}}</view>
	          <button :plain="true" :disabled="isDisableNext" @tap.native.stop="nextChapter">下一章</button>
	        </view>
	      </view>
	      <view v-show="!setFontSize">
	        <view class="set-fontsize">
	          <text class="fontsize-title">字体</text>
	          <view @tap.native.stop="subFontSizeBtn" :class="fontSize<=20?'fontsize-disable':''">
	            <text class="iconfont">&#xe69e;</text>
	          </view>
	          <view @tap.native.stop="addFontSizeBtn" :class="fontSize>=98?'fontsize-disable':''">
	            <text class="iconfont">&#xe69c;</text>
	          </view>
	        </view>
	      </view>
	      <view class="set-icons">
	       <view @tap.native.stop="showCataMenuBtn">
	          <view class="iconfont">&#xe603;</view>
	          <view class="text">目录</view>
	       </view>
	        <view @tap.native.stop="nigthModeBtn">
	          <view class="iconfont">{{nightMode?'&#xe62d;':'&#xe66d;'}}</view>
	          <view class="text">{{nightMode?'日间':'夜间'}}</view>
	        </view>
	        <view @tap.native.stop="fontSizeBtn">
	          <view class="iconfont">&#xe629;</view>
	          <view class="text">设置</view>
	        </view>
	      </view>
	    </view>
	  </view>
	  <!-- 右边按钮-->
	  <view class="right-btn" :class="showSet?'slideInBottom':''" @tap.native.stop="returnBtn">
	    <view @tap.native.stop="gotoBookDetails">书籍详情</view>
	    <view v-if="isBookShelf" @tap.native.stop="addBookShelf">加入书架</view>
	  </view>
	</view>
</template>

<script>
// import parseHtml from '../../common/html-parser.js'
import {mapGetters, mapMutations} from 'vuex'
	
export default {
	data() {
		return {
			// userId: '',
			bookId: '',
			sectionId: '',
			book: {},
			showSet: false,
			scrollHeight: 0,
			cataloguelist: [],
			showCataMenu: false,
			nightMode: false,
			setFontSize: true,
			fontSize: 42,
			page: 1,
			total: '',
			pickerlist: [],
			pickerIndex: 0,
			preSectionId: '',
			isDisablePre: false,
			nextSectionId: '',
			isDisableNext: false,
			isBookShelf: true
		}
	},
	onLoad(option) {
		// this.bookId = uni.getStorageSync('__bookid__'
		// this.sectionId = uni.getStorageSync('__sectionid__') || 0
		this.bookId = option.bId
		this.sectionId = option.cId
		this.getReadBookData(this.sectionId)
		this.getBookDirectoryData()
		if(this.userId) {
			this.getIsBookShelf()
		}
	},
	onReady() {
		const windowHeight = uni.getSystemInfoSync().windowHeight
		let sHeight = windowHeight - 60 - 49
		this.scrollHeight = sHeight * 2
		// console.log(this.scrollHeight)
	},
	onShow() {
		// this.getIsBookShelf()
	},
	onUnload() {
		if (this.isBookShelf && this.userId) {
			uni.showModal({
				title: '加入收藏',
				content: '下次看书更方便',
				cancelText: '残忍拒绝',
				confirmText: '加入收藏',
				success: res => {
					if (res.confirm) {
						console.log('确定')
						this.addBookShelf()
					} else if (res.cancel) {
						console.log('取消')
					}
				}
			})
		}
	},
	computed: {
		...mapGetters([
			'userId',
			'userInfo'
		])
	},
	methods: {
		// p标签加样式
		// htmlReplace(txt) {
		//   let result = txt
		//   const regex = new RegExp('<p', 'gi')
		//   result = result.replace(regex, `<p style="padding: 8px 0;"`)
		//   return result
		// },
		// 购买单章节
		async buyOneChapter(item) {
			// let status = this.subAuto ? 'Y' : 'N'
			// this._initSubAuto(status)
			let para = {
			  user_id: this.userId,
			  book_id: this.bookId,
			  chapter_id: item.chapter_id,
			  price: item.price
			}
			uni.showLoading({
			  title: '正在购买...'
			})
			let res = await this.$api.chapter.OneBuying(para)
			uni.hideLoading()
			if (res.code === 200) {
			  this.getReadBookData(item.cindex)
			  // this._inintUserInfo()
			} else {
			  uni.showToast({
					icon: 'none',
			    title: res.msg
			  })
			}
		},
		async _inintUserInfo() {
		  let para = {
		    user_id: this.userId
		  }
		  let res = await this.$api.user.UserInfo(para)
		  if (res.code === 200) {
		    let user = res.data
				this.setUserInfo(user)
		  }
		},
		setShowBtn() {
			this.showSet = !this.showSet
		},
		nigthModeBtn() {
		  if (this.nightMode) {
				//#ifdef MP-TOUTIAO
				tt.setNavigationBarColor({
				  frontColor: '#ffffff',
				  backgroundColor: '#292929'
				  // animation: {}
				})
				//#endif
				//#ifndef MP-TOUTIAO
		    uni.setNavigationBarColor({
		      frontColor: '#000000',
		      backgroundColor: '#F5EEE9'
		      // animation: {}
		    })
				//#endif
				// #ifdef MP-WEIXIN || MP-BAIDU
		    uni.setBackgroundColor({
		      backgroundColor: '#F5EEE9'
		    })
				// #endif
		  } else {
				//#ifdef MP-TOUTIAO
				tt.setNavigationBarColor({
				  frontColor: '#ffffff',
				  backgroundColor: '#292929'
				  // animation: {}
				})
				//#endif
				//#ifndef MP-TOUTIAO
		    uni.setNavigationBarColor({
		      frontColor: '#ffffff',
		      backgroundColor: '#292929'
		      // animation: {}
		    })
				//#endif
				// #ifdef MP-WEIXIN || MP-BAIDU
		    uni.setBackgroundColor({
		      backgroundColor: '#292929'
		    })
				// #endif
		  }
			this.nightMode = !this.nightMode,
			this.showSet = false
		},
		showCataMenuBtn() {
			this.showCataMenu = !this.showCataMenu,
		  this.showSet = false
		},
		fontSizeBtn() {
			this.setFontSize = !this.setFontSize
		},
		subFontSizeBtn() {
			let num = this.fontSize
			if (num <= 20) {
				return
			}
			num = num - 4
			this.fontSize = num
		},
		addFontSizeBtn() {
		  let num = this.fontSize
		  if (num >= 98) {
		    return
		  }
		  num = num + 4
		  this.fontSize = num
		},
		// 加入书架
		async addBookShelf() {
		  if (this.userId) {
		    let para = {
		      user_id: this.userId,
		      book_id: this.bookId
		    }
				let res = await this.$api.bookshelf.AddUserCase(para)
				if (res.code === 200) {
					uni.showToast({
						title: '加入收藏成功',
						duration: 2000
					})
					this.isBookShelf = false
				} else {
					this.isBookShelf = true
				}
		  } else {
				uni.showToast({
				  title: '请先登录',
				  icon: 'none',
				  duration: 2000
				})
		    // uni.switchTab({
		    //   url: '../user/user'
		    // })
		  }
		},
		gotoBookDetails() {
		  uni.navigateTo({
		    url: `../detail/detail?id=${this.bookId}`
		  })  
		},
		// 选择目录
		selectCatalogue(cid) {
		  this.showCataMenu = false,
		  this.showSet = false
		  this.getReadBookData(cid)
		},
		changePickerValue(e) {
		  let index = parseInt(e.detail.value)
		  this.pickerIndex = index,
		  this.page = index + 1
		  this.getBookDirectoryData()
		},
		// 上一章
		preChapter() {
		  // uni.pageScrollTo({
		  //   scrollTop: 0,
		  //   duration: 0
		  // })
		  this.getReadBookData(this.preSectionId)
		},
		// 下一章
		nextChapter() {
		  this.getReadBookData(this.nextSectionId)
		},
		returnBtn() {
		  return
		},
		async getIsBookShelf() {
		  let para = {
		    user_id: this.userId,
		    book_id: this.bookId
		  }
			let res = await this.$api.bookshelf.BookIsCase(para)
			if (res.code === 200) {
				let status = res.data.is_case === 'Y' ? false : true
				this.isBookShelf = status
			}
		},
		async getReadBookData(sId) {
		  let para = {
		    book_id: this.bookId,
		    user_id: this.userId,
		    sort: sId
		  }
			// uni.showLoading({
			// 	title: '加载中...'
			// })
			let res = await this.$api.read.Chapter(para)
			// uni.hideLoading()
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 0
			})
			if (res.code === 200) {
				let data = res.data
				let extra = res.extra
				// data.content = this.htmlReplace(data.content)
				// data.content = parseHtml(data.content)
				// uni.setStorageSync('__sectionid__', data.chapter_id)
				uni.setNavigationBarTitle({
					title: data.chapter_title
				})
				this.book = data
				// this.sectionId = data.chapter_id
				this.sectionId = data.cindex
				this.preSectionId = extra.pre
				this.nextSectionId = extra.next
				if (data.is_fee === 'Y' && this.userId) {
				  this._inintUserInfo()
				}
				if (extra.pre === 0) {
					this.isDisablePre = true
				} else {
					this.isDisablePre = false
				}
				if (extra.next === 0) {
					this.isDisableNext = true
				} else {
					this.isDisableNext = false
				}
			}
		},
		async getBookDirectoryData() {
		  let para = {
		    book_id: this.bookId,
		    page: this.page,
		    rows: 100
		  }
			let res = await this.$api.book.Directory(para)
			if (res.code === 200) {
				// let list = this.pickerlist
				this.cataloguelist = res.data,
				this.total = res.extra.count
				if (this.pickerlist.length === 0) {
					this.setPickerData(res.extra.count)
				}
			}
		},
		setPickerData(total) {
		  let arr = []
		  let num = Math.floor(total / 100)
		  for (let i = 0; i <= num; i++) {
		    let a = (i * 100) + 1
		    let b = (i + 1) * 100
		    if (b > total) b = total
		    let c = a + '-' + b
		    arr.push(c)
		  }
		  this.pickerlist = arr
		},
		gotoRecharge() {
			uni.navigateTo({
				url: '/pages/recharge/recharge'
			})
		},
		gotoLogin() {
			uni.switchTab({
				url: '/pages/user/user'
			})
		},
		...mapMutations([
			'setUserInfo'
		])
		
	}
}
</script>

<style lang="less" scoped>
@import '../../common/less/const.less';
	
	.read{
	  width: 100%;
	  // height: 100%;
	  background-color: #F5EEE9;
	  // background-color: rgba(0,0,0,.8);
	  position: relative;
	  .wrapper{
	    padding: 0 30rpx;
	    color: #333;
	    .book-title{
				padding-top: 30rpx;
	      .title{
	        font-size: 40rpx;
	        font-weight: bold;
	      }
	      .title-time{
	        padding: 10rpx 0 20rpx 0;
	        font-size: 22rpx;
	        // color: #666;
	      }
	    }
	    .read-main{
	      width: 100%;
	      >view{
	        // color: #333;
	        line-height: 1.5;
	        text-indent: 2em;
	        // font-size: 36rpx;
					padding: 5rpx 0;
	        // p{
	        //   padding: 10rpx 0 !important; 
	        // }
	      }
	    }
			.read-vip{
				display: flex;
				flex-direction: column;
				align-items: center;
			  width: 100%;
			  padding-top: 100rpx;
			  // padding-bottom: 100rpx;
				font-size: 36rpx;
			  .vip-content{
					display: flex;
					flex-direction: column;
			    text{
			      padding: 8rpx 0;
			      text-align: center;
			      // color: #333;
			    }
			  }
			  .not-login{
			    width: 100%;
			    margin-top: 100rpx;
			  }
			  .have-login{
			    width: 100%;
			    margin-top: 100rpx;
					.user-money{
						display: flex;
						>view{
							margin-right: 50rpx;
							.color-red{
								color: @color-background;
							}
						}
					}
			    // .not-auto, .have-auto{
			    //   flex-direction: column;
			    // }
			  }
			  .default-button{
					display: inline-block;
			    width: 100%;
			    height: 80rpx;
					line-height: 80rpx;
			    margin-top: 30rpx;
			    text-align: center;
			    font-size: 34rpx;
			    color: #fff;
			    background-color: @color-background;
			    border-radius: 10rpx;
			  }
			  .default-button:active{
			    opacity: 0.6;
			  }
			}
	    .bottom-btn{
	      display: flex;
	      justify-content: space-between;
	      width: 100%;
	      padding: 60rpx 0;
	      button{
	        width: 190rpx;
	        height: 68rpx;
	        line-height: 68rpx;
	        // border-radius: 60rpx;
	        font-size: 30rpx;
	        background-color: #fff;
	        border: 2rpx solid #D8D6D1;
	        color: #333;
	      }
				button:active{
					opacity: 0.6;
				}
	      .book-catalogue{
	        width: 238rpx;
					.icon-mulu1{
						font-size: 28rpx;
					}
	      }
				button-disabled{
					color: #999;
					background-color: #E5E5E5;
				}
	    }
	  }
	  .catalogue-menu{
	    width: 100%;
	    background-color: #F5EEE9;
	    position: fixed;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    z-index: 100;
	    opacity: 0;
	    transform: translate3d(-100%, 0, 0);
	    transition: all .3s;
	    .cata-head{
	      display: flex;
	      justify-content: space-between;
	      align-items: center;
	      height: 90rpx;
	      padding: 0 40rpx;
	      margin-bottom: 30rpx;
	    }
	    .cata-main{
	      width: 100%;
	      // padding-left: 40rpx;
	      .cata-cont{
					display: flex;
					justify-content: space-between;
					align-items: center;
	        // width: 100%;
	        height: 100rpx;
	        line-height: 100rpx;
	        // margin-bottom: 15rpx;
	        padding: 10rpx 40rpx;
	        border-top: 2rpx solid transparent;
	        .cata-number{
	          font-size: 24rpx;
	          color: #666;
	        }
	        .cata-title{
	          margin-left: 30rpx;
	          font-size: 30rpx;
	        }
	        &.active-title{
	          color: #FF5052;
	          .cata-number{
	            color: #FF5052;
	          }
	        }
	      }
	      .cata-cont:last-child{
	        border-bottom: 2rpx solid transparent;
	      }
	    }
	    .close-btn{
	      width: 100%;
	      height: 96rpx;
	      // border-top: 2rpx solid #E7E3DE;
	      button{
	        height: 100%;
	        line-height: 96rpx;
	        font-size: 30rpx;
	        color: #333;
	        border: none;
	      }
	    }
	  }
	  .setting{
	    width: 100%;
	    height: 340rpx;
	    background-color: rgba(0, 0, 0, 0.7);
	    // background-color: #323231;
	    position: fixed;
	    bottom: 0;
	    left: 0;
	    z-index: 19;
	    opacity: 0;
	    transform: translate3d(0, 100%, 0);
	    transition: all .3s;
	    .setting-bottom{
	      padding: 0 30rpx;
	      .set-head{
	        display: flex;
	        justify-content: space-between;
	        align-items: center;
	        width: 100%;
	        margin-top: 50rpx;
	        font-size: 30rpx;
	        button{
	          width: 160rpx;
	          height: 50rpx;
	          line-height: 50rpx;
	          font-size: 30rpx;
	          color: #fff;
						border: 2rpx solid #74716C;
	          // border-color: #74716C;
	        }
					button:active{
						opacity: .6;
					}
	        button-disabled{
	          color: #9A9691;
	          background-color:transparent;
						border-color: #9A9691;
	        }
	        .title{
	          width: 300rpx;
	          text-align: center;
	          font-weight: bold;
	          color: #fff;
	        }
	      }
	      .set-fontsize{
	        display: flex;
	        width: 100%;
	        margin-top: 50rpx;
	        .fontsize-title{
	          padding-right: 23rpx;
	          color: #fff;
	          font-size: 30rpx;
	        }
	        view{
	          width: 160rpx;
	          height: 50rpx;
	          line-height: 40rpx;
	          text-align: center;
	          box-sizing: border-box;
	          border: 2rpx solid #9A9691;
	          color: #fff;
	          border-radius: 30rpx;
	          .iconfont{
	            font-size: 45rpx;
	          }
	        }
	        view:last-child{
	          margin-left: 71rpx;
	        }
	        .fontsize-disable{
	          color: #9A9691;
	          border-color: #5A5855;
	        }
	      }
	      .set-icons{
	        display: flex;
	        justify-content: space-between;
	        width: 84%;
	        margin: 0 auto;
	        margin-top: 75rpx;
	        color: #fff;
	        .text{
	          margin-top: 20rpx;
	          font-size: 30rpx;
	          font-weight: bold;
	        }
	        .iconfont{
	          font-size: 60rpx;
						text-align: center;
	        }
	      }
	    }
	  }
	  .right-btn{
	    width: 183rpx;
	    height: 200rpx;
	    position: fixed;
	    bottom: 390rpx;
	    right: 0;
	    z-index: 19;
	    opacity: 0;
	    transform: translate3d(100%, 0, 0);
	    transition: all .3s;
	    view{
	      width: 183rpx;
	      height: 60rpx;
	      margin-top: 32rpx;
	      line-height: 60rpx;
	      text-align: center;
	      background-color: rgba(0, 0, 0, 0.7);
	      color: #fff;
	      font-size: 28rpx;
	      border-top-left-radius: 30rpx;
	      border-bottom-left-radius: 30rpx;
	    }
	  }
	  .slideInBottom{
	    opacity: 1;
	    transform: translate3d(0, 0, 0);
	  }
	  .slideInTop{
	    opacity: 1;
	    transform: translate3d(0, 0, 0);
	  }
	  // .slideInRight{
	  //   opacity: 1;
	  //   transform: translate3d(0, 0, 0);
	  // }
	}
	
	.night-mode{
	  background-color: #292929;
	  .wrapper{
	    color: #9A9691;
	    .bottom-btn{
	      button{
	        background-color: #292929;
	        border-color: #9A9691;
	        color: #9A9691;
	      }
				// button[disabled]
	      button-disabled{
	        color:#666;
	        background-color: #292929;
	        border-color: #666;
	      }
	    }
	  }
	  .catalogue-menu{
	    background-color: #292929;
	    .cata-head{
	      color: #9A9691;
	    }
	    .cata-main{
	      .cata-cont{
	        color: #9A9691;
	        border-color: #9A9691;
	      }
	      .cata-cont:last-child{
	        border-color: #9A9691;
	      }
	    }
	    .close-btn{
	      button{
	        color: #9A9691;
	      }
	    }
	  }
	}
</style>
