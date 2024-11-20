import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    EmployeeID: { type: Number, required: true },
    LastName: { type: String, required: true },
    FirstName: { type: String, required: true },
    Title: { type: String, required: true },
    TitleOfCourtesy: { type: String, required: true },
    BirthDate: { type: String, required: true },
    HireDate: { type: String, required: true },
    Country: { type: String, required: true },
    City: { type: String, required: true },
    Address: { type: String, required: true }
});
        
mongoose.model('Employees', employeeSchema);
                    