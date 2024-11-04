
import React from 'react'

type taskprops = { 
    _id : string  , 
    title : string , 
    completed  : boolean
}
const TaskComp = ({ item , title  , completed} : taskprops ) => {
  console.log( );
  
  return (
    <li key={item} className='w-full flex justify-between  bg-neutral-100/25 px-2 py-5 text-2xl rounded border border-gray-100/10 '>
        <label htmlFor="cmpl">
            <input checked={completed} type="checkbox"  className='checked:bg-gray-300 h-3 w-3'/>
            <span className='text-neutral-700'>{title}</span>
        </label>
        <button>
        <i className="ri-delete-bin-6-line text-red-600"></i>
        </button>
    </li>
  )
}

export default TaskComp