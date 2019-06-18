'use strict';
module.exports = (sequelize, DataTypes) => {
    const data = sequelize.define('data', {


        startvalue: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        endvalue: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,

        },
        difference: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,

        }
    });

    return data;
};