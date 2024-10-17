import React from 'react'
import Image from 'next/image';


interface MyImageProps {
    src: string;   // the path to the image
    alt: string;   // alt text
    width: number; // image width in pixels
    height: number; // image height in pixels
  }
 
const Img:React.FC<MyImageProps> = ({src,alt,width,height}) => {
  return (
    <div className="gol">
        <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        />
        
    </div>
  )
}

export default Img