import express from "express";
import { AddProduct, GetProductById, DeleteProduct, UpdateProduct } from '../../controllers/admin/products-controllers.js';

const router = express.Router();

router.post("/add", AddProduct);
router.get("/getbyid/:id", GetProductById);
router.delete("/delete/:id", DeleteProduct);
router.put("/update/:id", UpdateProduct);

export default router;
