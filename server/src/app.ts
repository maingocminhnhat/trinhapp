import express from "express";
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import http from "http";
import { PORT } from "./config";
import { typeDefs, resolvers } from "./graphql";
import { getUser } from "./auth";

export async function startApolloServer() {
  // Required logic for integrating with Express
  const app = express();
  const httpServer = http.createServer(app);

  // Same ApolloServer initialization as before, plus the drain plugin.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
    context: ({ req }) => {
      // Get the user token from the headers.
      const token = req.headers.authorization || '';
      // Try to retrieve a user with the token
      const user = getUser(token);
      // Add the user to the context
      return { user };
    }
  });

  // More required logic for integrating with Express
  await server.start();
  // Additional middleware can be mounted at this point to run before Apollo.

  // Mount Apollo middleware here.
  server.applyMiddleware({ app, path: "/" });

  // Modified server startup
  await new Promise<void>((resolve) => httpServer.listen(PORT, resolve));
  console.log(`Server ready at http://localhost:${PORT + server.graphqlPath}`);
  // Return app and server if need
  return { app, server }
}
