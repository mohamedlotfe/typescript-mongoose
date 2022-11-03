"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAuthor = exports.updateAuthor = exports.createAuthor = exports.readAll = exports.readAuthor = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const models_1 = require("../models");
const readAuthor = (req, res, next) => {
    const authorId = req.params.authorId;
    return models_1.Author.findById(authorId)
        .then((author) => (author ? res.status(200).json({ author }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};
exports.readAuthor = readAuthor;
const readAll = (req, res, next) => {
    return models_1.Author.find()
        .then((authors) => res.status(200).json({ authors }))
        .catch((error) => res.status(500).json({ error }));
};
exports.readAll = readAll;
const createAuthor = (req, res, next) => {
    const { name } = req.body;
    const author = new models_1.Author({ _id: new mongoose_1.default.Types.ObjectId(), name });
    return author
        .save()
        .then((author) => res.status(201).json({ author }))
        .catch((error) => res.status(500).json({ error }));
};
exports.createAuthor = createAuthor;
const updateAuthor = (req, res, next) => {
    const authorId = req.params.authorId;
    return models_1.Author.findById(authorId)
        .then((author) => {
        if (author) {
            author.set(req.body);
            return author
                .save()
                .then((author) => res.status(201).json({ author }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            return res.status(404).json({ message: 'not found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
exports.updateAuthor = updateAuthor;
const deleteAuthor = (req, res, next) => {
    const authorId = req.params.authorId;
    return models_1.Author.findByIdAndDelete(authorId)
        .then((author) => (author ? res.status(201).json({ author, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};
exports.deleteAuthor = deleteAuthor;
