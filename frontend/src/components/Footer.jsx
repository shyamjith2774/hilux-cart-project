import React from 'react'
import { assets } from '../assets/assets'

export const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img className='mb-5 w-32' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.   </p>
        </div>

        <div >
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-500'>
                <li>Home</li>
                <li>About US</li>
                <li>Deliver</li>
                <li>Privacy&Policy</li>
            </ul>
         </div>

         <div>
            <p className='text-xl font-medium mb-5'>Get in Touch</p>
            <ul className='flex flex-col gap-1 text-gray-500'>
                <li>+1 2100 4400 4536</li>
                <li>contact@hiluxcart.com</li>
            </ul>
         </div>

           
    </div>
    
  )
}

export default Footer
