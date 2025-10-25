import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (  
    <div className='flex flex-col md:flex-row border border-gray-400 '> 

                {/* left container  */}
            <div className='w-full md:w-[50%] flex items-center justify-center '>

                <div className='flex flex-col text-[#414141] py-10 px-8 md:px-10 gap-2 lg:gap-2 '>
                   
                    <div className='flex items-center gap-2 '>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-xl md:text-base lg:text-2xl '> OUR BESTSELLERS</p>
                    </div>
                    
                    <h1 className='prata-regular text-[26px]  md:text-3xl  lg:text-4xl  leading-relaxed hover:text-red-300 duration-200 cursor-pointer'>LATEST ARRIVALS</h1>
                     
                     <div className='flex items-center gap-2'>
                        <p className='font-medium text-xl md:text-base lg:text-2xl'> SHOP NOW</p>
                       <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    </div>

                </div>


            </div>

            <img src={assets.hero_img} alt="hero image" className='w-full md:w-[50%] '/>

    </div>
  )
}

export default Hero