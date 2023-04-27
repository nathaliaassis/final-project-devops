import { FastifyInstance } from "fastify";
import { operation } from "./controllers/operation.controller";

export async function routes(app: FastifyInstance) {
  app.post("/operations", operation);
}
