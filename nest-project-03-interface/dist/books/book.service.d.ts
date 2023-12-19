import { iBook, iBookDto, iBookService } from './book.abstract';
import { DB } from '../db';
export declare class Book implements iBook {
    title: string;
    description: string;
    authors: string;
    favorite: string;
    fileCover: string;
    fileName: string;
    fileBook: string;
    constructor(title?: string, description?: string, authors?: string, favorite?: string, fileCover?: string, fileName?: string, fileBook?: string);
}
export declare class BookService implements iBookService {
    db: DB;
    constructor(db: DB);
    getAllBooks(): Promise<iBook[] | null>;
    createBook(bookDto: iBookDto): Promise<iBook>;
}
