
//fetch all courses for a teacher

import chapterModel from "../models/chapterModel.js";
import courseModel from "../models/courseModel.js";
import {addCourse, getFeaturedCourse,getCourseDetails} from "../services/courseservice.js";

//fetch features courses
export const getFeaturedCourseController=async(req,res)=>{
    try{
        const featuredCourse=await getFeaturedCourse();
        console.log(featuredCourse);
        return res.status(200).json({
            message: "Success",
            data: featuredCourse,
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:err});
    }
}

//fetch all enrolled courses for a student

//fetch course details based on courseId
export const getCourseDetailsController=async(req,res)=>{
    try{
        console.log('controller reached');
        const {courseId}=req.params;
        //const chapters=[];
        if(!courseId)
        {
            throw new Error('Course Id missing');
        }
        const courseDetails=await getCourseDetails(courseId);
        if(courseDetails)
        {
            /*for(let chapter in courseDetails.courseChapters)
            {
                const chapterDetails=await getChapterDetails(chapterId);
                if(chapterDetails)
                {
                    chapters.push(chapterDetails);
                }
            }*/
            return res.status(200).json({
                message: "Success",
                data: courseDetails,
            });
        } 
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({message:err});
    }
}

//------------------------------------------------------------------

//post a course for a teacher
export const addCourseController=async(req,res)=>{
    try{
        const {course}=req.body;
        console.log(course);
        
        const savedData=await addCourse(course);
        
        
        return res.status(200).json({status:"Successfully saved"});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:err});
    }
    
    
}

//update a course for a teacher

//delete a course for a teacher