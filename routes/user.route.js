import express from 'express';
import {
  deleteUser,
  getUser,
  getUserProfile,
  getUsers,
  signout,
  test,
  updateUser,
} from '../controllers/user.controller.js';
import { isAdmin, verifyToken } from '../utils/verifyUser.js';

const router = express.Router();


router.get('/profile',verifyToken,getUserProfile)
router.get('/test', test);
router.put('/update/:userId', verifyToken, updateUser);
router.delete('/delete/:userId', verifyToken, deleteUser);
router.post('/signout', signout);
router.get('/getusers', verifyToken,isAdmin, getUsers);
router.get('/:userId', getUser);


export default router;