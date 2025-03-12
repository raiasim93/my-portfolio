import React from 'react';
import { IoClose } from 'react-icons/io5';

const Sidebar = ({setSidebarOpen}: {setSidebarOpen: (open: boolean) => void }) => {
  return (
   <div className=' py-8 bg-zinc-900'>
        <IoClose className='text-4xl absolute top-6 right-14 hover:bg-zinc-950 duration-300 ease-in-out rounded-full cursor-pointer '
                 onClick={()=> setSidebarOpen(false)} />
        <div className='flex flex-col gap-6 text-center text-xl'>
        <a href="" className="uppercase hover:text-zinc-500 hover:scale-105 transition-all duration-200">About</a>
        <a href="" className="uppercase hover:text-zinc-500 hover:scale-105 transition-all duration-200">Work</a>
        <a href="" className="uppercase hover:text-zinc-500 hover:scale-105 transition-all duration-200">Services</a>
        <a href="" className="uppercase hover:text-zinc-500 hover:scale-105 transition-all duration-200">Contact</a>

        </div>
   </div>
  )
}

export default Sidebar;