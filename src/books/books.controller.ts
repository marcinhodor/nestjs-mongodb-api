import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ParamsDto } from './dto/params.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params: ParamsDto): Promise<Book> {
    return this.booksService.findOne(params.id);
  }

  @Post()
  async create(
    @Body(ValidationPipe)
    createBookDto: CreateBookDto,
  ): Promise<Book> {
    return this.booksService.create(createBookDto);
  }

  @Patch(':id')
  async update(
    @Param()
    params: ParamsDto,
    @Body(ValidationPipe)
    updateBookDto: UpdateBookDto,
  ): Promise<Book> {
    return this.booksService.update(params.id, updateBookDto);
  }

  @Delete(':id')
  async delete(
    @Param()
    params: ParamsDto,
  ): Promise<Book> {
    return this.booksService.delete(params.id);
  }
}
