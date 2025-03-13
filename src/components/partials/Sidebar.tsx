import React from 'react';
import { IoClose } from 'react-icons/io5';

const Sidebar = ({ setSidebarOpen }: { setSidebarOpen: (open: boolean) => void }) => {
  return (
    <div className="py-8 flex flex-col items-center">
      <IoClose
        className="text-4xl absolute top-6 right-14 hover:bg-zinc-950 duration-300 ease-in-out rounded-full cursor-pointer"
        onClick={() => setSidebarOpen(false)}
      />
      <div className="flex flex-col gap-6 text-xl text-center">
        {["About", "Work", "Services", "Contact"].map((item) => (
          <a
            key={item}
            href=""
            className="uppercase relative hover:text-zinc-500 hover:scale-105 transition-all duration-200 border-b border-white pb-2 inline-block"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
