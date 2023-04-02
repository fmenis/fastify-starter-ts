import { FastifyInstance, FastifyRegisterOptions } from "fastify";

import api from "./routes/index";

export default async function app(
  fastify: FastifyInstance,
  opts: any
): Promise<void> {
  fastify.register(api, { prefix: "/api" });
}
