import { headingProps } from "@/types/componentProps"

const Heading = (heading:headingProps) => {
  return (
   <h1 className="sm:text-4xl font-semibold my-5 font-serif"> {heading.head}</h1>
  )
}

export default Heading