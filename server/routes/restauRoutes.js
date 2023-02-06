const express=require("express")
const route=express.Router()
const restauControllers=require("../controllers/restauController")

route.get("/",restauControllers.getrestau)
route.post("/",restauControllers.createrestau)
route.get("/:id",restauControllers.getrestauById)
route.delete("/:id",restauControllers.deleterestau)
route.put("/:id",restauControllers.updaterestauById)

module.exports=route