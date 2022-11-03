"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const chalk_1 = require("chalk");
class Logger {
}
exports.Logger = Logger;
_a = Logger;
Logger.log = (args) => _a.info(args);
Logger.info = (args) => console.log((0, chalk_1.blue)(`[${new Date().toLocaleString()}] [INFO]`), typeof args === 'string' ? (0, chalk_1.blueBright)(args) : args);
Logger.warning = (args) => console.log((0, chalk_1.yellow)(`[${new Date().toLocaleString()}] [WARN]`), typeof args === 'string' ? (0, chalk_1.yellowBright)(args) : args);
Logger.error = (args) => console.log((0, chalk_1.red)(`[${new Date().toLocaleString()}] [ERROR]`), typeof args === 'string' ? (0, chalk_1.redBright)(args) : args);
