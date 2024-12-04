import mongoose from "mongoose";

const bugiSchema = new mongoose.Schema({
	BugiID : { type: Number, required: true },
	Hora_Ini_Envase: { type: String, required: true },
	LoteID: { type: String, required: true },
    TempEnvasado : { type: Number, required: true }
});

mongoose.model('Bugis', bugiSchema);


