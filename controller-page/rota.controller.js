const rotaService = require('../service/rota.service');
const config = require('../appconfig');
const defaultConfig = require('../helper/defaultConfigurationsHelper');
const data = { usuario: null, config: null };

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
            data: null,
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

    listTabela: async (req, res) => {
        await defaultConfig.loadDefaultInformations(req,res);      
        if(req.session.tipoConta != "admin"){
            res.render('pages/DeniedAccess');
        }
        res.render('pages/rota-lista', {
            data: await rotaService.getrota(req.body.type),
            msg: null
        });
    },

    atualizarValorFrete: async (req, res) => {
        let valor = await rotaService.atualizarFrete(req.body);
        console.log("Resultado: " + valor);
        if(!valor){
        return res.send("Atualizado com sucesso");
        }
        else{
            res.send("erro");
        }
    }
    
}

module.exports = tableFreteController;