import React from 'react'
import { getAllBooks } from 'lib/cms/dbWrapper'
import Link from 'next/link';

export default async function Home() {
  const allBooks = await getAllBooks();

  return (
    <>
      <h1>This is homepage</h1>
    </>
  )
}
