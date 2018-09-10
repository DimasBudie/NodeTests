const service = require('../service/industria.service');
const config = require('../appconfig');
const data = { usuario: null, config: null };

let industriaController = {

	index: async (req, res) => {
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
		res.render('pages/industria-cadastro', {
			data: data,
			msg: null
		});
	},


	 create: async (req, res) => {
        let input = req.body;
         try {         	
			 console.log(input);
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
}	

module.exports = industriaController;