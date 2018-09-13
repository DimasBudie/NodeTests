const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let dataSchema = new Schema({
  ativo: { type: Boolean, default: true },
  nome: { type: String, default: '' },
  email: { type: String, default: '' },
  usuario: { type: String, default: '' },
  senha: { type: String, default: '' },
  tipoConta: { type: String, default: '' },
  senhaPadraoAlterada: { type: Boolean, default: false },
}, { collection: 'Usuario' });

module.exports = mongoose.model('Usuario', dataSchema);