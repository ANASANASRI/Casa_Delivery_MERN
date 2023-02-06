const mongoose=require("mongoose") 

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false ,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    isLivreur: {
      type: Boolean,
      required: true,
      default: false,
    },
  }
)

const User = mongoose.model('User', userSchema)

module.exports=User;