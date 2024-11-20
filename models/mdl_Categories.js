import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
	CategoryID : { type: Number, required: true },
	CategoryName: { type: String, required: true },
	Description: { type: String, required: true }
});

mongoose.model('Categories', categorySchema);
			