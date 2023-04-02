"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function buildServerOptions() {
    return {
        logger: {
            level: "debug",
        },
        ajv: {
            customOptions: {
                allErrors: true,
            },
        },
    };
}
exports.default = buildServerOptions;
