const User = require('../models/users.js');

class userController {
  static showUser = async (req, res, next) => {
    try {
      const data = await User.getUsers(next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static showUserById = async (req, res, next) => {
    const id = req.params.id;
    try {
      const data = await User.getUsersById(id, next);
      if (!data) {
        next({ message: 'not found' });
      } else {
        res.status(200).json(data);
      }
    } catch (err) {
      next(err);
    }
  };

  static createUser = async (req, res, next) => {
    const bodyUser = req.body;
    try {
      const data = await User.createUsers(bodyUser, next);
      res.status(201).json({
        message: 'Create successfully',
      });
    } catch (err) {
      next(err);
    }
  };

  static updateUser = async (req, res, next) => {
    const id = req.params.id;
    const bodyUser = req.body;
    try {
      const data = await User.updateUsers(id, bodyUser, next);
      res.status(200).json({
        message: 'Success update',
      });
    } catch (err) {
      next(err);
    }
  };

  static deleteUser = async (req, res, next) => {
    const id = req.params.id;
    try {
      const data = await User.deleteUsers(id, next);
      res.status(200).json({
        message: 'Success deleted',
      });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = userController;
