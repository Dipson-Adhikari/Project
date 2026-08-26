import express from "express";
import productRouter from "./routes/product.route.js";
import userRouter from "./routes/user.route.js";
import mongoose from "mongoose";

const app = express();
mongoose
    .connect("mongodb://localhost:27017/himalayashop")
    .then((conn) => {
        console.log(`Connected to db at ${conn.connection.host}`);
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/auth", userRouter);

app.listen(3000, () => {
    console.log("Server is up and running.");
});