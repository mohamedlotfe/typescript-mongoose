"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = exports.authorRoutes = void 0;
const Author_route_1 = __importDefault(require("./Author.route"));
exports.authorRoutes = Author_route_1.default;
const Book_route_1 = __importDefault(require("./Book.route"));
exports.bookRoutes = Book_route_1.default;
