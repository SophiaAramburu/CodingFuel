const router = require('express').Router();
const { User } = require('../../models');
const Questions = require('../../models');
const withAuth = require('../../utils/auth');

const { app } = require('express');

router.put('/', withAuth, async (req, res) => {
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

    interviews.length = questionLength;

    res.render('/game', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
