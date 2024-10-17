import React from 'react'
import Image from 'next/image'
import { headingProps } from '@/types/componentProps'

const Popular = (props:headingProps) => {
  return (
    <div>
       <h1 className="text-4xl font-semibold my-5 font-serif">
        {props.head}
        </h1>
         
    <div className="grid grid-cols-3 gap-28 w-[60%] sm:grid sm:grid-cols-5 sm:gap-14 sm:w-[80%] md:grid md:grid-cols-6 md:gap-10 md:w-[100%]">

         <div className="w-48">
         <Image
           className="round h-[100px] w-[100px]"
           src={"/image/pasta.jpg"}
           alt='noodels'
           width={300}
           height={200}
        />
        <p className="mt-3 mr-20 font-semibold text-center">Pasta</p>
        
         </div>
         <div className="w-48">
         <Image
           className="round h-[100px] w-[100px]"
           src={"/image/pizza.jpg"}
           alt='noodels'
           width={300}
           height={200}
        />
        <p className="mt-3 mr-20 font-semibold text-center">Pizza</p>
         </div>

         <div className="w-48">
         <Image
           className="round h-[100px] w-[100px]"
           src={"/image/vegan.jpg"}
           alt='noodels'
           width={300}
           height={200}
        />
        <p className="mt-3 mr-20 font-semibold text-center">Vagan</p>

         </div>
         <div className="w-48">
         <Image
           className="round h-[100px] w-[100px]"
           src={"/image/dessert.jpg"}
           alt='noodels'
           width={300}
           height={200}
        />
        <p className="mt-3 mr-20 font-semibold text-center">Desserts</p>

         </div>
         <div className="w-48">
         <Image
           className="round h-[100px] w-[100px]"
           src={"/image/smoote.jpg"}
           alt='noodels'
           width={300}
           height={200}
        />
        <p className="mt-3 mr-20 font-semibold text-center">Smoothies</p>

         </div>
         <div className="w-48">
         <Image
           className="round h-[100px] w-[100px]"
           src={"/image/breakfast.jpg"}
           alt='noodels'
           width={300}
           height={200}
        />
        <p className="mt-3 mr-20 font-semibold text-center">Breakfast</p>

         </div>
     </div>
    </div>
  )
}

export default Popular