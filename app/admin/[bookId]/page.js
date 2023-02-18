import React from 'react'
import { getAllBooks, getBook } from '@/lib/cms/dbWrapper';
import { notFound } from 'next/navigation'
import Link from 'next/link';
import { editBookPath } from '@/lib/routingHelpers';

async function Edit({ params: { bookId } }) {
  const book = await getBook(Number(bookId))

  if (!book) {
    return notFound();
  }

  return (
    <>
      <h1 className="my-5 text-2xl">Book:</h1>
      <div className="my-5">
        {book.title}
      </div>
      <div className="my-5">
        {book.description}
      </div>
      <Link className="btn btn-primary" href={editBookPath(bookId)}>
        Edit
      </Link>
    </>
  )
}

export default Edit

export async function generateStaticParams() {
  const allBooks = await getAllBooks();
  return allBooks.map((book) => ({
    bookId: book.id.toString()
  }));
}