<template>
	<view class="sift">
		<view class="sift-title">精选书籍</view>
		<more-list 
			:list="siftlist" 
			:loadingShow="loadShow">
		</more-list>
	</view>
</template>

<script>
import MoreList from '../../components/morelist.vue'
	
export default {
	components: {
		MoreList
	},
	data() {
		return {
			siftlist: [],
			page: 1,
			total: null,
			loadShow: true
		}
	},
	onLoad() {
		this._initData()
	},
	onReady() {
		// this._initData()
	},
	onReachBottom() {
		this.moreListData()
	},
	methods: {
		async _initData() {
		  let para = {
		    page: this.page
		  }
		  let res = await this.$api.home.HandPickBook(para)
		  if (res.code === 200) {
		    if (res.extra.count < res.extra.rows) {
		      this.loadShow = false
		    }
		    let data = res.data
		    this.total = res.extra.count
		    this.siftlist = this.siftlist.concat(data)
		  } else {
		    this.loadShow = false
		  }
		},
		moreListData() {
			let length = this.siftlist.length
			if (length >= this.total) {
			  this.loadShow = false
			  return
			} else {
			  this.page++
			  this._initData()
			}
		}
	},
}
</script>

<style lang="less">
	.sift{
		width: 100%;
		.sift-title{
			// width: 100%;
		  padding-left: 30rpx;
		  text-align: left;
		  font-size: 42rpx;
		  color: #333;
		}
	}
</style>
