import express from 'express';

import {
    addProduct,
    getProductByID,
    getProducts,
    updateProduct,
    deleteProduct,
} from "../controller/product.controller.js";
import checkAuth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", checkAuth, addProduct);

router.get("/:id", getProductByID);

router.put("/:id",checkAuth,updateProduct);

router.delete("/:id", deleteProduct);

export default router;