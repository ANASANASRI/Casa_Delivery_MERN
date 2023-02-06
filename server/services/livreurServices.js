const livreur=require("../models/livreur");

const addlivreur=async(c)=>{
    return await livreur.create(c)
};

const getAlllivreur=async()=>{
    return await livreur.find()
};

const getlivreurById=async (id)=>{
    return await livreur.findOne({_id:id})
    
}
const deletelivreurById=async (id)=>{
    return await livreur.findByIdAndDelete({_id:id})
}

const updatelivreur=async (livreur)=>{
    console.log(livreur)
    return await livreur.findByIdAndUpdate(livreur._id,livreur)
    
}

module.exports={
    addlivreur,
    getAlllivreur,
    updatelivreur,
    deletelivreurById,
    getlivreurById
}