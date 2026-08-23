import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
import productsData from '../src/data/product-data.ts';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://g486822_db_user:Naseer@ac-kfkle9m-shard-00-00.x8v75pd.mongodb.net:27017,ac-kfkle9m-shard-00-01.x8v75pd.mongodb.net:27017,ac-kfkle9m-shard-00-02.x8v75pd.mongodb.net:27017/sriramaent?ssl=true&replicaSet=atlas-typd4w-shard-0&authSource=admin&retryWrites=true&w=majority';

const migrate = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected.');

    console.log('Clearing existing products...');
    await Product.deleteMany({});
    
    console.log('Inserting products...');
    await Product.insertMany(productsData);
    
    console.log(`✅ Successfully inserted ${productsData.length} products!`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
};

migrate();
