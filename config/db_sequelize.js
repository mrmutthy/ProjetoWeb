const Sequelize = require('sequelize');
const sequelize = new Sequelize('web2_db', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
  });

var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Usuario = require('../models/relational/usuario.js')(sequelize, Sequelize);
db.Candidatura = require('../models/relational/candidatura.js')(sequelize, Sequelize);
db.Abrigo = require('../models/relational/abrigo.js')(sequelize, Sequelize);
db.Voluntario = require('../models/relational/voluntario.js')(sequelize, Sequelize);
db.AdmDeAbrigo = require('../models/relational/admAbrigo.js')(sequelize, Sequelize);
module.exports = db;

