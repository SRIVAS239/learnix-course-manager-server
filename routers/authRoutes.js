import express from 'express';

import {registerUserController} from '../controllers/authcontroller.js';
import {loginUserController} from '../controllers/authcontroller.js';
const router = express.Router()



// Sign up user
router.post('/register',registerUserController);
/*--------------------------
*
*/
// Log in user
router.post('/login',loginUserController);


export default router;