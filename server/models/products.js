const mongoose=require("mongoose")

const productSchema = mongoose.Schema(
  {
    restau: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'restau',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    }
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

module.exports=Product;