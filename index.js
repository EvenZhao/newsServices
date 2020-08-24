
const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const router = require('./app/router');

const app = new Koa();

app.listen(3000, () => {
	console.log('listen at 3000');
});

app.use(router.routes());
app.use(router.allowedMethods());
