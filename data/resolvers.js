export const resolvers = {
	Query: {
		categories: () => db.categories,
		category: (parent, { CategoryID }) => db.categories.find(category => category.CategoryID === CategoryID),

		products: () => db.products,
		product: (parent, { ProductID }) => db.products.find(product => product.ProductID === ProductID),

		suppliers: () => db.suppliers,
		supplier: (parent, { SupplierID }) => db.suppliers.find(supplier => supplier.SupplierID === SupplierID),
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
        }
    }
}