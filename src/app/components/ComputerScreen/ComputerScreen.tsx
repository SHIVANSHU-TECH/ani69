import Image from "next/image";
import React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ComputerScreen = () => {
  return (
    <div className="w-full pt-12 md:pt-20 pb-16 bg-gradient-to-t from-rose-900 via-rose-900 to-black flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-[50%] flex flex-col items-center justify-center space-y-10 md:space-y-20">
        <h1 className="text-2xl md:text-5xl font-bold leading-[2.5rem] text-center text-[#D9D9D9]">
          Convert your <br /> <span className="text-[#32BED2]">Text</span> to{" "}
          <span className="text-[#EB41B1]">Animation</span> <br /> in just 3
          steps{" "}
        </h1>
        <div className="flex items-center justify-center text-white space-x-8 md:space-x-32">
          <div className="flex flex-col items-center justify-center">
            <Image src={"/Vector.png"} alt="anime" width={40} height={40} />
            <h1 className="text-xs md:text-base">Write your script</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={"/Group.png"} alt="anime" width={35} height={40} />
            <h1 className="text-xs md:text-base">Write your script</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={"/avatar.png"} alt="anime" width={33} height={40} />
            <h1 className="text-xs md:text-base">Write your script</h1>
          </div>
        </div>
        <ButtonComponent
          title="Try Now"
          bgColor="bg-gradient-to-l from-[#2200AC] to-[#6343E2]"
          textColor="text-white"
          paddingLeftRight="px-6 md:px-10"
          paddingTopBottom="py-2 md:py-3"
          borderRadius="rounded-3xl"
          border="border-none"
          fontSize="text-sm md:text-xl"
          onHover="hover:bg-gradient-to-r from-[#2200AC] to-[#6343E2]"
        />
      </div>
      <div className="hidden md:flex md:w-[50%] items-center justify-center">
        <Image src={"/Computer.png"} alt="computer" width={465} height={540} />
      </div>
    </div>
  );
};

export default ComputerScreen;