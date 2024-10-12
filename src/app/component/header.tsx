import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex justify-between items-center text-xl font-semibold
             w-[100vw] opacity-80 text-black-600 bg-white h-14 ">
      <h1 className="text-2xl ml-10 font-extrabold hover:scale-105 hover:text-orange-600 ">Testybite</h1>
        <nav>
            <ul className="flex justify-center gap-5 mr-14">
               <Link className="hover:scale-105 hover:text-orange-600 md:hidden" href={"/"}><li>Home</li></Link>
                <Link className="hover:scale-105 hover:text-orange-600" href={"/product"}><li>Product</li></Link>
                <Link className="hover:scale-105 hover:text-orange-600" href={"/categories"}><li>Categories</li></Link>
                <Link className="hover:scale-105 hover:text-orange-600" href={"/contact"}><li>Contact</li></Link>
                <li className="hover:scale-105 hover:text-orange-600 font-semibold mt-1" ><RxHamburgerMenu /></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header