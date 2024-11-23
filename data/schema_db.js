export const typeDefs = `#graphql
	type Categories {
		CategoryID: Int!,
		CategoryName: String!,
		Description: String!,
		Products: [Products]!
	}

	type Suppliers{
		SupplierID: Int!,
		CompanyName: String!,
		ContactName: String!,
		ContactTitle: String!,
		Country: String!,
		City: String!,
		Address: String!,
		Products: [Products]!
	}

	type Products {
		ProductID: Int!,
		ProductName: String!,
		SupplierID: ID!,
		Supplier: Suppliers!,
		CategoryID: ID!,
		Category: Categories!,
		QuantityPerUnit: String!,
		UnitPrice: Float!,
		UnitsInStock: Int!,        
		ReorderLevel: Int!
	}

	type Customers {
		CustomerID: String!,
		CompanyName: String!,
		ContactName: String!,
		ContactTitle: String!,
		Country: String!,
		City: String!,
		Address: String!,
		Orders: [Orders]!
	}
	
	type Employees {
		EmployeeID: Int!,
    	LastName: String!,
    	FirstName: String!,
    	Title: String!,
    	TitleOfCourtesy: String!,
    	BirthDate: String!,
    	HireDate: String!,
    	Country: String!,
    	City: String!,
    	Address: String!,
		Orders: [Orders]!
	}

	type Orders {
		OrderID: Int!,
		CustomerID: ID!,
		Customer: Customers!,
		EmployeeID: ID!,
		Employee: Employees!,
		OrderDate: String!,
		RequiredDate: String!,
		ShippedDate: String!,
		ShipVia: Int!,
		Freight: Float!,
		ShipName: String!,
		ShipCountry: String!,
		ShipCity: String!,
		ShipAddress: String!,
		ShipPostalCode: String!
	}

	type Shippers {
		ShipperID: Int!,
		CompanyName: String!,
		Phone: String!,
	}

	type Query {
		categories: [Categories]!,
		category(CategoryID: Int!): Categories,        
		
		products: [Products]!,
		product(ProductID: Int!): Products,        
		
		suppliers: [Suppliers]!,
		supplier(SupplierID: Int!): Suppliers,

		customers: [Customers]!,
		customer(CustomerID: String!): Customers,        
		
		employees: [Employees]!,
		employee(EmployeeID: Int!): Employees,        
		
		orders: [Orders]!,
		order(OrderID: Int!): Orders,

		shippers: [Shippers]!,
		shipper(ShipperID: Int!): Shippers
	}
    
    type Mutation {
		addCategory(CategoryID: Int!, CategoryName: String!, Description: String!): Categories,
		addProduct(ProductID: Int!, ProductName: String!, SupplierID: ID!, CategoryID: ID!, QuantityPerUnit: String!, UnitPrice: Float!, UnitsInStock: Int!, ReorderLevel: Int!): Products,
		addSupplier(SupplierID: Int!, CompanyName: String!, ContactName: String!, ContactTitle: String!, Country: String!, City: String!, Address: String!): Suppliers,
		addCustomer(CustomerID: String!, CompanyName: String!, ContactName: String!, ContactTitle: String!,	Country: String!, City: String!, Address: String!): Customers,
		addEmployee(EmployeeID: Int!, LastName: String!, FirstName: String!, Title: String!, TitleOfCourtesy: String!, BirthDate: String!, HireDate: String!, Country: String!, City: String!, Address: String!): Employees,
		addOrder(OrderID: Int!, CustomerID: ID!, EmployeeID: ID!, OrderDate: String!, RequiredDate: String!, ShippedDate: String!, ShipVia: Int!, Freight: Float!, ShipName: String!, ShipCountry: String!, ShipCity: String!, ShipAddress: String!, ShipPostalCode: String!): Orders,
		addShipper(ShipperID: Int!, CompanyName: String!, Phone: String!): Shippers

		updateCategory(CategoryID: Int!, CategoryName: String, Description: String): Categories,
		updateProduct(ProductID: Int!, ProductName: String, SupplierID: ID, CategoryID: ID, QuantityPerUnit: String, UnitPrice: Float, UnitsInStock: Int, ReorderLevel: Int): Products,
		updateSupplier(SupplierID: Int!, CompanyName: String, ContactName: String, ContactTitle: String, Country: String, City: String, Address: String): Suppliers,
		updateCustomer(CustomerID: String!, CompanyName: String!, ContactName: String!, ContactTitle: String!,	Country: String!, City: String!, Address: String!): Customers,
		updateEmployee(EmployeeID: Int!, LastName: String!, FirstName: String!, Title: String!, TitleOfCourtesy: String!, BirthDate: String!, HireDate: String!, Country: String!, City: String!, Address: String!): Employees,
		updateOrder(OrderID: Int!, CustomerID: ID!, EmployeeID: ID!, OrderDate: String!, RequiredDate: String!, ShippedDate: String!, ShipVia: Int!, Freight: Float!, ShipName: String!, ShipCountry: String!, ShipCity: String!, ShipAddress: String!, ShipPostalCode: String!): Orders,
		updateShipper(ShipperID: Int!, CompanyName: String!, Phone: String!): Shippers		
			
		deleteCategory(CategoryID: Int!): Categories,
		deleteProduct(ProductID: Int!): Products,
		deleteSupplier(SupplierID: Int!): Suppliers,    
		deleteCustomer(CustomerID: String!): Customers,
		deleteEmployee(EmployeeID: Int!): Employees,
		deleteOrder(OrderID: Int!): Orders,
		deleteShipper(ShipperID: Int!): Shippers	
	}
`;
