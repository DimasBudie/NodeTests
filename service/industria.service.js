const repo = require('../repository/industria.repository');

module.exports = {

	getIndustria: async () => {		
		let industria = repo.get();
		console.log('industria: ' + industria);
		return industria;
	},

	create: async (input) => {
		return await repo.create(input);
	}

}