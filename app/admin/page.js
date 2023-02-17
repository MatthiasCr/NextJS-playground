import React from 'react'
import Link from 'next/link';
import { newBookPath } from '@/lib/routingHelpers';

function Admin() {
  return (
    <>
      <h1 className="mt-5 mb-5 text-2xl">
        This is admin dashbord
      </h1>
      <p className="mb-5 text-lg">Manage your books here!</p>
      <Link className="btn btn-primary" href={newBookPath()}>New Book</Link>
    </>
  )
}

export default Admin;