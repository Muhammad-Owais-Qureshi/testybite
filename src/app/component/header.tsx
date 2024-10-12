import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex justify-evenly items-center text-xl font-semibold
             w-full opacity-80 text-orange-600 bg-white h-14">
      <h1 className="text-2xl font-extrabold">Testybite</h1>
        <nav >
            <ul className="flex justify-center gap-5 ">
               <Link className="hover:scale-105 " href={"/"}> <li>Home</li></Link>
                <Link className="hover:scale-105" href={"/product"}><li>Product</li></Link>
                <Link className="hover:scale-105" href={"/categories"}><li>Categories</li></Link>
                <Link className="hover:scale-105" href={"/contact"}><li>Contact</li></Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header