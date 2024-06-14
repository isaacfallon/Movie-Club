// /controllers/home-routes.js
const router = require('express').Router();
const { Movie } = require('../models'); // Correcting 'movie' to 'Movie' to match the model name

// Home route
router.get('/', async (req, res) => {
  try {
    const movieData = await Movie.findAll({
      attributes: ['id', 'title', 'year', 'genre']
    });

    // Serialize data so the template can read it
    const movies = movieData.map((movie) => movie.get({ plain: true }));

    res.render('homepage', {
      movies,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to display a specific movie by ID
router.get('/movie/:id', async (req, res) => {
  try {
    const movieData = await Movie.findByPk(req.params.id, {
      attributes: ['id', 'title', 'year', 'genre', 'plot', 'director', 'actors']
    });

    if (!movieData) {
      res.status(404).json({ message: 'No movie found with this id!' });
      return;
    }

    const movie = movieData.get({ plain: true });

    res.render('movie', {
      ...movie,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to render login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// Route to render signup page
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
