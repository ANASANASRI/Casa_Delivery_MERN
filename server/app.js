const express=require("express");
const mongoose = require('mongoose');
const app=express();
const cors=require("cors"); 

const loggingMiddelwares=require("./middlewares/loggingMiddelwares")
const bookRoute=require("./routes/bookRoutes")
//const userRoute=require("./routes/userRoutes")

app.use(express.json());

app.use(loggingMiddelwares.loggingParams);
app.use(loggingMiddelwares.loggingUrls) ;

app.use(cors());

require('dotenv').config()

const books = require("./models/books.js");

mongoose.connect(process.env.dbURL)
        .then(result=>console.log('connect'))
        .catch(err => console.log(err));

app.use("/books",bookRoute)
//app.use("/users",userRoute)


app.get("/",(req,res)=>{
    console.log("Home Page")
    res.send("<h2> Bienvenue dans notre app express </h2>");
});

app.listen(5566,function(){
    console.log("Sever is running");
});
