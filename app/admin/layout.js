import { getAllBooks } from "@/lib/cms/dbWrapper";
import Book_component from "./book_component";

export const revalidate = 10;

async function AdminLayout({ children }) {

  const allBooks = await getAllBooks();

  return (
    <>
      <div className="px-10 pt-10 w-full flex flex-row">

        {/* All Books Sidebar */}
        <div className="w-1/3 mr-10 ">
          <h1 className="mt-5 mb-5 text-2xl">All Books:</h1>
          <ul className="flex flex-col grow space-y-3 ">
            {allBooks.map((book) => (
              <Book_component book={book}></Book_component>
            ))}
          </ul>
        </div>

        {/* inner page */}
        <div className="w-2/3 ml-10">
          {children}
        </div>
      </div>
    </>
  )
}

export default AdminLayout;