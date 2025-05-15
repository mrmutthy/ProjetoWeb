module.exports = (sequelize, Sequelize) => {
    const Animal = sequelize.define('animal', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true, allowNull: false, primaryKey: true
        },
        nome: {
            type: Sequelize.STRING, allowNull: false
        },
        sexo: {
            type: Sequelize.STRING, allowNull: false
        },
        dataNascimento: {
            type: Sequelize.STRING, allowNull: false
        },
        especieId:{
            type: Sequelize.INTEGER, allowNull: true
        },
        castrado:{
            type: Sequelize.STRING, allowNull: false
        },
        informacoes:{
            type: Sequelize.STRING, allowNull: false
        },
        porte:{
            type: Sequelize.STRING, allowNull: false
        }
    });
    return Animal;
}