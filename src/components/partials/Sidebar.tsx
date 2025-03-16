import React, {useEffect} from 'react';
import { IoClose } from 'react-icons/io5';
const Sidebar = ({setSidebarOpen}: {setSidebarOpen: (open: boolean) => void }) => {
  
  useEffect(()=> {
    const mediaQuery = window.matchMedia("(min-width: 768px");
    const handleResize = (event: MediaQueryListEvent) => {
      if(event.matches) setSidebarOpen(false);
    };
    mediaQuery.addEventListener("change", handleResize);
    return ()=> mediaQuery.removeEventListener("change", handleResize);
  }, [setSidebarOpen]);
  return (
   <div className="py-8 flex flex-col items-center bg-neutral-900 h-screen fixed top-0 left-0 w-full z-50">
        <IoClose className='text-xl absolute top-6 right-14  hover:bg-zinc-800 rounded-full cursor-pointer '
                 onClick={()=> setSidebarOpen(false)} />
        <div className='flex flex-col gap-6 text-center text-lg'>
          {["About", "Work", "Services", "Contact"].map((item,index)=>(
            <a
              key={index}
              href=''
              className='uppercase relative hover:text-zinc-400 hover:scale-105 transition-all duration-200 border-b border-white pb-2 inline-block' >
                {item}
            </a>
          ))}
        </div>
   </div>
  )
}

export default Sidebar;

