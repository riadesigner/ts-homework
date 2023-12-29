declare abstract class iBook {
    title: string;
    description?: string;
    authors?: string;
    favorite?: string;
    fileCover?: string;
    fileName?: string;
    fileBook?: string;
}
interface iBookDto {
    title: string;
    description?: string;
    authors?: string;
    favorite?: string;
    fileCover?: string;
    fileName?: string;
    fileBook?: string;
}
type Answer = {
    error: boolean;
    data: iBook | string;
};
declare abstract class iBookService {
    abstract getAllBooks(): Promise<iBook[] | null>;
    abstract getBookById(id: string): Promise<iBook | null>;
    abstract createBook(bookDto: iBookDto | null): Promise<Answer | null>;
    abstract deleteBookById(id: string): Promise<Answer | null>;
    abstract updateBookById(id: string, bookDto: iBookDto): Promise<Answer | null>;
}
export { iBook, iBookDto, iBookService, Answer };
