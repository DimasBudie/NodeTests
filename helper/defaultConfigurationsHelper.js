const configService = require('../service/configuracao.service');

module.exports = {
    
    loadDefaultInformations: async (req, res) => {
        let configuracao = await configService.getByUserId(req.session.usuarioId);
        res.locals.logo = configuracao.logo;
        res.locals.empresa = configuracao.empresa;
        res.locals.tipoConta = req.session.tipoConta;        
    }
}
