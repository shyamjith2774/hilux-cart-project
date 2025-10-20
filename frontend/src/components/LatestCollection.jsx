import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'

const LatestCollection = () => {
    const {products}=useContext(ShopContext)
    const [latestProducts,setlatestProducts]=useState([])
  
    useEffect(()=>{
        setlatestProducts(products.slice(0,10))
    },[])
   


  return (
    <div className='flex items-center flex-col'>
        
        <div className='flex flex-col items-center gap-3 pt-10 pb-6 lg:pt-20 lg:pb-8'>
        
            {/* heading div  */}

            <div className='flex items-center gap-3'>
                <h1 className='text-2xl md:text-3xl font-light text-gray-700'> LATEST <span className='font-medium'> COLLECTIONS</span> </h1>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            </div>
            
            <p className=' font-light text-justify px-4  md:px-7 text-gray-700'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
            </p>

        </div>

        {/* latest products div .,rendering products */}

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {latestProducts.map((items,index)=>(
                <ProductItem key={index} id={items._id} image={items.image} name={items.name} price={items.price}/>        
                ))}
        </div>

    </div>
  )
}

export default LatestCollection