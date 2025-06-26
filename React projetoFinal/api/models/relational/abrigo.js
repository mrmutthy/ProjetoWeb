module.exports = (sequelize, Sequelize) => {
    const Abrigo = sequelize.define('abrigo', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true, allowNull: false, primaryKey: true
        },
        nome: {
            type: Sequelize.STRING, allowNull: false
        },
        endereco: {
            type: Sequelize.STRING, allowNull: false
        },
        telefone: {
            type: Sequelize.STRING, allowNull: false
        },
        email:{
            type: Sequelize.STRING, allowNull: false
        },
    });
    return Abrigo;
}