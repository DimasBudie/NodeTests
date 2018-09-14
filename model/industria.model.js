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
}, { collection: 'Industria' });

module.exports = mongoose.model('Industria', dataSchema);