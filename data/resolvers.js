export const resolvers = {
	Query: {
		categories: () => db.categories,
		category: (parent, { CategoryID }) => db.categories.find(category => category.CategoryID === CategoryID),

		products: () => db.products,
		product: (parent, { ProductID }) => db.products.find(product => product.ProductID === ProductID),

		suppliers: () => db.suppliers,
		supplier: (parent, { SupplierID }) => db.suppliers.find(supplier => supplier.SupplierID === SupplierID),

        customers: () => db.customers,
		customer: (parent, { CustomerID }) => db.customers.find(customer => customer.CustomerID === CustomerID),

		employees: () => db.employees,
		employee: (parent, { EmployeeID }) => db.employees.find(employee => employee.EmployeeID === EmployeeID),

		orders: () => db.orders,
		order: (parent, { OrderID }) => db.orders.find(order => order.OrderID === OrderID),

		shippers: () => db.shippers, 
		shipper: (parent, { ShipperID }) => db.shippers.find(shipper => shipper.ShipperID === ShipperID),
	},
    Categories: {
        Products: (parent) => db.products.filter(product => product.CategoryID === parent.CategoryID)
    },
    Suppliers: {
        Products: (parent) => db.products.filter(product => product.SupplierID === parent.SupplierID)
    },
    Products: {
        Supplier: (parent) => db.suppliers.find(supplier => supplier.SupplierID === parent.SupplierID),
        Category: (parent) => db.categories.find(category => category.CategoryID === parent.CategoryID)
    },
    Customers: {
        Orders: (parent) => db.orders.filter(order => order.OrderID === parent.OrderID)
    },
    Employees: {
        Orders: (parent) => db.orders.filter(order => order.OrderID === parent.OrderID)
    },
	Orders: {
		Customer: (parent) => db.customers.find(customer => customer.CustomerID === parent.CustomerID),
		Employee: (parent) => db.employees.find(employee => customer.EmployeeID === parent.EmployeeID)
	},
    Mutation: {
        addCategory: (parent, args) => {
            const newCategory = { ...args };
            db.categories.push(newCategory);
            return newCategory;
        },
        addProduct: (parent, args) => {
            const newProduct = { ...args };
            db.products.push(newProduct);
            return newProduct;
        },
        addSupplier: (parent, args) => {
            const newSupplier = { ...args };
            db.suppliers.push(newSupplier);
            return newSupplier;
        },
        addCustomer: (parent, args) => {
            const newCustomer = { ...args };
            db.customers.push(newCustomer);
            return newCustomer;
        },
        addEmployee: (parent, args) => {
            const newEmployee = { ...args };
            db.employees.push(newEmployee);
            return newEmployee;
        },
        addOrder: (parent, args) => {
            const newOrder = { ...args };
            db.orders.push(newOrder);
            return newOrder;
        },
        addShipper: (parent, args) => {
            const newShipper = { ...args };
            db.shippers.push(newShipper);
            return newShipper;
        },
        updateCategory: (parent, args) => {
            const { CategoryID, ...rest } = args;
            const category = db.categories.find(category => category.CategoryID === CategoryID);
            Object.assign(category, rest);
            return category;
        },
        updateProduct: (parent, args) => {
            const { ProductID, ...rest } = args;
            const product = db.products.find(product => product.ProductID === ProductID);
            Object.assign(product, rest);
            return product;
        },
        updateSupplier: (parent, args) => {
            const { SupplierID, ...rest } = args;
            const supplier = db.suppliers.find(supplier => supplier.SupplierID === SupplierID);
            Object.assign(supplier, rest);
            return supplier;
        },
        updateCustomer: (parent, args) => {
            const { CustomerID, ...rest } = args;
            const customer = db.customers.find(customer => customer.CustomerID === CustomerID);
            Object.assign(customer, rest);
            return customer;
        },
        updateEmployee: (parent, args) => {
            const { EmployeeID, ...rest } = args;
            const employee = db.employees.find(employee => employee.EmployeeID === EmployeeID);
            Object.assign(employee, rest);
            return employee;
        },
        updateOrder: (parent, args) => {
            const { OrderID, ...rest } = args;
            const order = db.orders.find(order => order.OrderID === OrderID);
            Object.assign(order, rest);
            return order;
        },
        updateShipper: (parent, args) => {
            const { ShipperID, ...rest } = args;
            const shipper = db.shippers.find(shipper => shipper.ShipperID === ShipperID);
            Object.assign(shipper, rest);
            return shipper;
        },
        deleteCategory: (parent, { CategoryID }) => {
            const category = db.categories.find(category => category.CategoryID === CategoryID);
            db.categories = db.categories.filter(category => category.CategoryID !== CategoryID);
            return category;
        },
        deleteProduct: (parent, { ProductID }) => {
            const product = db.products.find(product => product.ProductID === ProductID);
            db.products = db.products.filter(product => product.ProductID !== ProductID);
            return product;
        },
        deleteSupplier: (parent, { SupplierID }) => {
            const supplier = db.suppliers.find(supplier => supplier.SupplierID === SupplierID);
            db.suppliers = db.suppliers.filter(supplier => supplier.SupplierID !== SupplierID);
            return supplier;
        },
        deleteCustomer: (parent, { CategoryID }) => {
            const customer = db.customers.find(customer => customer.CustomerID === CustomerID);
            db.categories = db.customers.filter(customer => customer.CustomerID !== CustomerID);
            return customer;
        },
        deleteEmployee: (parent, { ProductID }) => {
            const employee = db.employees.find(employee => employee.EmployeeID === EmployeeID);
            db.employees = db.employees.filter(employee => employee.EmployeeID !== EmployeeID);
            return employee;
        },
        deleteOrder: (parent, { OrderID }) => {
            const order = db.orders.find(order => order.OrderID === OrderID);
            db.orders = db.orders.filter(order => order.OrderID !== OrderID);
            return order;
        },
        deleteShipper: (parent, { ShipperID }) => {
            const shipper = db.shippers.find(shipper => shipper.ShipperID === ShipperID);
            db.shippers = db.shippers.filter(shipper => shipper.ShipperID !== ShipperID);
            return shipper;
        }
    }
}