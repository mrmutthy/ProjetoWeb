const express = require('express');
const userController = require('../controllers/userController');
const abrigoController = require('../controllers/abrigoController');
const animalController = require('../controllers/animalController');
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

router.get('/abrigos', authenticateToken, abrigoController.getAbrigos);
router.post('/abrigos', authenticateToken, abrigoController.postAbrigo);
router.get('/abrigos/:id', authenticateToken, abrigoController.getAbrigoById);
router.put('/abrigos/:id', authenticateToken, abrigoController.putAbrigo);
router.delete('/abrigos/:id', authenticateToken, abrigoController.deleteAbrigo);

router.get('/animais', authenticateToken, animalController.getAnimais);
router.post('/animais', authenticateToken, animalController.postAnimal);
router.get('/animais/:id', authenticateToken, animalController.getAnimalById);
router.put('/animais/:id', authenticateToken, animalController.putAnimal);
router.delete('/animais/:id', authenticateToken, animalController.deleteAnimal);

router.get('/abrigos/:id/animais', authenticateToken, animalController.getAnimaisByAbrigo);


module.exports = router;
