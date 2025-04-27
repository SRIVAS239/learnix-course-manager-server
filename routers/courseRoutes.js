import {addCourseController,getFeaturedCourseController,getCourseDetailsController} from '../controllers/coursecontroller.js';
import express from 'express';
const router=express.Router();
//get all courses

//add a course for a teacher id
router.post('/add',addCourseController);
router.get('/featured',getFeaturedCourseController);
router.get('/:courseId',getCourseDetailsController);

export default router;