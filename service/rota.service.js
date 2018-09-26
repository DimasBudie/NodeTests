const repo = require('../repository/rota.repository');

module.exports = {
	createRota: async (input) => {       
        if (!input._id) {            
            return await repo.create(input);
        } else {
            return await repo.update(input);
        }    
    },
    
    getRota: async (rota) => {
        return await repo.get(rota);
    }, 
    
    getAllRota: async () => {
        return await repo.getAll();
    }, 

    atualizarRota: async (rota) => {
        return await repo.atualizarRota(rota);
    },
}