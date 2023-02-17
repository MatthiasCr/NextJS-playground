import React from 'react'
import { getAllBooks, getBook } from '@lib/cms/dbWrapper'
import Link from 'next/link';

export default async function Home() {
  const allBooks = await getAllBooks();
  const book1 = await getBook(1);

  return (
    <>
      <h1>My Books</h1>
      <ul>
        {allBooks.map(({ id, title, author, description }) => (
          <li key={id}>
            ID: {id}
            <br />
            Title: {title}
            <br />
            Author: {author}
            <br />
            About: {description}
          </li>
        ))}
      </ul>
    </>
  )
}
