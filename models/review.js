// Model file for review structure

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');

class Review extends Model { }

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        movie_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'movie',
                key: 'id'
            }
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        review_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'review',
    }
);

module.exports = Review;