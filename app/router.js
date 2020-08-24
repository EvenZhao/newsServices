const Router = require('koa-router');
const save = require('./service/save');

const router = new Router({ prefix: '/api' });
save(router);
module.exports = router;
