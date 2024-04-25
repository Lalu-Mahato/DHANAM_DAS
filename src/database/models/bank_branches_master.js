module.exports = (sequelize, DataTypes) => {
    const bank_branches_master = sequelize.define(
        'bank_branches_master',
        {
            code: DataTypes.INTEGER,
            name: DataTypes.STRING,
            address: DataTypes.STRING,
            city: DataTypes.STRING,
            state: DataTypes.STRING,
            country: DataTypes.STRING,
        },
        {
            underscored: true,
            timestamps: true,
        },
    );
    bank_branches_master.associate = () => {
    // associations can be defined here
    };
    return bank_branches_master;
};
