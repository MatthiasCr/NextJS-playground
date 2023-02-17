'use client'
import React from 'react'
import Link from 'next/link'
import { adminBookPath, editBookPath } from '@/lib/routingHelpers'
import { usePathname } from "next/navigation";

function Book_component({ book }) {

  const pathname = usePathname();

  const selected = pathname === adminBookPath(book.id) || pathname === editBookPath(book.id);

  return (
    <>
      <Link href={adminBookPath(book.id)}>
        <li key={book.id} id={book.id} className={`${selected ? "bg-slate-200" : "bg-slate-50 hover:bg-slate-200"} truncate shadow-md  rounded-md p-2`}>
          <b>{book.title}</b>
          <br />
          Author: {book.author}
          <br />
          About: {book.description}
        </li>
      </Link>
    </>
  )
}

export default Book_component