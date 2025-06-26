const express = require('express');
const db = require('../config/db_sequelize');
const router = express.Router();

// GET all users
router.get('/', async (req, res) => {
    try {
        const usuarios = await db.Usuario.findAll();
        res.json(usuarios);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
});

// GET user by ID
router.get('/:id', async (req, res) => {
    try {
        const usuario = await db.Usuario.findByPk(req.params.id);
        if (!usuario) return res.status(404).json({ error: 'Usuário não encontrado' });
        res.json(usuario);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
});

// POST create user
router.post('/', async (req, res) => {
    try {
        const usuario = await db.Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (err) {
        res.status(400).json({ error: 'Erro ao criar usuário', details: err.message });
    }
});

// PUT update user
router.put('/:id', async (req, res) => {
    try {
        const usuario = await db.Usuario.findByPk(req.params.id);
        if (!usuario) return res.status(404).json({ error: 'Usuário não encontrado' });
        await usuario.update(req.body);
        res.json(usuario);
    } catch (err) {
        res.status(400).json({ error: 'Erro ao atualizar usuário', details: err.message });
    }
});

// DELETE user
router.delete('/:id', async (req, res) => {
    try {
        const usuario = await db.Usuario.findByPk(req.params.id);
        if (!usuario) return res.status(404).json({ error: 'Usuário não encontrado' });
        await usuario.destroy();
        res.json({ message: 'Usuário removido com sucesso' });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
});

module.exports = router;