const express=require("express")
const route = express.Router()
const orderController=require('../controllers/orderController.js')


route.post("/",orderController.createOrder)
route.get("/",orderController.getOrders)
route.get("/:id",orderController.getOrderById)
route.put("/:orderId",orderController.makePayment)



module.exports=route