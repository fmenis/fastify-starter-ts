"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const status_1 = __importDefault(require("./status"));
async function index(fastify) {
    fastify.addHook("onRoute", (options) => {
        options.schema = Object.assign(Object.assign({}, options.schema), { tags: ["misc"] });
    });
    const prefix = "/v1";
    fastify.register(status_1.default, { prefix });
}
exports.default = index;
