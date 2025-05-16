const express = require('express');
const db = require('../config/db_sequelize');
const controllerUsuario = require('../controllers/controllerUsuario');
const controllerAnimal = require('../controllers/controllerAnimal');
const controllerAbrigo = require('../controllers/controllerAbrigo');
const route = express.Router();

/*db.sequelize.sync({force: true}).then(() => {
    console.log('{ force: true }');
});*/
//db.Usuario.create({login:'admin', senha:'1234', tipo:1});


module.exports = route;

//Home
route.get("/home", function (req, res) {
    //if (req.cookies.userData) {
    if (req.session.login) {
        res.render('home')
    }
    else
        res.redirect('/');
});

//Controller Usuario
route.get("/", controllerUsuario.getLogin);
route.post("/login", controllerUsuario.postLogin);
route.get("/logout", controllerUsuario.getLogout);
route.get("/usuarioCreate", controllerUsuario.getCreate);
route.post("/usuarioCreate", controllerUsuario.postCreate);
route.get("/usuarioList", controllerUsuario.getList);
route.get("/usuarioUpdate/:id", controllerUsuario.getUpdate);
route.post("/usuarioUpdate", controllerUsuario.postUpdate);
route.get("/usuarioDelete/:id", controllerUsuario.getDelete);


//Controller Animal
route.get("/animalCreate", controllerAnimal.getCreate);
route.post("/animalCreate", controllerAnimal.postCreate);
route.get("/animalList", controllerAnimal.getList);
route.get("/animalUpdate/:id", controllerAnimal.getUpdate);
route.post("/animalUpdate", controllerAnimal.postUpdate);
route.get("/animalDelete/:id", controllerAnimal.getDelete);


//Controller Abrigo
route.get("/abrigoCreate", controllerAbrigo.getCreate);
route.post("/abrigoCreate", controllerAbrigo.postCreate);
route.get("/abrigoList", controllerAbrigo.getList);
route.get("/abrigoUpdate/:id", controllerAbrigo.getUpdate);
route.post("/abrigoUpdate", controllerAbrigo.postUpdate);
route.get("/abrigoDelete/:id", controllerAbrigo.getDelete);