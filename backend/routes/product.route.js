import express from 'express';

import {
    addProduct,
    getProductByID,
    getProducts,
    updateProduct,
    deleteProduct,
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", addProduct);

router.get("/:id", getProductByID);

router.put("/:id",updateProduct);

router.delete("/:id", deleteProduct);

export default router;