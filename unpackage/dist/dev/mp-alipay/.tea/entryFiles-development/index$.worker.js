if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;


function success() {
require('../../app');
require('../../pages/index/index');
require('../../pages/bookshelf/bookshelf');
require('../../pages/user/user');
require('../../pages/book/book');
require('../../pages/read/read');
require('../../pages/rank/rank');
require('../../pages/female/female');
require('../../pages/male/male');
require('../../pages/more-list/more-list');
require('../../pages/search/search');
require('../../pages/about/about');
require('../../pages/server-center/server-center');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}