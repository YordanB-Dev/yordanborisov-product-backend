const asyncHandler = require("../middleware/asyncHandler");
const service = require("../services/product.service");

const getAllProducts = asyncHandler(async(req, res) => {
    const product = await service.getAllProducts();
    res.json(product);
});

const getProductById = asyncHandler(async(req, res) => {
    const product = await service.getProductById(req.params.id);
    res.json(product);
});

const createProduct = asyncHandler(async(req, res) => {
    const product = await service.createProduct(req.body);
    res.status(201).json(product);
});

const updateProduct = asyncHandler(async(req, res) => {
    const product = await service.updateProduct(req.params.id, req.body);
    res.json(product);
});

const deleteProduct = asyncHandler(async(req, res) => {
    await service.deleteProduct(req.params.id);
    res.status(204).send();
});

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};