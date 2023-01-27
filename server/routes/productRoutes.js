const express=require("express")
const route = express.Router();
const productController=require('../controllers/productController.js');


route.get('/', productController.getAllItems)
route.get('/:id',productController.getItemByID)


module.exports=route