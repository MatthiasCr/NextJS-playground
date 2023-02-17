import Link from 'next/link';
import React from 'react';
import BookForm from '@/components/form/bookForm';
import { adminPath } from '@/lib/routingHelpers';


function New() {


    return (
        <>
            <h1 className="my-5 text-2xl">Create new Book:</h1>
            <BookForm />
            <Link className="btn btn-secondary" href={adminPath()}>back to dashbord</Link>
        </>
    )
};

export default New