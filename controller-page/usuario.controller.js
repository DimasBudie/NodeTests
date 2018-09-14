const service = require('../service/usuario.service');
const config = require('../appconfig');
const data = { usuario: null, config: null };

let usuarioController = {
    index: async (req, res) => {
        try {
            res.locals.tipoConta = req.session.tipoConta;
            if(req.session.tipoConta != "admin"){
                res.render('pages/DeniedAccess');
            }        
            res.render('pages/usuario-lista', {
            data: await service.getUsuario(),
            msg: null
        });
        } catch (error) {
            console.log('Deu Zica: ' + error);
            res.render('pages/usuario-lista', {
                data: data,
                msg: error
            });
        }
    },

    cadastro: (req, res) => {
        res.locals.tipoConta = req.session.tipoConta;
        if(req.session.tipoConta != "admin"){
            res.render('pages/DeniedAccess');
        }
        res.render('pages/usuario-cadastro', {
            data: data,
            msg: null
        });  
    },

    /**
     * Pesquisa cliente com base no id informado e retorna
     * pagina de detalhes.
     */
    detalhe: async (req, res) => {
        res.locals.tipoConta = req.session.tipoConta;
        if(req.session.tipoConta != "admin"){
            res.render('pages/DeniedAccess');
        }
        var id = req.params.id;
        var usuarioDetalhes = await service.getById(id);        
        res.render('pages/usuario-cadastro', {
            data: usuarioDetalhes,
            msg: null
        });        
    },

    deletar : async (req, res) => {        
        res.locals.tipoConta = req.session.tipoConta;
        if(req.session.tipoConta != "admin"){
            res.render('pages/DeniedAccess');
        }
        var id = req.params.id;
        await service.delete(id); 
        res.render('pages/usuario-lista', {
            data: await service.getUsuario(),
            msg: null
        });
    },

    create: async (req, res) => {
        var mensagem =[];
        res.locals.tipoConta = req.session.tipoConta;
        if(req.session.tipoConta != "admin"){
            res.render('pages/DeniedAccess');
        }
        let input = req.body;
         try {            
            data.config = await service.updateUsuario(input);       
            console.log(data.config);                  
            if(data.config.errors){   
                if(data.config.errors.email){
                    mensagem.push(data.config.errors.email.message)
                }
                if(data.config.errors.usuario){
                    mensagem.push(data.config.errors.usuario.message)
                }
                console.log(mensagem);
                res.render('pages/usuario-cadastro', {
                    data: input,
                    msg: mensagem
                });  
                return;
            } else{
                res.render('pages/usuario-lista', {
                    data: await service.getUsuario(),
                    msg: null
                });
            }       
        } catch (error) {
            console.log('Deu Zica: ' + error);
             res.render('pages/usuario-lista', {
                data: data,
                msg: error
            });
        }
    },
}

module.exports = usuarioController;