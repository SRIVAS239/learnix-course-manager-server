
import userModel from "../models/userModel.js";

//register a new user
export const registerUser=async(userName,userEmail,userPassword,userRole)=>{
   try{
    const newUser=new userModel({
        userName:userName,
        userEmail:userEmail,
        userPassword:userPassword,
        userRole:userRole,
    });
    const savedUser=await newUser.save();
    return savedUser;
    //check if email exists
    //const res=userModel.findOne(userDetails.userEmail)
   }
   catch(err){
    console.log(err);
    throw new Error('Could not register user in database');
   } 
};

//check if email exists