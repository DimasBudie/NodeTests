const service = require('../service/usuario.service');
const data = { usuario: null, config: null };



let homeController = {

    /**
     * Renderiza a pagina inicial.
     */
    index: (req, res) => {
        res.locals.tipoConta = req.session.tipoConta;
        var usuarioDetalhes = req.session.user;
        res.render('pages/home', {
            data: usuarioDetalhes,
            msg: null
        });        
    },

}

module.exports = homeController;