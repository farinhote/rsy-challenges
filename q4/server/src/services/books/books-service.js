'use strict';

import fs from 'fs';
import path from 'path';

const BOOKS_FILE_PATH = path.resolve(__dirname, '../../../data/books.json');

function _readFile() {
  return fs.readFileSync(BOOKS_FILE_PATH, 'utf8');
}

export default class BooksService {
  static getAllBooks(request) {
    let booksList = JSON.parse(_readFile());
    const { page = 1 , pagesize = 5, filter = '' } = request.query;
    const firstIndex = (page-1) * pagesize;
    const lastIndex = page * pagesize;

    booksList.books.forEach(b => {
      b.cover = `${ request.server.info.uri }/images/${ b.cover }`;
    });

    if (filter) {
      const regex = RegExp(filter, 'gi');

      booksList.books = booksList.books.filter(item =>
        regex.test(item.title) || regex.test(item.synopsis)
      );

      booksList.meta.count = booksList.books.length;
    }
    booksList.books = booksList.books.slice(firstIndex, lastIndex);

    return JSON.stringify(booksList);
  }
}
