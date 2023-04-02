import { FastifyInstance } from "fastify";

import loadSchemas from "../plugins/loadSchemas.plugin";
import commonHooks from "../plugins/commonHooks.plugin";
import miscRoutes from "./misc/index";

export default async function index(fastify: FastifyInstance): Promise<void> {
  fastify.register(loadSchemas);
  fastify.register(commonHooks);

  fastify.register(miscRoutes);
}
