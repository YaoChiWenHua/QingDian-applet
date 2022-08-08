<template>
	<view class="collect-list" :style="{'marginBottom':selectColl?'98rpx':'0rpx'}">
	  <view class="bookshelf-head">
	    <text>共 {{cTotal}} 本</text>
	    <block>
	      <text class="edit-button" @click="selectCollShow">{{selectColl?'取消':'编辑'}}</text>
	    </block>
	  </view>
	  <block v-for="(item, index) in collectlist" :key="index">
	    <view class="item-book" @click="handleChecked(item)">
	      <view class="radio-btn" v-show="selectColl">
					<radio color="#ff5052" :checked="item.checked"></radio>
	      </view>
				<view class="read-book">
				  <text class="title">{{item.book_title}}</text>
				  <text>作者：{{item.pen_name}}</text>
				</view>
			</view>	
	  </block>
		<view v-show="selectColl" class="delete-button">
		  <text class="cancel-btn" @click="selectCollHide">取消</text>
		  <text @click="deleteCollect">删除</text>
		</view>
	</view>
</template>

<script>
import {mapGetters} from 'vuex'
	
export default {
	data() {
		return {
			collectlist: [],
			collectBookId: '',
			cTotal: 0,
			selectColl: false,
		}
	},
	computed: {
		...mapGetters([
			'userId'
		])
	},
	onLoad() {
		this._initCollectlist()
	},
	methods: {
		async _initCollectlist() {
			let para = {
				user_id: this.userId,
				page: 1,
				rows: 100
			}
			let res = await this.$api.bookshelf.BookCaseList(para)
			if (res.code === 200) {
				res.data.forEach((item, index) => {
				  item.checked = false
				})
				this.cTotal = res.extra.count
				this.collectlist = res.data
			} else {
				this.cTotal = 0
				this.collectlist = []
			}
		},
		gotoRead(item) {
			uni.navigateTo({
				url: `../read/otherread?id=${item.flow_id}&bid=${item.book_id}`
			})
		},
		selectCollShow() {
		  this.selectColl = !this.selectColl
		},
		selectCollHide() {
		  this.selectColl = false
		},
		async deleteCollect() {
		  this.collectlist.forEach((item, index) => {
		    if (item.checked) {
		      this.collectBookId += item.book_id + ','
		    }
		  })
		  this.collectBookId = this.collectBookId.slice(0, -1)
		  console.log(this.collectBookId)
		  if (this.collectBookId) {
		    let para = {
		      user_id: this.userId,
		      book_id: this.collectBookId
		    }
		    let res = await this.$api.bookshelf.DeleteUserCase(para)
		    if (res.code === 200) {
		      this.collectBookId = ''
		      this.collectlist = []
					this._initCollectlist()
					this.selectColl = false
		    } else {
		      uni.showToast({
						icon: 'none',
		        title: res.msg
		      })
					this.collectBookId = ''
		    }
		  } else {
		    uni.showToast({
					icon: 'none',
		      title: '请选择需要删除的书籍！'
		    })
		  }
		},
		handleChecked(item) {
			if (this.selectColl) {
				item.checked = !item.checked
			} else {
				this.gotoRead(item)
			}
		}
		
	}
}
</script>

<style lang="less" scoped>
@import '../../common/less/const';
	
	.collect-list{
		width: 100%;
		.bookshelf-head{
			display: flex;
		  justify-content: space-between;
		  align-items: center;
		  // width: 100%;
		  height: 85rpx;
		  padding: 0 30rpx;
		  margin-bottom: 10rpx;
		  background-color: #F8F5F7;
			font-size: 34rpx;
		  .edit-button{
				display: inline-block;
		    padding: 5rpx 15rpx;
		    border: 1rpx solid #B2AEAB;
		    border-radius: 10rpx;
				font-size: 32rpx;
		  }
		}
		.item-book{
			display: flex;
		  align-items: center;
		  margin: 0 30rpx;
		  padding: 20rpx 0;
		  border-bottom: 1rpx solid #E8E6E3;
		  .read-book{
				display: flex;
				flex-direction: column;
				width: 100%;
		    text{
		      font-size: 28rpx;
		    }
		    .title{
		      font-size: 34rpx;
		      color: #333;
		    }
		  }
		}
		.delete-button{
			display: flex;
		  justify-content: center;
		  align-items: center;
		  width: 100%;
		  height: 98rpx;
		  background-color: #fff;
		  position: fixed;
		  bottom: 0;
		  left: 0;
			z-index: 10;
		  text{
		    width: 237rpx;
		    height: 80rpx;
				line-height: 80rpx;
		    text-align: center;
		    color: #fff;
		    background-color: @color-background;
		    border-radius: 10rpx;
		  }
		  .cancel-btn{
		    margin-right: 53rpx;
		    color: #333;
		    background-color: #E8E6E3;
		  }
		}
	}
</style>
