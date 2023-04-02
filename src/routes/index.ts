import { FastifyInstance } from "fastify";

import miscRoutes from "./misc/index";

export default async function index(fastify: FastifyInstance): Promise<void> {
  fastify.register(miscRoutes);
}
