const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Animal = Schema({
    nome: { type: String, required: true },
    sexo: { type: String, required: true },
    dataNascimento: { type: String, required: true },
    especie: { type: String, required: false },
    raca: { type: String, required: false },
    castrado: { type: Boolean, required: true },
    doenca: {type: String, required: false}
});

module.exports = mongoose.model("Animal", Animal)