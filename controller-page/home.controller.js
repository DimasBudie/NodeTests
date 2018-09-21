const service = require('../service/usuario.service');
const defaultConfig = require('../helper/defaultConfigurationsHelper');
const data = { usuario: null, config: null };



let homeController = {

    /**
     * Renderiza a pagina inicial.
     */
    index: async (req, res) => {
        await defaultConfig.loadDefaultInformations(req,res);
        var usuarioDetalhes = req.session.usuario;
        res.render('pages/home', {
            data: usuarioDetalhes,
            msg: null
        });        
    },

}

module.exports = homeController;