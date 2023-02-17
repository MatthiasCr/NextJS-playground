import { getAllBooks } from "@/lib/cms/dbWrapper";

async function AdminLayout({ children }) {
  const allBooks = await getAllBooks();

  return (
    <>
      <div className="m-10 container flex flex-row">
        <div className="w-1/3">
          <h1 className="mt-5 mb-5 text-2xl">All Books:</h1>
          <ul>
            {allBooks.map(({ id, title, author, description }) => (
              <li key={id} className="truncate">
                ID: {id}
                <br />
                Title: {title}
                <br />
                Author: {author}
                <br />
                About: {description}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/3">
          {children}
        </div>
      </div>
    </>
  )
}

export default AdminLayout;