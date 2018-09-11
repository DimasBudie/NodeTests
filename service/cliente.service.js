const repo = require('../repository/cliente.repository');

module.exports = {
	updateCliente: async (input) => {       
        return await repo.update(input);    
    },

    create: async (input) => {
        return await repo.create(input);
    },

    getCliente: async () => {
    	let cliente = await repo.get();        
        return cliente;
    },	

    getById: async (id) => {
        let cliente = await repo.getById(id);                    
        return cliente;
    },	

    delete: async (id) => {
    	return await repo.delete(id);              
    },	
}