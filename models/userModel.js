//import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
const Schema=mongoose.Schema;
const userSchema=new Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    userEmail:{
        type:String,
        required:true,
        unique:true
    },
    userPassword:{
        type:String,
        required:true,
    },
    userRole:{
        type:String,
        enum: {
            values: ['Student', 'Teacher','Guest'],
            message: '{VALUE} is not a defined user',
            default:'Guest',
          }
    }
    
    
});

const userModel = mongoose.model('userModel', userSchema);
export default userModel;