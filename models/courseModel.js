import mongoose, { STATES } from "mongoose";
import reviewModel from "./reviewModel.js";
import chapterModel from "./chapterModel.js";
const Schema=mongoose.Schema;
const courseSchema=new Schema({
    courseName:{
        type:String,
        required:true,
    },
    courseAuthor:{
        type:String,
        required:true,
    },
    courseDesc:{
        type:String,
        required:true,
    },
    coursePrice:{
        type:Number,
        required:true,
    },
    courseAvgRatings:{
        type:Number,
        required:false,
        default:0,
    },
    courseEnrolled:{
        type:Number,
        required:false,
        default:0,
    },
    courseThumbnail:{
        type:String,
        default:'sgrg',
    },
    courseChapters:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"chapterModel",
        }
    ],
    courseCategory:[
        {
            type:String,
            enum: {
                values: ['Development', 'Design','PersonalDevelopment','Music'],
                message: '{VALUE} is not a defined user',
                default:'Guest',
              }
        }
    ],
    courseReviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"reviewModel",
        }
    ],

});

const courseModel = mongoose.model('courseModel', courseSchema);
export default courseModel;


    //courseChapters:Chapters[];
    //courseCategory:Category[];

    //reviews
    //courseReviews:Reviews[];