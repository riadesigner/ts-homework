"use strict";
class aBooksRepository {
    // создание книги        
    createBook(book) { return book; }
    // получение книги по id    
    getBook(id) { return; }
    //получение всех книг    
    getBooks() { return []; }
    // обновление книги.
    updateBook(id) { return; }
    // удаление книги
    deleteBook(id) { return Math.random() > 0.5 ? true : false; }
}
class BooksRepository extends aBooksRepository {
    constructor() {
        super();
    }
}
class Book {
    constructor(title, description, authors, favorite = null, fileCover = null, fileName = null) {
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
    }
}
