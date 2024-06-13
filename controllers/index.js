const router = require('express').Router();
const homeRoutes = require('../controllers/home-routes');
const movieRoutes = require('../controllers/api/movie-routes');
const reviewRoutes = require('../controllers/api/review-routes');
const userRoutes = require('../controllers/api/user-routes');

router.use('/', homeRoutes);
// router.use('/api/movies', movieRoutes);
// router.use('/api/reviews', reviewRoutes);
// router.use('/api/users', userRoutes);

module.exports = router;
