const resto=require("../models/resto");

const addresto=async(c)=>{
    return await resto.create(c)
};

const getAllresto=async()=>{
    return await resto.find()
};

const getrestoById=async (id)=>{
    return await resto.findOne({_id:id})
    
}
const deleterestoById=async (id)=>{
    return await resto.findByIdAndDelete({_id:id})
}

const updateresto=async (resto)=>{
    console.log(resto)
    return await resto.findByIdAndUpdate(resto._id,resto)
    
}

module.exports={
    addresto,
    getAllresto,
    updateresto,
    deleterestoById,
    getrestoById
}