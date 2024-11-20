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
		ReorderLevel: Int!,
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
	}

	type OrderDetails {
		OrderID: ID!,
		Order: Orders!,
		ProductID: ID!,
		Product: Orders!,
		ProductID: Int!,
		UnitPrice: Float!,
    	Quantity: Int!,
		Discount: Float!,
	}
	   
	type Orders {
		OrderID: Int!,
		CustomerID: ID!,
		Customer: Customer!,
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
		Description: String!,
	}

	type Query {
		categories: [Categories]!,
		category(CategoryID: Int!): Categories,        
		
		products: [Products]!,
		product(ProductID: Int!): Products,        
		
		suppliers: [Suppliers]!,
		supplier(SupplierID: Int!): Suppliers
	}
    
    type Mutation {
			addCategory(CategoryID: Int!,CategoryName: String!, Description: String!): Categories,
			addProduct(ProductID: Int!, ProductName: String!, SupplierID: ID!, CategoryID: ID!, QuantityPerUnit: String!, UnitPrice: Float!, UnitsInStock: Int!, ReorderLevel: Int!): Products,
			addSupplier(SupplierID: Int!, CompanyName: String!, ContactName: String!, ContactTitle: String!, Country: String!, City: String!, Address: String!): Suppliers
			
			updateCategory(CategoryID: Int!, CategoryName: String, Description: String): Categories,
			updateProduct(ProductID: Int!, ProductName: String, SupplierID: ID, CategoryID: ID, QuantityPerUnit: String, UnitPrice: Float, UnitsInStock: Int, ReorderLevel: Int): Products,
			updateSupplier(SupplierID: Int!, CompanyName: String, ContactName: String, ContactTitle: String, Country: String, City: String, Address: String): Suppliers
				
			deleteCategory(CategoryID: Int!): Categories,
			deleteProduct(ProductID: Int!): Products,
			deleteSupplier(SupplierID: Int!): Suppliers    
	}
`;
