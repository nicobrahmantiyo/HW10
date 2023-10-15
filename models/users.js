const pool = require('../config.js');

class User {
  static getUsers = async (next) => {
    const findQuery = `SELECT * FROM public.users`;
    try {
      const data = await pool.query(findQuery);
      return data.rows;
    } catch (err) {
      next(err);
    }
  };

  static getUsersById = async (id, next) => {
    const query = `SELECT * FROM public.users WHERE id = $1`;
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

  static createUsers = async (bodyUser, next) => {
    const { email, gender, password, role } = bodyUser;
    if (!email || !gender || !password || !role) {
      return next({
        message: 'paramsError',
      });
    }
    const query = `
      INSERT INTO public.users (email, gender, password, role) VALUES ($1, $2, $3, $4) RETURNING*;`;
    try {
      const data = await pool.query(query, [email, gender, password, role]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static updateUsers = async (id, bodyUser, next) => {
    const { email, gender, password, role } = bodyUser;
    if (!email || !gender || !password || !role) {
      return next({
        message: 'paramsError',
      });
    }
    const query = `
      UPDATE public.users
      SET email =$1, 
      gender=$2, 
      password=$3,
      role=$4 
      WHERE id = $5`;

    try {
      const data = await pool.query(query, [email, gender, password, role, id]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static deleteUsers = async (id, next) => {
    const query = `
      DELETE FROM public.users WHERE id = $1`;
    try {
      const data = await pool.query(query, [id]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };
}

module.exports = User;
