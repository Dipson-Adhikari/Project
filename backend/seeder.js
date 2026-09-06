import User from './model/User.js';
import Product from './model/Product.js';
import Order from './model/Order.js';
import mongoose from 'mongoose';
import products from './data/products.js';
import users from './data/users.js';


mongoose
    .connect(process.env.MONGODB_URL)
    .then((conn) => {
        console.log(`Connected to db at ${conn.connection.host}`);
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });


const loadData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();
        const addedUsers = await User.insertMany(users);
        const adminId = addedUsers[0]._id;
        const addedProducts = await Product.insertMany(products.map((product) => ({ ...product, user: adminId })));
        console.log("Data loaded successfully.");
        process.exit(0);
    } catch (err) {
        console.error("Error loading data:", err);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        console.log("Data destroyed successfully.");
        process.exit(0);
    } catch (err) {
        console.error("Error deleting data:", err);
        process.exit(1);
    }
};

loadData();