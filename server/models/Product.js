import mongoose from 'mongoose';

const SizeSchema = new mongoose.Schema({
  size: { type: String, required: true },
  price: { type: Number, required: true }
}, { _id: false });

const SpecificationSchema = new mongoose.Schema({
  label: { type: String, required: true },
  value: { type: String, required: true }
}, { _id: false });

const ProductSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  subtitle: { type: String },
  category: { type: String },
  badge: { type: String },
  badgeClass: { type: String },
  rating: { type: String },
  reviews: { type: Number },
  price: { type: Number, required: true },
  oldPrice: { type: Number },
  discount: { type: String },
  sizes: [SizeSchema],
  details: { type: String },
  howToApply: { type: String },
  specifications: [SpecificationSchema],
  image: { type: String }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

export default Product;
