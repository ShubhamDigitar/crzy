import React from 'react'
import ReferImage from '../../public/refer.png'
import Image from 'next/image'

const ReferSection = () => {
  return (
    <div className="w-full h-auto px-4 py-6 md:px-8">
    <Image 
      src={ReferImage} 
      alt="Refer Image" 
      layout="responsive" 
      width={1920} 
      height={1080} 
      className="object-cover rounded-lg"
    />
  </div>
  )
}

export default ReferSection