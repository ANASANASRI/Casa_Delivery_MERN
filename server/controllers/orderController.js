const asyncHandler = require('express-async-handler');
const Order = require('../models/orders.js');

const createOrder = asyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;
    
    const order = new Order({
        orderItems,
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    });
  
    const orderDone = await order.save();

    if (orderDone._id) {
        res.json(orderDone);
    } else {
        res.status(404).json({ message: 'Problem with creating order' });
    }
});

//////////////////////////////////////////////////////////////////

const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email');
    if (order) {
        res.json(order);
    } else {
        res.status(404).json({ message: "Order Details not found..." });
    }
});

//////////////////////////////////////////////////////////////////

const getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    if (orders) {
        res.json(orders);
    } else {
        res.status(404).json({ message: "Order History not found..." });
    }
});

//////////////////////////////////////////////////////////////////


const makePayment = asyncHandler(async (req, res) => {
    const updatePayment = await Order.findOneAndUpdate({ _id: req.params.orderId}, {isPaid:true}, {
    new: true
  })
    if (updatePayment.isPaid) {
      res.json(updatePayment.isPaid);
    } else {
      res.status(404);
      throw new Error("Order Details not found...");
    }
});

module.exports = { createOrder, makePayment,getOrders ,getOrderById};