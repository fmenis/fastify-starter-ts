"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function hello(fastify, opts) {
    fastify.route({
        method: "GET",
        url: "/hello",
        handler: onHello,
    });
    async function onHello(req, reply) {
        reply.send("Hello World!");
    }
}
exports.default = hello;
