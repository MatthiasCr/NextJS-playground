import React from 'react'
import Link from 'next/link'

function Admin() {
    return (
        <>
            <h1>
                This is admin dashbord
            </h1>
            <Link href={"/admin/new"}>new Book</Link>
        </>
    )
}

export default Admin