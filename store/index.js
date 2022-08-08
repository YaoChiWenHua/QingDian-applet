import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userid: null,
		token: null,
		userinfo: {}
	},
	getters: {
		userId: state => {
			let userid = state.userid ? state.userid : uni.getStorageSync('userid')
			return userid
		},
		userInfo: state => {
			let obj = state.userinfo
			let user = obj && obj.user_id ? obj : uni.getStorageSync('user')
			return user
		}
	},
	mutations: {
		setUser(state, userInfo) {
			console.log(userInfo,'chulaile ba ----------------')
			state.userid = userInfo.user_id
			state.token = userInfo.api_token
			state.userinfo = userInfo
			uni.setStorageSync('userid', userInfo.user_id)
			uni.setStorageSync('token', userInfo.api_token)
			uni.setStorageSync('user', userInfo)
		},
		setUserInfo(state, userInfo) {
			state.userinfo = userInfo
			uni.setStorageSync('user', userInfo)
		},
		deleteUserInfo(state) {
			state.userid = ''
			state.token = ''
			state.userinfo = ''
			uni.removeStorageSync('userid')
			uni.removeStorageSync('token')
			uni.removeStorageSync('user')
		}
	}
})

export default store