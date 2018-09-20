const configService = require('../service/configuracao.service');

module.exports = {
    
    loadDefaultInformations: async (req, res) => {
        // let configuracao = await configService.getByUserId(req.session.usuarioId);
        // if(configuracao){
        //     res.locals.logo = configuracao.logo;
        //     res.locals.empresa = configuracao.empresa;
        //     res.locals.tipoConta = req.session.tipoConta;        
        // }
        // else{
            res.locals.logo = "../assets/img/TempLogo.png";
            res.locals.empresa = req.session.empresa;
            res.locals.tipoConta = req.session.tipoConta;        
            res.locals.usuarioId = req.session.usuarioId;
        //}
    }
}
