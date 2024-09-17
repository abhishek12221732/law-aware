import express from 'express';
import { isAdmin, verifyToken } from '../utils/verifyUser.js';
import { create, deletenews, getnews, updatenews } from '../controllers/news.controller.js';

const router = express.Router();

router.post('/create', verifyToken,isAdmin, create)
router.get('/get', getnews)
router.delete('/delete/:postId', verifyToken,isAdmin, deletenews)
router.put('/updatepost/:postId', verifyToken, updatenews)


export default router;