import axios from './http'

export const home = {
	// 首页
	Banner(params) {
	  return axios.post(`/index/banner`, params)
	},
	Chart(params) {
	  return axios.post(`/index/chart`, params)
	},
	AdvertList(params) {
	  return axios.post(`/index/advertList`, params)
	},
  FlowList(params) {
    return axios.post(`/index/flowList`, params)
  },
  SearchResult(params) {
    return axios.post(`/index/searchResult`, params)
  },
  SearchHot(params) {
    return axios.post(`/index/searchHot`, params)
  },
  ChartList(params) {
    return axios.post(`/index/chartList`, params)
  },
  HandPickBook(params) {
    return axios.post(`/index/handPickBook`, params)
  },
  LimitFreeTime(params) {
    return axios.post(`/index/limitFreeTime`, params)
  },
  LimitFreeBook(params) {
    return axios.post(`/index/limitFreeBook`, params)
  },
  QuickStart(params) {
    return axios.post(`/index/quickStart`, params)
  },
	Flows(params) {
	  return axios.post(`/index/flows`, params)
	}
}

export const book = {
  Detail(params) {
    return axios.post(`/book/detail`, params)
  },
  Directory(params) {
    return axios.post(`/book/directory`, params)
  },
  RecommendBook(params) {
    return axios.post(`/book/recommendBook`, params)
  },
  SimilarBook(params) {
    return axios.post(`/book/similarBook`, params)
  }
}

export const rank = {
  RankList(params) {
    return axios.post(`/rank/rankList`, params)
  },
  RankDetail(params) {
    return axios.post(`/rank/rankDetail`, params)
  }
}

export const read = {
  Chapter(params) {
    return axios.post(`/chapter/read`, params)
  },
  AddReadRecord(params) {
    return axios.post(`/chapter/addReadRecord`, params)
  },
	FlowInfo(params) {
	  return axios.post(`/chapter/flowInfo`, params)
	}
}

export const bookshelf = {
  BookIsCase(params) {
    return axios.post(`/bookshelf/bookIsCase`, params)
  },
  AddUserCase(params) {
    return axios.post(`/bookshelf/addUserCase`, params)
  },
  DeleteUserCase(params) {
    return axios.post(`/bookshelf/deleteUserCase`, params)
  },
  BookCaseList(params) {
    return axios.post(`/bookshelf/bookCaseList`, params)
  }
}

export const user = {
  UserInfo(params) {
    return axios.post(`/user/userInfo`, params)
  },
  Xieyi(params) {
    return axios.post(`/xieyi/index`, params)
  },
  EditUserInfo(params) {
    return axios.post(`/user/editUserInfo`, params)
  },
  ReadBookList(params) {
    return axios.post(`/user/readBookList`, params)
  },
  DeleteUserRead(params) {
    return axios.post(`/user/deleteUserRead`, params)
  },
  RechargeRecord(params) {
    return axios.post(`/user/rechargeRecord`, params)
  },
  BuyRecord(params) {
    return axios.post(`/user/buyRecord`, params)
  },
  RechargeConfig(params) {
    return axios.post(`/recharge/rechargeConfig`, params)
  },
  CheckUserYear(params) {
    return axios.post(`/user/checkUserYear`, params)
  },
  // 微信支付
  WeixinPay(params) {
    return axios.post(`/Wechatpay/Wechatpay`, params)
  },
  // 微信支付订单查询
  OrderInfo(params) {
    return axios.post(`/recharge/orderInfo`, params)
  },
  // 支付宝支付
  Alipay(params) {
    return axios.get(`/alipay/alipay`, params)
  },
	// 支付宝支付签名
	AlipaySign(params) {
	  return axios.post(`/alipay/sign1`, params)
	},
  // 快手小程序支付
  CreateOrder(params) {
    return axios.get(`/alipay/createOrder`, params)
  },
}

export const chapter = {
  BatchChapterInfo(params) {
    return axios.post(`/chapter/batchChapterInfo`, params)
  },
  AutoSubscript(params) {
    return axios.post(`/chapter/autoSubscript`, params)
  },
  OneBuying(params) {
    return axios.post(`/chapter/oneBuying`, params)
  },
  BulkBuying(params) {
    return axios.post(`/chapter/bulkBuying`, params)
  }
}

export const login = {
  AutoLogin(params) {
    return axios.post(`/login/autoLogin`, params)
  },
  PhoneLogin(params) {
    return axios.post(`/login/phoneLogin`, params)
  },
  GetLoginCode(params) {
    return axios.post(`/sms/getLoginCode`, params)
  },
  BindPhone(params) {
    return axios.post(`/login/bindPhone`, params)
  },
  GetBindPhoneCode(params) {
    return axios.post(`/sms/getBindPhoneCode`, params)
  },
  AccountCancel(params) {
    return axios.post(`/login/accountCancel`, params)
  },
	TTLogin(params) {
	  return axios.post(`/mini_login/ttLogin`, params)
	},
  KSLogin(params) {
    return axios.post(`/mini_login/kuaishouLogin`, params)
  }
}

export const store = {
  Index(params) {
    return axios.post(`/store/index`, params)
  },
  GetBookCategory(params) {
    return axios.post(`/store/getBookCategory`, params)
  }
}

export const voucher = {
  Vouchers(params) {
    return axios.post(`/voucher/vouchers`, params)
  },
  AddVoucher(params) {
    return axios.post(`/voucher/addVoucher`, params)
  },
  Details(params) {
    return axios.post(`/voucher/details`, params)
  }
	
}