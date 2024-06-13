// Index model file to handle the relational logic between the user, movie and reviews

const User = require('./user');
const Movie = require('./movie');
const Review = require('./review');

// A user can have many reviews
User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// Reviews belongs to the user
Review.belongsTo(User, {
    foreignKey: 'user_id',
});

// Movies can have many reviews
Movie.hasMany(Review, {
    foreignKey: 'movie_id',
    onDelete: 'CASCADE',
});

// Reviews belong to a movie
Review.belongsTo(Movie, {
    foreignKey: 'movie_id',
    onDelete: 'CASCADE',
});

module.exports = { User, Movie, Review };