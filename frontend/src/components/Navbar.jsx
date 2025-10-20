import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link,NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const[visible,setVisible]=useState(false)
  const{search,setsearch}=useContext(ShopContext)
  return (
    <div className='flex items-center justify-between py-3 md:py-5   '>
        
        <Link to='/'>
        <img src={assets.logo} alt="logo1" className='w-36 h-10   hover:scale-80 transition  ease-in-out '/>
        </Link>

        <ul className='hidden md:flex items-center gap-5  font-light'>
          
          <NavLink to='/' className='flex items-center flex-col gap-2 hover:scale-120 transition  ease-in-out'>
              <p>Home</p>
              <hr className='w-2/4 h-[2px] bg-black  hidden  '/>
          </NavLink>

          <NavLink to='/collection' className='flex  items-center flex-col gap-2 hover:scale-120 transition  ease-in-out'>
              <p>Collection</p>
             <hr className='w-2/4 h-[2.5px] bg-black hidden '/>
          </NavLink>

          <NavLink to='/about' className='flex items-center flex-col gap-2 hover:scale-120 transition  ease-in-out'>
              <p>About</p>
               <hr className='w-2/4 h-[2.5px] bg-black  hidden  '/>
          </NavLink>

          <NavLink to='/contact' className='flex items-center flex-col gap-2 hover:scale-120 transition  ease-in-out'>
              <p>ContactUs</p>
              <hr className='w-2/4 h-[2.5px] bg-black  hidden   '/>
          </NavLink>

        </ul>

          {/* right side section of navbar  */}
          
          
          <div className='flex items-center gap-5'>
            <NavLink to='/collection' >
           <img src={assets.search_icon} className='w-5 ' onClick={()=>{setsearch(true)}} />

            </NavLink>
              
              {/* profile icon code  */}
              <div className='group relative'>
                   
                <NavLink to='/login'>
                <img src={assets.profile_icon} className='flex w-5' alt="" />
                </NavLink>
                   {/* <div className='hidden xl:hidden lg:group-hover:block  absolute right-0  '>
                        <div className='flex items-center gap-2 flex-col w-32 px-2 py-4 mt-4 bg-slate-200 text-gray-600 font-semibold rounded-3xl' >
                        <p className='cursor-pointer hover:text-black'>My profile</p> 
                        <NavLink to='/orders' className='cursor-pointer  hover:text-black' >Orders</NavLink>      
                        <NavLink to='/login' className='cursor-pointer  hover:text-black' >Login</NavLink>

                        </div>
                   </div> */}

              </div>

           {/* cart logo  */}
              <NavLink to='/cart' className='relative'>
              
              <img src={assets.cart_icon} className='flex w-5 min-w-5' alt="" />
             <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>100</p>

              </NavLink>

            {/* menu icon for mobile screens  */}
           <img src={assets.menu_icon} alt="menu icon" onClick={()=>{setVisible(true)}} className='w-5 cursor-pointer md:hidden'/>

          </div>
          

          {/* container for menu icon in mobile screens  */}

          <div className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all ${visible ? 'w-full ':'w-0'} md:hidden`}>
               
               
                <div className='flex flex-col '>
                  
                  <div className='flex items-center gap-3 border-b p-4 mb-2 'onClick={()=>{setVisible(false)}}>
                    
                    <img src={assets.dropdown_icon} alt="dropdwonicon" className='w-2  rotate-180' />
                    <p>Back</p>
                    
                  </div>
                  
       
                         <NavLink to='/' onClick={()=>{setVisible(false)}} className='flex  items-center py-3 pl-6 text-xl border-b font-sans '>
                            <p>Home</p>
                       
                        </NavLink>
                 
                        
                        <NavLink to='/collection' onClick={()=>{setVisible(false)}} className='flex  items-center py-3 pl-6 text-xl border-b font-sans'>
                            <p>Collection</p>
                       
                        </NavLink>

                        <NavLink to='/about' onClick={()=>{setVisible(false)}} className='flex items-center py-3 pl-6 text-xl border-b font-sans'>
                            <p>About</p>
                           
                        </NavLink>

                        <NavLink to='/contact' onClick={()=>{setVisible(false)}} className='flex items-center py-3 pl-6 text-xl border-b font-sans '>
                            <p>ContactUs</p>
                           
                        </NavLink>

        

                </div>


          </div>
       
    </div>
  )
}

export default Navbar