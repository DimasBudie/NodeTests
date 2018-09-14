const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let dataSchema = new Schema({
  empresa: {type: String, default: ''},
  logo: { data: Buffer, contentType: String },  
}, { collection: 'Configuracao' });

module.exports = mongoose.model('Configuracao', dataSchema);