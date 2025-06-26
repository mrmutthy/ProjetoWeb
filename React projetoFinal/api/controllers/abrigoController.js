const db = require('../config/db_sequelize');

module.exports = {
    async postAbrigo(req, res) {
        try {
            const abrigo = await db.Abrigo.create(req.body);
            res.status(201).json(abrigo);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao criar o abrigo' });
        }
    },
    async getAbrigos(req, res) {
        try {
            const abrigos = await db.Abrigo.findAll();
            res.status(200).json(abrigos);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao listar abrigos' });
        }
    },
    async getAbrigoById(req, res) {
        try {
            const abrigo = await db.Abrigo.findByPk(req.params.id);
            if (abrigo) {
                res.status(200).json(abrigo);
            } else {
                res.status(404).json({ error: 'Abrigo não encontrado' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao obter abrigo' });
        }
    },
    async putAbrigo(req, res) {
        try {
            const [updated] = await db.Abrigo.update(req.body, {
                where: { id: req.params.id }
            });
            if (updated) {
                const updatedAbrigo = await db.Abrigo.findByPk(req.params.id);
                res.status(200).json(updatedAbrigo);
            } else {
                res.status(404).json({ error: 'Abrigo não encontrado' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao atualizar abrigo' });
        }
    },
    async deleteAbrigo(req, res) {
        try {
            const deleted = await db.Abrigo.destroy({
                where: { id: req.params.id }
            });
            if (deleted) {
                res.status(204).json();
            } else {
                res.status(404).json({ error: 'Abrigo não encontrado' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao deletar abrigo' });
        }
    }
}