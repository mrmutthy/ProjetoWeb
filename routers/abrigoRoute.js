const express = require('express');
const db = require('../config/db_sequelize');
const router = express.Router();

// GET all abrigos
router.get('/', async (req, res) => {
    try {
        const abrigos = await db.Abrigo.findAll();
        res.json(abrigos);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar abrigos' });
    }
});

// GET abrigo by ID
router.get('/:id', async (req, res) => {
    try {
        const abrigo = await db.Abrigo.findByPk(req.params.id);
        if (!abrigo) return res.status(404).json({ error: 'Abrigo não encontrado' });
        res.json(abrigo);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar abrigo' });
    }
});

// POST create abrigo
router.post('/', async (req, res) => {
    try {
        const abrigo = await db.Abrigo.create(req.body);
        res.status(201).json(abrigo);
    } catch (err) {
        res.status(400).json({ error: 'Erro ao criar abrigo', details: err.message });
    }
});

// PUT update abrigo
router.put('/:id', async (req, res) => {
    try {
        const abrigo = await db.Abrigo.findByPk(req.params.id);
        if (!abrigo) return res.status(404).json({ error: 'Abrigo não encontrado' });
        await abrigo.update(req.body);
        res.json(abrigo);
    } catch (err) {
        res.status(400).json({ error: 'Erro ao atualizar abrigo', details: err.message });
    }
});

// DELETE abrigo
router.delete('/:id', async (req, res) => {
    try {
        const abrigo = await db.Abrigo.findByPk(req.params.id);
        if (!abrigo) return res.status(404).json({ error: 'Abrigo não encontrado' });
        await abrigo.destroy();
        res.json({ message: 'Abrigo removido com sucesso' });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar abrigo' });
    }
});

module.exports = router;