const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let dataSchema = new Schema({
  razaoSocial: { type: String, default: '' },
  nomeFantasia: { type: String, default: '' },
  cnpj: { type: String, default: '' },
  inscricaoEstadual: { type: String, default: '' },
  endereco: { type: String, default: '' },
  numero: { type: String, default: '' },
  complemento: { type: String, default: '' },
  cep: { type: String, default: '' },
  bairro: { type: String, default: '' },
  cidade: { type: String, default: '' },
  estado: { type: String, default: '' },
  telefone: { type: String, default: '' },
  site: { type: String, default: '' },
  contatos : Schema.Types.Mixed,
  responsavelComercial: [{
  	nome: { type: String, default: '' },
  	telefone: { type: String, default: '' },
  }],
  responsavelLogistica: [{
  	nome: { type: String, default: '' },
  	telefone: { type: String, default: '' },
  }],
  responsavelFinanceiro: [{
  	nome: { type: String, default: '' },
  	telefone: { type: String, default: '' },
  }],
  responsavelContrato: [{
  	nome: { type: String, default: '' },
  	telefone: { type: String, default: '' },
  }],
  responsavelOcorrencias: [{
  	nome: { type: String, default: '' },
  	telefone: { type: String, default: '' },
  }]
}, { collection: 'Industria' });

module.exports = mongoose.model('Industria', dataSchema);