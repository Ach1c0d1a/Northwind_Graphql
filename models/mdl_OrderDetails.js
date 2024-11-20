import mongoose from "mongoose";

const orderDetailSchema = new mongoose.Schema({
	OrderID : { type: Number, required: true },
	ProductID : { type: Number, required: true },
	UnitPrice: { type: Number, required: true },
    Quantity : { type: Number, required: true },
	Discount: { type: Number, required: true }
});

mongoose.model('OrderDetails', orderDetailSchema);
			