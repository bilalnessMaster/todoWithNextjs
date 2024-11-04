import Link from 'next/link'
import React from 'react'
import Todo from '../../../mongodb/Todo'

const page = () => {


  const handleSubmit  = async  (data : FormData) => {
    "use server"
      const title  = data.get('title')?.valueOf()
      if(typeof title !== 'string') throw new Error("Invalid title ")
      await Todo.create({
          title
    
        })
  }
  return (
    <main className='flex justify-center items-center w-full h-screen '>
    <form action={handleSubmit} className='w-full px-2 md:w-1/4 space-y-2'>
      <label htmlFor="title" className='flex justify-start flex-col items-start '>
        <span className='text-xl font-semibold'>Title</span>
        <input type="text" name='title' className='w-full outline-none h-9 rounded-md border-2 border-neutral-300 bg-neutral-300 px-2 text-neutral-900 font-medim '/>
      </label>
        <div className='flex justify-end items-center w-full gap-2'>
        <Link className='px-2 py-1 border border-gray-300 rounded-md text-red-600' href='..'>cancel</Link>
        <button type="submit" className='px-2 py-1 border border-gray-300 rounded-md text-green-600'>create</button>
        </div>
      </form>
    </main>
  )
}

export default page