const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const questionRoutes = require('./api/questionRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/game', questionRoutes);

module.exports = router;
