import React from 'react'

const Navbar = () => {
  return (
  
    <nav className="text-lg xl:text-xl flex text-white justify-between items-center py-2 border rounded-4xl px-[12vw] mx-auto">
        <div className="bg-gray-900 rounded-full border p-4">AR</div>
        <div className="bg-gray-950 flex items-center gap-x-8 cursor-pointer">
            <div className='transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-700 py-2 px-8 rounded-4xl'>Me?</div>
            <div className='transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-700 py-2 px-8 rounded-4xl'>Projects</div>
            <div className='transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-700 py-2 px-8 rounded-4xl'>Experience</div>
        </div>
        <button className="border border-solid border-white py-2 px-8 rounded-4xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-700 cursor-pointer">
            Contact
        </button>
    </nav>


  )
}

export default Navbar