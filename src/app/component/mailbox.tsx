import { mail } from "@/types/mail"

const Mailbox = (props:mail) => {
  return (
    <div>
        <div className="bg-red-300 h-96 mt-4 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold w-72 text-gray-950 p-2 font-serif">{props.text}</h1>
            <p className="p-2 font-semibold text-gray-800 font-sans">{props.text2}</p>
           
            <div className="flex">
            <input type="text" className="p-1 font-sans outline-none" />
            <button className="bg-orange-600 w-14 p-1 text-white">{props.text3}</button>
            
            </div>
        </div>
    </div>
  )
}

export default Mailbox