const router = require('express').Router();
const { Movie, Review, User } = require('../../models');
const withAuth = require('../../utils/auth'); // Middleware to ensure the user is logged in

// Route to fetch user-specific reviews and render the dashboard
// router.get('/dashboard', withAuth, async (req, res) => {
//     try {
//         const userData = await User.findByPk(req.session.user_id, {
//             include: [
//                 {
//                     model: Review,
//                     include: [
//                         {
//                             model: Movie,
//                             attributes: ['title'],
//                         },
//                     ],
//                 },
//             ],
//         });

//         const user = userData.get({ plain: true });

//         res.render('dashboard', {
//             user,
//             logged_in: true,
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;
