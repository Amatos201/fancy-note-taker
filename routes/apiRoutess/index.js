const router = require('express').Router();
const notestakenRoutes = require('./notestakenRoutes.js');

router.use(notestakenRoutes);



module.exports = router;