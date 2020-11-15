import "reflect-metadata";

import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import bodyParser from "body-parser";
import swaggerConfig from "./swagger.js";
import { createConnection, getConnection } from "typeorm";

import { router } from "./router";

try {
  const connection = getConnection();
  connection.close().then(() => createConnection());
} catch {
  createConnection();
}

const app = express();

app.use(bodyParser.json());

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerConfig)));

// apiルータのルートパスは/api
app.use(router);

export default app;
