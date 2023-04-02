import Fastify from "fastify";

import buildServerOptions from "./utils/buildServerOptions";
import app from "./app";

const fastify = Fastify(buildServerOptions());

fastify.register(app);

fastify.listen({ port: 3000 }, (err, address) => {
  const { log } = fastify;

  if (err) {
    log.fatal(err);
    process.exit(1);
  }
  log.debug(`Server launched in '${process.env.NODE_ENV}' environment`);
});

/**
 * TODO
 * - nodemon
 * - prettier
 */
