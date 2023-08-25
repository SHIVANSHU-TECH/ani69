import Image from "next/image";
import React from "react";

const Samples = () => {
  return (
    <div className="w-full h-[100vh] relative flex items-center">
      <div className="absolute top-0 left-0">
        <Image
          src={"/Rectangle 155.png"}
          alt="shadow"
          width={397}
          height={263}
        />
      </div>
      <div className="absolute bottom-0 left-0">
        <Image
          src={"/Rectangle 162.png"}
          alt="shadow"
          width={114}
          height={112}
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image
          src={"/Rectangle 154.png"}
          alt="shadow"
          width={158}
          height={605}
        />
      </div>
      <div className="w-full z-50 px-4 md:w-[75%] lg:w-[70%] xl:w-[60%] mx-auto md:flex md:items-center justify-between">
        <Image src={"/71.png"} alt="sample" width={535} height={478} />
        <div className="mt-8 md:mt-0 max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl md:ml-8 space-y-4 md:space-y-6">
          <div className="text-lg md:text-3xl leading-tight text-[#141414] font-bold">
            Convert your{" "}
            <span className="text-[#32BED2]">
              Text{" "}
              <span>
                to <span className="text-[#D9343B]">image</span>
              </span>
            </span>{" "}
            using AI
          </div>
          <h4 className="text-sm md:text-base leading-6 text-[#141414]">
            COMPANY NAME text to image converter is a useful tool to convert
            any text into quality images using Artificial Intelligence
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Samples;
