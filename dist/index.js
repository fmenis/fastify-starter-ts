"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const buildServerOptions_1 = __importDefault(require("./utils/buildServerOptions"));
const app_1 = __importDefault(require("./app"));
const fastify = (0, fastify_1.default)((0, buildServerOptions_1.default)());
fastify.register(app_1.default);
fastify.listen({ port: 3000 }, (err, address) => {
    const { log } = fastify;
    if (err) {
        log.fatal(err);
        process.exit(1);
    }
    log.debug(`Server launched in '${process.env.NODE_ENV}' environment`);
});
