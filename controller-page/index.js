'use strict';

const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');
const homeController = require('./home.controller');
const usuarioController = require('./usuario.controller');
const clienteController = require('./cliente.controller');
const emprestimoController = require('./emprestimo.controller');
const configuracaoController = require('./configuracao.controller');
const investidorController = require('./investidor.controller');
const industriaController = require('./industria.controller');
const tabelaController = require('./tabelaFrete.controller');
const rotaController = require('./rota.controller');

const auth = authController.validateAuth;
setRoutesForAuth(router);
setRoutesForHome(router);
setRoutesForUsuario(router);
setRoutesForCliente(router);
setRoutesForEmprestimo(router);
setRoutesForConfiguracao(router);
setRoutesForInvestidor(router);
setRoutesForIndustria(router);
setRoutesForTabelaFrete(router);
setRoutesForRota(router);

function setRoutesForAuth(router) {
    router.get('/', authController.index);
    router.post('/login', authController.login);
    router.get('/logout', authController.logout);
}
function setRoutesForIndustria(router){
    router.get('/industria', auth, industriaController.index);
    router.get('/industria-cadastro', auth, industriaController.cadastro);
    router.post('/industria-criacao', auth, industriaController.create);
    router.get('/industria-detalhe/:id', auth, industriaController.detalhe);
    router.get('/industria-deletar/:id', auth, industriaController.deletar);
    router.post('/industria-deletar', auth, industriaController.deletarPost);
}

function setRoutesForHome(router) {
    router.get('/home', auth, homeController.index);
}

function setRoutesForUsuario(router) {
    router.get('/usuario', auth, usuarioController.index);
    router.get('/usuario-cadastro', auth, usuarioController.cadastro);
    router.get('/usuario-detalhe/:id', auth, usuarioController.detalhe);
    router.get('/usuario-deletar/:id', auth, usuarioController.deletar);
    router.post('/usuario-deletar', auth, usuarioController.deletarPost);
    router.post('/usuario-criacao', auth, usuarioController.create);
}

function setRoutesForCliente(router) {
    router.get('/cliente', auth, clienteController.index);
    router.get('/cliente-cadastro', auth, clienteController.cadastro);
    router.get('/cliente-detalhe/:id', auth, clienteController.detalhe);
    router.get('/cliente-deletar/:id', auth, clienteController.deletar);
    router.post('/cliente-deletar', auth, clienteController.deletarPost);
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
    router.post('/configuracao-logo', auth, configuracaoController.updateLogo);
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

function setRoutesForTabelaFrete(router){
    router.get('/tabelaFrete', auth, tabelaController.index);    
    router.post('/tabelaFrete', auth, tabelaController.listTabela);  
    router.post('/atualizarFrete', auth, tabelaController.atualizarValorFrete);
}

function setRoutesForRota(router){
    router.get('/rotas', auth, rotaController.index);
    router.get('/cadastrarRota', auth, rotaController.cadastraRota);
    router.post('/salvaRota', auth, rotaController.salvaRota);
    router.get('/detalhesRota/:id', auth, rotaController.detalhesRota);
    router.get('/deletarRota/:id', auth, rotaController.deletar);
    router.post('/deletarRota', auth, rotaController.deletarPost);
}


module.exports = router;