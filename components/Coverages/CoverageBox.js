import React from "react";

const CoverageBox = ({ image, text, onClick, position = "center" }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-between rounded 
      overflow-hidden bg-white shadow-lg cursor-pointer 
       transition-all duration-300 group relative"
    >
      <div className="h-[230px] w-[100%] group-hover:scale-105 transition-all duration-300 relative after:absolute after:w-full after:h-full after:bg-black/30 after:inset-0">
        <img className="w-full h-full " src={image} alt="service-image" />
      </div>
      <div className="px-4 py-3 absolute bottom-0 inset-x-0  backdrop-blur-sm bg-white/30">
        <h2 className=" font-semibold text-xl text-white line-clamp-1">{text}</h2>
      </div>
    </div>
  );
};

export default CoverageBox;
