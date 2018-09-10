'use strict';

const express = require('express');
const router = express.Router();
const authController = require('./usuario.controller');
const homeController = require('./home.controller');
const clienteController = require('./cliente.controller');
const emprestimoController = require('./emprestimo.controller');
const configuracaoController = require('./configuracao.controller');
const investidorController = require('./investidor.controller');
const industriaController = require('./industria.controller');

const auth = authController.validateAuth;
setRoutesForAuth(router);
setRoutesForHome(router);
setRoutesForCliente(router);
setRoutesForEmprestimo(router);
setRoutesForConfiguracao(router);
setRoutesForInvestidor(router);
setRoutesForIndustria(router);

function setRoutesForAuth(router) {
    router.get('/', authController.index);
    router.post('/login', authController.login);
    router.get('/logout', authController.logout);
}
function setRoutesForIndustria(router){
    router.get('/industria', auth, industriaController.index);
    router.get('/industria-cadastro', auth, industriaController.cadastro);
    router.post('/industria-criacao', auth, industriaController.create);

}

function setRoutesForHome(router) {
    router.get('/home', auth, homeController.index);
}

function setRoutesForCliente(router) {
    router.get('/cliente', auth, clienteController.index);
    router.get('/cliente-cadastro', auth, clienteController.cadastro);
    router.get('/cliente-detalhe/:id', auth, clienteController.detalhe);
    router.get('/cliente-deletar/:id', auth, clienteController.deletar);
    router.post('/cliente-criacao', auth, clienteController.create);
}

function setRoutesForEmprestimo(router) {
    router.get('/emprestimo', auth, emprestimoController.index);
    router.get('/emprestimo-novo', auth, emprestimoController.novo);
    router.get('/emprestimo-simula', auth, emprestimoController.simulador);
    router.get('/emprestimo-detalhe/:id', emprestimoController.detalhe);
}

function setRoutesForConfiguracao(router){
    router.get('/configuracao', auth, configuracaoController.index);
    router.post('/configuracao-usuario', auth, configuracaoController.updatePassword);
    router.post('/configuracao-juros', auth, configuracaoController.updateJuros);
}

function setRoutesForInvestidor(router){
    router.get('/investidor-index', auth, investidorController.renderIndex);    
    router.get('/investidor-new', auth, investidorController.renderNew);
    router.get('/investidor-detail/:id', auth, investidorController.renderEdit);  
    router.post('/investidor-create', auth, investidorController.create);  
    router.post('/investidor-dado-basico', auth, investidorController.updateDadoBasico);
    router.post('/investidor-lancamento', auth, investidorController.createLancamento);
    router.post('/investidor-anotacao', auth, investidorController.createAnotacao); 
}


module.exports = router;