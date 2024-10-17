"use client"
import Link from 'next/link'



const NavSlider= () => {
 
  return (
    <div className="text-orange w-[90%] bg-white">
        <nav>
            <ul className="ml-10">
                <Link className="p-1 hover:text-black sm:hidden" href={"/"}><li>Home</li></Link>
                <Link className="p-1 hover:text-black sm:hidden" href={"/product"}><li>Product</li></Link>
                <Link className="p-1 hover:text-black sm:hidden" href={"/categories"}><li>Categories</li></Link>
                <Link className="p-1 hover:text-black sm:hidden" href={"/contact"}><li>Contact</li></Link>
            </ul>
        </nav>
    </div>
  )
}

export default NavSlider