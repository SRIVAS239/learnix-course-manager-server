//
import mongoose from "mongoose";
import courseModel from "../models/courseModel.js";
import chapterModel from "../models/chapterModel.js";


//fetch from DB all the featured courses
export const getFeaturedCourse=async()=>{
    try{
        const featuredCourses=await courseModel.find();

        return featuredCourses;
    }
    catch(error){
        console.log(error);
        throw new Error('Could not fetch featured courses');
    }

}

export const getCourseDetails=async(courseId)=>{
    try{
        const courseDetails=await courseModel.findById(courseId);
        return courseDetails;
    }
    catch(error){
        console.log(error);
        throw new Error('Could not fetch the course details');
    }
}

//add a course in for a teacher
export const addCourse=async(course)=>{
    try{

        const chapters=[];
        for(let element of course.courseChapters){
            const chapters=new chapterModel({
                chapterName:element.chapterName,
                chapterDesc:element.chapterDesc,
                chapterUnlocked:element.chapterUnlocked,
                chapterURL:element.chapterURL,
            }); 
            const savedChapter=await chapters.save();
            //chaptersId.push(savedChapter._id);
            chapters.push(savedChapter);
            
        }

        const newCourse=new courseModel({
            courseName:course.courseName,
            courseDesc:course.courseDesc,
            courseAuthor:course.courseAuthor,
            courseCategory:course.courseCategory,
            courseChapters:chapters,
            coursePrice:course.coursePrice,
            courseThumbnail:course.courseThumbnail,
        });
        const savedCourse=await newCourse.save();
        return savedCourse;
    }
    catch(error){
        console.log(error);
        throw new Error('Could not add course');
    }
};