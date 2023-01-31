const mongoose=require("mongoose") 

const restoSchema = mongoose.Schema(
    {
        restoAddress: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        phone: { type: String, required: true },
        },
    });

const resto = mongoose.model('resto', restoSchema);

module.exports = resto;