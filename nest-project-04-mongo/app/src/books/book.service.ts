import { Injectable } from '@nestjs/common';
import { iBook, iBookDto, iBookService } from './book.abstract';

import { Model } from 'mongoose';
import { Book, BookDocument } from './book.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BookService implements iBookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}
  getAllBooks(): Promise<iBook[] | null> {
    return new Promise(async (res) => {
      res(this.bookModel.find());
    });
  }
  createBook(bookDto: iBookDto): Promise<iBook> {
    return new Promise(async (res) => {
      const newBook = new this.bookModel(bookDto);
      await newBook.save();
      res(newBook);
    });
  }
}
