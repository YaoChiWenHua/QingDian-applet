<template>
	<view class="rank-list">
		<more-list
		  :list="ranklist"
		  :loading-show="loadShow">
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
			rankId: '',
			ranklist: [],
			page: 1,
			total: null,
			loadShow: true
		}
	},
	onLoad(option) {
		this.rankId = option.id
		uni.setNavigationBarTitle({
			title: option.title
		})
		this._initData()
	},
	onReady() {
		
	},
	onReachBottom() {
		this.moreListData()
	},
	methods: {
		async _initData() {
		  let para = {
		    rank_id: this.rankId,
		    page: this.page
		  }
		  const res = await this.$api.rank.RankDetail(para)
		  if (res.code === 200) {
		    if (res.extra.count < res.extra.rows) {
		      this.loadShow = false
		    }
		    let data = res.data
		    this.total = res.extra.count
		    this.ranklist = this.ranklist.concat(data)
		  } else {
		    this.loadShow = false
		  }
		},
		moreListData() {
		  let length = this.ranklist.length
		  if (length >= this.total) {
		    this.loadShow = false
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
	.rank-list{
		width: 100%;
	}
</style>
