"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = exports.iBookRepository = void 0;
require("reflect-metadata");
const book_db_model_1 = require("./book-db-model");
const book_abstract_1 = require("./book-abstract");
Object.defineProperty(exports, "iBookRepository", { enumerable: true, get: function () { return book_abstract_1.iBookRepository; } });
const inversify_1 = require("inversify");
let BookRepository = class BookRepository {
    constructor() {
        console.log('new BookRepository created');
    }
    getBookById(id) {
        return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield book_db_model_1.BookModel.findOne({ _id: id }).select('-__v');
                res(book);
            }
            catch (e) {
                console.log(`not found book ${id}, ${e}`);
                res(null);
            }
        }));
    }
    createBook(bookDto) {
        return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
            try {
                const newBook = new book_db_model_1.BookModel(bookDto);
                yield newBook.save();
                res(newBook);
            }
            catch (e) {
                console.log(`cant creating a book, ${e}`);
                res(null);
            }
        }));
    }
    getAllBooks() {
        return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
            try {
                const arrBooks = yield book_db_model_1.BookModel.find().select('-__v');
                res(arrBooks);
            }
            catch (e) {
                console.log(`not found books ${e}`);
                res(null);
            }
        }));
    }
};
exports.BookRepository = BookRepository;
exports.BookRepository = BookRepository = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], BookRepository);
