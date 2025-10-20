import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    const {currency}= useContext(ShopContext)
  return (
    <Link to={`/product/${id}`} className='text-gray-500 cursor-pointer'>
        <div className='overflow-hidden' >
            <img src={image[0]} className='hover:scale-130 transition  ease-in-out ' alt="" />
        </div>
        <h1 className='py-4 text-sm'>{name}</h1>
        <h1 className='text-sm text-gray-500'>{currency}{price}</h1>

    </Link>
  )
}

export default ProductItem