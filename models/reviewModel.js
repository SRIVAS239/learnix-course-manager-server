import mongoose from "mongoose";
import userModel from "./userModel.js";
const Schema=mongoose.Schema;
const reviewSchema=new Schema({
    reviewUserId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'userSchema'
    },
    ratings:{
        type:Number,
        required:true,
        min:[0,'Must be at least 0, got {VALUE}'],
        max:[5,'Must be less than 5, got {VALUE}']
    },
    reviewDesc:{
        type:String,
        required:false,
    }

});
const reviewModel = mongoose.model('reviewModel', reviewSchema);
export default reviewModel;
