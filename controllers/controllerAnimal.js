const mongoose = require('mongoose');
const db_mongoose = require('../config/db_mongoose');
const Animal = require('../models/noSql/animal'); // Mongoose for Animal
const db = require('../config/db_sequelize'); // Sequelize para Abrigo

const path = require('path');

mongoose.connect(db_mongoose.connection).then(() => {
    console.log('Conectado com o BD');
}).catch(() => {
    console.log('Erro na conexão com o BD');
});


module.exports = {
    async getCreate(req, res) {
        try {
           const abrigos = await db.Abrigo.findAll(); // Fetch abrigos

            res.render('animal/animalCreate', {
                abrigos: abrigos.map(abrigo => abrigo.toJSON()) // Pass abrigos to the view
            });
        } catch (error) {
            console.error("Error fetching abrigos:", error);
            res.status(500).send("Error fetching abrigos");
        }
    },
    async postCreate(req, res) {
        try {
            const { nome, sexo, dataNascimento, abrigoId, castrado, porte, especie, raca } = req.body;

            // Check if any of the required fields are missing
            if (!sexo || !dataNascimento || !abrigoId || !porte || !raca || !especie) {
                return res.status(400).send("Missing required fields");
            }

            const animal = new Animal({
                nome: nome,
                sexo: sexo,
                dataNascimento: dataNascimento,
                abrigoId: abrigoId,
                castrado: castrado,
                porte: porte,
                especie: especie,  
                raca: raca
            });

            await animal.save();
            res.redirect('/home');
        } catch (error) {
            console.error("Error creating animal:", error);
            res.status(500).send("Error creating animal");
        }
    },
    async getList(req, res) {
            await Animal.find().then(animais => {
                res.render('animal/animalList', { animais: animais.map(coment => coment.toJSON()) });
            }).catch((err) => {
                console.log(err);
            });
        },   
    async getUpdate(req, res) {
        try {
            const animal = await Animal.findById(req.params.id);
            res.render('animal/animalUpdate', {
                animal: animal.toJSON(), // Convert animal to JSON
            });
        } catch (error) {
            console.error("Error fetching animal or especies:", error);
            res.status(500).send("Error fetching data");
        }
    },
    async postUpdate(req, res) {
        try {
            const { id } = req.body; 

            
            await Animal.findByIdAndUpdate(id, req.body, { new: true });

            res.redirect('/home'); 
        } catch (error) {
            console.error("Error updating animal:", error);
            res.status(500).send("Error updating animal");
        }
    },

    async getDelete(req, res) {
        try {
            const { id } = req.params; // Extract the ID from the request parameters

            // Find the animal by ID and delete it
            await Animal.findByIdAndDelete(id);

            res.redirect('/home'); // Redirect to the animal list or details page
        } catch (error) {
            console.error("Error deleting animal:", error);
            res.status(500).send("Error deleting animal");
        }
    }
};