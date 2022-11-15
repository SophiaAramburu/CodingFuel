const router = require('express').Router();
const userRoutes = require('./userRoutes');
const interviewRoutes = require('./interviewRoutes');
const questionRoutes = require('./questionRoutes');

router.use('/users', userRoutes);
router.use('/interviews', interviewRoutes);
router.use('/game', questionRoutes);

module.exports = router;
