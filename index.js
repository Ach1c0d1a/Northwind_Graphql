// Call ApolloServer and startStandaloneServer
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

//  Connection to MongoDB
import mongoose from "mongoose";
mongoose.connect('mongodb://localhost:27017/', {dbName: 'Prosalud'})
	.then(r  => console.log('Connected to MongoDB'));


// Load models
import './models/mdl_Bugis.js'
import './models/mdl_Lotes.js';
import './models/mdl_Recepciones.js';
import './models/mdl_Guias.js';

// Load data resources
import { typeDefs } from './data/schema_db.js';

// Mongo DB
 import { resolvers } from './data/resolversMongo.js';

// Apolo Server
//import { resolvers } from './data/resolvers.js';


// Publish data resources
const server = new ApolloServer({
	typeDefs,
	resolvers
},);

// Run Apollo Server
const {url} = await startStandaloneServer(server,{
	listen: { port: 13000 }
});
