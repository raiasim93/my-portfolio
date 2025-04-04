import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

const Sidebar = ({ setSidebarOpen }: { setSidebarOpen: (open: boolean) => void }) => {
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleResize = (event: MediaQueryListEvent) => {
      if (event.matches) setSidebarOpen(false);
    };
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [setSidebarOpen]);

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Background Overlay when sidebar is opened */}
      <div 
        className="fixed inset-0 bg-black opacity-90 transition-opacity duration-300" 
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div className="py-8 flex flex-col items-center bg-neutral-900 h-screen fixed top-0 left-0 w-[60%] z-50">
        <div className='w-full flex justify-end px-8'>
        <IoClose className='text-2xl  hover:bg-zinc-800 rounded-full cursor-pointer'
                 onClick={() => setSidebarOpen(false)} />
        </div>
        
        <div className='flex flex-col gap-6 text-center text-xl'>
          {["About", "Experience", "Resume", "Contact"].map((item, index) => (
            <a
              key={index}
              href=''
              className=' relative hover:text-zinc-400 hover:scale-105 transition-all duration-200 border-b border-white pb-2' >
                {item}
            </a>
          ))}
        </div>
      </div>
      {/* make a sidebar which have very huge heading for each and use gsap for smooth animation */}
      <div>
        <div>About</div>
        <div>Experience</div>
        <div>Resume</div>
      </div>
    </div>
  );
}

export default Sidebar;
