import OrderModel from "../models/orderModel.js";

const om = new OrderModel()

export async function handleCommitOrder(req, res, next) {
    try {
        let { orderMeta } = req.body;
        let { products, address, payment } = orderMeta;

        if (!products) {return res.status(500).json({message: "The cart is empty."});}
        if (!address) {return res.status(500).json({message: "Please fill in address."});}
        if (!payment) {return res.status(500).json({message: "Please select a payment method."});}

        // Create order
        om.create(products);
        om.assignAddress(address);
        om.addPayment(payment);
        om.assignEmail(req.session.user.email);
        
        const my_order = om.order;
        // Commit to DB
        const message = await om.add();
        return res.status(200).json( {username:req.session.user.name, message: message, my_order: my_order} );
    } 
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export async function listOrders(req, res, next) {
    const { start, startTime, end, endTime } = req.query;

    const userEmail = req.session.user ? req.session.user.email : 'test@example.com';

    try {
        const orders = await om.getOrdersByEmailAndDateRange(userEmail, start, startTime, end, endTime);
        res.json(orders); 
    } catch (error) {
        console.error('Error in /api/my-orders:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
}