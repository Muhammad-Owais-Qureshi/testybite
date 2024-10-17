import Image from "next/image"
import Popular from "./popular"
import { headingProps } from "@/types/componentProps"
const Categorie = (props:headingProps) => {
  return (
    <div>
        <Popular head="Product"/>
        <h1 className="text-4xl font-semibold my-5 font-serif">{props.head}</h1>
    <main className="grid grid-cols-3 w-[100%] sm:gap-14 sm:grid-cols-3 sm:w-[100%] md:grid md:grid-cols-6 md:w-[100%]">
        <div>
        <Image
        className="round h-[100px] xs:w-32 sm:w-40 md:w-28 lg:w-36"
        src={"/image/berry cake.jpg"}
        alt="cake"
        width={200}
        height={200}
        />
        <p className="mt-3 font-semibold text-center">Cake</p>
        </div>
        <div className="">
         <Image
           className="round h-[100px] xs:w-32 sm:w-40 md:w-28 lg:w-36"
           src={"/image/biscuit.jpg"}
           alt='biscuit'
           width={300}
           height={200}
        />
        <p className="mt-3 font-semibold text-center">Berry Biscuit</p>
         </div>
        <div className="">
         <Image
           className="round h-[100px] xs:w-32 sm:w-40 md:w-28 lg:w-36"
           src={"/image/salmon.jpg"}
           alt='salmon'
           width={300}
           height={200}
        />
        <p className="mt-3 font-semibold text-center">Sea Food</p>
         </div>
        <div className="">
         <Image
           className="round h-[100px] xs:w-32 sm:w-40 md:w-28 lg:w-36"
           src={"/image/burger.jpg"}
           alt='burger'
           width={300}
           height={200}
        />
        <p className="mt-3 font-semibold text-center">Burger</p>
         </div>
        <div className="">
         <Image
           className="round h-[100px] xs:w-32 sm:w-40 md:w-28 lg:w-36"
           src={"/image/rice.jpg"}
           alt='rice'
           width={300}
           height={200}
        />
        <p className="mt-3 font-semibold text-center">Beef Rice</p>
         </div>
        <div className="">
         <Image
           className="round h-[100px] xs:w-32 sm:w-40 md:w-28 lg:w-36"
           src={"/image/strawberry.jpg"}
           alt='strawberry'
           width={300}
           height={200}
        />
        <p className="mt-3 font-semibold text-center">Shaks</p>
         </div>
    </main>
    </div>
  )
}

export default Categorie