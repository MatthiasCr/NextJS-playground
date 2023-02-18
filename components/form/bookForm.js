'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { TextSmall, TextLarge, Input } from 'components/form/formComponents'


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
      <TextSmall attribute="title" label="Title" state={title} setState={setTitle} />
      <TextSmall attribute="author" label="Author" state={author} setState={setAuthor} />
      <TextLarge attribute="description" label="Description" state={description} setState={setDescription} />
      <TextLarge attribute="description" label="Description" state={description} setState={setDescription} />
      <TextLarge attribute="description" label="Description" state={description} setState={setDescription} />
      <TextLarge attribute="description" label="Description" state={description} setState={setDescription} />
      <TextLarge attribute="description" label="Description" state={description} setState={setDescription} />

      <button className="btn btn-primary" type="submit">{`Publish ${oldBook != null ? "changes" : "book"}`}</button>
    </form >
  )
}

export default BookForm