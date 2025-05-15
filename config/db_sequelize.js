const Sequelize = require('sequelize');
const sequelize = new Sequelize('web2', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
  });

var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Usuario = require('../models/relational/usuario.js')(sequelize, Sequelize);
db.Animal = require('../models/relational/animal.js')(sequelize, Sequelize);
//db.Receita = require('../models/relational/receita.js')(sequelize, Sequelize);
db.Especie = require('../models/relational/especie.js')(sequelize, Sequelize);
db.Especie.hasMany(db.Animal, {foreignKey:'especieId', onDelete: 'NO ACTION'});
//db.Categoria = require('../models/relational/categoria.js')(sequelize, Sequelize);
//db.Categoria.hasMany(db.Receita, {foreignKey:'categoriaId', onDelete: 'NO ACTION'});
module.exports = db;

