import express from 'express';
const router = express.Router();
import {userAuth,getUser, userRegister} from '../controllers/userController.js'
import { protect } from '../middlewares/authMiddleware.js';

router.post('/', userRegister);
router.post('/login', userAuth);

router.route('/profile').get( protect ,getUser )


export default router