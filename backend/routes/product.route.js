import express from 'express';

import {
    addProduct,
    getProductByID,
    getProducts,
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", addProduct);

router.get("/:id", getProductByID);

export default router;