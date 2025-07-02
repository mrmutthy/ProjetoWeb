const Animal = require('../models/noSql/animal'); 

module.exports = {
    async postAnimal(req, res) {
        try {
            const animal = await Animal.create(req.body);
            res.status(201).json(animal);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao criar o animal' });
        }
    },
    async getAnimais(req, res) {
        try {
            const animais = await Animal.find();
            res.status(200).json(animais);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao listar animais' });
        }
    },
    async getAnimaisByAbrigo(req, res) {
    try {
        const animais = await Animal.find({ abrigoId: req.params.id });
        res.status(200).json(animais);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao listar animais por abrigo' });
    }
    },
    async getAnimalById(req, res) {
        try {
            const animal = await Animal.findById(req.params.id);
            if (animal) {
                res.status(200).json(animal);
            } else {
                res.status(404).json({ error: 'Animal não encontrado' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao obter animal' });
        }
    },
    async getAnimaisByAbrigo(req, res) {
    try {
        const animais = await Animal.find({ abrigoId: req.params.id });
        res.status(200).json(animais);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao listar animais por abrigo' });
    }
},
    async putAnimal(req, res) {
        try {
            const animal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (animal) {
                res.status(200).json(animal);
            } else {
                res.status(404).json({ error: 'Animal não encontrado' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao atualizar animal' });
        }
    },
    async deleteAnimal(req, res) {
        try {
            const animal = await Animal.findByIdAndDelete(req.params.id);
            if (animal) {
                res.status(204).json();
            } else {
                res.status(404).json({ error: 'Animal não encontrado' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao deletar animal' });
        }
    }

}