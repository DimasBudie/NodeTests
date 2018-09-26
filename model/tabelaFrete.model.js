const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let dataSchema = new Schema({
  tipoCarga: { type: String, default: '' },
  distancia: { type: Number, default: '' },
  valor: { type: String, default: '' },  
  observacao: { type: String, default: '' },  
}, { collection: 'TabelaFrete' });

module.exports = mongoose.model('TabelaFrete', dataSchema);