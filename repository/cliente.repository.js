const Cliente = require("../model/cliente.model");

module.exports = {

	create: (cliente) => {
        return new Promise(res => {            
            let db = new Cliente(cliente);               
            db.id = db._id;            
            res(db.save());            
        });
    },

    update: (cliente) => {
        return new Promise(res => {
            console.log(cliente);
            Cliente.update({'_id' : cliente._id}, cliente, (err, doc) => {                
                return doc != null ? res(cliente) : res(null);
            });
        });
    },

    get: (req) => {
        return new Promise(res => {
            Cliente
                .find({usuarioId: req.session.usuarioId}, (err, doc) => {                    
                    res(doc);
                });
        });
    },

    getById: async (id) => {
        return new Promise(res => {
            Cliente
                .findOne({ '_id': id }, (err, doc) => {
                    res(doc);
                });
        });
    },

    delete: async (id) => {
        return new Promise(res => {
            Cliente
                .findOneAndDelete({ '_id': id }, (err, doc) => {
                    res(doc);
                });
        });
    },
}