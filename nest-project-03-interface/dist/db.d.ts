import { iBook, iBookDto } from './books/book.abstract';
export declare class DB {
    private arr_books;
    getAllBooks(): Promise<Array<iBook> | null>;
    addBook(opt: iBookDto | null): Promise<iBook> | null;
}
