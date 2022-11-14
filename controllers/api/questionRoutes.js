const router = require('express').Router();
const { Questions } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newQuestions = await Questions.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newQuestions);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
