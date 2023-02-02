const mongoose=require("mongoose") 

const livreurUserSchema= mongoose.Schema( {
  commune: {
    type: String,
    required: true,
    enum: ["Sbata", "Al Fida", "Anfa", "Ben M'sik", "Hay Hassani", "Hay Mohammadi", "Maârif", "Mers Sultan", "Moulay Rachid", "Essoukhour Assawda", "Ain Sebaa", "Sidi Belyout", "Sidi Bernoussi", "Sidi Moumen", "Sidi Othman"]
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