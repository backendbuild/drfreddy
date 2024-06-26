import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Carousel from "@/landing/carouselPage"
import Hero from '@/landing/hero'
import Heroleast from '@/landing/heroleast'
import Homespgdt from '@/landing/homespgdt'
import About from '@/landing/about'
import News from '@/landing/newslay'
import Videolay from '@/landing/videolay'

const page = () => {
  return (
    <div>
      <Carousel />
      <Homespgdt />
      <Hero />  
      <Heroleast />
      <About />
      <News />
      <Videolay />
    </div>
  )
}

export default page
