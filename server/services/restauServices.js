const restau=require("../models/restau");

const addrestau=async(c)=>{
    return await restau.create(c)
};

const getAllrestau=async()=>{
    return await restau.find()
};

const getrestauById=async (id)=>{
    return await restau.findOne({_id:id})
    
}
const deleterestauById=async (id)=>{
    return await restau.findByIdAndDelete({_id:id})
}

const updaterestau=async (restau)=>{
    console.log(restau)
    return await restau.findByIdAndUpdate(restau._id,restau)
    
}

module.exports={
    addrestau,
    getAllrestau,
    updaterestau,
    deleterestauById,
    getrestauById
}