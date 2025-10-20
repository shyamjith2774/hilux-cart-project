import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem'

const BestSeller = () => {
    const {products}=useContext(ShopContext)
    const [bestSeller,setBestseller]=useState([])
   


    useEffect(()=>{
         const bestProduct=products.filter((items)=>(items.bestseller))
           
        setBestseller(bestProduct.slice(0,5))
    },[])

  return (
    <div className='flex flex-col items-center gap-3 pt-10 pb-6 lg:pt-20 lg:pb-8' >

            {/* heading section */}

      <div className='flex items-center gap-3 '>
                <h1 className='text-2xl md:text-3xl font-light text-gray-700 mt-5 md:mt-0 '> BEST<span className='font-medium'> SELLERS</span> </h1>
                <p className='hidden md:block w-8  md:w-11 h-[2px] bg-[#414141]'></p>
        </div>
            
            <p className=' font-light text-justify px-4  md:px-7 text-gray-700'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
            </p>

        {/* best seller product items section */}

        <div className=' grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 gap-y-6 mt-4 md:mt-6'>
                {bestSeller.map((items,index)=>(
                  <ProductItem key={index} id={items._id} image={items.image} name={items.name} price={items.price}/>        

                ))}

        </div>
        
    </div>
  )
}

export default BestSeller