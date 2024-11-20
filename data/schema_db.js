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
