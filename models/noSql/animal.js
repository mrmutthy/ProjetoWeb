const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Animal = Schema({
    nome: { type: String, required: true },
    sexo: { type: String, required: true },
    dataNascimento: { type: String, required: true },
    abrigoId: { type: String, required: true },
    castrado: { type: String, required: false },
    doenca: {type: String, required: false},
    porte: { type: String, required: true },
    especie: { type: String, required: true },
    raca: { type: String, required: true }
}, {
    toJSON: {
        virtuals: true,
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        }
    }
});

module.exports = mongoose.model("Animal", Animal, "animais")