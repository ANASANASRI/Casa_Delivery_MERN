const mongoose=require("mongoose") 

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'users',
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'products',
    },
    orderItems: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'products',
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      commune: {
        type: String,
        required: true,
        enum: ["Sbata", "Al Fida", "Anfa", "Ben M'sik", "Hay Hassani", "Hay Mohammadi", "Maârif", "Mers Sultan", "Moulay Rachid", "Essoukhour Assawda", "Ain Sebaa", "Sidi Belyout", "Sidi Bernoussi", "Sidi Moumen", "Sidi Othman"]
      },
      phone: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model('Order', orderSchema)

module.exports=Order;