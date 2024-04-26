module.exports = (sequelize, DataTypes) => {
    const emis_master = sequelize.define(
        'emis_master',
        {
            loan_account_number: DataTypes.BIGINT,
            current_tenure: DataTypes.INTEGER,
            residual_tenure: DataTypes.INTEGER,
            emi_amount: DataTypes.FLOAT,
            principal_amount: DataTypes.FLOAT,
            interest_amount: DataTypes.FLOAT,
            emi_due_date: DataTypes.DATE,
            loan_outstanding: DataTypes.FLOAT,
            principal_outstanding: DataTypes.FLOAT,
            interest_outstanding: DataTypes.FLOAT,
            arrear_amount: DataTypes.FLOAT,
            principal_arrear: DataTypes.FLOAT,
            interest_arrear: DataTypes.FLOAT,
            other_charges: DataTypes.FLOAT,
            total_collection: DataTypes.FLOAT,
            dpd_days: DataTypes.INTEGER,
            unpaid_installment: DataTypes.INTEGER,
            total_installment: DataTypes.INTEGER,
            last_payment_date: DataTypes.DATE,
            last_paid_amount: DataTypes.FLOAT,
            last_emi_date: DataTypes.DATE,
            branch_code: DataTypes.INTEGER,
            product_code: DataTypes.INTEGER,
        },
        {
            underscored: true,
            timestamps: true,
        },
    );
    emis_master.associate = () => {
    // Define associations here if needed
    };
    return emis_master;
};
