import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Carousel from "@/landing/carouselPage"
import Hero from '@/landing/hero'
import Heroleast from '@/landing/heroleast'
import Homespgdt from '@/landing/homespgdt'

const page = () => {
  return (
    <div>
      <Carousel />
      <Homespgdt />
      <Hero />  
      <Heroleast />
    </div>
  )
}

export default page
