"use client";
import React, { useState, useRef, useEffect } from "react";
import toolsData from "@/components/common/data/toolsData";
import CardTools from "@/components/common/cards/CardTools";
import { FaArrowDown} from "react-icons/fa";

const ToolsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [height, setHeight] = useState(0);
  const toolDivRef = useRef<HTMLDivElement | null>(null);
  useEffect(()=> {
    if(toolDivRef.current){
      setHeight(toolDivRef.current.offsetHeight);
    }
  })
  return (
    <section className="bg-black w-full py-16 px-[6vw] 2xl:px-[16vw] flex flex-col gap-y-8 ">
      <div className="flex lg:justify-center text-3xl font-semibold lg:text-5xl">
        My Tech Stack
      </div>
      <div className="text-gray-400 w-full text-left lg:w-1/2 lg:mx-auto lg:text-center lg:text-xl">
        Here are the development tools I specialize in and will be using to make your ideas and vision into life. 🚀
      </div>

      {/* Tools Grid with Smooth Expansion */}
      <div
        ref={toolDivRef}
        className={`tool-scrollbar grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8  lg:overflow-hidden transition-all duration-500 overflow-y-auto
                    ${showAll ? {height}: "max-h-[200px]"}
        }`}
      >
        {toolsData.map((item, index) => (
          <CardTools key={index} image={item.image} toolName={item.toolName} index={index} />
        ))}
      </div>
      {/* Button */}
      <div className="mt-4 text-2xl flex justify-center w-full">
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-x-4 cursor-pointer text-lime-400 transition-transform duration-300"
        >
          {showAll ? "See Less" : "See All"}
          <span className={`transition-transform duration-300 ${showAll? "rotate-180": "rotate-0"}`}>
            <FaArrowDown />
          </span>
        </button>
      </div>
    </section>
  );
};

export default ToolsSection;
