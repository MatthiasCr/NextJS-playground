import React from 'react'
import { getAllBooks, getBook } from '@/lib/cms/dbWrapper';
import { notFound } from 'next/navigation'
import BookForm from '@/components/form/bookForm';
import { adminPath } from '@/lib/routingHelpers';
import Link from 'next/link';

async function Edit({ params: { bookId } }) {

  const book = await getBook(Number(bookId))

  if (!book) {
    return notFound();
  }

  return (
    <>
      <h1 className="my-5 text-2xl">Edit Book:</h1>
      <BookForm oldBook={book} />
      <Link className="btn btn-secondary" href={adminPath()}>back to dashbord</Link>
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