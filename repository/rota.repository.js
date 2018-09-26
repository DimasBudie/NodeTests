const Rotas = require("../model/rota.model");

module.exports = {

	create: async (rota) => {       
        return new Promise(res => {            
            let db = new Rotas(rota);               
            db.id = db._id;            
            res(db.save());            
        });                   
    },

    get:(rota) => {
        
        return new Promise(res => {
            Rotas
            .find({origem: rota.origem, destino: rota.destino}, (err, doc) => {                    
                res(doc);
            });
        });    
    },

    getAll:() => {
        
        return new Promise(res => {
            Rotas
            .find((err, doc) => {                    
                res(doc);
            });
        });    
    },

    atualizarRota:(rota) => {
        try{
        return new Promise(res => {
            Rotas.update({'_id' : rota.id}, {$set: { valor: rota.valor }}, (err, doc) => {                
                return doc != null ? res("") : res(null);
            });
        });
    }
    catch(error){
        return error;
    }
    }
}