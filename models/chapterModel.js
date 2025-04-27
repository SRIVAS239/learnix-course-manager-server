import mongoose from "mongoose";
import courseModel from "./courseModel.js";
const Schema=mongoose.Schema;
const chapterSchema=new Schema({
    chapterName:{
        type:String,
        required:true,
    },
    chapterCourseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"courseModel",

    },
    chapterDesc:{
        type:String,
        required:false,
    },
    chapterURL:{
        type:String,
        required:true,
    },
    chapterUnlocked:{
        type:Boolean,
        default:false,
    }

});

const chapterModel = mongoose.model('chapterModel', chapterSchema);
export default chapterModel;
