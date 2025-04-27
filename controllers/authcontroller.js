import {registerUser} from "../services/authservice.js";
import {generateToken} from '../middlewares/jwt.js';
import bcrypt from 'bcryptjs';

//register the user
export const registerUserController=async(req,res)=>{
    try{
        //extract from req
        const {userName,userEmail,userPassword,userRole}=req.body;

        //validate email -> if empty or incorrect throw error
        if (!userName || !userEmail || !userPassword) {
            return res.status(400).json({ message: "All fields are required" });}
        //check if email exist s-> throw error

        //if all works, check if password is empty, throw error

        //hash password
        const hashedpassword=await bcrypt.hash(userPassword,10);
        

        //create model and save
        const registeredUser=await registerUser(userName,userEmail,hashedpassword,userRole);

        const payload={Email:registeredUser.userEmail,Password:hashedpassword,UserRole:registeredUser.userRole};
        const token= generateToken(payload);

        console.log(registerUser);
        return res.status(200).json({
            message: "Success",
            data: registeredUser,
            Bearer:token,
            expiresIn:'8h'
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:err});
    }    
};

//login user
export const loginUserController=async(req,res)=>{
    try{
        const {userDetails}=req.body;
        console.log("contorller reached");
        const hashedpassword=await bcrypt.hash(userDetails.userPassword,10);

        const payload={Email:userDetails.userEmail,Password:hashedpassword,UserRole:userDetails.userRole};
        
        const token= generateToken(payload);
        console.log(token);
        res.status(200).json({token});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:err});
    }
}