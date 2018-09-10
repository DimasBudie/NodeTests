const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let dataSchema = new Schema({
	nome: { type: String, default: '' },
    grauParentesco: { type: String, default: '' },
    telefone: { type: String, default: '' },
    isProfissional: Boolean,
    isPessoal: Boolean,
}, { collection: 'Referencia' });

module.exports = mongoose.model('Referencia', dataSchema);