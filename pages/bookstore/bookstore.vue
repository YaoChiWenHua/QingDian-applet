<template>
	<view class="book-store">
		<view class="store-head">
			<view class="head-style">
			  <view class="icon icon-fenlei"></view>
			  <view class="head-right">
			    <view>分类：</view>
			    <block v-for="(item, index) in classifyList" :key="index">
			      <text :class="{'active-text':classIndex===index}" @click="classItem(item, index, 1)">{{item.name}}</text>
			    </block>
			  </view>
			</view>
			<view class="head-style">
			  <view class="icon icon-jindu"></view>
			  <view class="head-right">
			    <view>进度：</view>
			    <block v-for="(item, index) in progressList" :key="index">
			      <text :class="{'active-text':progressIndex===index}" @click="classItem(item, index, 2)">{{item.name}}</text>
			    </block>
			  </view>
			</view>
			<view class="head-style">
			  <view class="icon icon-shuxing"></view>
			  <view class="head-right">
			    <view>属性：</view>
			    <block v-for="(item, index) in attrList" :key="index">
			      <text :class="{'active-text':attrIndex===index}" @click="classItem(item, index, 3)">{{item.name}}</text>
			    </block>
			  </view>
			</view>
			<view class="head-style">
			  <view class="icon icon-paixu"></view>
			  <view class="head-right">
			    <view>排序：</view>
			    <block v-for="(item, index) in sortList" :key="index">
			      <text :class="{'active-text':sortIndex===index}" @click="classItem(item, index, 4)">{{item.name}}</text>
			    </block>
			  </view>
			</view>
		</view>
		<view class="list-main">
			<block v-for="(item, index) in booklist" :key="index">
			  <navigator class="store-item" :url="`../detail/detail?id=${item.book_id}`">
			    <image :src="`${base}${item.book_id}/${item.cover}`" :lazy-load="true"></image>
			    <view class="item-right">
			      <text class="right-title">{{item.book_title}}</text>
			      <view class="right-bottom">
			        <text>{{item.category_title}}</text>
			        <text class="blue">{{item.is_finish==='Y'?'已完结':'连载中'}}</text>
			        <text class="orange">{{item.word_count | wordsNum}}</text>
			      </view>
			      <text>最新：{{item.last_update_chapter_name}}</text>
			      <text>更新时间：{{item.last_update_chapter_date}}</text>
			    </view>
			  </navigator>
			</block>
			<view class="more">
			  <text v-show="loadingShow">正在加载中...</text>
			  <text v-show="!loadingShow">没有更多书籍</text>
			</view>
		</view>
	</view>
</template>

<script>
import {coverUrl} from '../../api/base'
import {wordsNumMixin} from '../../common/js/mixin'
	
export default {
	mixins: [wordsNumMixin],
	data() {
		return {
			base: coverUrl,
			channel: '',
			booklist: [],
			classifyList: [],
			classIndex: 0,
			progressList: [
			  {id: '', name: '全部'},
			  {id: 'N', name: '连载'},
			  {id: 'Y', name: '完结'}
			],
			progressIndex: 0,
			attrList: [
			  {id: '', name: '全部'},
			  {id: 'N', name: '免费'},
			  {id: 'Y', name: '付费'}
			],
			attrIndex: 0,
			sortList: [
			  {id: 'new', name: '最新'},
			  {id: 'click', name: '点击'}
			],
			sortIndex: 0,
			loadingShow: true,
			page: 1,
			total: null,
			category_id: '',
			is_finish: '',
			is_vip: '',
			hits: '',
			time: 'desc'
		}
	},
	onLoad(option) {
		this.channel = option.channel
		this._initClassifyData()
		this._initData()
	},
	onReady() {
		
	},
	onReachBottom() {
		this.loadMoreList()
	},
	methods: {
		async _initClassifyData() {
		  let para = {
		    channel: this.channel
		  }
		  let res = await this.$api.store.GetBookCategory(para)
		  if (res.code === 200) {
		    this.classifyList = res.data
		    this.classifyList.unshift({
		      id: '',
		      name: '全部'
		    })
		  } 
		},
		async _initData() {
		  let para = {
		    channel: this.channel,
		    category_id: this.category_id,
		    is_finish: this.is_finish,
		    is_vip: this.is_vip,
		    hits: this.hits,
		    time: this.time,
		    page: this.page
		  }
		  let res = await this.$api.store.Index(para)
		  if (res.code === 200) {
		    let data = res.data
		    let extra = res.extra
		    if (extra.count < extra.rows) {
		      this.loadingShow = false
		    }
		    this.total = extra.count
		    this.booklist = this.booklist.concat(data)
		  } else {
		    this.loadingShow = false
		  }
		},
		classItem(item, index, flag) {
		  if (flag === 1) {
		    this.classIndex = index
		    this.category_id = item.id
		  } else if (flag === 2) {
		    this.progressIndex = index
		    this.is_finish = item.id
		  } else if (flag === 3) {
		    this.attrIndex = index
		    this.is_vip = item.id
		  } else if (flag === 4) {
		    this.sortIndex = index
		    if (item.id === 'new') {
		      this.time = 'desc'
		      this.hits = ''
		    } else {
		      this.time = ''
		      this.hits = 'desc'
		    }
		  }
		  this.booklist = []
		  this.page = 1
		  this.total = null
		  this.loadingShow = true
		  this._initData()
		},
		gotoDetail(id) {
		  // router.push({
		  //   uri: '/pages/detail',
		  //   params: {
		  //     bookId: id,
		  //     clickType: 3
		  //   }
		  // })
		},
		loadMoreList() {
		  let length = this.booklist.length
		  if (length >= this.total) {
		    this.loadingShow = false
		    return
		  } else {
		    this.page++
		    this._initData()
		  }
		}
		
	}
}
</script>

