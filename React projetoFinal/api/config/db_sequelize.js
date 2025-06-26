const Sequelize = require('sequelize');
const sequelize = new Sequelize('web2', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
  });

var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Usuario = require('../models/relational/usuario.js')(sequelize, Sequelize);
db.Abrigo = require('../models/relational/abrigo.js')(sequelize, Sequelize);
db.Receita = require('../models/receita.js')(sequelize, Sequelize);
db.Categoria = require('../models/categoria.js')(sequelize, Sequelize);
module.exports = db;

