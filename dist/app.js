"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_plugin_1 = __importDefault(require("./plugins/swagger.plugin"));
const index_1 = __importDefault(require("./routes/index"));
async function app(fastify, opts) {
    fastify.register(swagger_plugin_1.default);
    fastify.register(index_1.default, { prefix: "/api" });
}
exports.default = app;
