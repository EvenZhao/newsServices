
// const wrapRes = require('../utils/wrapResponse');

module.exports = (router) => {
	router.get('/save/:id/:date/:weight', async (ctx, next) => {
		const { id, date, weight } = ctx.params
		console.log(id, date, weight)
	});


};
