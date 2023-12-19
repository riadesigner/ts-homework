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
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const book_abstract_1 = require("./book.abstract");
let BookController = class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    async getAllBooks() {
        const all = await this.bookService.getAllBooks();
        await this.bookService.createBook({ title: `Книга ${all.length}` });
        const books = await this.bookService.getAllBooks();
        return JSON.stringify(books);
    }
};
exports.BookController = BookController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getAllBooks", null);
exports.BookController = BookController = __decorate([
    (0, common_1.Controller)('books'),
    __param(0, (0, common_1.Inject)('iBookService')),
    __metadata("design:paramtypes", [book_abstract_1.iBookService])
], BookController);
//# sourceMappingURL=book.controller.js.map