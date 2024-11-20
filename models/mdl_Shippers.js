import mongoose from "mongoose";

const shipperSchema = new mongoose.Schema({
	ShipperID : { type: Number, required: true },
	CompanyName: { type: String, required: true },
	Phone: { type: String, required: true }
});

mongoose.model('Shippers', shipperSchema);
