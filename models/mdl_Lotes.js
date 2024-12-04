import mongoose from "mongoose";

const loteSchema = new mongoose.Schema({
    LoteID: { type: Number, required: true },
    FechaLlegada: { type: String, required: true },
    TempPlanta: { type: Number, required: true },
    HoraI_Descarga: { type: String, required: true },
    HoraF_Descarga: { type: String, required: true },
    TempSalida: { type: String, required: true }
});
        
mongoose.model('Lotes', loteSchema);
