import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

import { useParams } from 'react-router-dom'

const Product = () => {
  const {productId} = useParams()
  const {products} = useContext(ShopContext)
  const [productData,setproductData]=useState('')
  const [image,setimage]=useState('')

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
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
      {/* product data */}
      <div className='flex gap-12 flex-col md:flex-row'>
        {/* product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 md:flex-row'>
          <div className='flex md:flex-col overflow-x-auto md:overflow-y-scroll justify-between md:justify-normal sm:w-[18.7%] w-full'>
            
          </div>
        </div>
      </div>
     
    </div>
  ): <div className='opacity-0 flex items-center'>Loading...</div>
}

export default Product