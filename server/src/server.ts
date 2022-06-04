import "reflect-metadata";

import { ApolloServer } from "apollo-server-express";
import { Context } from "apollo-server-core";
// import { createConnection, getConnectionOptions } from "typeorm";
// import expressPlayground from "graphql-playground-middleware-express";
import express from "express";
import { IncomingMessage } from "http";
import { buildSchema } from "type-graphql";
import path from "path";
import User from './entities/User'
const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';
require("dotenv").config()

const PORT = process.env.PORT || 3001;
// import User from "./entities/User";
// import Todo from "./entities/Todo"
import TodoResolver from "./resolvers/TodoResolver"
import AppDataSource from "./data-source";
import UserResolver from "./resolvers/UserResolver";
// import AuthPayloadResolver from "./resolvers/AuthPayloadResolver";
// import PhotoResolver from "./resolvers/PhotoResolver";
// import UserResolver from "./resolvers/UserResolver";

export type ContextRequest = { req: IncomingMessage };
export interface AuthContext extends Context {
  currentUser: User | null;
}

type MyToken = {
  exp: number,
  iat: number,
  data: {
    username: string,
    id: number
  }
}

(async () => {
  await AppDataSource.initialize()

  const app = express();
  const schema = await buildSchema({
    resolvers: [
      TodoResolver,
      UserResolver
    ],
    emitSchemaFile: path.resolve(__dirname, "../schema.gql"),
  });
  async function context({ req }: ContextRequest) {
    const token = req.headers.authorization?.split(" ").pop()?.trim() || null;
    if (!token) {
      console.log("No authorization found")
      return req
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      return data;
    } catch {
      console.log('Invalid token');
      return 403;
    }
  }
  const server = new ApolloServer({ schema, context });
  await server.start();
  server.applyMiddleware({ app });

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../../client/build')));
  }

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../client/build/index.html'));
  });

  app.listen(PORT, () =>
    console.log(`GQL Server running @ http://localhost:${PORT}${server.graphqlPath}`)
  );
})();