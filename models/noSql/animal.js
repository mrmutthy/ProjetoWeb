const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Animal = Schema({
    nome: { type: String, required: true },
    sexo: { type: String, required: true },
    dataNascimento: { type: String, required: true },
    abrigoId: { type: String, required: true },
    especieId: { type: Number, required: true },
    castrado: { type: String, required: false },
    doenca: {type: String, required: false},
    porte: { type: String, required: true },
    informacoes: { type: String, required: true }
});

module.exports = mongoose.model("Animal", Animal)