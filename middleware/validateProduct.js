const validateProduct = (req, res, next) => {
    const { name, price } = req.body;
    
    if(!name || typeof price !== "number") {
        const err = Error("Name and price are required");
        err.status = 400;
        throw err;
    }

    next();
};

module.exports = validateProduct;