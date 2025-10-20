import React from 'react'

const NewsLetter = () => {
const    onSubmitHandler=(e)=>{
        e.preventDefault

    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text gray-700'>Subscribe now &Get 20% off</p>
        <p className='text-gray-500 mt-3'>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>


        <form onSubmit={onSubmitHandler}  className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Enter Your Email' className='w-full sm:flex-1 outline-none' required/>
            <button type='submit' className='bg-black text-white px-10 py-4 text-xs'>Subscribe </button>
        </form>
    </div>
  )
}

export default NewsLetter