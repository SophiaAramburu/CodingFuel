const router = require('express').Router();
const userRoutes = require('./userRoutes');
const interviewRoutes = require('./interviewRoutes');

router.use('/users', userRoutes);
router.use('/interviews', interviewRoutes);

module.exports = router;
