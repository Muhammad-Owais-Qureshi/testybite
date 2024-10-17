"use client"
import Link from 'next/link'
import NavSlider from './navSlider';
import { RxHamburgerMenu , RxCross2 } from "react-icons/rx";
import { useState } from 'react';

const Header:React.FC = () => {
  const [nav, setNav] = useState<boolean>(false)

  return (
    <header className="font-semibold w-auto bg-white sm:sticky sm:top-0 sm:z-10 sm:flex justify-between items-center 
                       sm:text-xl sm:font-semibold
                       sm:w-[100%] sm:opacity-75 h-14 ">
      <h1 className="pt-1 text-2xl text-black cursor-pointer ml-10 font-extrabold italic">Testybite</h1>
        <nav>
            <ul className=" sm:flex justify-between items-center sm:gap-5 sm:mr-14">

                <Link className="hidden hover:scale-105 hover:text-orange-600 sm:block" href={"/"}><li>Home</li></Link>
                <Link className="hidden hover:scale-105 hover:text-orange-600 sm:block" href={"/product"}><li>Product</li></Link>
                <Link className="hidden hover:scale-105 hover:text-orange-600 sm:block" href={"/categories"}><li>Categories</li></Link>
                <Link className="hidden hover:scale-105 hover:text-orange-600 sm:block" href={"/contact"}><li>Contact</li></Link>
                
                <button onClick={() => setNav(!nav) } className="hover:scale-105 bottom-5 text-black font-extrabold ml-7 mt-1 sm:hidden">
                  
                  {nav ? <RxCross2 /> : <RxHamburgerMenu />}

                </button>
                  {nav && <NavSlider />}
            </ul>
            
        </nav>
    </header>
  )
}

export default Header