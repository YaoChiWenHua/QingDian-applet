<template>
  <view class="bookshelf">
    <view class="tabs-nav">
      <text :class="{'active-tab':tabName==='sc'}" @click="handleTabNav('sc')">我的收藏</text>
      <text :class="{'active-tab':tabName==='yd'}" @click="handleTabNav('yd')">最近阅读</text>
    </view>
    <view class="bookshelf-container">
      <view class="collect-list" v-show="tabName==='sc'" :style="{'marginBottom':selectColl?'98rpx':'0rpx'}">
        <view class="bookshelf-head">
          <text>共 {{cTotal?cTotal:0}} 本</text>
          <block>
            <text class="edit-button" @click="selectCollShow">{{selectColl?'取消':'编辑'}}</text>
          </block>
        </view>
        <block v-for="(item, index) in collectlist" :key="index">
          <view class="item-book">
            <view class="radio-btn" v-show="selectColl">
							<radio color="#ff5052" :checked="item.checked" @tap="handleChecked(item)"/>
            </view>
            <view class="collect-book">
              <image :src="`${base}${item.book_id}/${item.cover}`" :lazy-load="true"></image>
              <view class="collect-text">
                <text class="title">{{item.book_title}}</text>
                <text>作者：{{item.pen_name}}</text>
                <text v-if="item.read_chapter_sort">读至：{{item.read_chapter_title}}</text>
                <text v-else>尚未阅读</text>
                <text>更新至：{{item.last_update_chapter_title}}</text>
                <text v-if="item.read_chapter_sort" class="collect-btn" @click="gotoRead(item.book_id,item.read_chapter_sort)">继续阅读</text>
                <text v-else class="collect-btn" @click="gotoRead(item.book_id,0)">开始阅读</text>
              </view>
              <text v-if="item.is_recommend==='Y'" class="icon-recommend"></text>
            </view>
          </view>
        </block>
        <view class="load-more">
          <text v-show="collectLoad">加载更多</text>
          <text v-show="!collectLoad">没有更多了~</text>
        </view>
      </view>
      <view class="read-list" v-show="tabName==='yd'" :style="{'marginBottom':selectRead?'98rpx':'0rpx'}">
        <view class="bookshelf-head">
          <text>共 {{rTotal?rTotal:0}} 本</text>
          <block>
            <text class="edit-button" @click="selectReadShow">{{selectRead?'取消':'编辑'}}</text>
          </block>
        </view>
        <block v-for="(item, index) in readlist" :key="index">
          <view class="item-book">
            <view class="radio-btn" v-show="selectRead">
							<radio color="#ff5052" :checked="item.checked" @tap="handleChecked(item)"/>
            </view>
            <view class="read-book" @click="gotoRead(item.book_id,item.read_chapter_sort)">
              <text class="title">{{item.book_title}}</text>
              <text>最近阅读：{{item.read_chapter_title}}</text>
            </view>
          </view>
        </block>
        <view class="load-more">
          <text v-show="readLoad">加载更多</text>
          <text v-show="!readLoad">没有更多了~</text>
        </view>
      </view>
    </view>
    <view v-show="selectColl" class="delete-button">
      <text class="cancel-btn" @click="selectCollHide">取消</text>
      <text @click="deleteCollect">删除</text>
    </view>
    <view v-show="selectRead" class="delete-button">
      <text class="cancel-btn" @click="selectReadHide">取消</text>
      <text @click="deleteRead">删除</text>
    </view>
  </view>
</template>

<script>
import {coverUrl} from '../../api/base'
import {mapGetters} from 'vuex'

