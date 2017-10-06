const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const app = new Koa();

// 首页 —— 广告（超值特惠）
var homeAdData = require('./home/ad.js')
// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./home/list.js')

// log request URL:ss
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// add url-route:
router.get('/api/homead', async (ctx, next) => {
    console.log(homeAdData);
    ctx.response.body = homeAdData;
});

router.get('/api/homelist/:city/:page', async (ctx, next) => {
    const params = this.params
    ctx.response.body = homeListData;
});

// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./search/list.js')
router.get('/api/search/:page/:city/:category/:keyword', async (ctx, next) => {
    const params = this.params
    ctx.response.body = searchListData
})
// 搜索结果页 - 搜索结果 - 两个参数
router.get('/api/search/:page/:city/:category', async (ctx, next) => {
    ctx.response.body = searchListData
})

// 详情页 - 商户信息
var detailInfo = require('./detail/info.js')
router.get('/api/detail/info/:id', async (ctx, next) => {
    ctx.response.body = detailInfo
})
// 详情页 - 用户评论
var detailComment = require('./detail/comment.js')
router.get('/api/detail/comment/:page/:id', async (ctx, next) => {
    ctx.response.body = detailComment
})

router.post('/api/post', async (ctx, next) => {
    console.log(JSON.stringify(ctx.request.body));
    ctx.response.body = JSON.stringify(ctx.request.body);

});

app.use(bodyParser());
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');



