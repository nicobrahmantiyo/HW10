const express = require('express');
const router = express.Router();
const movieRouter = require('./movies.js');
const userRouter = require('./users.js');

router.use('/movies', movieRouter);
router.use('/users', userRouter);

module.exports = router;
