import mongoose from "mongoose";

const Categories = mongoose.model('Categories');
const Products = mongoose.model('Products');
const Suppliers = mongoose.model('Suppliers');
const Customers = mongoose.model('Customers');
const Employees = mongoose.model('Employees');
const Orders = mongoose.model('Orders');
const Shippers = mongoose.model('Shippers');

export const resolvers = {
	Query: {
		categories: async () => await Categories.find(),
		category: async (parent, { CategoryID }) => await Categories.findOne({CategoryID: CategoryID}),

		products: async () => await Products.find(),
		product:  async (parent, { ProductID }) => await Products.findOne({ProductID: ProductID}),

		suppliers: async () => await Suppliers.find(),
		supplier: async (parent, { SupplierID }) => await Suppliers.findOne({SupplierID: SupplierID}),

		customers: async () => await Customers.find(),
		customer: async (parent, { CustomerID }) => await Customers.findOne({CustomerID: CustomerID}),

		employees: async () => await Employees.find(),
		employee:  async (parent, { EmployeeID }) => await Employees.findOne({EmployeeID: EmployeeID}),

		orders: async () => await Orders.find(),
		order: async (parent, { OrderID }) => await Orders.findOne({OrderID: OrderID}),

		shippers: async () => await Shippers.find(),
		shipper: async (parent, { ShipperID }) => await Shippers.findOne({ShipperID: ShipperID})
	},
	Categories: {
		Products: async (parent) => await Products.find({ CategoryID: parent.CategoryID })
	},
	Suppliers: {
		Products: async (parent) => await Products.find({ SupplierID: parent.SupplierID })
	},
	Products: {
		Supplier: async (parent) => await Suppliers.findOne({SupplierID: parent.SupplierID}),
		Category: async (parent) => await Categories.findOne({CategoryID: parent.CategoryID})
	},
	Customers: {
		Orders: async (parent) => await Orders.find({ OrderID: parent.OrderID })
	},
	Employees: {
		Orders: async (parent) => await Orders.find({ OrderID: parent.OrderID })
	},
	Orders: {
		Customer: async (parent) => await Customers.findOne({CustomerID: parent.CustomerID}),
		Employee: async (parent) => await Employees.findOne({EmployeeID: parent.EmployeeID})
	},
	Mutation: {
		addCategory: async (parent, args) => {
    		const newCategory = new Categories(args);
				return newCategory.save();
		},
		addProduct: async (parent, args) => {
			const newProduct = new Products(args);
				return newProduct.save();
		},
		addSupplier: async (parent, args) => {
			const newSupplier = new Suppliers(args);
	           	return newSupplier.save();
		},
		addCustomer: async (parent, args) => {
    		const newCustomer = new Customers(args);
				return newCustomer.save();	
		},
		addEmployee: async (parent, args) => {
			const newEmployee = new Employees(args);
				return newEmployee.save();
		},
		addOrder: async (parent, args) => {
			const newOrder = new Orders(args);
	           	return newOrder.save();
		},
		addShipper: async (parent, args) => {
			const newShipper = new Shippers(args);
	           	return newShipper.save();
		},
		updateCategory: async (parent, args) => {
			const { CategoryID, ...rest } = args;
				return Categories.findOneAndUpdate({CategoryID: CategoryID}, rest, { new: true });
		},
		updateProduct: async (parent, args) => {
			const { ProductID, ...rest } = args;
				return Products.findOneAndUpdate({ProductID: ProductID}, rest, { new: true });
		},
		updateSupplier: async (parent, args) => {
			const { SupplierID, ...rest } = args;
				return Suppliers.findOneAndUpdate({SupplierID: SupplierID}, rest, { new: true });
		},
		updateCustomer: async (parent, args) => {
			const { CustomerID, ...rest } = args;
				return Customers.findOneAndUpdate({CustomerID: CustomerID}, rest, { new: true });
		},
		updateEmployee: async (parent, args) => {
			const { EmployeeID, ...rest } = args;
				return Employees.findOneAndUpdate({EmployeeID: EmployeeID}, rest, { new: true });
		},
		updateOrder: async (parent, args) => {
			const { OrderID, ...rest } = args;
				return Orders.findOneAndUpdate({OrderID: OrderID}, rest, { new: true });
		},
		updateShipper: async (parent, args) => {
			const { ShipperID, ...rest } = args;
				return Shippers.findOneAndUpdate({ShipperID: ShipperID}, rest, { new: true });
		},
		deleteCategory: async (parent, { CategoryID }) => {
			return Categories.findOneAndDelete({CategoryID: CategoryID});
		},
		deleteProduct: async (parent, { ProductID }) => {
			return Products.findOneAndDelete({ProductID: ProductID});
		},
		deleteSupplier: async (parent, { SupplierID }) => {
			return Suppliers.findOneAndDelete({SupplierID: SupplierID});
		},
		deleteCustomer: async (parent, { CustomerID }) => {
			return Customers.findOneAndDelete({CustomerID: CustomerID});
		},
		deleteEmployee: async (parent, { EmployeeID }) => {
			return Employees.findOneAndDelete({EmployeeID: EmployeeID});
		},
		deleteOrder: async (parent, { OrderID }) => {
			return Orders.findOneAndDelete({OrderID: OrderID});
		},
		deleteShipper: async (parent, { ShipperID }) => {
			return Shippers.findOneAndDelete({ShipperID: ShipperID});
		}
	}
}
	