import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import bodyParser from "body-parser";
import swaggerConfig from "./swagger.js";
import { router } from "./router";

const app = express();

app.use(bodyParser.json());
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerConfig)));

app.use(router);

export default {
  path: "/api",
  handler: app
};
