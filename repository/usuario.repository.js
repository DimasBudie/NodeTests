const Usuario = require("../model/usuario.model");

module.exports = {

    getByLogin: (usuario, senha) => {
        return new Promise(res => {
            Usuario
                .where('usuario', usuario)
                .where('senha', senha)
                .exec((err, doc) => {
                    if (!doc) {
                        res(null)
                    } else {
                        res(doc[0]);
                    }
                });
        });
    },

    getById: (id) => {
        return new Promise(res => {
            Usuario
                .where('_id', id)
                .exec((err, doc) => {
                    if (!doc) {
                        res(null)
                    } else {
                        res(doc[0]);
                    }
                });
        });
    },

    getByUsername: (username) => {
        return new Promise(res => {
            Usuario
                .where('usuario', username)
                .exec((err, doc) => {
                    if (!doc) {
                        res(null)
                    } else {
                        res(doc[0]);
                    }
                });
        });
    },

    get: () => {
        return new Promise(res => {
            Usuario
                .find((err, doc) => {                    
                    res(doc);
                });
        });
    },

    create: (usuario) => {        
        return new Promise(res => {                 
            let db = new Usuario(usuario);               
            db.id = db._id;            
            db.save((err, doc) => {
                if(!err){
                    res(doc);
                }
                else{
                    res(err)                
                }
            });            
        });
    },

    UpdateCompanyName: (req) => {
        let empresa = req.body.empresa;
        let usuarioId = req.session.usuarioId;
        return new Promise(res => {
            Usuario.update({'_id' : usuarioId}, {$set: { empresa: empresa }}, (err, doc) => {                
                return doc != null ? res("") : res(null);
            });
        });
    },

    update: (usuario) => {
        return new Promise(res => {
            Usuario.update({'_id' : usuario.id}, usuario, (err, doc) => {                
                return doc != null ? res(usuario) : res(null);
            });
        });
    },

    delete: (id) => {
        return new Promise(res => {
            Usuario
            .findOneAndDelete({ '_id': id }, (err, doc) => {
                res(doc);
            });
        });
    },
}