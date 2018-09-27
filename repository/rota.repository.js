const Rotas = require("../model/rota.model");

module.exports = {

	create: async (rota) => {       
        return new Promise(res => {            
            let db = new Rotas(rota);               
            db.id = db._id;            
            res(db.save());            
        });                   
    },

    get:async (rotaId) => {
        
        return new Promise(res => {
            Rotas
            .findOne({ '_id': rotaId }, (err, doc) => {
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

    update: (rota) =>{
        console.log(rota);
		return new Promise(res => {
			Rotas.update({'_id' : rota._id}, rota, (err, doc) => {                
                return doc != null ? res(rota) : res(null);
            });
		});
    },
    delete: async (id) => {
        return new Promise(res => {
            Rotas
                .findOneAndDelete({ '_id': id }, (err, doc) => {
                    res(doc);
                });
        });
    },
}