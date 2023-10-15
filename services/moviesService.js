const movieRepository = require('../repositories/moviesRepositories.js');

class movieService {
  static get_all_movies = async (next) => {
    try {
      const data = movieRepository.all(next);
      return data;
    } catch (err) {
      next(err);
    }
  };
}

module.exports = movieService;
