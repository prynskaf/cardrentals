'use client'
import Image from "next/legacy/image" 
import  CustomButton  from "./CustomButton"
import HeroCarousel from "./HeroCarousel"


const Hero = () => {
    const handleScroll = () => { 

    }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Find, book, or rent a car - quickly.
            </h1>

            <p className="hero__subtitle">
                Strealine your car rental experince with our eoffortless booking process.
            </p>

            <CustomButton
             title='Explore Cars' 
             containerStyles='bg-primary-blue text-white rounded-full mt-10' 
             handleClick={handleScroll}

            />
        </div>  
        <div className="hero__image-container">
         {/* <div className="hero__image-overlay" /> */}
            <HeroCarousel />
         
        </div>
    </div>
  )
}

export default Hero