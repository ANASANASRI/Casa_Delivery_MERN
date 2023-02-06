const mongoose=require("mongoose") 

const restauSchema = mongoose.Schema(
    {
        information: {
            adresse: { type: String, required: true },
            ville: { type: String, required: true },
            commune: {
                type: String,
                required: true,
                enum: ["Sbata", "Al Fida", "Anfa", "Ben M'sik", "Hay Hassani", "Hay Mohammadi", "Maârif", "Mers Sultan", "Moulay Rachid", "Essoukhour Assawda", "Ain Sebaa", "Sidi Belyout", "Sidi Bernoussi", "Sidi Moumen", "Sidi Othman"]
            },
            phone: { type: String, required: true },
        },
    });

const restau = mongoose.model('restau', restauSchema);

module.exports = restau;