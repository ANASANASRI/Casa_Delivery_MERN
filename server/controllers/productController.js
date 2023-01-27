const asyncHandler = require('express-async-handler');
const Product = require('../models/products.js');


const getAllItems =async (req, res)=> {
try {
const products= await Product.find()
res.json(products)
    
} catch (error) {
    res.json( error.message)
}
}


const getItemByID = async (req, res) => {
const product = await Product.findById(req.params.id);
if (product) {
res.json(product);
} else {
res.status(404);
throw new Error("Item Not Found...");
}
};

module.exports = { getItemByID, getAllItems };