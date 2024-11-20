import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    CustomerID: { type: String, required: true },
    CompanyName: { type: String, required: true },
    ContactName: { type: String, required: true },
    ContactTitle: { type: String, required: true },
    Country: { type: String, required: true },
    City: { type: String, required: true },
    Address: { type: String, required: true }
});
        
mongoose.model('Customers', customerSchema);
                    
