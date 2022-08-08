import * as Api from './api'
import store from './store/index.js'
/**
 * 获取权限，自动登录
 * 
  */
async function createAutoLogin(call_back) {
  var provider = ''
  var para = {}
  uni.getProvider({
  	service: 'oauth',
  	success: (res) => {
  		provider = res.provider
  			uni.login({
  				provider,
  				// scopes: 'auth_base',
  				success: async res => {
  					para.code = res.code
            //#ifdef MP-KUAISHOU
            let res2 = await Api.login.KSLogin(para)
            if (res2.code === 200) {
            	let user = res2.data
              // console.log(user,'登录')
            	await store.commit('setUser',user)
              call_back && call_back()
            }
            //#endif
  				}
  			})
  		// }
  	}
  })
  
  // let para = {
    
  // }
  // global.$api.login.AutoLoginKuaishou(para).then(async (res) => {
  //   if (res.code === 200) {
  //     let userId = res.data.user_id
  //     let token = res.data.api_token
  //     await new Promise((resolve, reject)=>{
  //       storage.set({
  //         key: 'userId',
  //         value: userId,
  //         success: resolve
  //       })
  //     })
  //     await new Promise((resolve, reject)=>{
  //       storage.set({
  //         key: 'token',
  //         value: token,
  //         success: resolve
  //       })
  //     })
  //     call_back && call_back()
      
  //   }
  // })
} 

export default {
  createAutoLogin
}
