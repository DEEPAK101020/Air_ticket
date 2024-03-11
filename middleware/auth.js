const jwt=require("jsonwebtoken");

const auth=async(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1];
    if(token){
        try{
            const decoded=jwt.verify(token,"masai");
            if(decoded){
                req.body.userID=decoded.userID.auth
                req.body.name =decoded.userID
                next();
            }
            else{
                res.josn({msg:"you are not authorized"})
            }
        }
        catch(err){
            res.status(400).json({err:err})
        }
    }else{
        res.status(400).json({msg:"login failed"})
    }
}
module.exports={
    auth
}