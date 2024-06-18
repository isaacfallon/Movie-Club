const router = require('express').Router();
const { Movie, Review, User } = require('../models');

// Route to fetch all movies and render the homepage
router.get('/', async (req, res) => {
  try {
    const movieData = await Movie.findAll();
    const movies = movieData.map((movie) => movie.get({ plain: true }));
    res.render('homepage', {
      movies,
      logged_in: req.session.logged_in,
      logged_in_username: req.session.username
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

// Route to fetch a single movie by ID and render the movie detail page
router.get('/movie/:id', async (req, res) => {
  try {
    const movieData = await Movie.findByPk(req.params.id, {
      include: [
        {
          model: Review,
          include: [
            {
              model: User,
              attributes: ['username'],
            },
          ],
        },
      ],
    });

    if (!movieData) {
      res.status(404).json({ message: 'No movie found with this id!' });
      return;
    }

    const movie = movieData.get({ plain: true });
    // console.log(movie)

    res.render('movie-detail', {
      movie,
      logged_in: req.session.logged_in,
      logged_in_username: req.session.username
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      where: { user_id: req.session.user_id },
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Movie,
        }
      ]
    })

    const reviews = reviewData.map((project) => project.get({ plain: true }));

    res.render('dashboard', {
      reviews,
      logged_in: req.session.logged_in,
      logged_in_username: req.session.username
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
