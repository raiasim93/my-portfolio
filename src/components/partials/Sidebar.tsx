import React from 'react';
import { IoClose } from 'react-icons/io5';

const Sidebar = ({setSidebarOpen}: {setSidebarOpen: (open: boolean) => void }) => {
  return (
   <div className=''>
        <IoClose className='text-4xl absolute top-6 right-14  hover:bg-zinc-800 rounded-full cursor-pointer '
                 onClick={()=> setSidebarOpen(false)} />
        <div className='flex flex-col gap-6 text-center text-2xl'>
            <a href="" className='uppercase' > About </a>
            <a href="" className='uppercase' > Work </a>
            <a href="" className='uppercase' > Services </a>
            <a href="" className='uppercase' > Contact </a> 

        </div>
   </div>
  )
}

export default Sidebar;