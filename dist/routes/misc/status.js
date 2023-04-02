"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fluent_json_schema_1 = __importDefault(require("fluent-json-schema"));
const utils_1 = require("../../utils/utils");
async function status(fastify, opts) {
    const version = (0, utils_1.getServerVersion)();
    fastify.route({
        method: "GET",
        url: "/status",
        config: {
            public: false,
        },
        schema: {
            response: {
                200: fluent_json_schema_1.default.object()
                    .additionalProperties(false)
                    .prop("status", fluent_json_schema_1.default.string())
                    .description("Status.")
                    .required()
                    .prop("version", fluent_json_schema_1.default.string())
                    .description("Server version.")
                    .required(),
            },
        },
        handler: onStatus,
    });
    async function onStatus(req, reply) {
        reply.send({ status: "ok", version });
    }
}
exports.default = status;
