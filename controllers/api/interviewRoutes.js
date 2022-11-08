const router = require('express').Router();
const { Interview } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newInterview = await Interview.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newInterview);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const interviewData = await Interview.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!interviewData) {
      res.status(404).json({ message: 'No interview found with this id!' });
      return;
    }

    res.status(200).json(interviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