<style lang="less" scoped>
@import '../../common/less/const';
@import '../../common/less/mixin';

	.book-store{
		width: 100%;
		.store-head{
			display: flex;
		  flex-direction: column;
		  // width: 100%;
		  padding: 0 30rpx;
		  margin-bottom: 20rpx;
		  .head-style{
				display: flex;
		    margin-top: 30rpx;
		    .icon{
		      width: 39rpx;
		      height: 39rpx;
		      background-repeat: no-repeat;
		      background-position: center;
		      &-fenlei{
		        background-image: url('~@/static/icons/s-fenlei.png');
		        background-size: 37rpx 35rpx;
		      }
		      &-jindu{
		        background-image: url('~@/static/icons/s-jindu.png');
		        background-size: 38rpx 38rpx;
		      }
		      &-shuxing{
		        background-image: url('~@/static/icons/s-shuxing.png');
		        background-size: 39rpx 37rpx;
		      }
		      &-paixu{
		        background-image: url('~@/static/icons/s-paixu.png');
		        background-size: 30rpx 39rpx;
		      }
		    }
		    .head-right{
					flex: 1;
					display: flex;
		      flex-wrap: wrap;
		      align-items: center;
		      margin-left: 20rpx;
		      >view{
		        font-size: 30rpx;
		        color: #333;
		        font-weight: bold;
		      }
		      >text{
		        margin-right: 30rpx;
		        color: #333;
		        font-size: 28rpx;
		      }
		      .active-text{
		        color: @color-background;
		      }
		    }
		  }
		}
		.list-main{
			width: 100%;
			.store-item{
				display: flex;
			  justify-content: space-between;
				align-items: center;
			  // width: 100%;
			  padding: 22rpx 0;
			  margin: 0 30rpx;
			  border-top: 1rpx solid #EDECEA;
			  image{
			    width: 145rpx;
			    height: 201rpx;
					box-shadow: @color-img;
			  }
			  .item-right{
					display: flex;
			    width: 75%;
					height: 201rpx;
			    flex-direction: column;
			    justify-content: space-around;
			    >text{
			      font-size: 28rpx;
			      .no-wrap();
			    }
			    .right-title{
			      font-weight: bold;
			      color: #333;
			    }
			    .right-bottom{
						display: flex;
			      align-items: center;
			      padding-bottom: 3rpx;
			      text{
			        padding: 3rpx 10rpx;
			        margin-right: 20rpx;
			        border: 1rpx solid #3bcb78;
			        color: #3bcb78;
			        border-radius: 5rpx;
			        font-size: 24rpx;
			      }
			      .blue{
			        color: #00A1E8;
			        border-color: #00A1E8;
			      }
			      .orange{
			        color: #FF8F00;
			        border-color: #FF8F00;
			      }
			    }
			  }
			}
			.more{
				display: flex;
			  justify-content: center;
			  padding: 10rpx 0;
			  >text{
			    font-size: 24rpx;
			  }
			}
		}
	}
</style>
