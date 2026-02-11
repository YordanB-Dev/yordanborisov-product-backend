const pool = require("../db");

const getAll = () => {
  return pool.query('SELECT * FROM products');
};

const getById = (id) => {
  return pool.query(
    'SELECT * FROM products WHERE id = $1',
    [id]
  );
};

const create = ( name, price ) => {
  return pool.query(
    `INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *`,
    [name, price]
  );
};

const update = (id, name, price) => {
  return pool.query(
    `UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *`,
    [name, price, id]
  );
};

const remove = (id) => {
  return pool.query(
    `DELETE FROM products WHERE id = $1 RETURNING *`,
    [id]
  );
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};