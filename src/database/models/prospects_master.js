module.exports = (sequelize, DataTypes) => {
    const prospects_master = sequelize.define(
        'prospects_master',
        {
            loan_account_number: DataTypes.BIGINT,
            name: DataTypes.STRING,
            mobile_number: DataTypes.STRING,
            address: DataTypes.STRING,
            is_npa_account: DataTypes.BOOLEAN,
        },
        {
            underscored: true,
            timestamps: true,
        },
    );
    prospects_master.associate = () => {
    // associations can be defined here
    };
    return prospects_master;
};
