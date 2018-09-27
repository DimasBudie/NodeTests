const rotaService = require('../service/rota.service');
const config = require('../appconfig');
const defaultConfig = require('../helper/defaultConfigurationsHelper');
const data = { rota: null, config: null };

let tableFreteController = {
    index: async (req, res) => {        
        await defaultConfig.loadDefaultInformations(req,res);      
        if(req.session.tipoConta != "admin"){
            res.render('pages/DeniedAccess');
        }
        res.render('pages/rota-lista', {
            data: await rotaService.getAllRota(),
            msg: null
        });
    },

    cadastraRota: async (req, res) => {
        await defaultConfig.loadDefaultInformations(req,res);      
        if(req.session.tipoConta != "admin"){
            res.render('pages/DeniedAccess');
        }
        res.render('pages/cadastroRota', {
            data: data,
            msg: null
        });
    },

    salvaRota:async(req, res) => {
        await defaultConfig.loadDefaultInformations(req,res);      
        if(req.session.tipoConta != "admin"){
            res.render('pages/DeniedAccess');
        }
        let valor = await rotaService.createRota(req.body);
        if(valor){
            res.render('pages/rota-lista', {
                data: await rotaService.getAllRota(),
                msg: null
            });
        } else{
            res.render('pages/cadastroRota', {
                data: req.body,
                msg: "Fudeu"
            });
        }
    },

    detalhesRota: async (req, res) => {
        await defaultConfig.loadDefaultInformations(req,res);      
        if(req.session.tipoConta != "admin"){
            res.render('pages/DeniedAccess');
        }
        let rotaDetalhes = await rotaService.getRota(req.params.id);        
        res.render('pages/cadastroRota', {
            data: rotaDetalhes,
            msg: null
        });
    },    
    
    deletar : async (req, res) => {        
        await defaultConfig.loadDefaultInformations(req,res);
        if(req.session.tipoConta != "admin"){
            res.render('pages/DeniedAccess');
        }
        var id = req.params.id;
        let industria = await rotaService.delete(id); 
        res.render('pages/rota-lista', {
            data: await rotaService.getAllRota(),
            msg: null
        });
    },

    deletarPost: async (req, res) => {
        await defaultConfig.loadDefaultInformations(req,res);
        if(req.session.tipoConta != "admin"){
            res.render('pages/DeniedAccess');
        }
        let industria = await rotaService.delete(req.body.id);         
        res.send("Sucesso");
        res.render('pages/rota-lista', {
            data: await rotaService.getAllRota(),
            msg: null
        });
    },
}

module.exports = tableFreteController;