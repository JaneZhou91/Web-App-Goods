const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const app = new Koa();

// log request URL:ss
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// add url-route:
router.get('/', async (ctx, next) => {
    ctx.response.body = 'hello koa !';
});

router.get('/api', async (ctx, next) => {
    ctx.response.body = 'test data';
});

router.get('/api/1', async (ctx, next) => {
    ctx.response.body = 'test data 1';
});

router.get('/api/2', async (ctx, next) => {
    ctx.response.body = {
        a: 1,
        b: '123'
    }
});

router.post('/api/post', async (ctx, next) => {
    console.log(JSON.stringify(ctx.request.body));
    ctx.response.body = JSON.stringify(ctx.request.body);

});

app.use(bodyParser());
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');

