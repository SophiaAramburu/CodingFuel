const router = require('express').Router();
const { User } = require('../../models');
const Questions = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/game', withAuth, async (req, res) => {
  try {
    const interviewQuestions = await Questions.findAll({
      include: [
        {
          model: Questions,
          attributes: ['id', 'tokens_given', 'difficulty'],
        },
      ],
    });

    const interviews = interviewQuestions.map((question) =>
      question.get({ plain: true })
    );

    console.log(interviews);

    var questionSelect = Math.floor(Math.random() * interviews.length);
    res.status(200).json(questionSelect);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
