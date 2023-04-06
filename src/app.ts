import { FastifyInstance, FastifyRegisterOptions } from "fastify";
// @ts-ignore
import massive from "fastify-massive";
// import {  } from '@types/massive'
import Env from "@fastify/env";

import swaggerPlugin from "./plugins/swagger.plugin";
import apiPlugin from "./routes/index";
import { sEnv } from "./utils/env.schema";

declare module "fastify" {
  // interface FastifyInstance {
  //   massive: any;
  // }
  interface FastifyRequest {
    resource: object;
  }
}

export default async function app(
  fastify: FastifyInstance,
  opts: any
): Promise<void> {
  await fastify.register(Env, {
    schema: sEnv(),
  });

  fastify.register(swaggerPlugin);
  // fastify.register(massive, {
  //   massive: {
  //     host: process.env.PG_HOST,
  //     port: process.env.PG_PORT,
  //     database: process.env.PG_DB,
  //     user: process.env.PG_USER,
  //     password: process.env.PG_PW,
  //   },
  // });
  fastify.register(apiPlugin, { prefix: "/api" });
}
