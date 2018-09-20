const repo = require('../repository/industria.repository');

module.exports = {

	getIndustria: async () => {		
		let industria = repo.get();
		return industria;
	},

	create: async (input) => {
		if (!input.id) {            
            return await repo.create(input);
        } else {
            return await repo.update(input);
        }    
	},

	getById: async (id) => {
        return await repo.getById(id);                            
    },	

    delete: async (id) => {
    	return await repo.delete(id);              
    },	

}