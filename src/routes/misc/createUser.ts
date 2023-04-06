import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { Type, Static } from "@sinclair/typebox";

import { getServerVersion } from "../../utils/utils";

const createUserBody = Type.Object(
  {
    name: Type.String({ minLength: 2, description: "User name" }),
    age: Type.Integer({ minimum: 18, description: "User age" }),
  },
  { additionalProperties: false }
);
type CreateUserBodyType = Static<typeof createUserBody>;

export default async function createUser(fastify: FastifyInstance, opts: any) {
  const version = getServerVersion();

  fastify.route({
    method: "POST",
    url: "/user",
    config: {
      public: false,
    },
    schema: {
      body: createUserBody,
    },
    handler: onCreateUser,
  });

  async function onCreateUser(
    req: FastifyRequest<{ Body: CreateUserBodyType }>,
    reply: FastifyReply
  ) {
    const { name, age } = req.body;

    reply.send("User created");
  }
}
