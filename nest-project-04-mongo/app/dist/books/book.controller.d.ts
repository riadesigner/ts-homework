import { iBookService } from './book.abstract';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: iBookService);
    getAllBooks(): Promise<string>;
}
