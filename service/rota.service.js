const repo = require('../repository/rota.repository');

module.exports = {
	createRota: async (input) => {          
        if (!input._id) {            
            return await repo.create(input);
        } else {
            return await repo.update(input);
        }    
    },
    
    getRota: async (rotaId) => {
        return await repo.get(rotaId);
    }, 
    
    getAllRota: async () => {
        return await repo.getAll();
    }, 

    delete: async (id) => {
    	return await repo.delete(id);              
    },
}