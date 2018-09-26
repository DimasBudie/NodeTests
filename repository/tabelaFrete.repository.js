const TabelaFrete = require("../model/tabelaFrete.model");

module.exports = {

	create: async () => {       
        return new Promise(res => {            
            let db = new TabelaFrete(t[i]);               
            db.id = db._id;            
            res(db.save());            
        });                   
    },

    get:(tipo) => {
        
        return new Promise(res => {
            TabelaFrete
            .find({tipoCarga: tipo}, (err, doc) => {                    
                res(doc);
            });
        });    
    },

    atualizarValorFrete:(frete) => {
        try{
        return new Promise(res => {
            TabelaFrete.update({'_id' : frete.id}, {$set: { valor: frete.valor }}, (err, doc) => {                
                return doc != null ? res("") : res(null);
            });
        });
    }
    catch(error){
        return error;
    }
    }
}