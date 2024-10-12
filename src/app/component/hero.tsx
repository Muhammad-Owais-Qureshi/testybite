import React from 'react'
import Image from 'next/image'
 
const Hero = () => {
  return (
    <div className="flex justify-between">
        <Image
        className="w-[960px] h-[450px]"
        src={"/image/hero.jpg"}
        alt='hero'
        width={700}
        height={600}
        />
        <div className="flex justify-center flex-col items-center w-[350px] text-sm bg-orange-700  text-white">

            <h1 className="ml-6 w-full text-3xl font-serif font-semibold">Super Honey Cake</h1>

            <p className="w-80 font-serif">Look no further for a smooth classic Honey Cake recipe no one can deny
                is simple decadence.
            </p>
        </div>
    </div>
  )
}

export default Hero