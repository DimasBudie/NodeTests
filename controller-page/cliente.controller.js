const clienteService = require('../service/cliente.service');
const config = require('../appconfig');
const data = { usuario: null, config: null };

let clienteController = {

    /**
     * Renderiza a pagina inicial.
     */
    index: async (req, res) => {
        try {
            if(req.session.tipoConta != "industria"){
                res.render('pages/DeniedAccess');
            }
            res.render('pages/cliente-lista', {
            data: await clienteService.getCliente(req),
            msg: null
        });
        } catch (error) {
            console.log('Deu Zica: ' + error);
            res.render('pages/cliente-lista', {
                data: data,
                msg: error
            });
        }
    },

    cadastro: (req, res) => {
        if(req.session.tipoConta != "industria"){
            res.render('pages/DeniedAccess');
        }
        res.render('pages/cliente-cadastro', {
            data: data,
            msg: null
        });  
    },

    /**
     * Pesquisa cliente com base no id informado e retorna
     * pagina de detalhes.
     */
    detalhe: async (req, res) => {
        if(req.session.tipoConta != "industria"){
            res.render('pages/DeniedAccess');
        }
        var id = req.params.id;
        var clienteDetalhes = await clienteService.getById(id);        
        res.render('pages/cliente-cadastro', {
            data: clienteDetalhes,
            msg: null
        });        
    },

    deletar : async (req, res) => {
        if(req.session.tipoConta != "industria"){
            res.render('pages/DeniedAccess');
        }
        var id = req.params.id;
        var clienteDetalhes = await clienteService.delete(id); 
        res.render('pages/cliente-lista', {
            data: await clienteService.getCliente(req),
            msg: null
        });
    },

    create: async (req, res) => {
        if(req.session.tipoConta != "industria"){
            res.render('pages/DeniedAccess');
        }
        let input = req.body;
         try {
             input.usuarioId = req.session.usuarioId;
             console.log(input);
            data.config = await clienteService.updateCliente(input);               
            res.render('pages/cliente-lista', {
            data: await clienteService.getCliente(req),
            msg: null
        });
        } catch (error) {
            console.log('Deu Zica: ' + error);
             res.render('pages/cliente-lista', {
                data: data,
                msg: error
            });
        }
    },

}

module.exports = clienteController;