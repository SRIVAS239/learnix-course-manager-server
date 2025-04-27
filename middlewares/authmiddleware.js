
export const protectedRoute=(req,res,next)=>{
    const token=req.header('Authorization');
    if(!token)
    {
        res.status(401).send('Access denied');
    }
    try{
        const decoded = verifyToken(token);
        if(decoded){
            next();
            //res.send("works");
        }
    }
    catch(err)
    {
        res.status(401).send(err);
    }

};