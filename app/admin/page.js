import React from 'react'
import Link from 'next/link';

function Admin() {
  return (
    <>
      <h1 className="mt-5 mb-5 text-2xl">
        This is admin dashbord
      </h1>
      <p className="text-lg">Manage your books here!</p>
      <Link href="/admin/new">New Book</Link>
    </>
  )
}

export default Admin;