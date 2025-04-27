import jwt from 'jsonwebtoken';

const secretKey="52877c6b1a2dc288252dec42184e392179c649673b2b8d48c18943302d219749";

export const generateToken=(payload)=>{
    console.log("reached generation");
    console.log(secretKey);
    const token=jwt.sign(payload,secretKey,{expiresIn:'8h'});
    return token;
};

export const verifyToken=(token)=>{
    try{
        const decoded=jwt.verify(token, secretKey);
        console.log(decoded);
        return decoded;
    }
    catch(error){
        res.status(401).json({ message: 'Token is not valid' });
    }
};