const mongoose = require('mongoose');
const db_mongoose = require('../config/db_mongoose');
const Animal = require('../models/noSql/animal');

mongoose.connect(db_mongoose.connection).then(() => {
    console.log('Conectado com o BD');
}).catch(() => {
    console.log('Erro na conexão com o BD');
});

module.exports = {
    async getCreate(req, res) {
        res.render('animal/animalCreate');
    },
    async postCreate(req, res) {
        new Animal({
            nome: req.body.nome,
            sexo: req.body.sexo,
            dataNascimento: req.body.dataNascimento,
            especie: req.body.especie,
            raca: req.body.raca,
            castrado: req.body.castrado,
            doenca: req.body.doenca
        }).save().then(() => {
            res.redirect('/home');
        }).catch((err) => {
            console.log(err);
        });
    },
    async getList(req, res) {
    await Animal.find().then(animais => {
        res.render('animal/animalList', { animais: animais.map(animal => animal.toJSON()) });
    }).catch((err) => {
        console.log(err);
    });
}
}   