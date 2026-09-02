import express from 'express';

import {
    addProduct,
    getProductByID,
    getProducts,
    updateProduct,
    deleteProduct,
} from "../controller/product.controller.js";
import {checkAuth,checkAdmin} from "../middleware/auth.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", checkAuth,checkAdmin, addProduct);

router.get("/:id", getProductByID);

router.put("/:id",checkAuth,checkAdmin,updateProduct);

router.delete("/:id",checkAuth,checkAdmin, deleteProduct);

export default router;