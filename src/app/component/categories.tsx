import Image from "next/image"
import Popular from "./popular"
import { headingProps } from "@/types/componentProps"
const Categorie = (props:headingProps) => {
  return (
    <div>
        <Popular head="Product"/>
        <h1 className="text-4xl font-semibold my-5 font-serif">{props.head}</h1>
    <main className="flex flex-row justify-between mt-4">
        <div>
        <Image
        className="round h-[150px] w-[200px]"
        src={"/image/berry cake.jpg"}
        alt="cake"
        width={200}
        height={200}
        />
        <p className="mt-3 font-semibold text-center">Cake</p>
        </div>
        <div className="">
         <Image
           className="round h-[150px] w-[200px]"
           src={"/image/biscuit.jpg"}
           alt='biscuit'
           width={300}
           height={200}
        />
        <p className="mt-3 font-semibold text-center">Berry Biscuit</p>
         </div>
        <div className="">
         <Image
           className="round h-[150px] w-[200px]"
           src={"/image/salmon.jpg"}
           alt='salmon'
           width={300}
           height={200}
        />
        <p className="mt-3 font-semibold text-center">Sea Food</p>
         </div>
        <div className="">
         <Image
           className="round h-[150px] w-[200px]"
           src={"/image/burger.jpg"}
           alt='burger'
           width={300}
           height={200}
        />
        <p className="mt-3 font-semibold text-center">Burger</p>
         </div>
        <div className="">
         <Image
           className="round h-[150px] w-[200px]"
           src={"/image/rice.jpg"}
           alt='rice'
           width={300}
           height={200}
        />
        <p className="mt-3 font-semibold text-center">Beef Rice</p>
         </div>
        <div className="">
         <Image
           className="round h-[150px] w-[200px]"
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