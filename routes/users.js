const express = require('express');
const router = express.Router();
const userController = require('../controller/usersController');

router.get('/', userController.showUser);
router.get('/:id', userController.showUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
