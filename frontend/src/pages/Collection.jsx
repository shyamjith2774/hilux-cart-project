import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  const {products} = useContext(ShopContext)
  
  const [filterProducts,setfilterProducts]=useState([])
  const [category,setCategory]= useState([])
  const [subCategory,setsubCategory]=useState([])
  const{search,setsearch}=useContext(ShopContext)
  

  useEffect(()=>{
   setfilterProducts(products);
                })



  const toggleCategory=(e)=>{
    if(category.includes(e.target.value))
    {
        setCategory(prev=>prev.filter(item=>item !== e.target.value))
    }
    else{
      setCategory(prev =>[...category,e.target.value])
    }

  }
 

  const togglesubcategories=(e)=>{
    if(subCategory.includes(e.target.value)){
          setsubCategory(prev=>prev.filter(item=>item !== e.target.value))
    }
    else{
      setsubCategory(prev=>[...prev,e.target.value])
    }


  }

      const applyfilter=()=>{
        let productscopy=products.slice();
        if(category.length>0){
            productscopy=productscopy.filter(item => category.includes(item.category))
            setfilterProducts(productscopy);
        }
      }


      useEffect(()=>{

            applyfilter();

      },[category,subCategory])





  return (
    <div className='flex flex-col md:flex-row gap-1 md:gap-10 pt-10 border-t'>
          
        {/* filter options */}
        <div className=' min-w-60'>
          <p className='my-2 text-xl flex items-center cursor-pointer gap-2  ' >Filters</p>
          
          {/* categorty filter */}
          <div className='border border-gray-300 pl-5 pt-3 mt-6 rounded-2xl sm:block'>
            
            <p className='mb-3 text-sm font-medium'> Categories</p>
            
            <div className='flex flex-col gap-2 text-sm mb-4 font-light '>
              
              
              <p className='flex gap-3'>
                
               <input type="checkbox" className='w-3' value={'men'} onChange={toggleCategory}/>
               men
              </p>
             
             <p className='flex gap-3'>
             
                <input type="checkbox" className='w-3' value={'women'} onChange={toggleCategory} />
                 women
             </p>
             
              <p className='flex gap-3'>
               
                <input type="checkbox" className='w-3' value={'kids'} onChange={toggleCategory} />
                 kids
             </p>
            
            
            
            </div>
            
            
            </div>


            {/* sub category type*/}

            <div>

               <div className='border border-gray-300 pl-5 pt-3 mt-6 rounded-2xl  sm:block'>
            
            <p className='mb-3 text-sm font-medium'>Type</p>
            
            <div className='flex flex-col gap-2 text-sm mb-4 font-light '>
              
              
              <p className='flex gap-3'>
                
               <input type="checkbox" className='w-3' value={'topwear'} onChange={togglesubcategories} />
              topwear
              </p>
             
             <p className='flex gap-3'>
             
                <input type="checkbox" className='w-3' value={'bottomwear'}  onChange={togglesubcategories}/>
                bottomwear
             </p>
             
              <p className='flex gap-3'>
               
                <input type="checkbox" className='w-3' value={'winterwear'}  onChange={togglesubcategories} />
                winterwear  
             </p>
     
            </div>
       
            </div>

            </div>

        </div>

       {/* all products rednering section */}

       <div className='flex-1 py-5 md:py-0'>
        {/* serach bar */}
        <div className={`flex items-center justify-center mb-10 gap-2 ${search ? 'h-[20x]': 'hidden'}`}>
            <input type="text" placeholder='Serch items' className='w-[80%] h-[45px] pl-25 md:pl-55 border-2 rounded-full'/>
               <div onClick={()=>{setsearch(false)}}>
                 <img src={assets.cross_icon} className='w-4 cursor-pointer' />
               </div>
       
          </div>
        {/* title section&sort box */}

        <div className='flex justify-between text-base md:text-2xl mb-4'>
           <div className='flex items-center gap-2'>
                        <p className='font-extralight text-xl  lg:text-2xl'> ALL</p>
                        <p className='font-medium text-xl md:text-base lg:text-2xl'> COLLECTIONS </p>
                       <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            </div>

          {/* sortbox */}

          <select className='border-1   border-gray-500 text-sm px-2 rounded-xl'>
            <option value="relevent">Sort by:Relevant</option>
            <option value="low to high">Sort by:Low to high</option>
            <option value="high to low">Sort by:High to Low</option>
          </select>

        </div>


        {/* show products */}
        <div className='grid grid-cols md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((items,index)=>
            (
                 <ProductItem  key={index} id={items._id} image={items.image} name={items.name} price={items.price} />


            ))}

        </div>
       </div>


    </div>
  )
}

export default Collection