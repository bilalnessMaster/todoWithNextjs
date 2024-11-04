import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="container mx-auto mt-24 w-full md:w-1/3 lg:w-1/2 text-xl  px-3 lg:text-3xl flex justify-between items-center">
    <h1 className="lg:text-3xl text-2xl font-medium ">Todos</h1>

    <Link href={'/createtodo'}><i className="ri-add-box-line"></i></Link>
    </header>
  )
}

export default Navbar