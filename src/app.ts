import { FastifyInstance, FastifyRegisterOptions } from "fastify";

import swaggerPlugin from "./plugins/swagger.plugin";
import apiPlugin from "./routes/index";

declare module "fastify" {
  interface FastifyRequest {
    resource: object;
  }
}

export default async function app(
  fastify: FastifyInstance,
  opts: any
): Promise<void> {
  fastify.register(swaggerPlugin);
  fastify.register(apiPlugin, { prefix: "/api" });
}
