import express from "express";
import { getOrders, getOrderByID, addOrder,getMyOrders,payOrder,deliverOrder     } from "../controller/order.controller.js";
import { checkAuth,checkAdmin } from "../middleware/auth.js";

const router = express.Router();
router.post("/", checkAuth, addOrder);
router.get("/", checkAuth,checkAdmin,getOrders);
router.get("/myorders", checkAuth, getMyOrders);
router.get("/:id", checkAuth, getOrderByID);
router.put("/:id/pay", checkAuth, payOrder);
router.put("/:id/deliver", checkAuth,checkAdmin, deliverOrder);


export default router;