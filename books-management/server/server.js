// require('dotenv').config(); // Nạp biến môi trường ngay từ đầu
// const express = require("express");
// const cors = require("cors");

// const connectDB = require('./config/db');
// const path = require('path');

// // Khởi tạo ứng dụng Express
// const app = express();
// //  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// // server/server.js
// app.use('/uploads', express.static('uploads'));

// // Middleware
// app.use(cors({
//   origin: "http://localhost:3000",
//   credentials: true
// }));
// app.use(express.json()); // Phân tích JSON body

// // Kết nối database
// connectDB();

// // Routes
// const bookRoutes = require('./routes/bookRoutes.js');
// app.use('/api/books', bookRoutes);

// // Khởi động server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// server.js
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import connectDB from './config/db.js';
import bookRoutes from './routes/bookRoutes.js';

// Khắc phục __dirname trong ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());

connectDB();

app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




