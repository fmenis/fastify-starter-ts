import { FastifyInstance } from "fastify";

import statusRoute from "./status";
import createUserRoute from "./createUser";

export default async function index(fastify: FastifyInstance): Promise<void> {
  fastify.addHook("onRoute", (options) => {
    options.schema = {
      ...options.schema,
      tags: ["misc"],
    };
  });

  const prefix = "/v1";

  fastify.register(statusRoute, { prefix });
  fastify.register(createUserRoute, { prefix });
}
