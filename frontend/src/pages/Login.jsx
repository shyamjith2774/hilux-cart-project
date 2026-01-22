import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentstate] = useState('Login')
  const {Tokens,settokens} =useContext(ShopContext)
  const backendurl=import.meta.env.VITE_BACKEND_URL 

  const [name,setName]=useState('')
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')
  
 
  
  const onSubmit = async (e) => {
    e.preventDefault()

    try{
      if(currentState==='Signup'){

        const response=await axios.post(backendurl+'/api/user/register',{name,email,password}) 
        
       if(response.data.success){
          
          settokens(response.data.token)
          localStorage.setItem('token',response.data.token)
          toast.success("Account Created")
       }
       else{

          toast.error(response.data.message)
       }
      }


      else{
          const response= await axios.post(backendurl+'/api/user/login',{email,password})
         
          if(response.data.success){
          
          settokens(response.data.token)
          localStorage.setItem('token',response.data.token)
          toast.success(" Logged In")
       }
       else{

          toast.error(response.data.message)
       }


      }
    }

    
    catch(error){

        console.log(error);
        toast.error(error.message)
    }


  }

  const navigate = useNavigate();
  
  useEffect(()=>{
     if(Tokens){
      navigate("/");
  }
  },[Tokens])
 

  return (
    <form onSubmit={onSubmit} className='flex flex-col items-center sm:max-w-96 m-auto mt-14 gap-4 text-gray-900 '>

      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {currentState === 'Login' ? '' : <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className='w-full px-5 py-2 border border-gray-600' placeholder='name' required />}
      <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full px-5 py-2 border border-gray-600' placeholder='email' required />
      <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full px-5 py-2 border border-gray-600' placeholder='password' required />

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'> forgot your password</p>
        {
          currentState === 'Login' ? <p className='cursor-pointer' onClick={() => { setCurrentstate('Signup') }}>Create account</p> : <p className='cursor-pointer' onClick={() => { setCurrentstate('Login') }}>Login here</p>
        }
      </div>

      <button className='bg-black text-white px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign in' : 'Signup'}</button>
    </form>
  )
}

export default Login