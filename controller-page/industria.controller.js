const service = require('../service/industria.service');
const config = require('../appconfig');
const data = { usuario: null, config: null };

let industriaController = {

	index: async (req, res) => {
		res.locals.tipoConta = req.session.tipoConta;
		if(req.session.tipoConta != "admin"){
            res.render('pages/DeniedAccess');
        }
		try{
			res.render('pages/industria-lista', {
				data: await service.getIndustria(),
				msg: null
			});
		} catch(error){
			res.render('pages/industria-lista', {
				data: data,
				msg: error
			});
		}
	},

	cadastro: async (req, res) => {
		res.locals.tipoConta = req.session.tipoConta;
		if(req.session.tipoConta != "admin"){
            res.render('pages/DeniedAccess');
        }
		res.render('pages/industria-cadastro', {
			data: data,
			msg: null
		});
	},


	 create: async (req, res) => {
		res.locals.tipoConta = req.session.tipoConta;
		if(req.session.tipoConta != "admin"){
            res.render('pages/DeniedAccess');
        }
        let input = req.body;
         try {  
            data.config = await service.create(input);                     
            res.render('pages/industria-lista', {
            data: await service.getIndustria(),
            msg: null
        });
        } catch (error) {            
			console.log("Erro :" + error);
             res.render('pages/industria-lista', {				 
                data: data,
                msg: error
            });
        }
	},
	detalhe: async (req, res) => {
		res.locals.tipoConta = req.session.tipoConta;
		console.log("Tipo Conta - " + req.session.tipoConta);
        if(req.session.tipoConta != "admin"){
            res.render('pages/DeniedAccess');
        }
        var id = req.params.id;
        var industriaDetalhes = await service.getById(id);        
        res.render('pages/industria-cadastro', {
            data: industriaDetalhes,
            msg: null
        });        
    },

    deletar : async (req, res) => {
        res.locals.tipoConta = req.session.tipoConta;
        if(req.session.tipoConta != "admin"){
            res.render('pages/DeniedAccess');
        }
        var id = req.params.id;
        let industria = await service.delete(id); 
        res.render('pages/industria-lista', {
            data: await service.getIndustria(req),
            msg: null
        });
    },
}	

module.exports = industriaController;