"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const utils_1 = require("../utils/utils");
async function swagger(fastify) {
    const version = (0, utils_1.getServerVersion)();
    await fastify.register(swagger_1.default, {
        mode: "dynamic",
        openapi: {
            info: {
                title: "Fastify starter ts",
                description: "Fastify starter ts REST API documentation",
                version,
                contact: {
                    name: "Filippo Menis",
                    email: "filippomeniswork@gmail.com",
                },
            },
            externalDocs: {
                description: "Find more info here",
                url: "https://github.com/fmenis/fastify-starter-ts",
            },
            servers: [
                {
                    url: "http:127.0.0.1:3000",
                    description: "Local server",
                },
            ],
            tags: [
                { name: "misc", description: "Miscellaneous related end-points" },
            ].sort((a, b) => a.name.localeCompare(b.name)),
        },
    });
    await fastify.register(swagger_ui_1.default, {
        routePrefix: "/doc",
        initOAuth: {},
        uiConfig: {
            docExpansion: "full",
            deepLinking: false,
        },
        uiHooks: {
            onRequest: function (request, reply, next) {
                next();
            },
            preHandler: function (request, reply, next) {
                next();
            },
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
    });
}
exports.default = (0, fastify_plugin_1.default)(swagger);
