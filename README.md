<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" /></a>
</p>

## Description

### Nest.js + MongoDB RESTful API with basic CRUD operations.

Database consists of 'books' collection based on the following schema:

```javascript
class Book {
  title: string;
  author: string;
  price: number;
  category: 'Adventure' | 'Classic' | 'Crime' | 'Fantasy';
}
```

## Features

API exposes the following routes and executes corresponding methods:

- GET books/ - findAll
- GET books/:id - findOne
- POST books/ - create
- PATCH books/:id & body - update
- DELETE books/:id - delete

In addition:

- Validation of incoming requests (params + body)
- Error handling
- Clear responses

## References

Articles and documentation:

- Nest.js docs - [Link](https://docs.nestjs.com/)

YouTube videos by:

- Code With Abbas - Build Complete REST API in NestJs #1 - with TypeScript & MongoDB - [Link](https://www.youtube.com/watch?v=4oLUddZVL80)
- Dave Gray - NestJS Tutorials for Beginners - [Link](https://www.youtube.com/playlist?list=PL0Zuz27SZ-6MexSAh5x1R3rU6Mg2zYBVr)

## Author

Marcin Hodor - mhodor@o2.pl
