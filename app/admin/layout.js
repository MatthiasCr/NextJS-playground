import { getAllBooks } from "@/lib/cms/dbWrapper";
import BookComponent from "./bookComponent";


export const revalidate = 10;

async function AdminLayout({ children }) {

  const allBooks = await getAllBooks();

  return (
    <>
      <div className="px-10 pt-10 w-full flex flex-row">

        {/* All Books Sidebar */}
        <div className="w-1/3 mr-10">
          <div className="
              block fixed inset-0 overflow-y-auto
              top-[8rem] 
              left-[max(0px,calc(50%-42.5rem))] 
              right-auto w-[27rem]">
            <nav className="lg:text-sm lg:leading-6 relative">
              <h1 className="text-2xl  sticky top-0 bg-white">All Books:</h1>
              <ul className="flex flex-col grow space-y-3 ">
                {allBooks.map((book) => (
                  <BookComponent book={book} />
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* inner page */}
        <div className="w-2/3 ml-10 mb-10 h-fit">
          {children}
        </div>
      </div>
    </>
  )
}

export default AdminLayout;