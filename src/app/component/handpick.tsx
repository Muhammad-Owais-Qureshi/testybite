import React from 'react'
import Img from './img'
import Heading from './heading'

const Handpick = () => {
  return (
    <div>
        <h1 className="text-4xl font-semibold my-5 font-serif"><Heading head = " Hand-Pickd Collections"/></h1>
       
        <div className="grid grid-cols-2">

        <div className="rounded-md pb-5">
        <Img src='/image/bun.jpg' alt='bun' width={600} height={200}/>
        <h1 className="text-2xl font-semibold my-5 font-serif pl-4">Everything bagel</h1>
        <button className="text-white ml-8 bg-orange-600 p-3 rounded-3xl font-bold hover:bg-yellow-500">Add to cart</button>
        </div>

        <div className="rounded-md pb-5">
        <Img src='/image/shushi.jpg' alt='shushi' width={600} height={200}/>
        <h1 className="text-2xl font-semibold my-5 font-serif pl-4">Shushi for your next Party</h1>
        <button className="text-white ml-8 bg-orange-600 p-3 rounded-3xl font-bold hover:bg-yellow-500">Add to cart</button>
        </div>

        <div className="rounded-md pb-5">
        <Img src='/image/dineer.jpg' alt='dinner' width={600} height={200}/>
        <h1 className="text-2xl font-semibold my-5 font-serif pl-4">Dinner Idea</h1>
        <button className="text-white ml-8 bg-orange-600 p-3 rounded-3xl font-bold hover:bg-yellow-500">Add to cart</button>
        </div>

        <div className="rounded-md pb-5">
        <Img src='/image/chef2.jpg' alt='chefk' width={600} height={200}/>
        <h1 className="text-2xl font-semibold my-5 font-serif pl-4">Cook like a Chef</h1>
        <button className="text-white ml-8 bg-orange-600 p-3 rounded-3xl font-bold hover:bg-yellow-500">Add to cart</button>
        </div>

        </div>

    </div>
  )
}

export default Handpick