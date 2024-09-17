import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import quizRoutes from './routes/quiz.route.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

dotenv.config();
await mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

 
 

const __dirname = path.resolve();

const app = express();

 // Apply CORS policy
 app.use(cors());
app.use(cookieParser()); // To parse cookies
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is running on port 3000!');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
// quiz routes
app.use('/api/posts', postRoutes);
app.use('/api/quizzes', quizRoutes);




app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
