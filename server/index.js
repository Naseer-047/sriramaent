import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Product from './models/Product.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://g486822_db_user:Naseer@ac-kfkle9m-shard-00-00.x8v75pd.mongodb.net:27017,ac-kfkle9m-shard-00-01.x8v75pd.mongodb.net:27017,ac-kfkle9m-shard-00-02.x8v75pd.mongodb.net:27017/sriramaent?ssl=true&replicaSet=atlas-typd4w-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// API Endpoints
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
});

app.put('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Map editor schema back to MongoDB schema
    const updateData = {
      title: req.body.title,
      subtitle: req.body.brand,
      category: req.body.category,
      details: req.body.description,
      price: req.body.basePrice,
      oldPrice: req.body.compareAtPrice,
      discount: req.body.discountPercent ? `${req.body.discountPercent}% OFF` : '',
      howToApply: req.body.howToApply,
      sizes: (req.body.variants || []).map(v => ({
        size: v.size,
        price: v.price
      })),
    };
    
    // Only update image if passed in array
    if (req.body.images && req.body.images.length > 0) {
      updateData.image = req.body.images[0];
    }

    const updatedProduct = await Product.findOneAndUpdate(
      { id },
      { $set: updateData },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error: error.message });
  }
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`🚀 Server running on http://127.0.0.1:${PORT}`);
});
