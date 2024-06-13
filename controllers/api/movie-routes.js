const router = require('express').Router();
const { Movie } = require('../../models');

// GET all movies
router.get('/', async (req, res) => {
    try {
        const movieData = await Movie.findAll();
        res.status(200).json(movieData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single movie by ID
router.get('/:id', async (req, res) => {
    try {
        const movieData = await Movie.findByPk(req.params.id);
        if (!movieData) {
            res.status(404).json({ message: 'No movie found with this id!' });
            return;
        }
        res.status(200).json(movieData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST a new movie
router.post('/', async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(200).json(newMovie);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE a movie by ID
router.delete('/:id', async (req, res) => {
    try {
        const movieData = await Movie.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!movieData) {
            res.status(404).json({ message: 'No movie found with this id!' });
            return;
        }

        res.status(200).json(movieData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
