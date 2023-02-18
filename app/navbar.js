import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className="bg-sky-700 shadow-2xl">
      <nav className="max-w-[90rem] mx-auto">
        <div className="flex flex-row text-blue-100 font-sans h-[4rem]">
          <div className="m-2 grow flex justify-center gap-x-4">
            <Link className="p-3 text-xl  hover:text-white" href="/">Home</Link>
            <Link className="p-3 text-xl  hover:text-white" href="#">Other</Link>
            <Link className="p-3 text-xl  hover:text-white" href="#">Cool</Link>
            <Link className="p-3 text-xl  hover:text-white" href="#">Stuff</Link>
          </div>
          <div className="m-auto grow-0 ">
            <Link className="p-3 text-sm hover:text-white" href="/admin">admin login</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar