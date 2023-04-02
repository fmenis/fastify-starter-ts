"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./routes/index"));
async function app(fastify, opts) {
    fastify.register(index_1.default, { prefix: "/api" });
}
exports.default = app;
