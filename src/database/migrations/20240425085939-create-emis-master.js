module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('emis_masters', {
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
        current_tenure: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        residual_tenure: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        emi_amount: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        principal_amount: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        interest_amount: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        emi_due_date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        loan_outstanding: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        principal_outstanding: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        interest_outstanding: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        arrear_amount: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        principal_arrear: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        interest_arrear: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        other_charges: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        total_collection: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        dpd_days: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        unpaid_installment: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        total_installment: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        last_payment_date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        last_paid_amount: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        last_emi_date: {
            type: Sequelize.DATE,
            allowNull: false,
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
    down: (queryInterface) => queryInterface.dropTable('emis_masters'),
};
