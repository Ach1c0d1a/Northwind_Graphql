import mongoose from "mongoose";

const guiaSchema = new mongoose.Schema({
	GuiaID : { type: Number, required: true },
	FechaEnvio: { type: String, required: true },
	Placa: { type: String, required: true }
});

mongoose.model('Guias', guiaSchema);
