const repo = require('../repository/tabelaFrete.repository');

module.exports = {
	createTabelaFrete: async (input) => {       
        if (!input._id) {            
            return await repo.create(input);
        } else {
            return await repo.update(input);
        }    
    },
    
    getTabelaFrete: async (type) => {
        return await repo.get(type);
    },    

    atualizarFrete: async (frete) => {
        return await repo.atualizarValorFrete(frete);
    },
}