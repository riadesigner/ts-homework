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
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const book_schema_1 = require("./book.schema");
const mongoose_2 = require("@nestjs/mongoose");
let BookService = class BookService {
    constructor(bookModel) {
        this.bookModel = bookModel;
    }
    getAllBooks() {
        return new Promise(async (res) => {
            const allbooks = await this.bookModel.find().select('-__v');
            res(allbooks);
        });
    }
    getBookById(id) {
        return new Promise(async (res) => {
            try {
                const book = await this.bookModel.findById(id).select('-__v');
                res(book);
            }
            catch (e) {
                res(null);
            }
        });
    }
    createBook(bookDto) {
        return new Promise(async (res) => {
            console.log('bookDto', bookDto);
            if (!bookDto.title) {
                res({
                    error: true,
                    data: 'не все обязательные параметры указаны',
                });
                return;
            }
            const newBook = new this.bookModel(bookDto);
            await newBook.save();
            res({
                error: false,
                data: newBook,
            });
        });
    }
    updateBookById(id, bookDto) {
        return new Promise(async (res) => {
            try {
                const book = await this.bookModel.findById(id);
                const { title } = bookDto;
                if (!title) {
                    res({
                        error: true,
                        data: 'не все обязательные параметры указаны',
                    });
                    return;
                }
                book.title = title;
                await book.save();
                console.log(`updated book ${id}`, bookDto);
                res({
                    error: false,
                    data: book,
                });
            }
            catch (e) {
                res({
                    error: true,
                    data: `книги с номером ${id} не существует`,
                });
            }
        });
    }
    deleteBookById(id) {
        return new Promise(async (res) => {
            try {
                const book = await this.bookModel.findById(id);
                await book.deleteOne();
                res({
                    error: false,
                    data: `книга ${id} удалена`,
                });
            }
            catch (e) {
                res({
                    error: true,
                    data: `книги с номером ${id} не существует`,
                });
            }
        });
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(book_schema_1.Book.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], BookService);
//# sourceMappingURL=book.service.js.map