const express=require("express")
const route=express.Router()
const userController=require("../controllers/userController.js")


route.post("/",userController.userRegister)
route.post("/login",userController.userAuth)
route.get("/profile",userController.getUser)


module.exports=route