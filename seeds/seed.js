// Master seed file to populate the database with content

const sequelize = require('../config/config');
const { User, Movie, Review } = require('../models');

const userData = require('./userData.json');
const movieData = require('./movieData.json');
const reviewData = require('./reviewData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Movie.bulkCreate(movieData, {
        individualHooks: true,
        returning: true,
    });

    await Review.bulkCreate(reviewData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();
