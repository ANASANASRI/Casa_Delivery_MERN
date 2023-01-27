const express=require("express");
const mongoose = require('mongoose');
const cors=require("cors"); 

const loggingMiddelwares=require("./middlewares/authMiddleware")
const userRoutes=require("./routes/userRoutes.js")
const productRoutes=require("./routes/productRoutes.js")
const orderRoutes=require("./routes/orderRoutes.js")


app.use(express.json());

app.use(loggingMiddelwares.protect);

app.use(cors());

require('dotenv').config()


mongoose.connect(process.env.dbURL)
        .then(result=>console.log('connect'))
        .catch(err => console.log(err));

app.use("/users",userRoutes)
app.use("/orders",orderRoutes)
app.use("/products",productRoutes)


app.get("/",(req,res)=>{
    console.log("Home Page")
    res.send("<h2> Bienvenue dans notre app express </h2>");
});

app.listen(5566,function(){
    console.log("Sever is running");
});
