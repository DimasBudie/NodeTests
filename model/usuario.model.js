const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;
let dataSchema = new Schema({
  ativo: { type: Boolean, default: true },
  nome: { type: String, default: '', required: true },
  email: { type: String, default: '', unique: true, required: true },
  usuario: { type: String, default: '', unique: true, required: true, uniqueCaseInsensitive: true },
  senha: { type: String, default: '', required: true },
  tipoConta: { type: String, default: '' },
  senhaPadraoAlterada: { type: Boolean, default: false },
  empresa: {type: String, default: 'Plataforma'},
}, { collection: 'Usuario' });

dataSchema.plugin(uniqueValidator, { message: 'O valor informado no campo {PATH} já esta sendo usado.' });

module.exports = mongoose.model('Usuario', dataSchema);