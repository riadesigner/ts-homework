"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const inversify_1 = require("inversify");
const book_repository_1 = require("../books/book-repository");
const container = new inversify_1.Container();
exports.container = container;
container.bind(book_repository_1.BookRepository).toSelf();
