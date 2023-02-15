import Image from 'next/image'
import { Inter } from '@next/font/google'
import { prisma } from 'db/db.ts'

const getBooks = async () => {
  const allBooks = await prisma.book.findMany();

  // return [{ id: 1, title: "Buch1", ... }, { id: 2, title: "Buch2", ... }, ...];
  return allBooks;
}

export default async function Home() {
  const allBooks = await getBooks();

  return (
    <>
      <h1>Meine Bücher</h1>

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
