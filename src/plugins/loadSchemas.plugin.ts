import fp from "fastify-plugin";

import {
  sNoContent,
  sAccepted,
  sPaginatedInfo,
} from "../common/schema/httpResponse.schema";
import {
  sBadRequest,
  sForbidden,
  sUnauthorized,
  sNotFound,
  sConflict,
  sInternalServerError,
} from "../common/schema/httpError.schema";
import { FastifyInstance } from "fastify";

async function loadSchemas(fastify: FastifyInstance) {
  fastify.addSchema(sNoContent());
  fastify.addSchema(sAccepted());
  fastify.addSchema(sPaginatedInfo());
  fastify.addSchema(sBadRequest());
  fastify.addSchema(sForbidden());
  fastify.addSchema(sUnauthorized());
  fastify.addSchema(sNotFound());
  fastify.addSchema(sConflict());
  fastify.addSchema(sInternalServerError());
}

export default fp(loadSchemas);
