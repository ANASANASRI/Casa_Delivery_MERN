const mongoose=require("mongoose") 

const livreurUserSchema= mongoose.Schema( {
  name:{
    type: String,
    required:true,
      trim: true,
      lowercase:true, 
  },
  password:{
    type:String,
    required:true,
  },

  email:{
    type:String,
    required:true,
    trim:true,
  },
    
emailToken:{
type: String,
require:true
},

createdAt: { type: Date, default: Date.now },
expireAt: {
                type: Date,
                 default: Date.now() + 24*60 * 60 * 1000  

            }
}
);



const livreur =mongoose.model('livreur',livreurUserSchema)




module.exports = livreur ;