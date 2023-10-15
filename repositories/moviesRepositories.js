const Movie = require('../models/movies.js');

class movieRepository {
  static all = async (next) => {
    try {
      const data = await Movie.getMovies(next);
      return data;
    } catch (err) {}
  };
}

module.exports = movieRepository;
