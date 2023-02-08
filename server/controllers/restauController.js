const restauService=require("../services/restauServices")

const createrestau=async (req,res)=>{
    try {
        console.log(req.body)
        const result= await restauService.addrestau(req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getrestau=async (req,res)=>{
    try {
        const result=await restauService.getAllrestau()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}


const getrestauById=async (req,res)=>{
    try{
        const result=await restauService.getrestauById(req.params.id)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }
}

const addrestau=(req,res)=>{
    restau.create(req.body)
    .then(result=>res.json({msg:"la categorie est bien ajouté"}))
    
}


const deleterestau=async (req,res)=>{
    try{
        const result= await restauService.deleterestauById(req.params.id)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }
}


const updaterestauById=async (req,res)=>{
    try{
        const result= await restauService.updaterestau(req.body)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }

}


module.exports={
    createrestau,
    getrestau,
    updaterestauById,
    deleterestau,
    addrestau,
    getrestauById
} 
