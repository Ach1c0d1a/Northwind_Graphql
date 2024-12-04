
import mongoose from "mongoose";

const recepcionSchema = new mongoose.Schema({
    RecepcionID: { type: String, required: true },
    Especie: { type: String, required: true },
    PesoEntrada: { type: Number, required: true },
    PesoSalida: { type: Number, required: true },
    TempRecepcion: { type: Number, required: true },
    CamaraSalida: { type: String, required: true },
    CodDescarga: { type: String, required: true },
    GuiaID: { type: Number, required: true },
    LoteID: { type: Number, required: true }
});
        
mongoose.model('Recepciones', recepcionSchema);
                    