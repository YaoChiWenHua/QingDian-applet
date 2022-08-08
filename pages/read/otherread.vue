<template>
	<view class="other-read">
		<view class="read-content" id="sllo_w" v-if="Test_clothes">
			<block v-for="(item, index) in new_content" :key="index">
				<view class="erview">{{item}}</view>
			</block>
      <block v-if="incentive">
        <view class="Genuine">支持正版阅读，激励作者创作</view>
        <view class="purchase" @click="gotoRecharge">立即购买</view>
      </block>
      
		</view>
    <view class="read-content" v-else>
    	<block v-for="(item, index) in book.content" :key="index">
    		<view class="erview">{{item}}</view>
    	</block>
    </view>
		<!-- <view class="other-bottom">
			<view v-if="flag==0" @click="handleFlag">阅读全文</view>
			<view v-else @click="handleCollect">{{collect?'已加入收藏':'加入收藏'}}</view>
		</view> -->
	</view>
</template>

<script>
import {baseUrl} from '../../api/base'
import {mapGetters} from 'vuex'
	
export default {
	data() {
		return {
      to_type:1,
      incentive:false,
      fullPath:'',//当前页面路由
      scrollTop_tion:0,
      Test_clothes:true,
      new_content:[],
			flowId: '',
			bookId: '',
			cId: '',
			book: {},
			title: '',
			flag: 1,
			collect: false
		}
	},
  watch:{
    Test_clothes(val){
      if(!val){
        uni.pageScrollTo({
  　　　　　duration: 0,// 过渡时间
  　　　　　scrollTop: this.scrollTop_tion,// 滚动的实际距离
  　　　 })
      }
      
    }
  },
	onLoad(option) {
		this.flowId = option.id
    this.to_type = option.totype
		this.bookId = option.bid == 'null' ? 0 : option.bid
		// this.cId = option.cid ? option.cid : 2
    // this.Test_clothes = option.type == 1 ? false : true
		this._initData()
		if (this.userId) {
			this.getIsBookShelf()
		}
	},
  async onUnload(){
    console.log('App onUnload----')
    let para = {
    	user_id: this.userId,
    	book_id: this.bookId,
      line:this.scrollTop_tion
    }
    let res = await this.$api.read.AddReadRecord(para)
    if (res.code === 200) {
      
    }
  },
  async onHide() {
    console.log('App Hide------------------------')
    let para = {
    	user_id: this.userId,
    	book_id: this.bookId,
      line:this.scrollTop_tion
    }
    let res = await this.$api.read.AddReadRecord(para)
    if (res.code === 200) {
      
    }
  },
  onPageScroll(e) { //nvue暂不支持滚动监听，可用bindingx代替
    this.scrollTop_tion = Math.floor(e.scrollTop) 
  	// console.log("滚动距离为：" + Math.floor(e.scrollTop));
  },
	computed: {
		...mapGetters([
			'userId'
		])
	},
	methods: {
    gotoRecharge() {
    	uni.navigateTo({
    		url: `/pages/recharge/recharge?type=1&bid=${this.bookId}`
    	})
    },
		async _initData() {
      var _this = this
      uni.showLoading({
      	title: '加载中'
      });
			// let para = {
			// 	flow_id: this.flowId
			// }
			let para1 = {
				user_id: this.userId,
				book_id: this.bookId,
			}
			// let flowRes = await this.$api.read.FlowInfo(para)
			let res = await this.$api.read.Chapter(para1)
			// if (flowRes.code === 200) {
			// 	let data = flowRes.data
			// 	this.title = data.title
			// 	this.imgUrl = `${baseUrl}${data.cover_large}`
			// 	this.flag = data.flag
			// }
			if (res.code === 200) {
				this.book = res.data
        this.Test_clothes = this.book.is_user_vip == 'Y' ? false : true
        for(var i = 0; i < this.book.content.length;i++){
          if(i<=this.book.vip_line){
            this.new_content.push(this.book.content[i])
          }else{
            break
          }
        }
        if(this.book.is_user_vip == 'Y'){//Y等于是会员
          if(_this.to_type == 1){
            setTimeout(function(){
              uni.pageScrollTo({
        　　　　　duration: 400,// 过渡时间
        　　　　　scrollTop: _this.book.line,// 滚动的实际距离
        　　　 })
              _this.incentive = true
              uni.hideLoading();
            },1700);
          }else{
            setTimeout(function(){
              _this.incentive = true
              uni.hideLoading();
            },1200);
          }
          
        }else{
          if(_this.to_type == 1){
            setTimeout(function(){
              uni.pageScrollTo({
        　　　　　duration: 400,// 过渡时间
        　　　　　scrollTop: _this.book.line,// 滚动的实际距离
        　　　 })
              _this.incentive = true
              uni.hideLoading();
            },750);
          }else{
            setTimeout(function(){
              _this.incentive = true
              uni.hideLoading();
            },550);
          }
          
        }
        
        
			}else{
        setTimeout(function(){uni.hideLoading();},400);
      }
		},
		// handleFlag() {
		// 	uni.navigateTo({
		// 		url: `../read/read?bId=${this.bookId}&cId=${this.cId}`
		// 	})
		// },
		// async handleCollect() {
		// 	if (this.collect) return
		// 	if (this.userId) {
		// 	  let para = {
		// 	    user_id: this.userId,
		// 	    book_id: this.bookId,
		// 			flow_id: this.flowId
		// 	  }
		// 		let res = await this.$api.bookshelf.AddUserCase(para)
		// 		if (res.code === 200) {
		// 			this.collect = true
		// 		} else {
		// 			uni.showToast({
		// 			  title: '加入失败',
		// 			  icon: 'none',
		// 			  duration: 2000
		// 			})
		// 			this.collect = false
		// 		}
		// 	} else {
		// 	  uni.showToast({
		// 	    icon: 'none',
		// 	    title: '请先登录',
		// 	    duration: 2000,
		// 			success: () => {
		// 				uni.switchTab({
		// 					url: '../user/user'
		// 				})
		// 			}
		// 	  })
		// 	}
		// },
		async getIsBookShelf() {
		  let para = {
		    user_id: this.userId,
		    book_id: this.bookId,
				flow_id: this.flowId
		  }
			let res = await this.$api.bookshelf.BookIsCase(para)
			if (res.code === 200) {
				this.collect = res.data.is_case === 'Y' ? true : false
			}
		}
		
	}
}
</script>

