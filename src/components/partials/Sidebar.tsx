import React, { useEffect } from 'react';
import Link from 'next/link';
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
    <>
      {/* Sidebar */}
      <div className="py-8 flex flex-col justify-center items-center bg-black min-h-screen text-white px-[6vw]">
        <div className='flex flex-col gap-8 lg:gap-y-20 pb-[80px]  text-4xl lg:text-6xl  w-full justify-center items-center'>
          {["About", "Projects"].map((item, index) => (
            <Link
              key={index}
              onClick={()=> setSidebarOpen(false)}
              href={`/${item.toLowerCase()}`}
              className=' relative hover:text-zinc-400 hover:scale-105 transition-all duration-200 border-b border-white hover:border-lime-500 pb-2' >
              {item}
            </Link>
          ))}
          <Link href="/AsimResume.pdf"
                target='_blank'
                rel='noopener noreferrer'
                onClick={()=> setSidebarOpen(false)}
                className='relative hover:text-zinc-400 hover:scale-105 transition-all duration-200 border-b border-white hover:border-lime-500 pb-2'>
            Resume
          </Link>
        </div>
      </div>
    </>



  );
}

export default Sidebar;
