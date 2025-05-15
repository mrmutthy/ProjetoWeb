module.exports = (sequelize, Sequelize) => {
    const Especie = sequelize.define('especie', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true, allowNull: false, primaryKey: true
        },
        especie: {
            type: Sequelize.STRING, allowNull: false
        },
    });
    return Especie;
}