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
  corretor: {type: String, default:''},
  seguradora: {type: String, default:''},
  gerenciadora: {type: String, default:''},
  PIS: { type: String, default: '' },
  COFINS: { type: String, default: '' },
  CSLL: { type: String, default: '' },
  IRPJ: { type: String, default: '' },
  incluiPedagio: {type: Boolean, default: true },
  pagamentoAgregado: { type: String, default: '' },
  faturamento: { type: String, default: '' },
  prazo: { type: String, default: '' },
  formaCobranca: { type: String, default: '' },
  projeto: { type: String, default: '' },
  observacoes: { type: String, default: '' },

}, { collection: 'Industria' });

module.exports = mongoose.model('Industria', dataSchema);