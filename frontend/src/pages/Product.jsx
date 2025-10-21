import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'

const Product = () => {
  const {productId} = useParams()
  const {products,currency} = useContext(ShopContext)
  const [productData,setproductData]=useState('')
  const [image,setimage]=useState('')
  const [size,setsize]=useState('')

  useEffect(()=>{
      //  fetchproductsdata
      const foundProduct = products.find((item)=>item._id===productId)
      if(foundProduct){
        setproductData(foundProduct)
        setimage(foundProduct.image[0])
       console.log(foundProduct);
      }
      

},[products,productId])

 
return productData ? (
    <div className='border-t-2 border-gray-200   pt-10 transition-opacity ease-in duration-500 opacity-100 '>
      {/* product data */}
      
      
      <div className='flex gap-12 flex-col md:flex-row'>
        {/* product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 md:flex-row'>
          <div className='flex md:flex-col overflow-x-auto md:overflow-y-scroll justify-between md:justify-normal sm:w-[18.7%] w-full'>
              {
                productData.image.map((item,index  )=>(
                      <img src={item} key={index} onClick={()=>setimage(item)} className='w-[24%] md:w-full md:mb-3 flex-shrink-0 cursor-pointer' />
                ))
              }
          </div>
              <div className='w-full md:w-[80%]'>
                <img src={image} alt="" className='w-full h-auto' />
              </div>

        </div>
          {/* product informations */}
          <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} className='w-3' />
              <img src={assets.star_icon}  className='w-3' />
              <img src={assets.star_icon}  className='w-3' />
              <img src={assets.star_dull_icon}  className='w-3' />
              <img src={assets.star_dull_icon}  className='w-3'  />
              <p className='pl-2'>122</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='w-4/5  mt-5 text-gray-500'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes. map((item,index)=>(
                      <button type="button" key={index} onClick={()=>setsize(item)} className={`border py-2 px-4 bg-gray-200 ${item===size ? 'border-orange-400 ': ""  }`}>{item}</button>

                ))}
              </div>
            </div>
           <button className='bg-black text-white px-8 py-3 active:bg-gray-500'>ADD TO CART</button>
           <hr  className='mt-8 md:w-4/5'/>
           <div className='text-sm text-gray-500 flex flex-col gap-1 mt-5'>
            <p>100% Original product</p>
            <p>Cash on delivery is available in this product</p>
            <p>Easy return and exchange policy within 7 days</p>
           </div>
          </div>
      </div>
                
                  {/* description and review section */}
         <div className='mt-20'>
            <div className='flex'>
              <b className='border px-5 py-3 text-sm'>Description</b>
              <p className='border px-5 py-3 text-sm'>Reviews (74)</p>
            </div>

            <div className='flex flex-col gap-4 border p-6 text-sm text-gray-500'>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                 remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            
           </div>         
   
   
    </div>
  ): <div className='opacity-0 flex items-center'>Loading...</div>
}

export default Product