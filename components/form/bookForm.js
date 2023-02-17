'use client'
import React from 'react'
import { useState, useEffect } from 'react'


function BookForm({ oldBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (oldBook != null) {
      setTitle(oldBook.title);
      setAuthor(oldBook.author);
      setDescription(oldBook.description);
    }
  }, []);

  if (oldBook != null) {
    var method = "PATCH"
    var endpoint = `/api/books/${oldBook.id}`
  } else {
    var method = "POST"
    var endpoint = `/api/books`
  }

  async function handleSubmit(e) {
    const newBook = {
      title: title,
      author: author,
      description: description,
    };

    e.preventDefault();
    const res = await fetch(
      endpoint,
      {
        body: JSON.stringify(newBook),
        method: method,
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <br />
      <textarea
        type="text"
        id="title"
        value={title}
        onChange={(e) => { setTitle(e.target.value) }}
        className="w-full boder bg-slate-100 border  border-slate-300 text-xl rounded-md focus:outline-sky-600"
        required
      />
      <br />
      <label htmlFor="last">Author</label>
      <br />
      <textarea
        type="text"
        id="author"
        value={author}
        onChange={(e) => { setAuthor(e.target.value) }}
        className="w-full boder bg-slate-100 border border-slate-300 text-xl rounded-md focus:outline-sky-600"

      />
      <br />
      <label htmlFor="last">Description</label>
      <br />
      <textarea
        type="text"
        id="author"
        value={description}
        onChange={(e) => { setDescription(e.target.value) }}
        className="w-full boder bg-slate-100 border border-slate-300 text-xl rounded-md focus:outline-sky-600"

      />
      <button className="btn btn-primary" type="submit">Publish</button>
    </form>

  )
}

export default BookForm