<style lang="less">
@import '../../common/less/const';
@import '../../common/less/mixin';
	
	.other-read{
		width: 100%;
		background-color: #F5EEE9;
		.other-head{
			padding: 20rpx 30rpx;
			>text{
				display: inline-block;
				width: 100%;
				text-align: center;
				.no-wrap()
			}
			>image{
				width: 100%;
				margin-top: 10rpx;
			}
		}
		.read-content{
		  padding: 0 30rpx 80rpx 30rpx;
		  .erview{
		    color: #333;
		    line-height: 1.5;
		    text-indent: 2em;
		    font-size: 36rpx;
				padding: 5rpx 0;
		  }
      .Genuine{
        text-align: center;
        color: #999;
        font-size: 30rpx;
        margin: 40rpx auto;
      }
      .purchase{
        width: 420rpx;
        font-size: 34rpx;
        text-align: center;
        line-height: 90rpx;
        background: coral;
        border-radius: 50rpx;
        margin: 40rpx auto;
        color: #fff;
      }
		}
		.other-bottom{
			width: 100%;
			position: fixed;
			left: 0;
			bottom: 0;
			>view{
				width: 100%;
				height: 80rpx;
				line-height: 80rpx;
				background-color: @color-background-c;
				color: #fff;
				text-align: center;
			}
		}
	}
</style>