export default {
	data() {
		return {
			base: coverUrl,
			channel: '',
			tabName: 'sc',
			collectlist: [],
			cPage: 1,
			cTotal: null,
			collectLoad: true,
			selectColl: false,
			collectBookId: '',
			readlist: [],
			rPage: 1,
			rTotal: null,
			readLoad: true,
			selectRead: false,
			readBookId: ''
		}
	},
	onLoad(option) {
		this.channel = uni.getStorageSync('channel') || 'man'
		this.tabName = option.id || 'sc'
		this._initCollect()
		this._initRead()
	},
	onReady() {
		
	},
	onShow() {
		// this._initCollect()
		// this._initRead()
	},
	onReachBottom() {
		if(this.tabName === 'sc') {
			this.collectMoreList()
		} else {
			this.readMoreList()
		}
	},
	computed: {
		...mapGetters([
			'userId'
		])
	},
	methods: {
		async _initCollect() {
		  let para = {
		    channel: this.channel,
		    user_id: this.userId,
		    page: this.cPage
		  }
		  let res = await this.$api.bookshelf.BookCaseList(para)
		  if (res.code === 200) {
		    let data = res.data
		    let extra = res.extra
		    if (extra.count < extra.rows) {
		      this.collectLoad = false
		    }
		    data.forEach((item, index) => {
		      // this.$set(item, 'checked', false)
		      // item.push({
		      //   checked: false
		      // })
		      item.checked = false
		    })
		    this.cTotal = extra.count
		    this.collectlist = this.collectlist.concat(data)
		  } else {
		    this.collectLoad = false
		  }
		},
		async _initRead() {
		  let para = {
		    channel: this.channel,
		    user_id: this.userId,
		    page: this.rPage,
		    rows: 20
		  }
		  let res = await this.$api.user.ReadBookList(para)
		  if (res.code === 200) {
		    let data = res.data
		    let extra = res.extra
		    if (extra.count < extra.rows) {
		      this.readLoad = false
		    }
		    data.forEach((item, index) => {
		      // this.$set(item, 'checked', false)
		      // item.push({
		      //   checked: false
		      // })
		      item.checked = false
		    })
		    this.rTotal = extra.count
		    this.readlist = this.readlist.concat(data)
		  } else {
		    this.readLoad = false
		  }
		},
		collectMoreList() {
		  let length = this.collectlist.length
		  if (length >= this.cTotal) {
		    this.collectLoad = false
		    return
		  } else {
		    this.cPage++
		    this._initCollect()
		  }
		},
		readMoreList() {
		  let length = this.readlist.length
		  if (length >= this.rTotal) {
		    this.readLoad = false
		    return
		  } else {
		    this.rPage++
		    this._initRead()
		  }
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
		      this.collectLoad = true
		      this.cPage = 1
		      this.collectlist = []
		      this._initCollect()
		    } else {
		      uni.showToast({
						icon: 'none',
		        title: res.msg
		      })
		    }
		  } else {
		    uni.showToast({
					icon: 'none',
		      title: '请选择需要删除的书籍！'
		    })
		  }
		},
		async deleteRead() {
		  this.readlist.forEach((item, index) => {
		    if (item.checked) {
		      this.readBookId += item.book_id + ','
		    }
		  })
		  this.readBookId = this.readBookId.slice(0, -1)
		  console.log(this.readBookId)
		  if (this.readBookId) {
		    let para = {
		      user_id: this.userId,
		      book_id: this.readBookId
		    }
		    let res = await this.$api.user.DeleteUserRead(para)
		    if (res.code === 200) {
		      this.readBookId = ''
		      this.readLoad = true
		      this.rPage = 1
		      this.readlist = []
		      this._initRead()
		    } else {
		      uni.showToast({
						icon: 'none',
		        title: res.msg
		      })
		    }
		  } else {
		    uni.showToast({
					icon: 'none',
		      title: '请选择需要删除的书籍！'
		    })
		  }
		},
		gotoRead(bId, cId) {
		  // router.push({
		  //   uri: '/pages/read',
		  //   params: {
		  //     bId,
		  //     cId,
		  //     clickType
		  //   }
		  // })
			uni.navigateTo({
				url: `../read/read?bId=${bId}&cId=${cId}`
			})
		},
		handleChecked(item) {
		  item.checked = !item.checked
		},
		selectCollShow() {
		  this.selectColl = !this.selectColl
		},
		selectCollHide() {
		  this.selectColl = false
		},
		selectReadShow() {
		  this.selectRead = !this.selectRead
		},
		selectReadHide() {
		  this.selectRead = false
		},
		handleTabNav(name) {
		  this.tabName = name
		}
		
	}
}
</script>

<style lang="less" scoped>
@import '../../common/less/const.less';
@import '../../common/less/mixin.less'; 

  .bookshelf{
    width: 100%;
    .tabs-nav{
			display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 88rpx;
			line-height: 88rpx;
      // padding: 0 30rpx;
      background-color: #fff;
      position: fixed;
      top: 0;
      left: 0;
			z-index: 10;
      text{
        width: 190rpx;
        height: 88rpx;
        text-align: center;
        color: #333;
        font-size: 34rpx;
				border-bottom: 4rpx solid transparent;
      }
      .active-tab{
        border-bottom-color: @color-background-c;
      }
    }
    .bookshelf-container{
      width: 100%;
      padding-top: 88rpx;
      // padding-bottom: 96rpx;
      .collect-list, .read-list{
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
          /* justify-content: center; */
          align-items: center;
          // width: 100%;
          margin: 0 30rpx;
          padding: 20rpx 0;
          border-bottom: 1rpx solid #E8E6E3;
          .radio-btn{
            margin-right: 10rpx;
          }
          .collect-book{
						display: flex;
            position: relative;
						// width: 100%;
            >image{
              width: 176rpx;
              height: 233rpx;
              border: 1rpx solid #F2F1EF;
            }
            .collect-text{
							flex: 1;
							display: flex;
              flex-direction: column;
              justify-content: space-between;
							// width: calc(100% - 176rpx);
              margin-left: 20rpx;
              >text{
                font-size: 24rpx;
                color: #333;
								// .no-wrap();
								.no-wrap-multi(1)
              }
              .title{
                font-size: 30rpx;
              }
              .collect-btn{
                width: 162rpx;
                height: 48rpx;
								line-height: 48rpx;
                text-align: center;
                color: @color-background;
                border: 1rpx solid @color-background;
                border-radius: 10rpx;
                font-size: 28rpx;
              }
            }
          }
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
          .icon-recommend{
            width: 81rpx;
            height: 81rpx;
            background: url('~@/static/icons/bookshelf-tj.png') no-repeat center;
						background-size: cover;
            position: absolute;
            top: 0;
            left: 0;
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

