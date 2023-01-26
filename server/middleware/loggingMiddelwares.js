const loggingUrls=(req,res,next)=>{
    console.log("Logging Urls FCT:"+req.url);
    next()
};
const loggingParams=(req,res,next)=>{
    console.log("Logging params FCT:"+req.params)
    next()
};

module.exports={
    loggingUrls,
    loggingParams
}