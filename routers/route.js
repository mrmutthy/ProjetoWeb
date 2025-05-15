const express = require('express');
const db = require('../config/db_sequelize');
const controllerUsuario = require('../controllers/controllerUsuario');
const controllerComentario = require('../controllers/controllerComentario');
const controllerCategoria = require('../controllers/controllerCategoria');
const controllerAnimal = require('../controllers/controllerAnimal');
const controllerEspecie = require('../controllers/controllerEspecie');
const controllerReceita = require('../controllers/controllerReceita');
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

//Controller Categoria
route.get("/categoriaCreate", controllerCategoria.getCreate);
route.post("/categoriaCreate", controllerCategoria.postCreate);
route.get("/categoriaList", controllerCategoria.getList);
route.get("/categoriaUpdate/:id", controllerCategoria.getUpdate);
route.post("/categoriaUpdate", controllerCategoria.postUpdate);
route.get("/categoriaDelete/:id", controllerCategoria.getDelete);

//Controller Receita
route.get("/receitaCreate", controllerReceita.getCreate);
route.post("/receitaCreate", controllerReceita.postCreate);
route.get("/receitaList", controllerReceita.getList);
route.get("/receitaUpdate/:id", controllerReceita.getUpdate);
route.post("/receitaUpdate", controllerReceita.postUpdate);
route.get("/receitaDelete/:id", controllerReceita.getDelete);

//Controller Comentario
route.get("/comentarioCreate", controllerComentario.getCreate);
route.post("/comentarioCreate", controllerComentario.postCreate);
route.get("/comentarioList", controllerComentario.getList);

//Controller Animal
route.get("/animalCreate", controllerAnimal.getCreate);
route.post("/animalCreate", controllerAnimal.postCreate);
route.get("/animalList", controllerAnimal.getList);
route.get("/animalUpdate/:id", controllerAnimal.getUpdate);
route.post("/animalUpdate", controllerAnimal.postUpdate);
route.get("/animalDelete/:id", controllerAnimal.getDelete);

//Controller raca
route.get("/especieCreate", controllerEspecie.getCreate);
route.post("/especieCreate", controllerEspecie.postCreate);
route.get("/especieList", controllerEspecie.getList);
route.get("/especieUpdate/:id", controllerEspecie.getUpdate);
route.post("/especieUpdate", controllerEspecie.postUpdate);
route.get("/especieDelete/:id", controllerEspecie.getDelete);