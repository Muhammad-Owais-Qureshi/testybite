import React from 'react'
import Image from 'next/image'
import Heading from './heading';
import { RiStarSFill } from "react-icons/ri";

const Smothcard = () => {
  return (
    <div>
   <h1 className="text-4xl font-semibold my-5 font-serif"><Heading head = "Sweet Tooth"/></h1>
   
    <div className="flex justify-between gap-4">
    <div>
        <Image
        className="h-40 lg:h-[300px] lg:w-[400px]"
        src={"/image/strawberry.jpg"}
        alt='noodels'
        width={300}
        height={200}
        />
         <p className="font-bold mt-5">Strawberry Milkshak</p>
         <div className="flex flex-row text-orange-500">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          </div>

          <div>
        <Image
        className="h-40 lg:h-[300px] lg:w-[400px]"
        src={"/image/chocolate.jpg"}
        alt='donut'
        width={300}
        height={200}
        />
          
           <p className="font-bold mt-5">Chocolate Shake</p>
           <div className="flex flex-row text-orange-500">
           <RiStarSFill />
           <RiStarSFill />
           <RiStarSFill />
           <RiStarSFill />
           <RiStarSFill />
           </div>
          </div>

          <div>
        <Image
        className="h-40 lg:h-[300px] lg:w-[400px]"
        src={"/image/biscuit.jpg"}
        alt='burger'
        width={300}
        height={200}
        />
          <p className="font-bold mt-5">Berry Biscuit</p>
          <div className="flex flex-row text-orange-500">
           <RiStarSFill />
           <RiStarSFill />
           <RiStarSFill />
           <RiStarSFill />
           <RiStarSFill />
           </div>
          </div>
    </div>


</div>
  )
}

export default Smothcard