<template>
	<view class="rank">
	  <block v-for="(item, index) in ranklist" :key="index">
	    <view class="box" @click="gotoRankList(item)">
	      <view class="box-list">
	        <view>
	          <text class="num-color">1、</text>
	          <text>{{item.list[0].book_title}}</text>
	        </view>
	        <view>
	          <text class="num-color">2、</text>
	          <text>{{item.list[1].book_title}}</text>
	        </view>
	        <view>
	          <text class="num-color">3、</text>
	          <text>{{item.list[2].book_title}}</text>
	        </view>
	      </view>
	      <view class="iconfont">&#xe70c;</view>
	    </view>
	  </block>
	</view>
</template>

<script>
export default {
	data() {
		return {
			channel: '',
			ranklist: []
		}
	},
	onLoad(option) {
		this.channel = option.channel
		this._initData()
	},
	onReady() {
		
	},
	methods: {
		async _initData() {
		  let para = {
		    channel: this.channel
		  }
		  const res = await this.$api.rank.RankList(para)
		  if (res.code === 200) {
		    this.ranklist = res.data
		  }
		},
		gotoRankList(item) {
			uni.navigateTo({
				url: `./ranklist?id=${item.id}&title=${item.title}`
			})
		}
		
	}
}	
</script>

<style lang="less" scoped>
@import '../../common/less/const.less';
@import '../../common/less/mixin';

	.rank{
	  padding: 0 30rpx;
	  .box{
			display: flex;
	    justify-content: flex-end;
	    align-items: center;
	    width: 100%;
	    height: 192rpx;
	    margin-top: 35rpx;
	    background-repeat: no-repeat;
	    background-position: center;
			background-size: cover;
	    .box-list{
	      width: 52%;
				>view{
					.no-wrap();
				}
	      text{
	        font-style: italic;
	        margin-bottom: 15rpx;
	        font-size: 24rpx;
	        color: #333;
	      }
	    }
	  }
		.box:first-child{
			background-image: url('~@/static/img-rq.png');
			.num-color{
				color: #E335C4;
			}
		}
	 .box:nth-child(2){
			background-image: url('~@/static/img-rs.png');
			.num-color{
				color: #009AB2;
			}
		}
		.box:last-child{
			background-image: url('~@/static/img-bs.png');
			.num-color{
				color: #EE8A4E;
			}
		}
	}
</style>
