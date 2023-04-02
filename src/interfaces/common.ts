import { FastifyError } from "fastify";

export interface IHttpError extends FastifyError {
  internalCode: string;
  details: {
    validation: any;
  };
}
