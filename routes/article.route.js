import express from 'express';
import { verifyToken, isAdmin } from '../utils/verifyUser.js';
import {
  createArticle,
  getAllArticles,
  getSingleArticle,
  updateArticle,
  updateReadArticle,
} from '../controllers/article.controller.js';

const router = express.Router();

// Create an article (admin only)
router.post('/create', verifyToken, isAdmin, createArticle);

// Get all articles (article number and title only)
router.get('/getall', getAllArticles);

router.post('/read/:articleId',verifyToken,updateReadArticle);

// Get a single article by ID (article number, title, description)
router.get('/get/:articleId', getSingleArticle);

// Delete an article (admin only)
// router.delete('/delete/:id', verifyToken, isAdmin, deleteArticle); //

// Update an article (admin only)
router.put('/update/:id', verifyToken, isAdmin, updateArticle);

export default router;