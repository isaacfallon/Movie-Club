const router = require(`express`).Router();
const {Movie} = require(`../models`);


router.get(`/`, async (req, res) => {
  try {
    const movieData = await Movie.findAll({
    }); 
    
    const movies = movieData.map((data) => data.get({plain: true}));

    // console.log(posts);

    res.render(`homepage`, {movies});

  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;