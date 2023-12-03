"use strict";
class bookClass {
    constructor(title, description, authors, favorite = null, fileCover = null, fileName = null) {
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
    }
}
