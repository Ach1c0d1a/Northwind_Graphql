// Call ApolloServer and startStandaloneServer
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Connection to MongoDB
import mongoose from "mongoose";
mongoose.connect('mongodb://localhost:27017/', {dbName: 'Northwind'})
	.then(r  => console.log('Connected to MongoDB'));

// Load models
import './models/mdl_Categories.js';
import './models/mdl_Products.js';
import './models/mdl_Suppliers.js';

// Load data resources
import { typeDefs } from './data/schema_db.js';
import { resolvers } from './data/resolversMongo.js';

// Publish data resources
const server = new ApolloServer({
	typeDefs,
	resolvers
},);

// Run Apollo Server
const {url} = await startStandaloneServer(server,{
	listen: { port: 4005 }
});
