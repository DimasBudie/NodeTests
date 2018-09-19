const configService = require('../service/configuracao.service');
const usuarioService = require('../service/usuario.service');
var multer = require('multer');
var fs = require('fs');
const config = require('../appconfig');
const defaultConfig = require('../helper/defaultConfigurationsHelper');

const data = { usuario: null, config: null, logo: null, _id: null, empresa: null  };

module.exports = {

    // Renderiza a pagina inicial.
    index: async (req, res) => {     
        await defaultConfig.loadDefaultInformations(req,res);
        res.locals.tipoConta = req.session.tipoConta;   
        data.usuario = req.session.user;        
        let config = await configService.getByUserId(req.session.usuarioId);   
        if(config){
            data.logo = config.logo;
            data.empresa = config.empresa;
            data._id = config._id;
        }
        res.render('pages/configuracao', {
            data: data,
            msg: null
        });
    },

    updatePassword: async (req, res) => {
        await defaultConfig.loadDefaultInformations(req,res);
        let input = req.body;
        try {
            let usuario = usuarioService.getByLogin(req.session.user);
            if(!usuario){
                return;
            }
            if(usuario.senha != input.senhaAntiga){
                res.render('pages/configuracao', {
                    data: data,
                    msg: "Senha antiga invalida"
                });
                return;
            }
            data.usuario = req.session.user;
            data.config = await usuarioService.updatePassword({
                usuario: input.usuario,
                senhaAntiga: input.senhaAntiga,
                novaSenha: input.novaSenha,
                novaSenhaRepete: input.novaSenhaRepete
            });

            res.render('pages/configuracao', {
                data: data,
                msg: config.okMessage
            });
        } catch (error) {
            res.render('pages/configuracao', {
                data: data,
                msg: error
            });
        }
    },
    
    updateLogo: async (req, res) => {        
        configService.UploadLogo(req, req.body);
        data.config = req.body;
        data.logo = req.logo;
        data.empresa = req.empresa;  
        await defaultConfig.loadDefaultInformations(req,res);          
        res.render('pages/configuracao', {
            data: data,  
            msg: config.okMessage 
        });
    },

    updateJuros: async (req, res) => {
        await defaultConfig.loadDefaultInformations(req,res);
        let input = req.body;
        try {
            data.config = await configService.updateJuros({
                id: input.id,
                taxaInvestidor: input.taxaInvestidor,
                taxaEmprestimo: input.taxaEmprestimo,
            });

            res.render('pages/configuracao', {
                data: data,
                msg: config.okMessage
            });
        } catch (error) {
            res.render('pages/configuracao', {
                data: data,
                msg: error
            });
        }
    },

};
