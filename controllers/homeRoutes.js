const router = require('express').Router();
const { Interview, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  // if (!req.session.logged_in) {
  //   res.redirect('/login');
  //   return;
  // }
  try {
    // Get all interviews and JOIN with user data
    const interviewData = await Interview.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const interviews = interviewData.map((interview) =>
      interview.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    res.render('homepage', {
      interviews,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/interview/:id', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  try {
    const interviewData = await Interview.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const interview = interviewData.get({ plain: true });

    res.render('interview', {
      ...interview,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/game', async (req, res) => {
//   console.log(req.body);
//   if (!req.session.logged_in) {
//     res.render('/login');
//     return;
//   }
//   try {
//     res.render('game');
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Interview }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/questions', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/questions');
  }
});

module.exports = router;
