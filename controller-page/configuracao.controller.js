const configService = require('../service/configuracao.service');
const usuarioService = require('../service/usuario.service');
var multer = require('multer');
var fs = require('fs');
const config = require('../appconfig');
const defaultConfig = require('../helper/defaultConfigurationsHelper');
const saveImageHelper = require('../helper/SaveImage');

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
            let usuario = await usuarioService.getById(req.session.usuarioId);
            if(!usuario){
                return;
            }
            console.log("senha antiga: " + usuario.senha + " digitada senha antiga: " + input.senhaAntiga);
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
            req.session.usuario = data.config;
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
        usuarioService.UpdateCompanyName(req);     
        data.config = req.body;
        data.empresa = req.body.empresa;  
        req.session.empresa = req.body.empresa;
        if(req.body.logo && req.body.logo != ""){
        saveImageHelper.saveImage(req.body.logo, req.session.usuarioId);
        }
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
