const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let dataSchema = new Schema({
  nome: { type: String, default: '' },
  cpf: { type: String, default: '' },
  rg: { type: String, default: '' },
  uf: { type: String, default: '' },
  emissor: { type: String, default: '' },
  dataEmissao: {type: String, default: ''},
  dataNascimento: {type: String, default: ''},
  endereco: { type: String, default: '' },
  numero: { type: String, default: '' },
  complemento: { type: String, default: '' },
  bairro: { type: String, default: '' },
  cidade: { type: String, default: '' },
  estado: { type: String, default: '' },
  telefone: { type: String, default: '' },
  celular: { type: String, default: '' },
  celular2: { type: String, default: '' },
  operadora: { type: String, default: '' },
  email: { type: String, default: '' },    
  registroCNH: { type: String, default: '' },
  validade: {type: String, default: ''},
  categoria: { type: String, default: '' },    
  primeiraHabilitacao: {type: String, default: ''},
  cedula: { type: String, default: '' },
  dataEmissaoCNH: {type: String, default: ''},
  detran: { type: String, default: '' },
  pontuacaoCNH: { type: Number, default: '' },
  referencias : Schema.Types.Mixed,
  criadoEm: {type: Date, default: new Date()},
}, { collection: 'Cliente' });

module.exports = mongoose.model('Cliente', dataSchema);