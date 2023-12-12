"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const container_1 = require("../infrastructure/container");
const book_repository_1 = require("./book-repository");
const repo = container_1.container.get(book_repository_1.BookRepository);
const router = express_1.default.Router();
router.get('/book/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const book = yield repo.getBookById(id);
    console.log('book', book);
    if (book !== null) {
        res.send(`ok!, книга № ${id} <br><pre>${book}</pre>`);
    }
    else {
        res.send(`no! книга ${id} не найдена`);
    }
}));
router.get('/book', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield repo.getAllBooks();
    if (books !== null) {
        res.send(`<pre>books = ${books}</pre>`);
    }
    else {
        res.send("no, книг нет");
    }
}));
router.post('/book/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, authors, favorite, fileCover, fileName, fileBook } = req.body;
    const bookDto = {
        title: title || "",
        description: description || "",
        authors: authors || "",
        favorite: favorite || "",
        fileCover: fileCover || "",
        fileName: fileName || "",
        fileBook: fileBook || ""
    };
    const book = yield repo.createBook(bookDto);
    if (book !== null) {
        res.send(`ok!, книга добавлена ${book.title}`);
    }
    else {
        res.send(`ошибка добавления книги`);
    }
}));
exports.default = router;
