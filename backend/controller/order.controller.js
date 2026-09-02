import Order from "../model/Order.js";

const addOrder = async (req, res) => {
    const {
        orderItems,
        itemPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
        shippingAddress,
        paymentMethod,
    } = req.body;

    const order = await Order.create({
        user: req.user._id,
        orderItems,
        itemPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
        shippingAddress,
        paymentMethod,
    });

    res.send({
        message: "Order created successfully",
        orderId: order._id,
    });
};

const getOrders = async (req, res) => {
    const orders = await Order.find()
        .populate("user", "fullname email")
        .populate("orderItems.productId", "name price image");

    res.send(orders);
};

const getOrderByID = async (req, res) => {
    const { id } = req.params;

    const order = await Order.findById(id)
        .populate("user", "fullname email")
        .populate("orderItems.productId", "name price image");

    if (order) {
        res.send(order);
    } else {
        res.status(404).send({
            error: "Order not found",
        });
    }
};

const getMyOrders = async (req, res) => {
    const orders = await Order.find({user: req.user._id })
        .populate("orderItems.productId", "name price image");  
        if (!orders) {
            return res.status(404).send({ error: "No orders found for this user" });
        }   
         res.send(orders);
};

const payOrder = async (req, res) => {
    const { id } = req.params;
    const order = await Order.findById(id);
    if (!order) {
        return res.status(404).send({ error: "Order not found" });
    }
    order.isPaid = true;
    order.paidAt = Date.now();
    await order.save();

    res.send({ message: "Order paid successfully" });
};

const deliverOrder = async (req, res) => {
    const { id } = req.params;
    const order = await Order.findById(id);
    if (!order) {
        return res.status(404).send({ error: "Order not found" });
    }
    if (!order.isPaid) {
        return res.status(400).send({ error: "Order is not paid" });
    }
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    await order.save();
    res.send({ message: "Order delivered successfully" });
};

export { addOrder, getOrders, getOrderByID, getMyOrders, payOrder, deliverOrder };