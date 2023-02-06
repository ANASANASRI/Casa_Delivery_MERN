const express=require("express")
const route=express.Router()
const livreurControllers=require("../controllers/livreurController")

route.get("/",livreurControllers.getlivreur)
route.post("/",livreurControllers.createlivreur)
route.get("/:id",livreurControllers.getlivreurById)
route.delete("/:id",livreurControllers.deletelivreur)
route.put("/:id",livreurControllers.updatelivreurById)

module.exports=route