import Img from "./img"
import Heading from "./heading"
const Latest = () => {
  return (
    <div>
        <h1 className="text-4xl font-semibold my-5 font-serif"><Heading head = "Latest Product"/></h1>
        

        <div className="grid grid-cols-4 gap-3">

         <div className="rounded-md pb-5">
         <Img src='/image/apple.jpg' alt='apple' width={400} height={200}/>
         <h1 className="text-3xl font-semibold my-5 font-serif pl-4">Apple juice</h1>
         </div>

         <div className="rounded-md pb-5">
         <Img src='/image/rice.jpg' alt='rice' width={400} height={200}/>
         <h1 className="text-3xl font-semibold my-5 font-serif pl-4">Beef with Rice</h1>
         </div>

         <div className="rounded-md pb-5">
         <Img src='/image/berry.jpg' alt='berry' width={400} height={200}/>
         <h1 className="text-3xl font-semibold my-5 font-serif pl-4">Blueberry Cake</h1>
         </div>

         <div className="rounded-md pb-5">
         <Img src='/image/breakfast.jpg' alt='break' width={400} height={200}/>
         <h1 className="text-3xl font-semibold my-5 font-serif pl-4">Healty Breakfast</h1>
         </div>

         <div className="rounded-md pb-5">
         <Img src='/image/salad.jpg' alt='salad' width={400} height={200}/>
         <h1 className="text-3xl font-semibold my-5 font-serif pl-4">Healty Salad</h1>
         </div>

         <div className="rounded-md pb-5">
         <Img src='/image/salmon.jpg' alt='salmon' width={400} height={200}/>
         <h1 className="text-3xl font-semibold my-5 font-serif pl-4">Salmon Curry</h1>
         </div>

         <div className="rounded-md pb-5">
         <Img src='/image/vegan.jpg' alt='vegan' width={400} height={200}/>
         <h1 className="text-3xl font-semibold my-5 font-serif pl-4">Veg Food</h1>
         </div>

         <div className="rounded-md pb-5">
         <Img src='/image/pasta.jpg' alt='pasta' width={400} height={200}/>
         <h1 className="text-3xl font-semibold my-5 font-serif pl-4">Italian Pasta</h1>
         </div>

        </div>

    </div>
  )
}

export default Latest