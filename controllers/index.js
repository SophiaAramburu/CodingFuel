const router = require('express').Router();
const apiRoutes = require('./api');

// router.use('/api', apiRoutes);
router.get("/", (req, res)=> {
    res.render("layouts/main")
}) 

module.exports = router;
