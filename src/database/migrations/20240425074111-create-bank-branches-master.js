// no-unused-vars
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('bank_branches_masters', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.BIGINT,
        },
        code: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        address: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        city: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        state: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        country: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        created_at: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    }),
    down: (queryInterface) => queryInterface.dropTable('bank_branches_masters'),
};
