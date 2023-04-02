"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loadSchemas_plugin_1 = __importDefault(require("../plugins/loadSchemas.plugin"));
const commonHooks_plugin_1 = __importDefault(require("../plugins/commonHooks.plugin"));
const index_1 = __importDefault(require("./misc/index"));
async function index(fastify) {
    fastify.register(loadSchemas_plugin_1.default);
    fastify.register(commonHooks_plugin_1.default);
    fastify.register(index_1.default);
}
exports.default = index;
