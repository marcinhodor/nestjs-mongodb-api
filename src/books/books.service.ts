import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import { Model } from 'mongoose';
import { UpdateBookDto } from './dto/update-book.dto';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name)
    private readonly bookModel: Model<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    const books = await this.bookModel.find().exec();
    return books;
  }

  async findOne(id: string): Promise<Book> {
    const book = await this.bookModel.findById(id).exec();
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = await this.bookModel.create(createBookDto);
    return createdBook;
  }

  async update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    const newBook = await this.bookModel
      .findByIdAndUpdate(id, updateBookDto, {
        new: true,
        runValidators: true,
      })
      .exec();

    if (!newBook) throw new NotFoundException('Book not found');

    return newBook;
  }

  async delete(id: string): Promise<Book> {
    const deletedBook = await this.bookModel
      .findByIdAndDelete(id, { new: true })
      .exec();

    if (!deletedBook) throw new NotFoundException('Book not found');

    return deletedBook;
  }
}
