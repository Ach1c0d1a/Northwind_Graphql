
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    OrderID: { type: Number, required: true },
    CustomerID: { type: String, required: true },
    EmployeeID: { type: Number, required: true },
    OrderDate: { type: String, required: true },
    RequiredDate: { type: String, required: true },
    ShippedDate: { type: String, required: true },
    ShipVia: { type: Number, required: true },
    Freight: { type: Number, required: true },
    ShipName: { type: String, required: true },
    ShipCountry: { type: String, required: true },
    ShipCity: { type: String, required: true },
    ShipAddress: { type: String, required: true },
    ShipPostalCode: { type: String, required: true }
});
        
mongoose.model('Orders', orderSchema);
                    
