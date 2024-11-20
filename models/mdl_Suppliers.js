import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
	SupplierID: { type: Number, required: true },
	CompanyName: { type: String, required: true },
	ContactName: { type: String, required: true },
	ContactTitle: { type: String, required: true },
	Country: { type: String, required: true },
	City: { type: String, required: true },
	Address: { type: String, required: true }
});

mongoose.model('Suppliers', supplierSchema);