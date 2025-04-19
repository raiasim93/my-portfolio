"use client";
import React, { useState } from "react";
import toolsData from "@/components/common/data/toolsData";
import CardTools from "@/components/common/cards/CardTools";
import { FaArrowDown} from "react-icons/fa";

const ToolsSection = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="bg-black w-full py-16 px-[6vw] 2xl:px-[16vw] flex flex-col gap-y-8 border-b">
      <div className="flex lg:justify-center text-2xl font-semibold lg:text-4xl">
        My Tech Stack
      </div>
      <div className="text-gray-400 w-full text-left lg:w-1/2 lg:mx-auto lg:text-center lg:text-xl">
        Here are the development tools I specialize in and will be using to make your website both visually appealing and fully functional. 🚀
      </div>

      {/* Tools Grid with Smooth Expansion */}
      <div
        className={`grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:overflow-hidden transition-all duration-500 overflow-y-auto
                    ${showAll? "max-h-[2000px]": "max-h-[400px]"}
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
