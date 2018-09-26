const tabelaFreteService = require('../service/tabelaFrete.service');
const config = require('../appconfig');
const defaultConfig = require('../helper/defaultConfigurationsHelper');
const data = { usuario: null, config: null };

let tableFreteController = {
    index: async (req, res) => {        
        await defaultConfig.loadDefaultInformations(req,res);      
        if(req.session.tipoConta != "admin"){
            res.render('pages/DeniedAccess');
        }
        res.render('pages/tabelaFrete-lista', {
            data: await tabelaFreteService.getTabelaFrete("Carga Geral"),
            msg: null
        });
    },

    listTabela: async (req, res) => {
        await defaultConfig.loadDefaultInformations(req,res);      
        if(req.session.tipoConta != "admin"){
            res.render('pages/DeniedAccess');
        }
        res.render('pages/tabelaFrete-lista', {
            data: await tabelaFreteService.getTabelaFrete(req.body.type),
            msg: null
        });
    },

    atualizarValorFrete: async (req, res) => {
        let valor = await tabelaFreteService.atualizarFrete(req.body);
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