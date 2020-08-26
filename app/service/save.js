
const fs = require('fs');
module.exports = (router) => {
	router.get('/save/:id/:savedate/:weight', async (ctx, next) => {
		const { id, savedate, weight } = ctx.params;
		let datas = JSON.parse(fs.readFileSync('weightDatas.json', 'utf8'));
		let newestData = datas[id];
		if (newestData && newestData.length>0) {
			if (newestData[newestData.length-1]['date'] == savedate) {
				newestData[newestData.length-1]['weight'] = weight;
			} else {
				const itemVal = {"date": savedate, "weight": weight};
				newestData.push(itemVal);
			}
		} else {
			const itemVal = {id:[{"date": savedate, "weight": weight}]}
			datas.push(itemVal);
		}
		fs.writeFile('weightDatas.json', JSON.stringify(datas), (err) => {
			if (err) throw err;
			
		  });
		  ctx.body = {
			success: true,
			list: datas[id],
		};
		console.log('文件已被保存');
	});

	router.get('/savetarget/:id/:savedate/:weight/:targetDay', async (ctx, next) => {
		const { id, savedate, weight, targetDay } = ctx.params;
		let datas = JSON.parse(fs.readFileSync('targetDatas.json', 'utf8'));
		let newestData = datas[id];
		if (newestData) {
			newestData = {"date": savedate, "weight": weight, "targetDay":targetDay};
		} else {
			datas[id] = {"date": savedate, "weight": weight, "targetDay":targetDay};
		}
		fs.writeFile('targetDatas.json', JSON.stringify(datas), (err) => {
			if (err) throw err;
			ctx.body = {
				success: true,
				list: [{"date": savedate, "weight": weight, "targetDay":targetDay}],
			};
			console.log('文件已被保存');
		  });
		 
	});
	router.get('/list/:id', async (ctx, next) => {
		const { id } = ctx.params;
		let datas = JSON.parse(fs.readFileSync('targetDatas.json', 'utf8'));
		let newestData = datas[id];
		if (newestData) {
			ctx.body = {
				success: true,
				list: [{"date": savedate, "weight": weight, "targetDay":targetDay}],
			};
		} else {
			ctx.body = {
				success: true,
				list: [],
			};
		}
	});
};
