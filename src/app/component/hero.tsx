import React from 'react'
import Image from 'next/image'
 
const Hero = () => {
  return (
    <div className="w-[100%] h-auto mx-2 md:flex justify-between sm:mt-2 sm:mx-4">
        
      
        <Image
        className="w-[100%] sm:w-[100%] h-80 sm:h-[450px]"
        src={"/image/hero.jpg"}
        alt='hero'
        width={700}
        height={600}
        />
        <div className="bg-sky-300 flex justify-center items-center flex-col h-40 w-[100%]
                        sm:grid-row-3 sm:w-[100%] sm:h-auto sm:bg-sky-300 md:w-[50%]">

            <h1 className="w-64 text-2xl font-serif font-semibold sm:pt-6 sm:text-3xl sm:ml-6">Mighty Super Honey Cake</h1>

            <p className="text-sm sm:w-80 font-serif sm:text-center w-80 sm:mb-24">Look no further for a smooth classic Honey Cake recipe no one can deny
                is simple decadence.
            </p>
        </div>
    </div>
  )
}

export default Hero