import { FastifyServerOptions } from "fastify";

export default function buildServerOptions(): FastifyServerOptions {
  return {
    logger: {
      level: "debug",
    },
    ajv: {
      customOptions: {
        allErrors: true,
      },
    },
  };
}
