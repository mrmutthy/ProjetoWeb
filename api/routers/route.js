const express = require('express');
const userController = require('../controllers/userController');
const abrigoController = require('../controllers/abrigoController');
const animalController = require('../controllers/animalController');
const receitaController = require('../controllers/receitaController');
const categoriaController = require('../controllers/categoriaController');
const authController = require('../controllers/authController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

/*const db = require('../config/db_sequelize');
db.sequelize.sync({force: true}).then(() => {
    console.log('{ force: true }');
});*/
//db.Usuario.create({login:'admin', senha:'1234', tipo:2});


router.post('/login', authController.login);

router.get('/usuarios', authenticateToken, userController.getUsers);
router.post('/usuarios', authenticateToken, userController.postUser);
router.get('/usuarios/:id', authenticateToken, userController.getUsersById);
router.put('/usuarios/:id', authenticateToken, userController.putUser);
router.delete('/usuarios/:id', authenticateToken, userController.deleteUser);

router.get('/abrigo', authenticateToken, abrigoController.getAbrigos);
router.post('/abrigo', authenticateToken, abrigoController.postAbrigo);
router.get('/abrigo/:id', authenticateToken, abrigoController.getAbrigoById);
router.put('/abrigo/:id', authenticateToken, abrigoController.putAbrigo);
router.delete('/abrigo/:id', authenticateToken, abrigoController.deleteAbrigo);

router.get('/animais', authenticateToken, animalController.getAnimais);
router.post('/animais', authenticateToken, animalController.postAnimal);
router.get('/animais/:id', authenticateToken, animalController.getAnimalById);
router.put('/animais/:id', authenticateToken, animalController.putAnimal);
router.delete('/animais/:id', authenticateToken, animalController.deleteAnimal);

router.get('/receitas', authenticateToken, receitaController.getReceitas);
router.post('/receitas', authenticateToken, receitaController.postReceita);
router.get('/receitas/:id', authenticateToken, receitaController.getReceitaById);
router.put('/receitas/:id', authenticateToken, receitaController.putReceita);
router.delete('/receitas/:id', authenticateToken, receitaController.deleteReceita);

router.get('/categorias', authenticateToken, categoriaController.getCategorias);
router.post('/categorias', authenticateToken, categoriaController.postCategoria);
router.get('/categorias/:id', authenticateToken, categoriaController.getCategoriaById);
router.put('/categorias/:id', authenticateToken, categoriaController.putCategoria);
router.delete('/categorias/:id', authenticateToken, categoriaController.deleteCategoria);

router.get('/categorias/:id/receitas', authenticateToken, receitaController.getReceitasByCategoria); 

router.get('/abrigo/:id/animais', authenticateToken, animalController.getAnimaisByAbrigo);


module.exports = router;
