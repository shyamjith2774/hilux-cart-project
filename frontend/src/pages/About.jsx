import React from 'react'
import {assets} from '../assets/assets'

import NewsLetter from '../components/NewsLetter'
const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
              {/* title sectio */}
            <div className='flex items-center gap-3 justify-center'>
                      <h1 className='text-2xl md:text-3xl font-light text-gray-700'> About<span className='font-medium'> Us</span> </h1>
                      <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
              </div>
          </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
             <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
              <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
                <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
                <b className='text-gray-600'>Our Mission</b>
                <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
              </div>
        
        </div>
          

          {/* last sections */}
            {/* title */}
      <div className='text-4xl py-4'>
            <div className='flex items-center gap-3 '>
                      <h1 className='text-2xl md:text-3xl font-light text-gray-700'> Why Choose<span className='font-medium'> Us</span> </h1>
                      <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
              </div>

      </div>

      {/* box section */}

      <div className='flex flex-col md:flex-row text-sm mb-20 border-gray-900'>
         <div className='border px-10 md:px-16 py-8 md:py-20 flex flex-col ga-5'>
          <b>Quality Assurance</b>
          <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
         </div>

         <div className='border-y px-10 md:px-16 py-8 md:py-20 flex flex-col ga-5'>
          <b>Convenience:</b>
          <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
         </div>

          <div className='border px-10 md:px-16 py-8 md:py-20 flex flex-col ga-5'>
          <b>Exceptional Customer Service:</b>
          <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
         </div>
      </div>


      <NewsLetter/>


    </div>
  )
}

export default About