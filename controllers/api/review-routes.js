const router = require('express').Router();
const { Review } = require('../../models');

// GET all reviews
router.get('/', async (req, res) => {
    try {
        const reviewData = await Review.findAll();
        res.status(200).json(reviewData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single review by ID
router.get('/:id', async (req, res) => {
    try {
        const reviewData = await Review.findByPk(req.params.id);
        if (!reviewData) {
            res.status(404).json({ message: 'No review found with this id!' });
            return;
        }
        res.status(200).json(reviewData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST a new review
router.post('/', async (req, res) => {
    try {
        const newReview = await Review.create(req.body);
        res.status(200).json(newReview);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE a review by ID
router.delete('/:id', async (req, res) => {
    try {
        const reviewData = await Review.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!reviewData) {
            res.status(404).json({ message: 'No review found with this id!' });
            return;
        }

        res.status(200).json(reviewData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
