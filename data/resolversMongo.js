import mongoose from "mongoose";

const Categories = mongoose.model('Categories');
const Products = mongoose.model('Products');
const Suppliers = mongoose.model('Suppliers');

export const resolvers = {
	Query: {
		categories: async () => await Categories.find(),
		category: async (parent, { CategoryID }) => await Categories.findOne({CategoryID: CategoryID}),

		products: async () => await Products.find(),
		product:  async (parent, { ProductID }) => await Products.findOne({ProductID: ProductID}),

		suppliers: async () => await Suppliers.find(),
		supplier: async (parent, { SupplierID }) => await Suppliers.findOne({SupplierID: SupplierID}),
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
		deleteCategory: async (parent, { CategoryID }) => {
			return Categories.findOneAndDelete({CategoryID: CategoryID});
		},
		deleteProduct: async (parent, { ProductID }) => {
			return Products.findOneAndDelete({ProductID: ProductID});
		},
		deleteSupplier: async (parent, { SupplierID }) => {
			return Suppliers.findOneAndDelete({SupplierID: SupplierID});
		}
	}
}
	