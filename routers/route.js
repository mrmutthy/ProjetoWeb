const express = require('express');
const db = require('../config/db_sequelize');
const controllerUsuario = require('../controllers/controllerUsuario');
const controllerComentario = require('../controllers/controllerComentario');
const controllerAnimal = require('../controllers/controllerAnimal');
const route = express.Router();
/*db.sequelize.sync({force: true}).then(() => {
    console.log('{ force: true }');
});*/
 //db.Usuario.create({login:'admin', senha:'1234', tipo:1});


module.exports = route;

//Home
route.get("/home", function (req, res) { res.render('home') });

//Controller Usuario
//Usuario - Login e Recuperação de Senha
route.get("/", controllerUsuario.getLogin);
route.post("/login", controllerUsuario.postLogin);
//Usuario - CRUD
route.get("/usuarioCreate", controllerUsuario.getCreate);
route.post("/usuarioCreate", controllerUsuario.postCreate);
route.get("/usuarioList", controllerUsuario.getList);

//Comentarios-CRUD
route.get("/comentarioCreate",controllerComentario.getCreate);
route.post("/comentarioCreate",controllerComentario.postCreate);
route.get("/comentarioList",controllerComentario.getList);

//Animal - CRUD
route.get("/animalCreate", controllerAnimal.getCreate);
route.post("/animalCreate", controllerAnimal.postCreate);
route.get("/animalList", controllerAnimal.getList);