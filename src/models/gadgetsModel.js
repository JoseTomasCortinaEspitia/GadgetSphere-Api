const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Gadget', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            defaultValue:""
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false   
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        }, { timestamps: false }
    );
}