import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import S from "fluent-json-schema";

import { getServerVersion } from "../../utils/utils";

export default async function status(fastify: FastifyInstance, opts: any) {
  const { massive } = fastify;
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
          .description("Status.")
          .required()
          .prop("version", S.string())
          .description("Server version.")
          .required(),
      },
    },
    handler: onStatus,
  });

  async function onStatus(req: FastifyRequest, reply: FastifyReply) {
    const res = await massive.users.findOne({
      email: "filippomeniswork@gmail.com",
    });

    console.log(res);

    reply.send({ status: "ok", version });
  }
}
