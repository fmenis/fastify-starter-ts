import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import S from "fluent-json-schema";

import { getServerVersion } from "../../utils/utils";

export default async function status(fastify: FastifyInstance, opts: any) {
  const version = getServerVersion();

  fastify.route({
    method: "GET",
    url: "/status",
    config: {
      public: false,
    },
    schema: {
      response: {
        200: S.object()
          .additionalProperties(false)
          .prop("status", S.string())
          .description("TODO")
          .required()
          .prop("version", S.string())
          .description("Server version.")
          .required(),
      },
    },
    handler: onStatus,
  });

  async function onStatus(req: FastifyRequest, reply: FastifyReply) {
    reply.send({ status: "ok", version });
  }
}
