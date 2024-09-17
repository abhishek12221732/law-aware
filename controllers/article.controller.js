import Article from '../models/article.model.js';
import { errorHandler } from '../utils/error.js';

// Create an article (admin only)
export const createArticle = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to create an article'));
  }
  if (!req.body.article || !req.body.title || !req.body.description) {
    return next(errorHandler(400, 'Please provide all required fields'));
  }

  const newArticle = new Article({
    article: req.body.article,
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    next(error);
  }
};

// Get all articles with pagination (article number, title, and _id only)
export const getAllArticles = async (req, res, next) => {
    try {
      // Get the page number from query params, or set default to 1
      const page = parseInt(req.query.page) || 1;
      const limit = 50; // Set a fixed limit of 50 articles per page
  
      // Calculate how many documents to skip
      const skip = (page - 1) * limit;
  
      // Fetch total number of articles first
      const totalArticles = await Article.countDocuments();
  
      // If there are no articles at all, return early
      if (totalArticles === 0) {
        return res.status(200).json({
          message: "No articles found",
          articles: [],
          currentPage: page,
          totalPages: 0,
          totalArticles: 0,
          hasNextPage: false,
          hasPrevPage: false
        });
      }
  
      // Calculate total pages
      const totalPages = Math.ceil(totalArticles / limit);
  
      // Fetch articles with pagination
      const articles = await Article.find({})
        .select('_id article title') // Select only _id, article, and title fields
        .sort({ article: 1 }) // Sort by article number
        .skip(skip)
        .limit(limit)
        .lean() // Use lean() for better performance as we don't need Mongoose documents
        .exec();
  
      // Prepare pagination info
      const paginationInfo = {
        currentPage: page,
        totalPages: totalPages,
        totalArticles: totalArticles,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      };
  
      // Even if no articles are found for this page, we still return the pagination info
      res.status(200).json({
        articles,
        ...paginationInfo
      });
    } catch (error) {
      next(error);
    }
  };
  

// Get a single article by ID (article number, title, and description)
export const getSingleArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.articleId);
    if (!article) {
      return next(errorHandler(404, 'Article not found'));
    }
    res.status(200).json(article);
  } catch (error) {
    next(error);
  }
};

// Delete an article (admin only)
export const deleteArticle = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to delete this article'));
  }
  try {
    await Article.findByIdAndDelete(req.params.articleId);
    res.status(200).json('The article has been deleted');
  } catch (error) {
    next(error);
  }
};

// Update an article (admin only)
export const updateArticle = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to update this article'));
  }
  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.articleId,
      {
        $set: {
          article: req.body.article,
          title: req.body.title,
          description: req.body.description,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedArticle);
  } catch (error) {
    next(error);
  }
};
