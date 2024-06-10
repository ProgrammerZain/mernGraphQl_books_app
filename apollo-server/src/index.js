import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./models/typeDefs.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";

// GraphQL Schema
// const typeDefs = gql`
//   type Query {
//     hello(name: String): String
//   }
// `;

// // GraphQL Resolvers
// const resolvers = {
//   Query: {
//     hello: (_, { name }) => `Hello ${name}`,
//   },
// };
// const HELLO_QUERY = gql`
//   query Query($name: String) {
//     hello(name: $name)
//   }
// `;
const server = new ApolloServer({ typeDefs, resolvers });
mongoose.set("strictQuery", true);
const db = await mongoose.connect("mongodb://localhost:27017/mern", {
  useNewUrlParser: true,
});
console.info("📚 Connected to db", db?.connections[0]?._connectionString);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.info(`🚀 Server ready at ${url}`);
