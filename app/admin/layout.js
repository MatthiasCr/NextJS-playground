"use client"
import BookComponent from "./bookComponent";
import { useState } from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function AdminLayout({ children }) {
  const [search, setSearch] = useState("");

  const { data, error } = useSWR('/api/books', fetcher)

  if (error) {
    var booksList = <div>Error loading books...</div>
  }

  if (!data) {
    var booksList = <div>Loading books...</div>
  } else {
    var booksList =
      data
        .filter((book) => {
          return book.title.toLowerCase() === '' ? book : book.title.toLowerCase().includes(search.toLowerCase())
        })
        .map((book) => (<BookComponent book={book} />))
  }
  return (
    <>
      <div className="px-10 w-full flex flex-row">

        {/* All Books Sidebar */}
        <div className="w-1/3 mr-10">
          <div className="
              block fixed inset-0 overflow-y-auto px-6  bg-white
              top-[8rem] 
              left-[max(0px,calc(50%-42.5rem))] 
              right-auto w-[27rem]">
            <nav className="lg:text-sm lg:leading-6 relative">
              <div className="sticky top-0 bg-white border-t-4 border-white">
                <input
                  className=" w-full h-10 my-2 p-3 bg-slate-100 border border-slate-300 rounded-sm focus:outline-sky-600"
                  placeholder="search for title..."
                  onChange={(e) => { setSearch(e.target.value) }}
                />
              </div>
              <ul className="flex flex-col grow space-y-3 ">
                {booksList}
              </ul>
            </nav>
          </div>
        </div>

        {/* inner page */}
        <div className="w-2/3 ml-10 mb-10 mt-[4rem] h-fit">
          {children}
        </div>
      </div>
    </>
  )
}

export default AdminLayout;