import React from 'react';
import Book from './Book';
import { Typography } from '@material-ui/core';

export default function SearchContent({ books }) {

  const listOfBooks = books.map(book =>
    <Book key={book.isbn13} book={book} />
  );

  return (
    <div style={{ margin: '30px auto', width: 'fit-content' }}>
      {books.length
          ? listOfBooks
          : <Typography>{`No books found ¯\\_(ツ)_/¯`}</Typography>}
    </div>
  )
}
