const repo = require("../repositories/product.repository");

const getAllProducts = async () => {
  const result = await repo.getAll();
  return result.rows;
};

const getProductById = async (id) => {
  const result = await repo.getById(id);
  
  if(result.rows.length === 0) {
    const err = Error("Product not found");
    err.status = 404;
    throw err;
  }

  return result.rows[0];
};

const createProduct = async ({ name, price }) => {
  if(!name || price === undefined || price === null) {
    const err = Error("Name and price are required");
    err.status = 400;
    throw err;
  }

  const result = await repo.create(name, price);
  return result.rows[0];
};

const updateProduct = async (id, { name, price }) => {
  const result = await repo.update(id, name, price);

  if(result.rows.length === 0) {
    const err = Error("Product not found");
    err.status = 404;
    throw err;
  }

  return result.rows[0];
};

const deleteProduct = async (id) => {
  const result = await repo.remove(id);
  
  if(result.rows.length === 0) {
    const err = Error("Product not found");
    err.status = 404;
    throw err;
  };
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};