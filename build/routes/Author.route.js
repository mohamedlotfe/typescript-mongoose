"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const router = express_1.default.Router();
router.get('/get', controllers_1.readAll);
router.get('/get/:authorId', controllers_1.readAuthor);
router.post('/create', (0, middlewares_1.ValidateSchema)(middlewares_1.Schemas.author.create), controllers_1.createAuthor);
router.patch('/update/:authorId', (0, middlewares_1.ValidateSchema)(middlewares_1.Schemas.author.update), controllers_1.updateAuthor);
router.delete('/delete/:authorId', controllers_1.deleteAuthor);
module.exports = router;
