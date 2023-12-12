"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = void 0;
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String },
    authors: { type: String },
    favorite: { type: String },
    fileCover: { type: String },
    fileName: { type: String }
});
const BookModel = (0, mongoose_1.model)('Book', bookSchema);
exports.BookModel = BookModel;
