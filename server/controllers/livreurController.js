const livreurService=require("../services/livreurServices")

const createlivreur=async (req,res)=>{
    try {
        console.log(req.body)
        const result= await livreurService.addlivreur(req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getlivreur=async (req,res)=>{
    try {
        const result=await livreurService.getAlllivreur()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}


const getlivreurById=async (req,res)=>{
    try{
        const result=await livreurService.getlivreurById(req.params.id)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }
}

const addlivreur=(req,res)=>{
    livreur.create(req.body)
    .then(result=>res.json({msg:"la categorie est bien ajouté"}))
    
}


const deletelivreur=async (req,res)=>{
    try{
        const result= await livreurService.deletelivreurById(req.params.id)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }
}


const updatelivreurById=async (req,res)=>{
    try{
        const result= await livreurService.updatelivreur(req.body)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }

}


module.exports={
    createlivreur,
    getlivreur,
    updatelivreurById,
    deletelivreur,
    addlivreur,
    getlivreurById
} 
