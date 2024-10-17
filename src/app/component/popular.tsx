import React from 'react'
import Image from 'next/image'
import { headingProps } from '@/types/componentProps'

const Popular = (props:headingProps) => {
  return (
    <div>
       <h1 className="text-4xl font-semibold my-5 font-serif">
        {props.head}
        </h1>
         
    <div className="grid grid-cols-3 w-[100%] sm:grid sm:grid-cols-3 sm:w-[100%] md:grid md:grid-cols-6 lg:gap-1 md:w-[100%]">

         <div className="w-48">
         <Image
           className="round h-[100px] xs:w-32 sm:w-40 md:w-28 lg:w-36"
           src={"/image/pasta.jpg"}
           alt='noodels'
           width={300}
           height={200}
        />
        <p className="mt-3 pr-10 font-semibold text-center">Pasta</p>
        
         </div>
         <div className="w-48">
         <Image
           className="round h-[100px] xs:w-32 sm:w-40  w-40 md:w-28 lg:w-36"
           src={"/image/pizza.jpg"}
           alt='noodels'
           width={300}
           height={200}
        />
        <p className="mt-3 pr-10 font-semibold text-center">Pizza</p>
         </div>

         <div className="w-48">
         <Image
           className="round h-[100px] xs:w-32 sm:w-40 md:w-28 lg:w-36"
           src={"/image/vegan.jpg"}
           alt='noodels'
           width={300}
           height={200}
        />
        <p className="mt-3 pr-10 font-semibold text-center">Vagan</p>

         </div>
         <div className="w-48">
         <Image
           className="round h-[100px] xs:w-32 sm:w-40 md:w-28 lg:w-36"
           src={"/image/dessert.jpg"}
           alt='noodels'
           width={300}
           height={200}
        />
        <p className="mt-3 pr-10 font-semibold text-center">Desserts</p>

         </div>
         <div className="w-48">
         <Image
           className="round h-[100px] xs:w-32 sm:w-40  md:w-28 lg:w-36"
           src={"/image/smoote.jpg"}
           alt='noodels'
           width={300}
           height={200}
        />
        <p className="mt-3 pr-10 font-semibold text-center md:pl-10">Smoothies</p>

         </div>
         <div className="w-48">
         <Image
           className="round h-[100px] xs:w-32 sm:w-40  md:w-28 lg:w-36"
           src={"/image/breakfast.jpg"}
           alt='noodels'
           width={300}
           height={200}
        />
        <p className="mt-3 pr-10 font-semibold text-center md:pl-10">Breakfast</p>

         </div>
     </div>
    </div>
  )
}

export default Popular