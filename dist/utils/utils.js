"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerVersion = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
function getServerVersion() {
    const { version } = JSON.parse((0, fs_1.readFileSync)((0, path_1.join)((0, path_1.resolve)(), "package.json"), { encoding: "utf-8" }));
    return version;
}
exports.getServerVersion = getServerVersion;
