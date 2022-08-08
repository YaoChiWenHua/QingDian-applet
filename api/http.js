import store from '../store/index.js'

// const baseUrl = 'https://mini.haokanread.com'
// const baseUrl = 'https://toutiao.datzww.com/mini' //老的
const baseUrl = 'https://kuaishou.mini.anxiashuyuan.com/mini'
// const baseUrl = 'http://quick.datzww.com/mini'

const http = ({ url = '', param = {}, ...other } = {}) => {
	
	const token = store.state.token ? store.state.token : uni.getStorageSync('token')
	
	// uni.showLoading({
	// 	title: '加载中...'
	// })
  // let timeStart = Date.now();
  return new Promise((resolve, reject) => {
    uni.request({
      url: getUrl(url),
      data: param,
      header: {
				// 默认值 ,另一种是 "content-type": "application/x-www-form-urlencoded"
        'content-type': 'application/json', 
				'Authorization': token
      },
      ...other,
      complete: res => {
        // uni.hideLoading()
        // console.log(`耗时${Date.now() - timeStart}`);
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data)
        } else {
          reject(res)
        }
      }
    })
  })
}

const getUrl = url => {
  if (url.indexOf('://') == -1) {
    url = baseUrl + url
  }
  return url
}

// get方法
const get = (url, param = {}) => {
  return http({
    url,
    param
  })
}

const post = (url, param = {}) => {
  return http({
    url,
    param,
    method: 'POST'
  })
}

module.exports = {
  baseUrl,
  get,
  post
}
