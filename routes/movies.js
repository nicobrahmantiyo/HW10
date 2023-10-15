const express = require('express');
const router = express.Router();
const movieController = require('../controller/moviesController');

router.get('/', movieController.show);
router.get('/:id', movieController.showById);
router.post('/', movieController.create);
router.put('/:id', movieController.update);
router.delete('/:id', movieController.delete);

module.exports = router;
