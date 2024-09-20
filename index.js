import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import newsRoutes from './routes/news.route.js';
import quizRoutes from './routes/quiz.route.js';
import articleRoutes from './routes/article.route.js';
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

 const F_PORT = process.env.F_PORT || 3000;
 

const __dirname = path.resolve();

const app = express();

app.use(cors({
  origin: `http://localhost:${F_PORT}`,  // Replace with your frontend domain
  credentials: true,  // Allow cookies to be sent/received
}));


app.use(cookieParser()); // To parse cookies
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
// quiz routes
app.use('/api/news', newsRoutes);
app.use('/api/article', articleRoutes);
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
