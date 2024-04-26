module.exports = (sequelize, DataTypes) => {
    const loans_master = sequelize.define(
        'loans_master',
        {
            loan_account_number: DataTypes.BIGINT,
            amount_sanctioned: DataTypes.FLOAT,
            disbursement_date: DataTypes.DATE,
            interest_rate: DataTypes.FLOAT,
            total_tenure: DataTypes.INTEGER,
            cif_id: DataTypes.BIGINT,
            branch_code: DataTypes.INTEGER,
            product_code: DataTypes.INTEGER,
        },
        {
            underscored: true,
            timestamps: true,
        },
    );
    loans_master.associate = () => {
    // Define associations here if needed
    };
    return loans_master;
};
