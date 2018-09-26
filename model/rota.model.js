const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let dataSchema = new Schema({
  origem: { type: String, default: '' },
  destino: { type: String, default: '' },
  distancia: { type: Number, default: '' },  
  pedagio: { type: String, default: '' },  
}, { collection: 'Rotas' });

module.exports = mongoose.model('Rotas', dataSchema);