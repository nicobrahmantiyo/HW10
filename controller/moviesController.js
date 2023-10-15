const Movie = require('../models/movies.js');
const movieService = require('../services/moviesService.js');

class movieController {
  static show = async (req, res, next) => {
    try {
      const data = await movieService.get_all_movies(next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static showById = async (req, res, next) => {
    const id = req.params.id;
    try {
      const data = await Movie.getMoviesById(id, next);
      if (!data) {
        next({ message: 'not found' });
      } else {
        res.status(200).json(data);
      }
    } catch (err) {
      next(err);
    }
  };

  static create = async (req, res, next) => {
    const bodyMovie = req.body;
    try {
      const data = await Movie.createMovies(bodyMovie, next);
      res.status(201).json({
        message: 'Create successfully',
      });
    } catch (err) {
      next(err);
    }
  };

  static update = async (req, res, next) => {
    const id = req.params.id;
    const bodyMovie = req.body;
    try {
      const data = await Movie.updateMovies(id, bodyMovie, next);
      res.status(200).json({
        message: 'Success update',
      });
    } catch (err) {
      next(err);
    }
  };

  static delete = async (req, res, next) => {
    const id = req.params.id;
    try {
      const data = await Movie.deleteMovies(id, next);
      res.status(200).json({
        message: 'Success deleted',
      });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = movieController;
