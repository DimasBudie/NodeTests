const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let dataSchema = new Schema({
  empresa: {type: String, default: ''},
  logo: { type: Buffer, contentType: String },  
  usuarioId: {type: mongoose.Schema.Types.ObjectId},
}, { collection: 'Configuracao' });

module.exports = mongoose.model('Configuracao', dataSchema);