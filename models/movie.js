// Model file for movie structure

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');

class Movie extends Model { }

Movie.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rated: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        released: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        runtime: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        director: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        actors: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        plot: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'movie',
    }
);

module.exports = Movie;
