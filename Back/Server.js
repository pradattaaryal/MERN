import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import adminProductsRouter from './routes/admin/products-routes.js';  // Corrected import
dotenv.config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({ origin: "*"}));
app.use(cookieParser());
app.use(express.json());
app.use("/api/admin/products", adminProductsRouter); 
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));









/*app.use(cors({
  origin: "http://localhost:5173",  // Allow frontend to communicate
  methods: ['get', 'put', 'delete', 'post'],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Cache-Control",
    "Expires",
    "Pragma"
  ],
  credentials: true
}));
*/