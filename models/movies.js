const pool = require('../config.js');

class Movie {
  static getMovies = async (next) => {
    const findQuery = `SELECT * FROM public.movies`;
    try {
      const data = await pool.query(findQuery);
      return data.rows;
    } catch (err) {
      next(err);
    }
  };

  static getMoviesById = async (id, next) => {
    const query = `SELECT * FROM public.movies WHERE id = $1`;
    try {
      const data = await pool.query(query, [id]);
      if (data.rows.length === 0) {
        return null;
      }
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static createMovies = async (bodyMovie, next) => {
    const { title, genres, year } = bodyMovie;
    if (!title || !genres || !year) {
      return next({
        message: 'paramsError',
      });
    }
    const query = `
    INSERT INTO public.movies (title, genres, year) VALUES ($1, $2, $3) RETURNING*;`;
    try {
      const data = await pool.query(query, [title, genres, year]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static updateMovies = async (id, bodyMovie, next) => {
    const { title, genres, year } = bodyMovie;
    if (!title || !genres || !year) {
      return next({
        message: 'paramsError',
      });
    }
    const query = `
    UPDATE public.movies 
    SET title =$1, 
    genres=$2, 
    year=$3 
    WHERE id = $4`;

    try {
      const data = await pool.query(query, [title, genres, year, id]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static deleteMovies = async (id, next) => {
    const query = `
    DELETE FROM public.movies WHERE id = $1`;
    try {
      const data = await pool.query(query, [id]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };
}

module.exports = Movie;
