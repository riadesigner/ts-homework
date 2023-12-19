declare abstract class iBook {
    title?: string;
    description?: string;
    authors?: string;
    favorite?: string;
    fileCover?: string;
    fileName?: string;
    fileBook?: string;
}
interface iBookDto {
    title?: string;
    description?: string;
    authors?: string;
    favorite?: string;
    fileCover?: string;
    fileName?: string;
    fileBook?: string;
}
declare abstract class iBookService {
    abstract createBook(bookDto: iBookDto | null): Promise<iBook | null>;
    abstract getAllBooks(): Promise<iBook[] | null>;
}
export { iBook, iBookDto, iBookService };
