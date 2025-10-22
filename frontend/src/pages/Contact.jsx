import React from 'react'
import {assets} from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const Contact = () => {
  return (
     <div>
           
           
            <div className='text-2xl text-center pt-10 border-t '>
                  {/* title sectio */}
                <div className='flex items-center gap-3 justify-center'>
                          <h1 className='text-2xl md:text-3xl font-light text-gray-700'> Contact<span className='font-medium'> Us</span> </h1>
                          <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                </div>
            </div>
    
            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
                 <img src={assets.contact_img} className='w-full md:max-w-[450px]' alt="" />
                  
                  <div className='flex flex-col justify-center items-start gap-6  text-gray-600'>
                     <p className='text-2xl text-gray-800'>Our Store</p>
                    <p>54709 Willms Station <br /> Suite 350, Washington, USA</p>
                    <p>Tel: (415) 555-0132 <br /> Email: admin@forever.com</p>
                    <p className='text-2xl text-gray-800'>Careers At HILUX</p>
                    <p className='text-gray-600'>Learn more about our teams and job openings.</p>
                    <button className='border border-2-gray px-7 py-3 bg-black text-white hover:bg-white hover:text-black hover:transition-all duration-500'>ContactUS</button>
                  </div>
            
            </div>
            
            
               <NewsLetter/>
            
            
      </div>
  )
}

export default Contact