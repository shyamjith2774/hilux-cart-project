import React, { useState } from 'react'

const Login = () => {
  const [currentState,setCurrentstate]=useState('Login')
  const onSubmit= async  (e)=>{
    e.preventDefault()

  }

  return (
    <form onSubmit={onSubmit} className='flex flex-col items-center sm:max-w-96 m-auto mt-14 gap-4 text-gray-900 '>
      
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr  className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>

          {currentState==='Login' ? '' : <input type="text" className='w-full px-5 py-2 border border-gray-600' placeholder='name' required/>}     
            <input type="text" className='w-full px-5 py-2 border border-gray-600' placeholder='email' required/>
                  <input type="text" className='w-full px-5 py-2 border border-gray-600' placeholder='password' required/>

          <div className='w-full flex justify-between text-sm mt-[-8px]'>
            <p className='cursor-pointer'> forgot your password</p>
            {
              currentState==='Login' ?<p className='cursor-pointer' onClick={()=>{setCurrentstate('Signup')}}>Create account</p> : <p className='cursor-pointer' onClick={()=>{setCurrentstate('Login')}}>Login here</p>
            }
          </div>

          <button className='bg-black text-white px-8 py-2 mt-4'>{currentState==='Login' ? 'Sign in' : 'Signup'}</button>
    </form>
  )
}

export default Login