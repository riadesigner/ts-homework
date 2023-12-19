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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = exports.Book = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("../db");
let Book = class Book {
    constructor(title = '', description = '', authors = '', favorite = '', fileCover = '', fileName = '', fileBook = '') {
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
        this.fileBook = fileBook;
        return this;
    }
};
exports.Book = Book;
exports.Book = Book = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object])
], Book);
let BookService = class BookService {
    constructor(db) {
        this.db = db;
    }
    getAllBooks() {
        return new Promise(async (res) => {
            res(this.db.getAllBooks());
        });
    }
    createBook(bookDto) {
        return new Promise(async (res) => {
            const book = await this.db.addBook(bookDto);
            res(book);
        });
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(db_1.DB)),
    __metadata("design:paramtypes", [db_1.DB])
], BookService);
//# sourceMappingURL=book.service.js.map