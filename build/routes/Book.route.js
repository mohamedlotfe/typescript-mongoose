"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const router = express_1.default.Router();
router.get('/get/:bookId', controllers_1.readBook);
router.post('/create', (0, middlewares_1.ValidateSchema)(middlewares_1.Schemas.book.create), controllers_1.createBook);
router.patch('/update/:bookId', (0, middlewares_1.ValidateSchema)(middlewares_1.Schemas.book.update), controllers_1.updateBook);
module.exports = router;
