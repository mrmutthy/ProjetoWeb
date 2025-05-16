const db = require('../config/db_sequelize');
const path = require('path');

module.exports = {
    async getCreate(req, res) {
        // Remove these lines:
        // var especies = await db.Especie.findAll()
        res.render('abrigo/abrigoCreate', {
            // Remove especies: especies.map(especie => especie.toJSON())
        });
    },
    async getUpdate(req, res) {
        try {
            const abrigo = await db.Abrigo.findByPk(req.params.id);
            // Remove these lines:
            // const especies = await db.Especie.findAll();
            res.render('abrigo/abrigoUpdate', {
                abrigo: abrigo.dataValues,
                // Remove especies: especies.map(especie => especie.toJSON())
            });
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching abrigo"); // Changed error message
        }
    },
    async postCreate(req, res) {
        try {
            const { nome, endereco, telefone, email } = req.body;
            const abrigo = await db.Abrigo.create({ nome, endereco, telefone, email });
            res.redirect('/abrigoList');
        } catch (err) {
            console.error(err);
            res.status(500).send("Error creating abrigo"); // Changed error message
        }
    },
    async postUpdate(req, res) {
        try {
            const { id, nome, endereco, telefone } = req.body;
            await db.Abrigo.update({ nome, endereco, telefone }, { where: { id } });
            res.redirect('/abrigoList');
        } catch (err) {
            console.error(err);
            res.status(500).send("Error updating abrigo"); // Changed error message
        }
    },
    async getList(req, res) {
        try {
            const abrigos = await db.Abrigo.findAll();
            res.render('abrigo/abrigoList', { abrigos: abrigos.map(abrigo => abrigo.toJSON()) });
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching abrigos"); // Changed error message
        }
    },
    async getDelete(req, res) {
        try {
            await db.Abrigo.destroy({ where: { id: req.params.id } });
            res.redirect('/abrigoList');
        } catch (err) {
            console.error(err);
            res.status(500).send("Error deleting abrigo"); // Changed error message
        }
    }
    
}