import express from 'express';
import { verifyToken, isAdmin } from '../utils/verifyUser.js';
import {
  commentOnArticle,
  createArticle,
  getAllArticles,
  getComments,
  getLikeStatus,
  getSingleArticle,
  likeArticle,
  updateArticle,
  updateReadArticle,
} from '../controllers/article.controller.js';

const router = express.Router();


router.post('/create', verifyToken, isAdmin, createArticle);


router.get('/getall', getAllArticles);

router.post('/read/:articleId',verifyToken,updateReadArticle);

router.get('/get/:articleId', getSingleArticle);

// Delete an article (admin only)
// router.delete('/delete/:id', verifyToken, isAdmin, deleteArticle); //

router.put('/update/:id', verifyToken, isAdmin, updateArticle);


router.put('/like/:articleId', verifyToken, likeArticle);  
router.post('/comment/:articleId', verifyToken, commentOnArticle);
router.get('/like-status/:articleId', verifyToken, getLikeStatus);
router.get('/comments/:articleId', getComments);

export default router;