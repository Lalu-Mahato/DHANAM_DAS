module.exports = (sequelize, DataTypes) => {
    const products_master = sequelize.define(
        'products_master',
        {
            code: DataTypes.INTEGER,
            name: DataTypes.STRING,
        },
        {
            underscored: true,
            timestamps: true,
        },
    );
    products_master.associate = () => {
    // associations can be defined here
    };
    return products_master;
};
