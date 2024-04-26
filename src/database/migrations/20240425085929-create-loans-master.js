module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('loans_masters', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        loan_account_number: {
            type: Sequelize.BIGINT,
            allowNull: false,
        },
        amount_sanctioned: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        disbursement_date: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        interest_rate: {
            type: Sequelize.FLOAT,
            allowNull: true,
        },
        total_tenure: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        cif_id: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
        branch_code: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        product_code: {
            type: Sequelize.INTEGER,
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
    down: (queryInterface) => queryInterface.dropTable('loans_masters'),
};
