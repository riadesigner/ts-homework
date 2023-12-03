interface Book {
    title:string;
    description:string;
    authors:string;
    favorite?:string|null;
    fileCover?:string|null;
    fileName?:string|null;
}

class bookClass implements Book {
    title:string;
    description:string;
    authors:string;
    favorite:string|null;
    fileCover:string|null;
    fileName:string|null;
    constructor(
        title:string,
        description:string,
        authors:string,
        favorite:string|null=null,
        fileCover:string|null=null,
        fileName:string|null=null){
            this.title = title;
            this.description = description;
            this.authors = authors;
            this.favorite = favorite;
            this.fileCover = fileCover;
            this.fileName = fileName;
    }
}

