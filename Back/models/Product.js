import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    image: String,
    title: String,
    description: String,
    category: String,
    brand: String,
    price: { type: Number, required: true },
    salePrice: { type: Number, default: 0 },
    totalStock: { type: Number, required: true },
    averageReview: { type: Number, default: 0 },
  },
   
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
