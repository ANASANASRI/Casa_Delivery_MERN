const restoService=require("../services/restoServices")

const createresto=async (req,res)=>{
    try {
        console.log(req.body)
        const result= await restoService.addresto(req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getresto=async (req,res)=>{
    try {
        const result=await restoService.getAllresto()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}


const getrestoById=async (req,res)=>{
    try{
        const result=await restoService.getrestoById(req.params.id)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }
}

const addresto=(req,res)=>{
    resto.create(req.body)
    .then(result=>res.json({msg:"la categorie est bien ajouté"}))
    
}


const deleteresto=async (req,res)=>{
    try{
        const result= await restoService.deleterestoById(req.params.id)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }
}


const updaterestoById=async (req,res)=>{
    try{
        const result= await restoService.updateresto(req.body)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }

}


module.exports={
    createresto,
    getresto,
    updaterestoById,
    deleteresto,
    addresto,
    getrestoById
} 
