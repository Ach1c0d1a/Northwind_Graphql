import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
	ProductID: { type: Number, required: true },
	ProductName: { type: String, required: true },
	SupplierID: { type: Number, required: true },
    CategoryID: { type: Number, required: true },
	QuantityPerUnit: { type: String, required: true },
	UnitPrice: { type: Number, required: true },
	UnitsInStock: { type: Number, required: true },
	ReorderLevel: { type: Number, required: true }
});

mongoose.model('Products', productSchema);