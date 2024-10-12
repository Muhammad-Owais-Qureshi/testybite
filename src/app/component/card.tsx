import React from 'react'
import Image from 'next/image'
import Heading from './heading';
import { RiStarSFill } from "react-icons/ri";
const Card = () => {
  return (
    <div>
       <h1 className="text-4xl font-semibold my-5 font-serif"><Heading head = "Super Delicious"/></h1>
      
        <div className="flex justify-between xs:grid grid-cols-3 gap-4">
        <div>
            <Image
            className="h-[300px] w-[400px]"
            src={"/image/noodels.jpg"}
            alt='noodels'
            width={300}
            height={200}
            />
             <p className="font-bold mt-5">Chesse Noodels</p>
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
            className="h-[300px] w-[400px]"
            src={"/image/donut.jpg"}
            alt='donut'
            width={300}
            height={200}
            />
              
               <p className="font-bold mt-5">Chocolate Donut</p>
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
            className="h-[300px] w-[400px]"
            src={"/image/burger.jpg"}
            alt='burger'
            width={300}
            height={200}
            />
              <p className="font-bold mt-5">Cheese Buger</p>
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

export default Card