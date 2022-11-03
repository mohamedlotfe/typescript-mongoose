"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBook = exports.readBook = exports.createBook = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const models_1 = require("../models");
const createBook = (req, res, next) => {
    const { author, title } = req.body;
    const book = new models_1.Book({
        _id: new mongoose_1.default.Types.ObjectId(),
        author,
        title
    });
    return book
        .save()
        .then((book) => res.status(201).json({ book }))
        .catch((error) => res.status(500).json({ error }));
};
exports.createBook = createBook;
const readBook = (req, res, next) => {
    const bookId = req.params.bookId;
    return models_1.Book.findById(bookId)
        .populate('author')
        .then((book) => (book ? res.status(200).json({ book }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};
exports.readBook = readBook;
const updateBook = (req, res, next) => {
    const bookId = req.params.bookId;
    return models_1.Book.findById(bookId)
        .then((book) => {
        if (book) {
            book.set(req.body);
            return book
                .save()
                .then((book) => res.status(201).json({ book }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            return res.status(404).json({ message: 'not found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
exports.updateBook = updateBook;
