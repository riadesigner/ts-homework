import { iBookService, iBookDto } from './book.abstract';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: iBookService);
    getAllBooks(): Promise<string>;
    getBookById(id: string): Promise<string>;
    createBook(bookDto: iBookDto): Promise<import("./book.abstract").Answer>;
    updateBook(id: string, bookDto: iBookDto): Promise<import("./book.abstract").Answer>;
    deleteBook(id: string): Promise<import("./book.abstract").Answer>;
}
