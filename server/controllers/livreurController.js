const livreueService=require("../services/livreueServices")

const createlivreue=async (req,res)=>{
    try {
        console.log(req.body)
        const result= await livreueService.addlivreue(req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getlivreue=async (req,res)=>{
    try {
        const result=await livreueService.getAlllivreue()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}


const getlivreueById=async (req,res)=>{
    try{
        const result=await livreueService.getlivreueById(req.params.id)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }
}

const addlivreue=(req,res)=>{
    livreue.create(req.body)
    .then(result=>res.json({msg:"la categorie est bien ajouté"}))
    
}


const deletelivreue=async (req,res)=>{
    try{
        const result= await livreueService.deletelivreueById(req.params.id)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }
}


const updatelivreueById=async (req,res)=>{
    try{
        const result= await livreueService.updatelivreue(req.body)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }

}


module.exports={
    createlivreue,
    getlivreue,
    updatelivreueById,
    deletelivreue,
    addlivreue,
    getlivreueById
} 
