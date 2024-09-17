// src/utils/verifyUser.js
import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log("token", token);

  if (!token) {
    return next(errorHandler(401, 'Unauthorized'));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, 'Unauthorized'));
    }
    req.user = user;
    next();
  });
};

// Middleware to check if user is an admin
export const isAdmin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    return next(errorHandler(403, 'Access denied'));
  }
  next();
};
