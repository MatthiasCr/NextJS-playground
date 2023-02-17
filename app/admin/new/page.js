'use client'
import Link from 'next/link';
import React from 'react';
import { useState } from 'react'

function New() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");


    async function handleSubmit(e) {
        const newBook = {
            title: title,
            author: author,
            description: description,
        };

        e.preventDefault();
        const res = await fetch(
            '/api/books',
            {
                body: JSON.stringify(newBook),
                method: 'POST',
            });
    }

    return (
        <>
            <h1 className="mt-5 mb-5 text-2xl">
                Create new Book:
            </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <br />
                <input
                    type="text"
                    id="title"
                    onChange={(e) => { setTitle(e.target.value) }}
                    required
                />
                <br />
                <label htmlFor="last">Author</label>
                <br />
                <input
                    type="text"
                    id="author"
                    onChange={(e) => { setAuthor(e.target.value) }}

                />
                <br />
                <label htmlFor="last">Description</label>
                <br />
                <textarea
                    type="text"
                    id="author"
                    onChange={(e) => { setDescription(e.target.value) }}

                />
                <br />
                <button type="submit">Publish</button>
            </form>


            <Link href={"/admin"}>back to dashbord</Link>
        </>
    )
};

export default New