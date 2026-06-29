const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/products');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'MERN API is running!' });
});

// Connect to MongoDB
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/merndb';

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error:', err));